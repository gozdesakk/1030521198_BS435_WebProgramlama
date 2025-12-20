
// src/questions.js

export const questionCategories = {
  // --- MOD 1: DOĞA ---
  nature: [
    {
      id: 1,
      question: "Bu sincap fotoğraflarından hangisi Yapay Zeka (AI) tarafından üretilmiştir?",
      hint: "Sincabın kürk detaylarına ve pençelerine dikkat et. Yapay zeka bazen tüyleri bulanık yapabilir.",
      options: [
        { id: 'n1_opt1', src: '/image/nature-real1.jpg', isAI: false },
        { id: 'n1_opt2', src: '/image/nature-ai.jpg', isAI: true }, // Doğru Cevap
        { id: 'n1_opt3', src: '/image/nature-real2.jpg', isAI: false }
      ]
    }
  ],
  
  // --- MOD 2: MİMARİ ---
  architecture: [
    {
      id: 101,
      question: "Hangi bina tasarımı tamamen yapay zeka ürünüdür?",
      hint: "Pencere detaylarındaki simetri hatalarına ve gökyüzünün rengine bak.",
      options: [
        { id: 'a1_opt1', src: '/image/arch-ai.jpg', isAI: true }, // Doğru Cevap
        { id: 'a1_opt2', src: '/image/arch-real1.jpg', isAI: false },
        { id: 'a1_opt3', src: '/image/arch-real2.jpg', isAI: false }
      ]
    }
  ]
};