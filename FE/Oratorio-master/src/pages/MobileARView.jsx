import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// --- KONFIGURASI IP ---
const LAPTOP_IP = "192.168.23.214";

const BACKEND_PORT = "5000";

const MobileARView = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = `http://${LAPTOP_IP}:${BACKEND_PORT}`;

  useEffect(() => {
    axios.get(`${API_URL}/api/wisata/${id}`)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setError(`Gagal konek ke ${API_URL}. Pastikan Laptop & HP satu WiFi.`);
        setLoading(false);
      });
  }, [id, API_URL]);

  // UI Loading (Sekarang background Hitam agar teks terbaca)
  if (loading) return (
    <div style={{background:'black', height:'100vh', color:'white', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <h3>Memuat Data AR...</h3>
        <p style={{fontSize:'12px'}}>{API_URL}</p>
    </div>
  );

  // UI Error Koneksi
  if (error) return (
    <div style={{background:'black', height:'100vh', color:'red', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', padding:'20px', textAlign:'center'}}>
        <h3>Gagal Memuat!</h3>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} style={{padding:'10px', marginTop:'20px'}}>Coba Lagi</button>
    </div>
  );

  const mindFileUrl = `${API_URL}/static/uploads/${data.mind_file}`;
  const modelFileUrl = `${API_URL}/static/uploads/${data.glb_model}`;

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', background: 'black' }}>
        
        {/* Tombol Kembali */}
        <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 999 }}>
            <button onClick={() => window.history.back()} style={{color: 'white', background: 'rgba(0,0,0,0.5)', border: 'none', padding:'8px 15px', borderRadius:'20px'}}>
                &larr; Kembali
            </button>
        </div>

        {/* --- AREA AR --- */}
        <iframe
            title="AR-Viewer"
            allow="camera; accelerometer; vr"
            style={{ width: '100%', height: '100%', border: 'none' }}
            srcDoc={`
                <!DOCTYPE html>
                <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js"></script>
                    <style>
                        body { margin: 0; overflow: hidden; background: black; }
                        .error-msg { 
                            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                            color: white; text-align: center; font-family: sans-serif; width: 80%;
                            background: rgba(0,0,0,0.8); padding: 20px; border-radius: 10px; z-index: 99999;
                            display: none; /* Hidden by default */
                        }
                    </style>
                </head>
                <body>
                    <div id="camera-error" class="error-msg">
                        <h3>⚠️ Kamera Diblokir</h3>
                        <p>Browser memblokir kamera karena tidak menggunakan HTTPS.</p>
                        <p><b>Solusi:</b><br>Buka <i>chrome://flags</i> di Chrome HP, cari "Insecure origins treated as secure", aktifkan, dan masukkan IP laptop Anda.</p>
                    </div>

                    <a-scene 
                        mindar-image="imageTargetSrc: ${mindFileUrl};" 
                        color-space="sRGB" 
                        renderer="colorManagement: true, physicallyCorrectLights" 
                        vr-mode-ui="enabled: false" 
                        device-orientation-permission-ui="enabled: false">
                        
                        <a-assets>
                            <a-asset-item id="avatarModel" src="${modelFileUrl}"></a-asset-item>
                        </a-assets>

                        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

                        <a-entity mindar-image-target="targetIndex: 0">
                            <a-gltf-model 
                                src="#avatarModel" 
                                rotation="0 0 0" 
                                position="0 0 0" 
                                scale="0.5 0.5 0.5" 
                                animation="property: rotation; to: 0 360 0; loop: true; dur: 10000">
                            </a-gltf-model>
                        </a-entity>
                    </a-scene>

                    <script>
                        // Deteksi jika kamera gagal loading (biasanya karena blokir HTTP)
                        const scene = document.querySelector('a-scene');
                        scene.addEventListener('arError', (event) => {
                            document.getElementById('camera-error').style.display = 'block';
                        });
                        
                        // Cek Internet untuk Script
                        if (!window.AFRAME) {
                            document.body.innerHTML = '<div style="color:white;text-align:center;padding-top:50%;">Gagal memuat Script AR.<br>Pastikan HP punya koneksi Internet.</div>';
                        }
                    </script>
                </body>
                </html>
            `}
        />
    </div>
  );
};

export default MobileARView;