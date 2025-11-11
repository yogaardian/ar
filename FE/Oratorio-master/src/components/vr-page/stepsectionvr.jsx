import React, { useState, useEffect } from 'react';
import './stepsectionvr.css';


import metaQuestImage from '../../assets/images//meta-quest.webp';
import oculusQuestImage from '../../assets/images//oculus.webp';

const VrStepsSection = () => {
    // State untuk melacak mode pilihan pengguna
    const [selectedMode, setSelectedMode] = useState(null);
    // State baru untuk mengetahui apakah browser mendukung VR
    const [isVrSupported, setIsVrSupported] = useState(false);

    // Cek dukungan VR sekali saat komponen pertama kali dimuat
    useEffect(() => {
        // 'navigator.xr' adalah tanda pengenal browser VR
        if (navigator.xr && navigator.xr.isSessionSupported('immersive-vr')) {
            navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
                setIsVrSupported(supported);
            });
        }
    }, []); // Array kosong berarti efek ini hanya berjalan sekali

    // Fungsi utama yang berisi LOGIKA PINTAR
    const handleStartVR = () => {
        if (!selectedMode) {
            alert("Silakan pilih mode tampilan terlebih dahulu!");
            return;
        }

        // KASUS 1: Pengguna memilih 360 View (berjalan di semua perangkat)
        if (selectedMode === '360 View') {
            alert("Mengarahkan ke halaman 360 View...");
            // TODO: Ganti dengan navigasi ke halaman/komponen 360 Viewer Anda
            // Contoh: window.location.href = '/viewer-360';
        }

        // KASUS 2: Pengguna memilih VR Imersif
        if (selectedMode === 'VR Imersif') {
            if (isVrSupported) {
                alert("Memulai Sesi WebXR Imersif...");
                // TODO: Ganti dengan logika untuk memulai sesi WebXR
                // Ini biasanya melibatkan library seperti A-Frame atau Three.js
            } else {
                // Jika perangkat tidak mendukung VR, beri tahu pengguna
                alert("Mode VR Imersif hanya dapat diakses melalui browser di dalam headset VR.");
            }
        }
    };

    return (
        <section className="vr-steps-container">
            <div className="content-wrapper">
                <h2 className="section-title">Pilihan Mode</h2>
                <div className="mode-selection-grid">
                    {/* === KARTU MODE 360 DENGAN DESKRIPSI BARU === */}
                    <div
                        className={`mode-card ${selectedMode === '360 View' ? 'selected' : ''}`}
                        onClick={() => setSelectedMode('360 View')}
                    >
                        <h3>Mode Tampilan 360° Web View</h3>
                        <p>
                            Cara termudah merasakan dunia virtual, seperti melihat melalui jendela ajaib. Anda akan menjadi seorang pengamat (observer) yang bisa melihat ke segala arah namun tidak bisa berjalan-jalan.
                        </p>
                        <ol className="steps-list">
                            <li>Klik untuk memilih mode ini.</li>
                            <li>Tekan tombol "Mulai VR TORIO".</li>
                            <li>Gunakan mouse atau geser layar untuk melihat sekeliling.</li>
                        </ol>
                    </div>

                    {/* === KARTU MODE VR IMERSIF DENGAN DESKRIPSI BARU === */}
                    <div
                        className={`mode-card ${selectedMode === 'VR Imersif' ? 'selected' : ''}`}
                        onClick={() => setSelectedMode('VR Imersif')}
                    >
                        <h3>Mode VR Imersif</h3>
                        <p>
                            Pengalaman VR sesungguhnya di mana Anda "masuk" ke dalam dunia virtual. Rasakan sensasi kehadiran, berjalan-jalan, dan melihat skala ruang yang realistis.
                        </p>
                        <ol className="steps-list">
                            <li>Buka situs ini dari Browser di dalam Headset VR Anda.</li>
                            <li>Pilih mode ini & tekan "Mulai VR TORIO".</li>
                            <li>Pilih **"Enter VR"** saat browser meminta izin.</li>
                        </ol>
                    </div>
                </div>

                <h2 className="section-title">Rekomendasi Perangkat</h2>
                <div className="device-recommendation-grid">
                    <div className="device-card">
                        <img src={metaQuestImage} alt="Meta Quest 2 Headset" />
                    </div>
                    <div className="device-card">
                        <img src={oculusQuestImage} alt="Oculus Quest 2 Headset and controllers" />
                    </div>
                </div>
                <p className="device-info">Untuk pengalaman imersif terbaik, kami merekomendasikan headset VR standalone seperti Meta Quest 2.</p>

                <button className="mulai-vr-button" onClick={handleStartVR}>
                    MULAI VR TORIO
                </button>
            </div>
        </section>
    );
};

export default VrStepsSection;