
import fs from "node:fs";
import path from "node:path";
import { parseFile } from "music-metadata";

const audioFolder = path.join(process.cwd(), "public", "audio");

const folders = {
  salon: "salon",
  "bus-driver": "bus-driver",
  "papa-classics": "papa-classics",
  "fresh-drop": "fresh-drop",
  bartan: "bartan",
};

const cleanFilename = (filename) =>
  path
    .parse(filename)
    .name
    .replace(/[_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const createAudioUrl = (folder, filename) => {
  const safeFilename = encodeURI(filename)
    .replace(/#/g, "%23")
    .replace(/\?/g, "%3F");

  return `/audio/${folder}/${safeFilename}`;
};

const playlists = {};

for (const [theme, folder] of Object.entries(folders)) {
  const folderPath = path.join(audioFolder, folder);

  if (!fs.existsSync(folderPath)) {
    console.warn(`Folder not found: ${folderPath}`);
    playlists[theme] = [];
    continue;
  }

  const files = fs
    .readdirSync(folderPath)
    .filter((file) => /\.mp3$/i.test(file))
    .sort((a, b) => a.localeCompare(b));

  playlists[theme] = [];

  for (const filename of files) {
    const filePath = path.join(folderPath, filename);

    let title = cleanFilename(filename);
    let artist = "Unknown Artist";

    try {
      const metadata = await parseFile(filePath);

      title = metadata.common.title?.trim() || title;
      artist = metadata.common.artist?.trim() || artist;
    } catch {
      console.warn(`Metadata unavailable: ${filename}`);
    }

    playlists[theme].push({
      title,
      artist,
      filename,
      src: createAudioUrl(folder, filename),
    });
  }

  console.log(`${theme}: ${playlists[theme].length} songs`);
}

const outputFolder = path.join(process.cwd(), "src", "data");

fs.mkdirSync(outputFolder, { recursive: true });

fs.writeFileSync(
  path.join(outputFolder, "playlists.json"),
  JSON.stringify(playlists, null, 2),
  "utf8"
);

console.log("Playlist metadata generated successfully!");
