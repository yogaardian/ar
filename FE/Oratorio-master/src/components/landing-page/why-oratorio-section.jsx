import React from 'react';
import FeatureCard from './feature-card';
import './why-oratorio-section.css';

const featuresData = [
  {
    title: "Akses Instan",
    description: "Tanpa Perlu Instalasi: Nikmati Pengalaman AR & VR Langsung dari Peramban Anda."
  },
  {
    title: "Imersif & Interaktif",
    description: "Lebih dari Sekadar Gambar, Berinteraksi Langsung Dengan Destinasi dan Lingkungan 3D."
  }
];

function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="section-container">
        <h2 className="section-title">Mengapa Harus Oratorio?</h2>
        <div className="features-flex">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
