// src/questions.js

export const questions = {
    // --- MOD 1: DOĞA (Nature) ---
    nature: [
        {
            id: 1,
            question: "Hangi görsel Yapay Zeka (AI) tarafından üretilmiştir?",
            hint: "Nesnelerin kenarlarına ve dokularına dikkat et.",
            options: [
                {
                    id: 'n1_opt1',
                    src: '/images/q1-real1.jpg.jpg', // Senin dosya ismin
                    isAI: false
                },
                {
                    id: 'n1_opt2',
                    src: '/images/q1-ai.jpg.jpg',   // Senin dosya ismin (AI Olan)
                    isAI: true
                },
                {
                    id: 'n1_opt3',
                    src: '/images/q1-real2.jpg.jpg', // Senin dosya ismin
                    isAI: false
                }
            ]
        },
        // Buraya daha fazla soru ekleyebilirsin
    ],

    // --- MOD 2: MİMARİ (Architecture) ---
    architecture: [
        {
            id: 101,
            question: "Hangi bina tasarımı tamamen yapay zeka ürünüdür?",
            hint: "Pencere detaylarına ve gölgelerin açısına bak.",
            options: [
                // Şimdilik buraya da aynı resimleri koyuyorum ki oyun hata vermesin.
                // Daha sonra mimari resimlerini yükleyince burayı değiştirebilirsin.
                { id: 'a1_opt1', src: '/images/q1-ai.jpg.jpg', isAI: true },
                { id: 'a1_opt2', src: '/images/q1-real1.jpg.jpg', isAI: false },
                { id: 'a1_opt3', src: '/images/q1-real2.jpg.jpg', isAI: false }
            ]
        }
    ]
};