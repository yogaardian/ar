import React from 'react';

// Import komponen-komponen penyusun landing page
import Header from '../components/all-page/header';
import RiwayatSection from '../components/history-page/riwayat-section';
import AllRiwayatSection from '../components/history-page/all-riwayat-section';
import Footer from '../components/all-page/footer-page/footer';

function History() {
  return (
    <div>
      <Header /> {/* Pastikan Header di atas Navbar */}
      <RiwayatSection />
      <AllRiwayatSection />
      <Footer /> {/* Footer di bagian paling bawah */}
    </div>
  );
}

export default History;