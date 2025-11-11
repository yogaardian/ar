import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Gunakan Link jika pakai React Router
import './ProfileDropdown.css'; // Kita akan buat file CSS ini nanti

// SVG untuk ikon user, agar tidak perlu library luar
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

function ProfileDropdown() {
  // State untuk melacak apakah dropdown sedang terbuka atau tertutup
  const [isOpen, setIsOpen] = useState(false);

  // useRef untuk mendapatkan referensi ke elemen dropdown
  const dropdownRef = useRef(null);

  // Fungsi untuk toggle state isOpen
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // useEffect untuk menutup dropdown ketika user mengklik di luar area dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Menambahkan event listener saat komponen di-mount
    document.addEventListener("mousedown", handleClickOutside);
    // Membersihkan event listener saat komponen di-unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      {/* Tombol ikon user yang memicu dropdown */}
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <UserIcon />
      </button>

      {/* Menu dropdown akan muncul jika isOpen bernilai true */}
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            {/* Ganti tag 'a' dengan 'Link' jika menggunakan React Router DOM */}
            <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          </li>
          <li>
            <Link to="/register" onClick={() => setIsOpen(false)}>Register</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileDropdown;