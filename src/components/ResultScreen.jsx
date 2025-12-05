import React from 'react';

const ResultScreen = ({ onRestart, isWin }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ color: isWin ? 'green' : 'red' }}>
        {isWin ? "Tebrikler! Doğru Bildin 🎉" : "Maalesef Yanlış Cevap 😔"}
      </h2>
      <button 
        onClick={onRestart}
        style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer', marginTop: '20px' }}>
        Tekrar Oyna
      </button>
    </div>
  );
};

export default ResultScreen;