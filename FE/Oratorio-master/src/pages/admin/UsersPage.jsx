import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("/api/users")
      .then(res => {
        setUsers(res.data || []);
      })
      .catch(err => {
        console.error("Failed to GET /api/users:", err);
        setMessage("Endpoint /api/users tidak ditemukan. Pastikan backend mendaftarkan user blueprint (register `user_bp` dengan prefix /api/users).");
        setUsers([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Manajemen Pengguna</h1>
        <p className="text-sm text-gray-600">Tampilkan pengguna yang sudah terdaftar.</p>
      </header>

      {message && <div className="mb-4 p-3 bg-yellow-50 text-yellow-900 rounded">{message}</div>}

      {loading ? (
        <div>Loading...</div>
      ) : users.length === 0 ? (
        <div className="p-6 bg-white rounded shadow text-gray-600">Tidak ada data pengguna.</div>
      ) : (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-3 text-sm font-medium">ID</th>
                <th className="p-3 text-sm font-medium">Nama</th>
                <th className="p-3 text-sm font-medium">Email</th>
                <th className="p-3 text-sm font-medium">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.user_id || u.id || u.email} className="border-t">
                  <td className="p-3 text-sm">{u.user_id ?? u.id ?? "-"}</td>
                  <td className="p-3 text-sm">{u.name ?? u.username ?? "-"}</td>
                  <td className="p-3 text-sm">{u.email}</td>
                  <td className="p-3 text-sm">{u.role ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UsersPage;