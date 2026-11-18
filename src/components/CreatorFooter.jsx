
import "./CreatorFooter.css";

function CreatorFooter() {
  return (
    <footer className="creator-footer">
      <div className="creator-footer-glow"></div>

      <div className="creator-profile">
        <div className="creator-photo-wrap">
          <img
            src="/images/abhi.jpg"
            alt="Abhi, creator of Theme Drive"
            className="creator-photo"
          />
        </div>

        <span className="creator-label">THE CREATOR BEHIND THE VIBES</span>

        <h2>
          Created by <span>AB Malviya</span>
        </h2>

        <p className="creator-description">
          Dream it. Design it. Build it.
        </p>

        <p className="creator-message">
          Crafted with creativity, passion, and a love for music.
        </p>
      </div>

      <div className="creator-footer-bottom">
        <span>© {new Date().getFullYear()} Theme Drive</span>
        <span className="creator-made-with">
          Made with <span>♥</span> by AB Malviya
        </span>
      </div>
    </footer>
  );
}

export default CreatorFooter;
