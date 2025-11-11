import React, { createContext, useContext, useState, useEffect } from "react";

// --- Buat Context ---
const ThemeContext = createContext();

// --- Provider ---
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 🔁 Cek preferensi di localStorage saat pertama kali load
    useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme === "true") {
        setIsDarkMode(true);
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
    }, []);


  // 🌗 Toggle Dark Mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("isDarkMode", newTheme);
    document.body.classList.toggle("dark-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// --- Hook untuk akses context di komponen lain ---
export const useTheme = () => useContext(ThemeContext);
