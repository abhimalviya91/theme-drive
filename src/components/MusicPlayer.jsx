
import { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";
import playlists from "../data/playlists.json";

function MusicPlayer({ themeId = "salon" }) {
  const audioRef = useRef(null);

  const currentPlaylist = playlists[themeId]?.length
    ? playlists[themeId]
    : playlists.salon;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const currentTrack = currentPlaylist[currentIndex];

  useEffect(() => {
    const audio = audioRef.current;

    setCurrentIndex(0);
    setProgress(0);
    setDuration(0);
    setIsPlaying(false);

    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [themeId]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    setProgress(0);
    setDuration(0);

    if (isPlaying) {
      audio.play().catch((error) => {
        console.log("Track could not play:", error);
        setIsPlaying(false);
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Audio could not play:", error);
    }
  };

  const selectTrack = (index) => {
    if (index === currentIndex) {
      if (!isPlaying) togglePlay();
      return;
    }

    setCurrentIndex(index);
    setIsPlaying(true);
  };

  const previousTrack = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentPlaylist.length - 1 : prev - 1
    );
  };

  const nextTrack = () => {
    setCurrentIndex((prev) =>
      prev === currentPlaylist.length - 1 ? 0 : prev + 1
    );
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (event) => {
    if (!audioRef.current) return;

    const newTime = Number(event.target.value);
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  const formatTime = (seconds) => {
    if (!seconds || Number.isNaN(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <section
      className={`music-player ${
        themeId === "bartan" ? "bartan-player" : ""
      }`}
    >
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={nextTrack}
      />

      <div className="track-info">
        <div className="album-art">
          {themeId === "bartan" ? "🎧" : "🎵"}
        </div>

        <div className="track-details">
          <h3>{currentTrack.title}</h3>
          {/* <p>{currentTrack.artist}</p> */}
        </div>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button
            className="control-btn"
            onClick={previousTrack}
            aria-label="Previous track"
          >
            ⏮
          </button>

          <button
            className="play-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? "Ⅱ" : "▶"}
          </button>

          <button
            className="control-btn"
            onClick={nextTrack}
            aria-label="Next track"
          >
            ⏭
          </button>
        </div>

        <div className="progress-area">
          <span>{formatTime(progress)}</span>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={progress}
            onChange={handleProgressChange}
            className="progress-bar"
            aria-label="Track progress"
          />

          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="volume-control">
        <span>🔊</span>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          aria-label="Volume"
        />
      </div>

      <button
        type="button"
        className="playlist-toggle"
        onClick={() => setShowPlaylist((visible) => !visible)}
        aria-expanded={showPlaylist}
      >
        ☷ {showPlaylist ? "Hide Playlist" : "Playlist"}
      </button>

      {showPlaylist && (
        <div className="playlist-panel">
          <div className="playlist-heading">
            <strong>🎵 Now Playing Playlist</strong>
            <span>{currentPlaylist.length} songs</span>
          </div>

          <div className="playlist-list">
            {currentPlaylist.map((track, index) => (
              <button
                type="button"
                key={`${track.src}-${index}`}
                className={`playlist-track ${
                  index === currentIndex ? "active-track" : ""
                }`}
                onClick={() => selectTrack(index)}
              >
                <span className="playlist-track-icon">
                  {index === currentIndex && isPlaying ? "🔊" : "♪"}
                </span>

                <span className="playlist-track-details">
                  <span className="playlist-track-title">
                    {track.title}
                  </span>
                  {/* <span className="playlist-track-artist">
                    {track.artist}
                  </span> */}
                </span>

                <span className="playlist-track-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default MusicPlayer;
