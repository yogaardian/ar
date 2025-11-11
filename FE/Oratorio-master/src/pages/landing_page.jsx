import React from 'react';

// Import komponen-komponen penyusun landing page
import Header from '../components/all-page/header';
import Hero from '../components/landing-page/herosection';
import FeaturesSection from '../components/landing-page/why-oratorio-section'; // <-- TAMBAHKAN INI
import FavoriteDestinationsSection from '../components/landing-page/fav-destination-section';
import ARVRSection from '../components/landing-page/ar-vr-section';
import Footer from '../components/all-page/footer-page/footer';

function LandingPage() {
  return (
    <div>
      <Header /> {/* Pastikan Header di atas Navbar */}
      <Hero /> {/* Hero di bawah Navbar */}
      <FeaturesSection /> {/* Tambahkan ini untuk menampilkan fitur-fitur */}
      <FavoriteDestinationsSection /> {/* Bagian destinasi favorit */}
      <ARVRSection /> {/* Bagian AR/VR */}
      <Footer /> {/* Footer di bagian paling bawah */}
    </div>
  );
}

export default LandingPage;