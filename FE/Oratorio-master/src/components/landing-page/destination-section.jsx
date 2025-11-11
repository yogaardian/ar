import React from 'react';
import './destination-section.css';

function DestinationCard({ imageSrc, name }) {
  // `imageSrc` sekarang adalah variabel gambar yang sudah valid dari proses import.
  // Kita tidak perlu memodifikasinya lagi. Cukup gunakan langsung.
  
  return (
    <div className="destination-card">
      {/* Gunakan `imageSrc` secara langsung di sini */}
      <img src={imageSrc} alt={name} className="card-image" />
      <div className="card-overlay"></div>
      <h3 className="card-name">{name}</h3>
    </div>
  );
}

export default DestinationCard;

