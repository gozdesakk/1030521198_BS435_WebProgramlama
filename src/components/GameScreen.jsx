import React, { useState } from 'react';
import { questions } from '../questions'; // Soru havuzunu alıyoruz

const GameScreen = ({ onEndGame, mode }) => {
    // 1. Seçilen moda ait soruları çekiyoruz (questions.nature veya questions.architecture)
    const currentModeQuestions = questions[mode];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    // İkinci şans ve ipucu state'leri
    const [attempts, setAttempts] = useState(0);
    const [showHint, setShowHint] = useState(false);
    const [disabledOptions, setDisabledOptions] = useState([]);

    // Güvenlik: Eğer o moda ait soru yoksa hata vermesin
    if (!currentModeQuestions || currentModeQuestions.length === 0) {
        return <div style={{ marginTop: '50px' }}>Bu modda henüz soru yok!</div>;
    }

    const currentQuestion = currentModeQuestions[currentQuestionIndex];

    const handleOptionClick = (optionId, isAI) => {
        if (disabledOptions.includes(optionId)) return; // Pasif şıkka tıklanamaz

        if (isAI) {
            // --- DOĞRU CEVAP ---
            let pointsEarned = 0;
            if (attempts === 0) {
                pointsEarned = 20;
                alert("Tebrikler! İlk seferde bildin! 🎯");
            } else {
                pointsEarned = 10;
                alert("Tebrikler! İkinci şansında bildin. 👍");
            }
            handleNextQuestion(score + pointsEarned);

        } else {
            // --- YANLIŞ CEVAP ---
            if (attempts === 0) {
                // İLK YANLIŞ: İpucu göster ve o şıkkı kapat
                setAttempts(1);
                setShowHint(true);
                setDisabledOptions([...disabledOptions, optionId]);
                alert(`Yanlış seçim! İpucu: ${currentQuestion.hint}`);
            } else {
                // İKİNCİ YANLIŞ: Puan yok, geç
                alert("Maalesef bilemedin. Sıradaki soruya geçiliyor. 🤖");
                handleNextQuestion(score);
            }
        }
    };

    const handleNextQuestion = (newScore) => {
        setScore(newScore);

        // Bir sonraki soru var mı?
        if (currentQuestionIndex + 1 < currentModeQuestions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            // State'leri sıfırla (yeni soru için)
            setAttempts(0);
            setShowHint(false);
            setDisabledOptions([]);
        } else {
            // Oyun bitti
            onEndGame(newScore);
        }
    };

    return (
        <div className="game-container" style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Mod: {mode === 'nature' ? '🌲 Doğa' : '🏛️ Mimari'}</h2>
            <h3>Soru {currentQuestionIndex + 1} / {currentModeQuestions.length}</h3>
            <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>{currentQuestion.question}</p>

            {/* İpucu Kutusu */}
            {showHint && (
                <div style={{ backgroundColor: '#fff3cd', color: '#856404', padding: '10px', borderRadius: '5px', display: 'inline-block', marginBottom: '20px' }}>
                    <strong>💡 İPUCU:</strong> {currentQuestion.hint}
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {currentQuestion.options.map((option) => (
                    <div
                        key={option.id}
                        onClick={() => handleOptionClick(option.id, option.isAI)}
                        style={{
                            opacity: disabledOptions.includes(option.id) ? 0.4 : 1,
                            cursor: disabledOptions.includes(option.id) ? 'not-allowed' : 'pointer',
                            border: '3px solid #ddd',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            transition: 'transform 0.2s'
                        }}
                    >
                        <img
                            src={option.src}
                            alt="Seçenek"
                            style={{ width: '250px', height: '250px', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                ))}
            </div>

            <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Puan: {score}</p>
        </div>
    );
};

export default GameScreen;