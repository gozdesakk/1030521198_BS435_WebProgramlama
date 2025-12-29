
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
  ],
 

  // --- MOD 3: PORTRE ---
  portrait: [
    {
      id: 201,
      question: "Bu yüzlerden hangisi bir insana ait değildir (AI Üretimi)?",
      hint: "Göz bebeklerinin şekline, dişlere veya kulak detaylarına dikkat et. AI genelde simetriyi kaçırır.",
      options: [
        { id: 'p1_opt1', src: '/image/face-real1.jpg', isAI: false },
        { id: 'p1_opt2', src: '/image/face-ai.jpg', isAI: true }, // Doğru Cevap (AI)
        { id: 'p1_opt3', src: '/image/face-real2.jpg', isAI: false }
      ]
    }
  ],
  

  // --- MOD 4: YEMEK (GURME) ---
  food: [
    {
      id: 301,
      question: "Hangi yemek fotoğrafı Yapay Zeka (AI) tarafından üretilmiştir?",
      hint: "Yiyeceklerin dokusuna ve parlaklığına bak. AI genelde malzemeleri aşırı pürüzsüz ve kusursuz yapar.",
      options: [
        { id: 'f1_opt1', src: '/image/food-real1.jpg', isAI: false },
        { id: 'f1_opt2', src: '/image/food-ai.jpg', isAI: true }, // Doğru Cevap (AI)
        { id: 'f1_opt3', src: '/image/food-real2.jpg', isAI: false }
      ]
    }
  ]
}
