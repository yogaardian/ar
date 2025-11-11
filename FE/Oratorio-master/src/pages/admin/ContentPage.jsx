import React from 'react';
import './ContentPage.css';
import { FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';

// Data Dummy
const contentData = [
    { id: 1, name: 'Candi Borobudur', type: 'VR', status: 'Aktif', date: '10 Okt 2025' },
    { id: 2, name: 'Monumen Nasional', type: 'VR', status: 'Aktif', date: '11 Okt 2025' },
    { id: 3, name: 'Candi Prambanan', type: 'AR', status: 'Nonaktif', date: '12 Okt 2025' }
];

const ContentPage = () => {
    return (
        <div className="content-page">
            <div className="page-header">
                <h1>Manajemen Konten</h1>
                <button className="add-button"><FiPlus /> Tambah Destinasi</button>
            </div>

            <table className="admin-table">
                <thead>
                    <tr><th>Nama Destinasi</th><th>Tipe</th><th>Status</th><th>Tanggal Unggah</th><th>Aksi</th></tr>
                </thead>
                <tbody>
                    {contentData.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td><span className={`status ${item.status.toLowerCase()}`}>{item.status}</span></td>
                            <td>{item.date}</td>
                            <td>
                                <div className="action-buttons">
                                    <button className="edit-btn"><FiEdit /></button>
                                    <button className="delete-btn"><FiTrash2 /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContentPage;