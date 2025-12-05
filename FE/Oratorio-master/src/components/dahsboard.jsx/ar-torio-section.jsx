import React from "react";
// 1. Impor komponen Link dari react-router-dom
import { Link } from 'react-router-dom';
import "./ar-torio-section.css";

// (Import gambar Anda tetap sama)
import imgTugu from "../../assets/images/fav-dest-section-tugu-jogja.jpg";
import imgJamGadang from "../../assets/images/fav-dest-section-jam-gadang.jpg";
import imgKresek from "../../assets/images/fav-dest-section-monumen-kresek.jpg";
import imgBorobudur from "../../assets/images/fav-dest-section-candi-borobudur.jpg";

function ARTorioSection() {
  const destinations = [
    {
      // 2. Tambahkan 'slug' sebagai ID unik untuk URL
      slug: 'tugu-yogyakarta', 
      image: imgTugu,
      title: "Tugu Yogyakarta",
      location: "D.I. Yogyakarta",
    },
    {
      slug: 'jam-gadang',
      image: imgJamGadang,
      title: "Jam Gadang",
      location: "Bukittinggi, Sumatera Barat",
    },
    {
      slug: 'monumen-kresek',
      image: imgKresek,
      title: "Monumen Kresek",
      location: "Madiun, Jawa Timur",
    },
    {
      slug: 'candi-borobudur',
      image: imgBorobudur,
      title: "Candi Borobudur",
      location: "Magelang, D.I. Yogyakarta",
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
          // 3. Bungkus seluruh kartu dengan komponen <Link>
          // Gunakan slug untuk membuat URL dinamis
          <Link to={`/ar/${item.slug}`} key={item.slug} className="ar-card-link">
            <div className="ar-card">
              <img src={item.image} alt={item.title} className="ar-image" />
              <div className="ar-card-content">
                <p className="ar-location">📍 {item.title}, {item.location}</p>
              </div>
            </div>
          </Link>
        ))}
        <div className="arrow-button">›</div>
      </div>
    </section>
  );
}

export default ARTorioSection;