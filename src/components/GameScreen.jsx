import React, { useState } from 'react';
import { questions } from '../questions'; // Soruları src klasöründen çekiyoruz

const GameScreen = ({ onFinish }) => {
    // Şimdilik sadece 1. soruyu (index 0) alıyoruz
    const currentQuestion = questions[0];

    // İkinci şans hakkını kullandın mı?
    const [isSecondChance, setIsSecondChance] = useState(false);

    // Ekranda çıkacak uyarı mesajı (İpucu)
    const [feedback, setFeedback] = useState("");

    // Resme tıklayınca ne olacak?
    const handleOptionClick = (isAI) => {
        // 1. Eğer doğru bildiyse (AI görselini seçtiyse)
        if (isAI) {
            onFinish(true); // KAZANDIN mesajı yolla
        }
        // 2. Eğer yanlış bildiyse (Gerçek fotoyu seçtiyse)
        else {
            if (!isSecondChance) {
                // İlk hatasıysa: İkinci şans ver ve ipucu göster
                setIsSecondChance(true);
                setFeedback(`⚠️ Yanlış! İpucu: ${currentQuestion.hint}`);
            } else {
                // İkinci hatasıysa: Oyunu bitir (KAYBETTİN)
                onFinish(false);
            }
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>{currentQuestion.question}</h2>

            {/* İpucu mesajı varsa göster */}
            {feedback && (
                <div style={{
                    backgroundColor: '#fff3cd',
                    color: '#856404',
                    padding: '10px',
                    margin: '10px auto',
                    maxWidth: '600px',
                    border: '1px solid #ffeeba',
                    borderRadius: '5px'
                }}>
                    {feedback}
                </div>
            )}

            {/* Resim Kutuları */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>

                {currentQuestion.options.map((option) => (
                    <div key={option.id} onClick={() => handleOptionClick(option.isAI)}>
                        <img
                            src={option.src}
                            alt="tahmin"
                            style={{
                                width: '250px',
                                height: '250px',
                                objectFit: 'cover',
                                cursor: 'pointer',
                                border: '4px solid #ddd',
                                borderRadius: '10px'
                            }}
                            // Mouse üzerine gelince hafif büyüme efekti
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default GameScreen;