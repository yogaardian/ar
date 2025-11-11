import React, { useState } from 'react';
import './herosection.css';

import heroImage from '../../assets/images/hero-bg2.jpg';
import ResponsiveSearchBar from './searchbar';

function Hero() {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Jelajahi Bersama Oratorio</h1>
        <p className="hero-subtitle">Plan better with 300,000+ travel experiences:</p>

        {/* Tambahkan div wrapper ini */}
        <div className="search-bar-wrapper">
          <ResponsiveSearchBar />
        </div>

        <p className="hero-tagline">Hidupkan Kembali Sejarah. Jelajahi Budaya Indonesia di Mana Saja.</p>
      </div>
    </div>
  );
}

export default Hero;