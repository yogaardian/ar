import React from 'react';
import './DashboardPage.css';
import { FiUsers, FiEye, FiHeart, FiCpu } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrasi komponen ChartJS (tidak perlu diubah)
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Data Dummy (tidak perlu diubah)
const stats = [
    { id: 1, title: 'Total Pengguna', value: '1,254', icon: <FiUsers /> },
    { id: 2, title: 'Total Kunjungan', value: '8,921', icon: <FiEye /> },
    { id: 3, title: 'Destinasi Populer', value: 'Candi Borobudur', icon: <FiHeart /> },
    { id: 4, title: 'Model Favorit', value: 'VR', icon: <FiCpu /> }
];

const chartData = {
    labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    datasets: [{
        label: 'Kunjungan Minggu Ini',
        data: [65, 59, 80, 81, 56, 55, 90],
        fill: false,
        borderColor: '#008080',
        tension: 0.2,
        backgroundColor: '#008080',
    }]
};

const recentActivities = [
    { id: 1, user: 'budi_s', dest: 'Candi Prambanan', model: 'AR', time: '5 menit lalu' },
    { id: 2, user: 'citra_w', dest: 'Monumen Nasional', model: 'VR', time: '10 menit lalu' },
    { id: 3, user: 'devina_k', dest: 'Tugu Jogja', model: 'AR', time: '12 menit lalu' },
    { id: 4, user: 'farhan_a', dest: 'Candi Borobudur', model: 'VR', time: '15 menit lalu' },
];

const DashboardPage = () => {
    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
                <p>Selamat datang kembali, Admin! Berikut adalah ringkasan aktivitas platform Anda.</p>
            </header>

            <div className="stats-grid">
                {stats.map(stat => (
                    <div key={stat.id} className="stat-card">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-info">
                            <h4>{stat.title}</h4>
                            <p>{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-main-grid">
                <section className="dashboard-section chart-container">
                    <h2>Aktivitas Pengguna (7 Hari Terakhir)</h2>
                    <Line data={chartData} options={{ responsive: true }} />
                </section>
                
                <section className="dashboard-section activity-container">
                    <h2>Aktivitas Terbaru</h2>
                    <table className="activity-table">
                        <thead>
                            <tr>
                                <th>Pengguna</th>
                                <th>Destinasi</th>
                                <th>Model</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentActivities.map(act => (
                                <tr key={act.id}>
                                    <td>{act.user}</td>
                                    <td>{act.dest}</td>
                                    <td>{act.model}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default DashboardPage;