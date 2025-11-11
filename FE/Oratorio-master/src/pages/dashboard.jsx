import React from 'react';

// Import komponen-komponen penyusun landing page
import Header from '../components/all-page/header';
import Hero from '../components/landing-page/herosection';
import FavoriteDestinationsSection from '../components/landing-page/fav-destination-section';
import Null from '../components/dahsboard.jsx/null.jsx';
import ARTorioSection from '../components/dahsboard.jsx/ar-torio-section';
import VRTorioSection from '../components/dahsboard.jsx/vr-torio-section';
import Footer from '../components/all-page/footer-page/footer';

function Dashboard() {
  return (
    <div>
      <Header /> {/* Pastikan Header di atas Navbar */}
      <Hero /> {/* Hero di bawah Navbar */}
      <FavoriteDestinationsSection /> {/* Bagian destinasi favorit */}
      <ARTorioSection /> {/* Bagian AR TORIO */}
      <VRTorioSection /> {/* Bagian VR TORIO */}
      <Footer /> {/* Footer di bagian paling bawah */}
      
    </div>
  );
}

export default Dashboard;