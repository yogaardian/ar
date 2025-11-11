import React from 'react';
import './App.css';
import './index';
// Perbaikan ada di baris ini
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Import semua halaman PUBLIK yang sudah ada
import LandingPage from './pages/landing_page';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Dashboard from './pages/dashboard';
import ArPage from './pages/ar';
import VrPage from './pages/vr';
import History from './pages/history';
import Footer from './components/all-page/footer-page/footer';

// IMPORT SEMUA HALAMAN & LAYOUT UNTUK ADMIN
import AdminLayout from './components/admin/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import ContentPage from './pages/admin/ContentPage';
import UsersPage from './pages/admin/UsersPage';
import HistoryPage from './pages/admin/HistoryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rute untuk Halaman Publik */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ar" element={<ArPage />} />
          <Route path="/vr" element={<VrPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/footer" element={<Footer />} />

          {/* RUTE UNTUK ADMIN DASHBOARD */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="content" element={<ContentPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route index element={<Navigate to="dashboard" />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;