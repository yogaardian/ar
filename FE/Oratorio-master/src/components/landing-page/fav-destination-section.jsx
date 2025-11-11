import React from 'react';
import DestinationCard from './destination-section'; // Pastikan nama file ini benar
import './fav-destination-section.css';

// 1. Impor setiap gambar dari folder assets
import imgKresek from '../../assets/images/fav-dest-section-monumen-kresek.jpg';
import imgMonas from '../../assets/images/fav-dest-section-tugu-monas.jpg';
import imgTugu from '../../assets/images/fav-dest-section-tugu-jogja.jpg';
import imgJamGadang from '../../assets/images/fav-dest-section-jam-gadang.jpg';
import imgBorobudur from '../../assets/images/fav-dest-section-candi-borobudur.jpg';
import imgPrambanan from '../../assets/images/fav-dest-section-candi-prambanan.jpg';

// 2. Gunakan variabel gambar yang sudah diimpor, bukan string
const destinationsData = [
  { name: "Monumen Kresek", image: imgKresek },
  { name: "Monas", image: imgMonas },
  { name: "Tugu Yogyakarta", image: imgTugu },
  { name: "Jam Gadang", image: imgJamGadang },
  { name: "Candi Borobudur", image: imgBorobudur },
  { name: "Candi Prambanan", image: imgPrambanan },
];

function FavoriteDestinationsSection() {
  return (
    <section className="fav-destinations-section">
      <div className="section-container">
        <h2 className="section-title">Destinasi Favorit</h2>
        <div className="destinations-grid">
          {destinationsData.map((destination, index) => (
            <DestinationCard
              key={index}
              name={destination.name}
              // 3. Kirim variabel gambar, bukan string path
              imageSrc={destination.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FavoriteDestinationsSection;
