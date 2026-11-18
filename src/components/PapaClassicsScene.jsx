import "./PapaClassicsScene.css";

function PapaClassicsScene() {
  return (
    <section className="papa-scene">
      {/* Background lights */}
      <div className="papa-ambient-glow"></div>

      {/* Floating dust particles */}
      <div className="papa-dust papa-dust-one"></div>
      <div className="papa-dust papa-dust-two"></div>
      <div className="papa-dust papa-dust-three"></div>
      <div className="papa-dust papa-dust-four"></div>

      {/* Decorative background */}
      <div className="papa-back-wall">
        <div className="papa-wall-light"></div>

        <div className="papa-shelf">
          <div className="papa-shelf-line"></div>
        </div>
      </div>

      {/* Main vintage radio */}
      <div className="papa-radio-wrapper">
        <div className="papa-radio">
          {/* Radio top */}
          <div className="papa-radio-top">
            <span>THE GOLDEN ERA</span>
            <span className="papa-radio-power">● POWER</span>
          </div>

          {/* Radio front */}
          <div className="papa-radio-front">
            {/* Left speaker */}
            <div className="papa-speaker">
              <div className="papa-speaker-ring">
                <div className="papa-speaker-inner">
                  <div className="papa-speaker-center"></div>
                </div>
              </div>
            </div>

            {/* Radio tuning display */}
            <div className="papa-radio-center">
              <div className="papa-radio-brand">
                PAPA'S CLASSICS
              </div>

              <div className="papa-radio-dial">
                <span>AM</span>
                <span>FM</span>
                <span>88</span>
                <span>98</span>
                <span>108</span>

                <div className="papa-dial-indicator"></div>
              </div>

              <div className="papa-radio-message">
                OLD SONGS, GOLDEN MEMORIES
              </div>

              <div className="papa-radio-equalizer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* Right controls */}
            <div className="papa-radio-controls">
              <div className="papa-knob"></div>
              <div className="papa-knob-label">TUNING</div>

              <div className="papa-knob papa-knob-small"></div>
              <div className="papa-knob-label">VOLUME</div>
            </div>
          </div>

          {/* Radio bottom */}
          <div className="papa-radio-bottom">
            <span>♪</span>
            <span>MADE FOR MUSIC LOVERS</span>
            <span>♪</span>
          </div>
        </div>

        {/* Cassette player */}
        <div className="papa-cassette-deck">
          <div className="papa-deck-label">
            CASSETTE PLAYER
          </div>

          <div className="papa-cassette">
            <div className="papa-cassette-label">
              <span>GOLDEN HITS</span>
              <span> SIDE A</span>
            </div>

            <div className="papa-cassette-reels">
              <div className="papa-reel">
                <div className="papa-reel-center"></div>
              </div>

              <div className="papa-cassette-window"></div>

              <div className="papa-reel papa-reel-right">
                <div className="papa-reel-center"></div>
              </div>
            </div>

            <div className="papa-cassette-bottom">
              <span>STEREO</span>
              <span>60 MIN</span>
            </div>
          </div>

          {/* Cassette controls */}
          <div className="papa-cassette-controls">
            <span>◀◀</span>
            <span>■</span>
            <span>▶</span>
            <span>▶▶</span>
          </div>
        </div>
      </div>

      {/* Foreground table */}
      <div className="papa-table"></div>

      {/* Caption */}
      <div className="papa-scene-caption">
        <span className="papa-caption-line"></span>

        <p>
          Kuch gaane sirf sune nahi jaate...
          <br />
          <strong>Mehsoos kiye jaate hain ❤️</strong>
        </p>

        <span className="papa-caption-line"></span>
      </div>
    </section>
  );
}

export default PapaClassicsScene;