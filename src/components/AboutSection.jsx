
import "./AboutSection.css";

function AboutSection() {
  const themes = [
    {
      icon: "💇",
      title: "Deluxe Salon",
      description:
        "A relaxing and stylish atmosphere for beauty and self-care.",
    },
    {
      icon: "🚌",
      title: "Bus Driver",
      description:
        "Experience the road with a moving city-bus inspired theme.",
    },
    {
      icon: "📻",
      title: "Papa's Classics",
      description:
        "Relive golden memories with a nostalgic old Bollywood vibe.",
    },
    {
      icon: "🎧",
      title: "Fresh Drop",
      description:
        "Feel every beat with a vibrant, neon-inspired music experience.",
    },
    {
      icon: "🎶",
      title: "Bartan & Beats",
      description:
        "Where everyday kitchen moments meet music and rhythm.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-badge">
          ✦ ABOUT THEME DRIVE
        </div>

        <h2>
          One Website.
          <span> Multiple Vibes.</span>
        </h2>

        <p className="about-intro">
          Theme Drive is an interactive experience where you can
          switch between different themes and instantly transform
          the atmosphere of the website.
        </p>

        <div className="about-themes">
          {themes.map((theme) => (
            <div className="about-theme-card" key={theme.title}>
              <div className="about-theme-icon">
                {theme.icon}
              </div>

              <h3>{theme.title}</h3>

              <p>{theme.description}</p>
            </div>
          ))}
        </div>

        <div className="about-bottom">
          <div className="about-stat">
            <strong>05</strong>
            <span>Current Themes</span>
          </div>

          <div className="about-divider"></div>

          <div className="about-stat">
            <strong>∞</strong>
            <span>Possibilities</span>
          </div>

          <div className="about-divider"></div>

          <div className="about-stat">
            <strong>✦</strong>
            <span>More Coming Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
