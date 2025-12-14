import React, { useState } from 'react';

const StartScreen = ({ onStart }) => {
    // Varsayılan olarak 'nature' modu seçili gelir
    const [selectedMode, setSelectedMode] = useState('nature');

    const handleStart = () => {
        // App.jsx içindeki fonksiyonu tetikler ve seçilen modu gönderir
        onStart(selectedMode);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>AI vs Gerçek: Görsel Avcısı 🕵️‍♂️</h1>
            <p style={styles.subtitle}>Yapay zekayı ayırt edebilir misin?</p>

            <div style={styles.card}>
                <h3 style={{ marginBottom: '15px' }}>Oyun Modunu Seç:</h3>

                <div style={styles.buttonGroup}>
                    {/* Doğa Modu Butonu */}
                    <button
                        style={selectedMode === 'nature' ? styles.activeButton : styles.button}
                        onClick={() => setSelectedMode('nature')}
                    >
                        🌲 Doğa Modu
                    </button>

                    {/* Mimari Modu Butonu */}
                    <button
                        style={selectedMode === 'architecture' ? styles.activeButton : styles.button}
                        onClick={() => setSelectedMode('architecture')}
                    >
                        🏛️ Mimari Modu
                    </button>
                </div>

                <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
                    Seçili Mod: <strong>{selectedMode === 'nature' ? 'Doğa' : 'Mimari'}</strong>
                </p>
            </div>

            <button onClick={handleStart} style={styles.startButton}>
                🚀 Oyuna Başla
            </button>
        </div>
    );
};

// Basit ve temiz CSS stilleri (React Style Object)
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
        fontFamily: 'Arial, sans-serif',
        padding: '0 20px'
    },
    title: { fontSize: '2.5rem', color: '#333', marginBottom: '10px' },
    subtitle: { fontSize: '1.2rem', color: '#666', marginBottom: '40px' },
    card: {
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'inline-block',
        marginBottom: '30px',
        border: '1px solid #e9ecef'
    },
    buttonGroup: { display: 'flex', gap: '15px', justifyContent: 'center' },
    button: {
        padding: '12px 24px',
        fontSize: '16px',
        cursor: 'pointer',
        border: '2px solid #ddd',
        backgroundColor: 'white',
        borderRadius: '8px',
        transition: 'all 0.3s ease'
    },
    activeButton: {
        padding: '12px 24px',
        fontSize: '16px',
        cursor: 'pointer',
        border: '2px solid #007bff',
        backgroundColor: '#e7f1ff',
        color: '#007bff',
        borderRadius: '8px',
        fontWeight: 'bold'
    },
    startButton: {
        padding: '15px 50px',
        fontSize: '20px',
        cursor: 'pointer',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '50px',
        boxShadow: '0 4px 6px rgba(40, 167, 69, 0.3)',
        transition: 'transform 0.2s'
    }
};

export default StartScreen;