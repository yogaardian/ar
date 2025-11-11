import React from 'react';

// Impor komponen KONTEN kita dengan nama barunya
import HeroSection from '../components/ar-page/herosection';
import StepsSection from '../components/ar-page/stepsection'; 
import Footer from '../components/all-page/footer-page/footer';

// Nama komponen HALAMAN ini adalah ArPage
const ArPage = () => {
  return (
    <div>
      <HeroSection />
      <StepsSection />
      <Footer />
    </div>
  );
};

export default ArPage;