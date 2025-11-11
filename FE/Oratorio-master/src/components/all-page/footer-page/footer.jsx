import React from "react";
import { FaFacebookF, FaPinterestP, FaYoutube, FaInstagram } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Social Media */}
      <div className="footer-social">
        <FaFacebookF />
        <FaPinterestP />
        <FaYoutube />
        <FaInstagram />
      </div>

      {/* Footer Links */}
      <div className="footer-link">
        <div className="footer-column">
          <a href="#">Help Center</a>
          <a href="#">FAQ</a>
          <a href="#">About Oratorio</a>
        </div>

        <div className="footer-column">
          <a href="#">Destinasi</a>
          <a href="#">Augmented Reality Interface</a>
          <a href="#">Virtual Reality Interface</a>
        </div>

        <div className="footer-column">
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
          <a href="#">Help Center</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 Oratorio, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
