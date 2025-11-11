import React from 'react';
import './stepsection.css';

const StepsSection = () => {
    return (
        <section className="steps-container">
            <div className="steps-grid">
                {/* ... Kartu 1, 2, 3 tidak berubah ... */}
                <div className="step-card">
                    <h3>1. Unduh QR Code Marker AR Torio</h3>
                    <p>Klik tombol di bawah untuk mengunduh gambar QR Code yang akan berfungsi sebagai "pintu" menuju dunia virtual Oratorio.</p>
                </div>
                <div className="step-card">
                    <h3>2. Buka Kamera AR</h3>
                    <p>Setelah QR Code tersimpan, kembali ke halaman ini dan tekan tombol "Mulai Pindai". Izinkan browser untuk mengakses kamera perangkat Anda.</p>
                </div>
                <div className="step-card">
                    <h3>3. Pindai QR & Nikmati Pengalamannya</h3>
                    <p>Arahkan kamera Anda ke gambar QR Code yang sudah diunduh dan saksikan keajaiban muncul di hadapan Anda!</p>
                </div>
            </div>
            
            {/* Bungkus bagian tips dan tombol di sini */}
            <div className="bottom-section">
                <div className="tips-card">
                    <div className="tips-icon">💡</div>
                    <div className="tips-content">
                        <h4>Tips & Trik</h4>
                        <p>1. Pastikan Internet dalam performa optimal</p>
                        <p>2. Gunakan Perangkat yang Kompatibel</p>
                        <p>3. Jalankan Augmented Reality dengan bismillah</p>
                    </div>
                </div>
                <button className="mulai-ar-button">Mulai AR TORIO</button>
            </div>
        </section>
    );
};

export default StepsSection;