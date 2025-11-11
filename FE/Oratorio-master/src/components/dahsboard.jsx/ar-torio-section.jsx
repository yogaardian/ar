import React from "react";
import "./ar-torio-section.css";

// Import gambar lokal dari assets
import imgKresek from "../../assets/images/fav-dest-section-monumen-kresek.jpg";
import imgMonas from "../../assets/images/fav-dest-section-tugu-monas.jpg";
import imgTugu from "../../assets/images/fav-dest-section-tugu-jogja.jpg";
import imgJamGadang from "../../assets/images/fav-dest-section-jam-gadang.jpg";
import imgBorobudur from "../../assets/images/fav-dest-section-candi-borobudur.jpg";
import imgPrambanan from "../../assets/images/fav-dest-section-candi-prambanan.jpg";

function ARTorioSection() {
  const destinations = [
    {
      id: 3,
      image: imgTugu,
      title: "Tugu Yogyakarta",
      location: "D.I. Yogyakarta",
    },
    {
      id: 4,
      image: imgJamGadang,
      title: "Jam Gadang",
      location: "Bukittinggi, Sumatera Barat",
    },
    {
      id: 5,
      image: imgKresek,
      title: "Monumen Kresek",
      location: "Madiun, Jawa Timur",
    },
    {
      id: 6,
      image: imgPrambanan,
      title: "Candi Prambanan",
      location: "Sleman, D.I. Yogyakarta",
    },
  ];

  return (
    <section className="ar-torio-section">
      <div className="section-header">
        <div className="line"></div>
        <h2 className="section-title">AR TORIO</h2>
        <div className="line"></div>
      </div>

      <div className="ar-card-container">
        {destinations.map((item) => (
          <div key={item.id} className="ar-card">
            <img src={item.image} alt={item.title} className="ar-image" />
            <div className="ar-card-content">
              <p className="ar-location">📍 {item.title}, {item.location}</p>
            </div>
          </div>
        ))}
        <div className="arrow-button">›</div>
      </div>
    </section>
  );
}

export default ARTorioSection;
