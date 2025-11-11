import React from "react";
import "./ar-vr-section.css";
import arImage from "../../assets/images/ar.png";
import vrImage from "../../assets/images/vr.png";

function ARVRSection() {
  return (
    <section className="arvr-section">
      <div className="arvr-block">
        {/* Kiri atas: AR Image */}
        <div className="arvr-image" style={{ gridArea: "imageAR" }}>
          <img src={arImage} alt="Augmented Reality" />
        </div>

        {/* Kanan atas: VR Spec (berseberangan dengan AR image) */}
        <div className="arvr-content" style={{ gridArea: "contentVR" }}>
          <div className="arvr-spec">
            <h3 className="arvr-title">Virtual Reality</h3>
            <p className="arvr-desc">
              Masuk dan jelajahi situs bersejarah seolah-olah Anda benar-benar
              berada di sana dalam lingkungan 360°.
            </p>
          </div>
          <div className="arvr-spec">
            <h4>Spesification</h4>
            <p>
              Desktop atau Smartphone <br />
              Browser Modern (Chrome/Safari) <br />
              <strong>Headset VR</strong> (Untuk Pengalaman Terbaik)
            </p>
          </div>
        </div>

        {/* Kiri bawah: AR Spec */}
        <div className="arvr-content" style={{ gridArea: "contentAR" }}>
          <div className="arvr-spec">
            <h3 className="arvr-title">Augmented Reality</h3>
            <p className="arvr-desc">
              Menghadirkan situs, artefak dan tempat bersejarah langsung ke
              ruang digital Anda melalui perangkat digital Anda.
            </p>
          </div>
          <div className="arvr-spec">
            <h4>Spesification</h4>
            <p>
              Desktop atau Smartphone <br />
              Browser Modern Chrome/Safari <br />
              <strong>Tanpa Perlu Instalasi Aplikasi Berat!</strong>
            </p>
          </div>
        </div>

        {/* Kanan bawah: VR Image */}
        <div className="arvr-image" style={{ gridArea: "imageVR" }}>
          <img src={vrImage} alt="Virtual Reality" />
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="arvr-cta">
        <button>Rasakan Pengalaman Menggunakan AR dan VR Sekarang!</button>
      </div>
    </section>
  );
}

export default ARVRSection;
