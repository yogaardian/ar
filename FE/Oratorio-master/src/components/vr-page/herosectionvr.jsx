import React, { useState } from 'react';
import './herosectionvr.css';
import slideImage from '../../assets/images/fav-dest-section-candi-borobudur.jpg'; // Pastikan path gambar ini benar

const VrHeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            type: 'text',
            title: "Masuki Dunia Lain, Jelajahi Dunia dengan Virtual Reality",
            subtitle: "Pilih Cara Anda Menjelajah Dunia dengan Virtual Reality dan Ikuti Tutorial nya untuk Pengalaman Terbaik!",
        },
        {
            type: 'image',
            image: slideImage,
        },
    ];

    const nextSlide = () => setCurrentSlide(1);
    const prevSlide = () => setCurrentSlide(0);

    return (
        <section className="hero-slider">
            <button className="back-button">Kembali</button>

            {/* Panah Navigasi */}
            <div className="arrow left-arrow" onClick={prevSlide}>&#10094;</div>
            <div className="arrow right-arrow" onClick={nextSlide}>&#10095;</div>

            {/* Konten Slide */}
            <div className="slide-container">
                {slides.map((slide, index) => (
                    <div key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                        {slide.type === 'text' && (
                            <div className="text-content">
                                <h1>{slide.title}</h1>
                                <p>{slide.subtitle}</p>
                            </div>
                        )}
                        {slide.type === 'image' && (
                            <div className="image-content">
                                <img src={slide.image} alt="AR preview" className="slide-image-inner" />
                                <span>{slide.caption}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default VrHeroSection;