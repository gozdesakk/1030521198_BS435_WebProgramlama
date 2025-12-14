import React from 'react';

const ResultScreen = ({ score, onRestart }) => {
    // Puan 0'dan büyükse "Başarılı" sayalım.
    const isSuccess = score > 0;

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>

            {/* Başlık: Kazandı mı Kaybetti mi? */}
            {isSuccess ? (
                <h1 style={{ color: '#28a745', fontSize: '3rem' }}>🎉 Tebrikler!</h1>
            ) : (
                <h1 style={{ color: '#dc3545', fontSize: '3rem' }}>😔 Oyun Bitti</h1>
            )}

            {/* Puan ve Mesaj */}
            <div style={{ margin: '20px auto', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '10px', maxWidth: '400px' }}>
                <h2>Toplam Puan</h2>
                <p style={{ fontSize: '40px', fontWeight: 'bold', margin: '10px 0' }}>{score}</p>
                <p style={{ fontSize: '1.2rem', color: '#555' }}>
                    {isSuccess
                        ? "Yapay zekayı başarıyla tespit ettin! 🕵️‍♂️"
                        : "Maalesef bu sefer yapay zeka seni kandırdı. 🤖"}
                </p>
            </div>

            <button
                onClick={onRestart}
                style={{
                    padding: '15px 30px',
                    fontSize: '18px',
                    cursor: 'pointer',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    marginTop: '20px'
                }}
            >
                🔄 Tekrar Oyna
            </button>
        </div>
    );
};

export default ResultScreen;