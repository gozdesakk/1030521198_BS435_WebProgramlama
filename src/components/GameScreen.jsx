
import { useState, useEffect } from 'react';
import { questionCategories } from '../questions'; 

export default function GameScreen({ onFinish }) {
  // --- STATE'LER ---
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  // İpucu ve 2. Şans Mantığı
  const [showHint, setShowHint] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState([]); 
  const [attempts, setAttempts] = useState(0); 

  // Kategori seçildiyse soruları al
  const questions = selectedCategory ? questionCategories[selectedCategory] : [];
  const currentQuestion = questions[currentQuestionIndex];

  // --- OYUN FONKSİYONLARI ---
  const handleOptionClick = (optionId, isAI) => {
    // Eğer bu şık pasifse tıklama
    if (disabledOptions.includes(optionId)) return;

    if (isAI) {
      // --- ✅ DOĞRU CEVAP ---
      let pointsToAdd = 20; 
      if (attempts === 1) pointsToAdd = 10; 
      
      const newScore = score + pointsToAdd;
      setScore(newScore);
      
      // Mesajı göster ve bitir
      setTimeout(() => {
        alert("🎉 Tebrikler! Doğru bildiniz.");
        goNextQuestion(newScore);
      }, 100);

    } else {
      // --- ❌ YANLIŞ CEVAP ---
      if (attempts === 0) {
        // İLK HATA: İpucu ver
        setAttempts(1);
        setShowHint(true);
        setDisabledOptions([...disabledOptions, optionId]); 
      } else {
        // İKİNCİ HATA: Kaybettin (Mesaj sadeleştirildi)
        setTimeout(() => {
            alert("😔 Maalesef bilemedin.");
            goNextQuestion(score);
        }, 100);
      }
    }
  };

  const goNextQuestion = (currentScore) => {
    // Temizlik yap
    setShowHint(false);
    setDisabledOptions([]);
    setAttempts(0);

    // Soru bitti mi kontrol et
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Oyun Bitti -> Skoru gönder
      onFinish(currentScore, questions.length * 20);
    }
  };

  // --- EKRAN 1: MOD SEÇİMİ ---

  if (!selectedCategory) {
    return (
      <div className="game-container" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Oyun Modunu Seç</h2>
        <p>Lütfen oynamak istediğin kategoriyi seç:</p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap' }}>
          {/* 1. Doğa Modu */}
          <button 
            onClick={() => setSelectedCategory('nature')}
            style={modeButtonStyle}>
            🌲 Doğa Modu
          </button>
          
          {/* 2. Mimari Modu */}
          <button 
            onClick={() => setSelectedCategory('architecture')}
            style={{ ...modeButtonStyle, backgroundColor: '#ff9800' }}>
            🏛️ Mimari Modu
          </button>

          {/* 3. YENİ: Portre Modu (Mor Buton) */}
          <button 
            onClick={() => setSelectedCategory('portrait')}
            style={{ ...modeButtonStyle, backgroundColor: '#9C27B0' }}>
            👩👨 Portre Modu
          </button>

          {/* 4. YENİ: Yemek Modu (Kırmızı/Pembe Buton) */}
          <button 
            onClick={() => setSelectedCategory('food')}
            style={{ ...modeButtonStyle, backgroundColor: '#e91e63' }}> 
            🍔 Gurme Modu
          </button>


        </div>
      </div>
    );
  }
  

  // --- EKRAN 2: SORU EKRANI ---
  return (
    <div className="game-container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <span style={{ fontWeight: 'bold' }}>Mod: {selectedCategory === 'nature' ? 'Doğa' : 'Mimari'}</span>
        <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>Puan: {score}</span>
      </div>

      <h3 style={{ marginBottom: '20px' }}>{currentQuestion.question}</h3>

      {/* İPUCU ALANI */}
      {showHint && (
        <div style={{ 
          backgroundColor: '#fff3cd', 
          padding: '15px', 
          borderRadius: '8px', 
          marginBottom: '20px', 
          border: '1px solid #ffeeba',
          color: '#856404' 
        }}>
          <strong>💡 İPUCU:</strong> {currentQuestion.hint} <br/>
          <small>(Bir yanlış yaptın, kalan şıklardan tekrar dene!)</small>
        </div>
      )}

      {/* ŞIKLAR */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {currentQuestion.options.map((option) => (
          <div 
            key={option.id} 
            onClick={() => handleOptionClick(option.id, option.isAI)}
            style={{
              opacity: disabledOptions.includes(option.id) ? 0.4 : 1, 
              pointerEvents: disabledOptions.includes(option.id) ? 'none' : 'auto', 
              cursor: 'pointer',
              border: '4px solid #ddd',
              borderRadius: '10px',
              overflow: 'hidden',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => !disabledOptions.includes(option.id) && (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src={option.src} 
              alt="seçenek" 
              style={{ width: '200px', height: '200px', objectFit: 'cover', display: 'block' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const modeButtonStyle = {
  padding: '20px 40px', 
  fontSize: '18px', 
  cursor: 'pointer', 
  backgroundColor: '#4CAF50', 
  color: 'white', 
  border: 'none', 
  borderRadius: '8px',
  fontWeight: 'bold'
};