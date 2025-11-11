import React from 'react';
import './riwayat-section.css'; // Pastikan file CSS diimpor di sini

// Import gambar-gambar Anda (pastikan path ini benar)
import imgMonas from "../../assets/images/fav-dest-section-tugu-monas.jpg";
import imgTugu from "../../assets/images/fav-dest-section-tugu-jogja.jpg";
import imgJamGadang from "../../assets/images/fav-dest-section-jam-gadang.jpg";
import imgBorobudur from "../../assets/images/fav-dest-section-candi-borobudur.jpg";

const lastVisitedData = [
    { id: 1, name: 'Candi Borobudur, Magelang', image: imgBorobudur },
    { id: 2, name: 'Monumen Nasional, Jakarta', image: imgMonas },
    { id: 3, name: 'Tugu Yogyakarta, D.I. Yogyakarta', image: imgTugu },
    { id: 4, name: 'Jam Gadang, Bukit Tinggi', image: imgJamGadang }
];

const RiwayatSection = () => {
    return (
        <section className="riwayat-section-container">
            <div className="content-wrapper">
                <div className="page-header">
                    <h1 className="page-riwayat">Riwayat Kunjungan</h1>
                </div>

                <h2 className="section-title">Destinasi Terakhir</h2>
                <div className="destinasi-grid">
                    {lastVisitedData.map((destinasi) => (
                        <div key={destinasi.id} className="destinasi-card">
                            <img src={destinasi.image} alt={destinasi.name} className="destinasi-image" />
                            <div className="destinasi-info">
                                <span className="location-icon">📍</span>
                                <p>{destinasi.name}</p>
                            </div>
                            <button className="visit-again-button">Kunjungi Lagi</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RiwayatSection;