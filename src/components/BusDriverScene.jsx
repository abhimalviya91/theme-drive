import "./BusDriverScene.css";

function BusDriverScene() {
  return (
    <section className="bus-scene">

      {/* Sky */}
      <div className="bus-sky">
        <div className="moon"></div>
        <div className="stars"></div>
      </div>

      {/* Mountains */}
      <div className="mountains mountains-back"></div>
      <div className="mountains mountains-front"></div>

      {/* Distant lights */}
      <div className="distant-lights">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Highway */}
      <div className="highway">
        <div className="road-line"></div>
        <div className="road-line"></div>
        <div className="road-line"></div>
      </div>

      {/* Bus */}
      <div className="bus">
        <div className="bus-roof"></div>

        <div className="bus-body">
          <div className="bus-window">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="bus-door"></div>

          <div className="bus-wheel wheel-front"></div>
          <div className="bus-wheel wheel-back"></div>
        </div>

        <div className="headlight headlight-left"></div>
        <div className="headlight headlight-right"></div>
      </div>

      {/* Road glow */}
      <div className="headlight-glow"></div>

    </section>
  );
}

export default BusDriverScene;