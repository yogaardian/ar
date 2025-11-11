import React from 'react';

// Impor komponen KONTEN kita dengan nama barunya
import VrHeroSection from '../components/vr-page/herosectionvr';
import VrStepsSection from '../components/vr-page/stepsectionvr';
import Footer from '../components/all-page/footer-page/footer';

// Nama komponen HALAMAN ini adalah ArPage
const VrPage = () => {
  return (
    <div>
      <VrHeroSection />
      <VrStepsSection />
      <Footer />
    </div>
  );
};

export default VrPage;