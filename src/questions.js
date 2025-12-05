// Bu dosya oyunun soru havuzudur.

export const questions = [
    {
        id: 1,
        question: "Aşağıdaki görsellerden hangisi Yapay Zeka (AI) tarafından üretilmiştir?",
        hint: "Arka plandaki nesnelerin şekillerine ve gölgelere dikkat et.",
        options: [
            {
                id: 'opt1',
                src: '/images/q1-real1.jpg', // public klasöründeki yol
                isAI: false // Gerçek foto
            },
            {
                id: 'opt2',
                src: '/images/q1-ai.jpg',
                isAI: true // <-- Doğru cevap bu (AI üretimi)
            },
            {
                id: 'opt3',
                src: '/images/q1-real2.jpg',
                isAI: false // Gerçek foto
            }
        ]
    },

    // İleride 2. soruyu buraya ekleyeceğiz...
];