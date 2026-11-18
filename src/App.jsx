import { useEffect, useState } from "react";

import salonTheme from "./themes/salon";
import busDriverTheme from "./themes/busDriver";
import papaClassicsTheme from "./themes/papaClassics";
import freshDropTheme from "./themes/freshDrop";
import bartanTheme from "./themes/bartan";

import BusDriverScene from "./components/BusDriverScene";
import PapaClassicsScene from "./components/PapaClassicsScene";
import FreshDropScene from "./components/FreshDropScene";
import BartanScene from "./components/BartanScene";

import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQSection";
import MusicPlayer from "./components/MusicPlayer";

import CreatorFooter from "./components/CreatorFooter";

import "./index.css";

const themes = [
  salonTheme,
  busDriverTheme,
  papaClassicsTheme,
  freshDropTheme,
  bartanTheme,
];

function App() {
  
  const [activeTheme, setActiveTheme] = useState(salonTheme);
  const [showThemes, setShowThemes] = useState(false);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [showSupportModal, setShowSupportModal] = useState(false);

  return (
    <main
      className="app"
      style={{
        "--accent": activeTheme.accent,
        "--background": activeTheme.background,
      }}
    >
      {/* NAVBAR */}
      
<header className="navbar">
  <div className="online">
    <span></span>
    1640 online
  </div>

  <div className="theme-wrapper">
    <button
      className="theme-button"
      onClick={() => {
        setShowThemes(!showThemes);
        setShowMobileMenu(false);
      }}
    >
      <span>Change Theme</span>
      <span className={`arrow ${showThemes ? "open" : ""}`}>↓</span>
    </button>

    {showThemes && (
      <div className="theme-menu">
        {themes.map((theme) => (
          <button
            key={theme.id}
            className={
              activeTheme.id === theme.id ? "active-theme" : ""
            }
            onClick={() => {
              setActiveTheme(theme);
              setShowThemes(false);
              setShowMobileMenu(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span>{theme.emoji}</span>
            {theme.name}
          </button>
        ))}
      </div>
    )}
  </div>

  <button
    className="mobile-menu-toggle"
    aria-label={showMobileMenu ? "Close menu" : "Open menu"}
    aria-expanded={showMobileMenu}
    onClick={() => {
      setShowMobileMenu(!showMobileMenu);
      setShowThemes(false);
    }}
  >
    {showMobileMenu ? "✕" : "☰"}
  </button>

  <nav className={`nav-links ${showMobileMenu ? "mobile-menu-open" : ""}`}>
    <button
      onClick={() => {
        setShowMobileMenu(false);
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      About
    </button>

    <button
      onClick={() => {
        setShowMobileMenu(false);
        document.getElementById("faq")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      FAQ
    </button>

   
<button
  className="support-btn"
  onClick={() => {
    setShowMobileMenu(false);
    setShowSupportModal(true);
  }}
>
  ❤️ Support Us
</button>

  </nav>
</header>


{/* SUPPORT US POPUP */}
{showSupportModal && (
  <div
    className="support-modal-overlay"
    onClick={() => setShowSupportModal(false)}
  >
    <section
      className="support-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-modal-title"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="support-modal-close"
        aria-label="Close support popup"
        onClick={() => setShowSupportModal(false)}
      >
        ✕
      </button>

      <div className="support-modal-heart">♥</div>

      <span className="support-modal-label">
        SUPPORT THE CREATOR
      </span>

      <h2 id="support-modal-title">
        Enjoying <span>Theme Drive?</span>
      </h2>

      <p>
        If you like this project, your support means a lot.
        Every bit of encouragement helps me keep creating
        new experiences.
      </p>

      <div className="support-modal-note">
        <span>💜</span>
        <span>Thanks for being part of the journey!</span>
      </div>

      <button
        className="support-modal-done"
        onClick={() => setShowSupportModal(false)}
      >
        Keep Exploring ✨
      </button>
    </section>
  </div>
)}


      {/* HERO */}
      <section className={`hero ${activeTheme.id}`}>
        {/* HEADING */}
        <div className="hero-heading">
          <div className="heading-icon">✦</div>

          <h1>{activeTheme.title}</h1>

          <p>{activeTheme.subtitle}</p>
        </div>

        {/* BUS SCENE */}
        {activeTheme.id === "bus-driver" && <BusDriverScene />}

        {/* PAPA'S CLASSICS SCENE */}
        {activeTheme.id === "papa-classics" && <PapaClassicsScene />}

        {activeTheme.id === "fresh-drop" && <FreshDropScene />}

        {activeTheme.id === "bartan" && <BartanScene />}

        {/* MUSIC PLAYER */}
        <MusicPlayer themeId={activeTheme.id} />

        {/* HERO BUTTONS */}
        <div className="hero-actions">
          <button>
            💬 <span>Live Chat</span>
          </button>

          <button>
            👥 <span>Join Community</span>
          </button>

          <button>
            🔗 <span>Share</span>
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <AboutSection />

      {/* FAQ */}
      <FAQSection />

      {/* CREATOR FOOTER */}
<CreatorFooter />
    </main>
  );
}

export default App;
