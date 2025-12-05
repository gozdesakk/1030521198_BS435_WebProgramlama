import React from 'react';

const StartScreen = ({ onStart }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>AI vs Gerçek: Görseli Tahmin Et</h1>
            <p>Yapay zeka ile üretilen görseli bulabilir misin?</p>
            <button
                onClick={onStart}
                style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#646cff', color: 'white', border: 'none', borderRadius: '5px' }}>
                Oyuna Başla
            </button>
        </div>
    );
};

export default StartScreen;