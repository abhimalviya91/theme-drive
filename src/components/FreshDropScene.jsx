import "./FreshDropScene.css";

function FreshDropScene() {
  return (
    <section className="fresh-drop-scene">
      <div className="fd-glow fd-glow-one"></div>
      <div className="fd-glow fd-glow-two"></div>

      <div className="fd-grid"></div>

      <div className="fd-equalizer">
        {Array.from({ length: 45 }).map((_, index) => (
          <span
            key={index}
            style={{
              "--bar-index": index,
              "--bar-height": `${20 + Math.random() * 80}%`,
            }}
          ></span>
        ))}
      </div>

      <div className="fd-center">
        <div className="fd-ring fd-ring-one"></div>
        <div className="fd-ring fd-ring-two"></div>
        <div className="fd-disc">
          <div className="fd-disc-inner">
            <span>F</span>
          </div>
        </div>
        <div className="fd-center-label">FEEL THE BEAT</div>
      </div>

      <div className="fd-bottom-label">
        <span className="fd-live-dot"></span>
        NOW ENTERING THE SOUND ZONE
      </div>
    </section>
  );
}

export default FreshDropScene;