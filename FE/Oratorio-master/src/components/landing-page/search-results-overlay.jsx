import React from 'react';
import './search-result-overlay.css';


// Data dummy untuk hasil pencarian
const dummyResults = [
  { name: "Candi Borobudur", image: "destinations/borobudur.jpg", desc: "Mahakarya arsitektur Buddha terbesar di dunia." },
  { name: "Candi Prambanan", image: "destinations/prambanan.jpg", desc: "Kompleks candi Hindu yang didedikasikan untuk Trimurti." },
  { name: "Monas", image: "destinations/monas.jpg", desc: "Monumen ikonik yang melambangkan perjuangan Indonesia." },
];

function SearchResultsOverlay({ query, onClose }) {
  return (
    <div className="search-results-overlay">
      <button onClick={onClose} className="close-button">
        &times; {/* Simbol 'x' untuk menutup */}
      </button>

      <h2 className="results-title">
        Hasil Pencarian untuk: <span>"{query}"</span>
      </h2>

      <div className="results-grid">
        {dummyResults.map((result, index) => (
          <div key={index} className="result-card">
            <img src={`/${result.image}`} alt={result.name} className="result-image" />
            <div className="result-info">
              <h3 className="result-name">{result.name}</h3>
              <p className="result-desc">{result.desc}</p>
              <button className="result-button">Mulai Tur</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResultsOverlay;
