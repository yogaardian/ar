import React from 'react';
import './all-riwayat-section.css';

// Data dummy untuk seluruh riwayat
const allHistoryData = [
    { id: 1, destinasi: 'Candi Prambanan', tanggal: '22 Nov 2025', model: 'AR' },
    { id: 2, destinasi: 'Candi Borobudur', tanggal: '23 Nov 2025', model: 'VR' },
    { id: 3, destinasi: 'Monumen Nasional', tanggal: '24 Nov 2025', model: 'VR' }
];

const AllRiwayatSection = () => {
    return (
        <section className="all-riwayat-container">
            <div className="content-wrapper">
                <h2 className="section-title">Seluruh Riwayat Kunjungan</h2>
                <div className="history-table-wrapper">
                    <table className="history-table">
                        <thead>
                            <tr>
                                <th>Destinasi</th>
                                <th>Tanggal Akses</th>
                                <th>Model</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allHistoryData.map((item) => (
                                <tr key={item.id}>
                                    <td data-label="Destinasi">{item.destinasi}</td>
                                    <td data-label="Tanggal Akses">{item.tanggal}</td>
                                    <td data-label="Model">{item.model}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AllRiwayatSection;