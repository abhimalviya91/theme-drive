import "./TruckDriverScene.css";
import truckImage from "../assets/truck.png";

function TruckDriverScene() {
  return (
    <section className="truck-scene">

      {/* ================= SKY ================= */}
      <div className="truck-sky">
        <div className="truck-moon"></div>
        <div className="truck-stars"></div>
      </div>

      {/* ================= MOUNTAINS ================= */}
      <div className="truck-mountains back"></div>
      <div className="truck-mountains front"></div>

      {/* ================= DISTANT LIGHTS ================= */}
      <div className="distant-road-lights">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* ================= DHABA ================= */}
      <div className="truck-dhaba">
        <div className="dhaba-roof"></div>

        <div className="dhaba-board">
          DESI DHABA
        </div>

        <div className="dhaba-door"></div>

        <div className="dhaba-window">
          <span></span>
          <span></span>
        </div>

        <div className="dhaba-glow"></div>
      </div>

      {/* ================= ROAD ================= */}
      <div className="truck-road">
        <div className="road-edge"></div>

        <div className="road-marker marker-1"></div>
        <div className="road-marker marker-2"></div>
        <div className="road-marker marker-3"></div>
        <div className="road-marker marker-4"></div>

        <div className="road-center-line"></div>
      </div>

      {/* ================= TRUCK ================= */}
      <div className="truck-moving">
        <img
          src={truckImage}
          alt="Orange cargo truck"
          className="truck-image"
        />
      </div>

    </section>
  );
}

export default TruckDriverScene;