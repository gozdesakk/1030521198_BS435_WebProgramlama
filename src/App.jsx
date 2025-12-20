
// src/App.jsx
import { useState } from 'react'
import GameScreen from './components/GameScreen'
import './App.css'

function App() {
  // Sadece oyunun başlayıp başlamadığını takip ediyoruz
  const [gameStarted, setGameStarted] = useState(false);

  // Oyun bitince çalışacak fonksiyon
  const handleGameFinish = (score, totalScore) => {
    alert(`🏁 Oyun Bitti! \nToplam Skorun: ${score} / ${totalScore}`);
    setGameStarted(false); // Başlangıç ekranına dön
  };

  return (
    <div className="app-container">
      
      {/* DURUM 1: Oyun henüz başlamadıysa (Giriş Ekranı) */}
      {!gameStarted ? (
        <div className="welcome-screen" style={{ textAlign: 'center', marginTop: '100px' }}>
          <h1>AI vs Gerçek: Görsel Avcısı 🕵️‍♂️</h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
            Yapay zekayı ayırt edebilir misin?
          </p>
          
          <br />

          {/* Sadece BAŞLA butonu var. Mod seçimi içeride yapılacak. */}
          <button 
            className="start-btn" 
            onClick={() => setGameStarted(true)}
            style={{
              padding: '20px 50px',
              fontSize: '24px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)'
            }}
          >
            🚀 Oyuna Başla
          </button>
        </div>
      ) : (
        /* DURUM 2: Başla'ya basıldıysa GameScreen'i yükle */
        /* Mod seçimi artık GameScreen'in içinde yapılacak */
        <GameScreen onFinish={handleGameFinish} />
      )}

    </div>
  )
}

export default App
