import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './AdminLayout.css';
import { FiGrid, FiArchive, FiUsers, FiClock } from 'react-icons/fi';

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h3>ORATORIO</h3>
                    <span>Admin Panel</span>
                </div>
                <nav className="sidebar-nav">
                    <NavLink to="/admin/dashboard">
                        <FiGrid /> Dashboard
                    </NavLink>
                    <NavLink to="/admin/content">
                        <FiArchive /> Manajemen Konten
                    </NavLink>
                    <NavLink to="/admin/users">
                        <FiUsers /> Manajemen Pengguna
                    </NavLink>
                    <NavLink to="/admin/history">
                        <FiClock /> Riwayat Global
                    </NavLink>
                </nav>
            </aside>
            <main className="main-content">
                <Outlet /> {/* Ini adalah tempat halaman akan dirender */}
            </main>
        </div>
    );
};

export default AdminLayout;