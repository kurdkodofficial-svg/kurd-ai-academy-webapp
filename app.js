const STORAGE_KEY = "kurdAiAcademyProgress";

const appData = {
  ku: {
    appName: "Kurd AI Academy",
    heroEyebrow: "فێربوون بۆ داهاتوو",
    heroTitle: "فێربە، گەشە بکە، داهاتووی خۆت دروست بکە.",
    heroText:
      "کۆرسەکانمان بۆ زمانی کوردی، ئینگلیزی، دیجیتاڵ و زیرەکی دەستکرد دەتوانن هەنگاوی سەرەکی بۆ پەرەپێدانی کەسبی و خۆشکەری بدەن.",
    heroPrimary: "دەست پێبکە",
    heroSecondary: "بینینی ڕێڕەو",
    pillOne: "گونجاو بۆ دەستپێکەران",
    pillTwo: "دەستەواژەی بەخۆڕایی",
    pillThree: "شارەزایی کرداری",
    panelLabel: "ڕێڕەوی فێربوون",
    miniStatOne: "3",
    miniTextOne: "ڕێڕەو",
    miniStatTwo: "12+",
    miniTextTwo: "چالاکی",
    statOne: "فێربوونی کرداری",
    statTwo: "خوێندنەوەی گونجاو",
    statThree: "زمانەکان",
    coursesKicker: "ڕێڕەوەکانی فێربوون",
    coursesTitle: "ڕێڕەوێک هەڵبژێرە کە لەگەڵ ئامانجت دەگونجێت",
    roadmapKicker: "چۆن کاردەکات",
    roadmapTitle: "سیستەمی سادەی فێربوون",
    stepOneTitle: "شارەزایی هەڵبژێرە",
    stepOneText: "ئەو ڕێڕەوە هەڵبژێرە کە زۆرتر بۆ داهاتووت گونجاوە.",
    stepTwoTitle: "خوێندن و ڕاهێنان",
    stepTwoText: "بەشە کورتەکان بخوێنە و چالاکیە دروستەکان بگەرێنەوە.",
    stepThreeTitle: "پێشکەوتن بەدوادا بکە",
    stepThreeText: "چی فێرت بوو بزانە و بە متمانە بەردەوام بە.",
    aboutKicker: "ئامانج",
    aboutTitle: "فێربوون دەبێت بۆ هەمووان بکرێت",
    aboutText:
      "Kurd AI Academy یارمەتی دەدات کە کەسانی تر بتوانن شارەزایی لە زمان، زانیاری دیجیتاڵ و زیرەکیی دەستکرد بەدەست بهێنن و بە متمانە داهاتووی خۆیان دروست بکەن.",
    footerText: "دەستەواژە و دەرفەت بۆ هەمووان.",
    footerNote: "پڕۆتۆتای فێربوون و نیشانەدان",
    languageLabel: "زمان",
    courses: [
      {
        id: "languages",
        title: "زمان و قسەکردن",
        description: "بەشەکانی سەرەکیی زمانەکان لەناو ژیان و کاردا فێربە.",
        level: "دەستپێکەران",
        lessons: 3,
        icon: "🗣️",
        objective: "خۆشەویستی و هەڵسەنگاندنی ڕستە و سەیرکردن بۆ سۆشیاڵکردن.",
        modules: [
          {
            title: "بەشی یەکەم: سڵاوکردن",
            detail: "فێربوونی وشەیەکی سەرەتایی و بەکارهێنانیان لە گفتوگۆدا.",
            question: "Hello واتای چییە؟",
            options: ["بەڵێ", "سڵاو", "خۆشەویستی"],
            answer: "سڵاو",
            explanation: "Hello کە وا دەڵێت 'سڵاو' و لە کاتی دیدارکردندا بەکار دێت."
          },
          {
            title: "بەشی دووەم: گوتنی دڵخواز",
            detail: "دەتوانیت هەندێک شت بۆ کەسەکان بڵێیت و دڵخوازەکانی خۆت بیانکەیت.",
            question: "Please واتای چییە؟",
            options: ["تکایە", "خۆشی", "ئامانج"],
            answer: "تکایە",
            explanation: "Please لە ئینگلیزی واتە 'تکایە' و بەکاردێت بۆ خۆشەویستی و داوای هەڵسەنگاندن."
          }
        ],
        color: "#dff3ff"
      },
      {
        id: "translation",
        title: "وەرگێڕان و نووسین",
        description: "چۆن واتا بگوازرێت لە زمانێک بۆ زمانێکی تر و دەق ڕوون بکەیت.",
        level: "ئامێزی ئاسایی",
        lessons: 3,
        icon: "✍️",
        objective: "ڕوونکردنەوەی دەق و گواستنەوەی واتا بۆ کار و ژیان.",
        modules: [
          {
            title: "بەشی یەکەم: واتا",
            detail: "کێشەکانی وەرگێڕان و هەڵسەنگاندنی واتا بزانە.",
            question: "Translation واتای چییە؟",
            options: ["خوێندن", "وەرگێڕان", "هەواڵدان"],
            answer: "وەرگێڕان",
            explanation: "Translation واتە وەرگێڕان؛ گواستنەوەی واتای دەق لە زمانێکەوە بۆ زمانێکی تر."
          },
          {
            title: "بەشی دووەم: نووسینی ڕوون",
            detail: "دەقەکانت بە ڕوونی و سەرسوڕمان بۆ خوێنەر بنووسە.",
            question: "Clear writing means:",
            options: ["دڵخۆشی", "ڕوون و مەبەستدار نووسین", "وەک بڕراوە"],
            answer: "ڕوون و مەبەستدار نووسین",
            explanation: "نووسینی ڕوون بە واتای نووسینێکی ئاشکرایە بۆ خوێنەر و سەرسوڕمان."
          }
        ],
        color: "#eaf7ef"
      },
      {
        id: "ai",
        title: "زیرەکی دەستکرد و دیجیتاڵ",
        description: "بنەمای سەرەکیی AI، ئامرازە دیجیتاڵەکان، و بەکارهێنانی هەڵسەنگاندنی ئاسایی.",
        level: "بەردەوام",
        lessons: 4,
        icon: "🤖",
        objective: "بەکارهێنانی ئامرازەکان بە شێوەی ئەرێنی و ئاسایی.",
        modules: [
          {
            title: "بەشی یەکەم: AI چییە؟",
            detail: "بە شێوەی ڕوون بزانە AI چیە و چۆن بەکار دێت.",
            question: "AI کورتکراوەی چییە؟",
            options: ["Advanced Internet", "Artificial Intelligence", "Applied Innovation"],
            answer: "Artificial Intelligence",
            explanation: "AI کورتکراوەی Artificial Intelligence ـە؛ بە کوردی: زیرەکی دەستکرد."
          },
          {
            title: "بەشی دووەم: پاراستنی زانیاری",
            detail: "بە ئاسانی هەڵچوون و کرانەوەی زانیاریی مەبەستدار لە دڵنیاکردنەوەدا بزانە.",
            question: "Why should you protect your data?",
            options: ["Because it is boring", "Because privacy matters", "Because everyone wants less data"],
            answer: "Because privacy matters",
            explanation: "پاراستنی زانیاری وایە کە مەبەستەکانی خۆت و هەستیارانیت بپارێزێت."
          }
        ],
        color: "#fff1d6"
      }
    ]
  },
  en: {
    appName: "Kurd AI Academy",
    heroEyebrow: "Learn today. Build tomorrow.",
    heroTitle: "Learn, grow, and build your future.",
    heroText:
      "Our learning paths help you build practical skills in language, digital literacy, and AI literacy for real-world opportunities.",
    heroPrimary: "Start learning",
    heroSecondary: "See roadmap",
    pillOne: "Beginner friendly",
    pillTwo: "Free access",
    pillThree: "Practical skills",
    panelLabel: "Learning journey",
    miniStatOne: "3",
    miniTextOne: "Paths",
    miniStatTwo: "12+",
    miniTextTwo: "Activities",
    statOne: "Practical learning",
    statTwo: "Flexible study",
    statThree: "Languages",
    coursesKicker: "Learning paths",
    coursesTitle: "Choose a path that matches your goal",
    roadmapKicker: "How it works",
    roadmapTitle: "A simple learning cycle",
    stepOneTitle: "Choose a skill",
    stepOneText: "Pick the path that feels most useful for your future.",
    stepTwoTitle: "Study and practice",
    stepTwoText: "Review short lessons and complete guided exercises.",
    stepThreeTitle: "Track progress",
    stepThreeText: "Measure what you learned and keep going with confidence.",
    aboutKicker: "Mission",
    aboutTitle: "Learning should be accessible to everyone.",
    aboutText:
      "Kurd AI Academy helps people build skills in language, digital literacy, and AI literacy so they can grow confidence and create new opportunities.",
    footerText: "Access, skills, and opportunity for all.",
    footerNote: "Prototype for learning and demonstration",
    languageLabel: "Language",
    courses: [
      {
        id: "languages",
        title: "Languages & communication",
        description: "Build confidence in everyday communication and useful vocabulary for work and life.",
        level: "Beginner",
        lessons: 3,
        icon: "🗣️",
        objective: "Learn practical phrases for communication and conversation.",
        modules: [
          {
            title: "Module 1: Greetings",
            detail: "Practice common greetings to use confidently in daily life.",
            question: "What does Hello mean?",
            options: ["Goodbye", "Hello", "Thanks"],
            answer: "Hello",
            explanation: "Hello means 'hi' or 'greeting someone politely.'"
          },
          {
            title: "Module 2: Polite requests",
            detail: "Use polite phrases in real-life situations.",
            question: "What does Please mean?",
            options: ["Please", "Later", "Now"],
            answer: "Please",
            explanation: "Please is used to make a request sound polite."
          }
        ],
        color: "#dff3ff"
      },
      {
        id: "translation",
        title: "Translation & writing",
        description: "Understand how meaning moves between languages and how to write more clearly.",
        level: "Intermediate",
        lessons: 3,
        icon: "✍️",
        objective: "Strengthen writing clarity and basic translation habits.",
        modules: [
          {
            title: "Module 1: Meaning transfer",
            detail: "Learn how language carries meaning from one context to another.",
            question: "What does Translation mean?",
            options: ["Reading", "Translation", "Listening"],
            answer: "Translation",
            explanation: "Translation is the process of expressing meaning from one language into another."
          },
          {
            title: "Module 2: Clear writing",
            detail: "Use simple sentences and clear structure when writing.",
            question: "Clear writing means:",
            options: ["No structure at all", "Readable and purposeful writing", "Longer words"],
            answer: "Readable and purposeful writing",
            explanation: "Clear writing is easy to understand and communicates the main idea effectively."
          }
        ],
        color: "#eaf7ef"
      },
      {
        id: "ai",
        title: "AI & digital skills",
        description: "Explore AI basics, digital tools, and responsible technology use.",
        level: "Progressing",
        lessons: 4,
        icon: "🤖",
        objective: "Understand digital workflows and use AI responsibly.",
        modules: [
          {
            title: "Module 1: AI basics",
            detail: "Understand what AI is and where it is used.",
            question: "What does AI stand for?",
            options: ["Advanced Internet", "Artificial Intelligence", "Applied Innovation"],
            answer: "Artificial Intelligence",
            explanation: "AI stands for Artificial Intelligence, the ability of systems to perform tasks that normally require human intelligence."
          },
          {
            title: "Module 2: Privacy",
            detail: "Learn why personal data protection matters online.",
            question: "Why should you protect your data?",
            options: ["Because it is boring", "Because privacy matters", "Because everyone wants less data"],
            answer: "Because privacy matters",
            explanation: "Protecting data helps keep your personal information secure and reduces risks."
          }
        ],
        color: "#fff1d6"
      }
    ]
  },
  ar: {
    appName: "Kurd AI Academy",
    heroEyebrow: "تعلّم اليوم. وابن الغد.",
    heroTitle: "تعلّم، تطوّر، وابن مستقبلك.",
    heroText:
      "تساعدك مساراتنا التعليمية على تطوير مهارات عملية في اللغة، المهارات الرقمية، والذكاء الاصطناعي.",
    heroPrimary: "ابدأ التعلم",
    heroSecondary: "اطّلع على المسار",
    pillOne: "مناسب للمبتدئين",
    pillTwo: "وصول مجاني",
    pillThree: "مهارات عملية",
    panelLabel: "رحلة التعلم",
    miniStatOne: "3",
    miniTextOne: "مسارات",
    miniStatTwo: "12+",
    miniTextTwo: "نشاطات",
    statOne: "تعلم عملي",
    statTwo: "دراسة مرنة",
    statThree: "اللغات",
    coursesKicker: "مسارات التعلم",
    coursesTitle: "اختر مساراً يناسب هدفك",
    roadmapKicker: "كيف يعمل؟",
    roadmapTitle: "دورة تعلم بسيطة",
    stepOneTitle: "اختر مهارة",
    stepOneText: "اختر المسار الأكثر فائدة لمستقبلك.",
    stepTwoTitle: "تعلّم ومارس",
    stepTwoText: "اقرأ دروساً قصيرة وأكمل تمارين موجهة.",
    stepThreeTitle: "تابع التقدم",
    stepThreeText: "قيّم ما تعلمته واستمر بثقة.",
    aboutKicker: "رسالة",
    aboutTitle: "يجب أن يكون التعلم متاحاً للجميع.",
    aboutText:
      "Kurd AI Academy يساعد الناس على اكتساب مهارات اللغة، المهارات الرقمية، والذكاء الاصطناعي لزيادة الثقة وبناء فرص جديدة.",
    footerText: "الوصول والمهارات والفرص للجميع.",
    footerNote: "نموذج للتعلم والعرض",
    languageLabel: "اللغة",
    courses: [
      {
        id: "languages",
        title: "اللغة والتواصل",
        description: "طور الثقة في التواصل اليومي واستخدم مفردات عملية لحياتك وعملك.",
        level: "مبتدئ",
        lessons: 3,
        icon: "🗣️",
        objective: "تعلم عبارات عملية للتواصل اليومي.",
        modules: [
          {
            title: "الوحدة 1: التحية",
            detail: "تعلّم التحية الشائعة لاستخدامها بثقة في الحياة اليومية.",
            question: "ما معنى Hello؟",
            options: ["وداعاً", "مرحباً", "شكراً"],
            answer: "مرحباً",
            explanation: "Hello تعني 'مرحباً' وتستخدم عند اللقاء."
          },
          {
            title: "الوحدة 2: الطلب المهذب",
            detail: "استخدم عبارات مهذبة في المواقف الحياتية.",
            question: "ما معنى Please؟",
            options: ["تمنيت", "من فضلك", "الآن"],
            answer: "من فضلك",
            explanation: "Please تعني 'من فضلك' وهي تستخدم لجعل الطلب أكثر أدباً."
          }
        ],
        color: "#dff3ff"
      },
      {
        id: "translation",
        title: "الترجمة والكتابة",
        description: "فهم كيفية انتقال المعنى بين اللغات وكتابة أكثر وضوحاً.",
        level: "متوسط",
        lessons: 3,
        icon: "✍️",
        objective: "تعزيز وضوح الكتابة والمهارات الأساسية للترجمة.",
        modules: [
          {
            title: "الوحدة 1: نقل المعنى",
            detail: "اكتشف كيف تنتقل المعاني بين اللغات.",
            question: "ما معنى Translation؟",
            options: ["القراءة", "الترجمة", "الاستماع"],
            answer: "الترجمة",
            explanation: "Translation تعني الترجمة، أي نقل المعنى من لغة إلى أخرى."
          },
          {
            title: "الوحدة 2: الكتابة الواضحة",
            detail: "استخدم جمل بسيطة وبنية واضحة.",
            question: "الكتابة الواضحة تعني:",
            options: ["لا هيكل في النص", "كتابة واضحة ومقصودة", "كلمات أطول"],
            answer: "كتابة واضحة ومقصودة",
            explanation: "الكتابة الواضحة سهلة الفهم وتوصل الفكرة الأساسية بوضوح."
          }
        ],
        color: "#eaf7ef"
      },
      {
        id: "ai",
        title: "الذكاء الاصطناعي والمهارات الرقمية",
        description: "تعرف على أساسيات الذكاء الاصطناعي والأدوات الرقمية والاستخدام المسؤول للتقنية.",
        level: "مستمر",
        lessons: 4,
        icon: "🤖",
        objective: "فهم سير العمل الرقمي واستخدام الذكاء الاصطناعي بمسؤولية.",
        modules: [
          {
            title: "الوحدة 1: أساسيات الذكاء الاصطناعي",
            detail: "تعرّف على ما هو الذكاء الاصطناعي وأين يُستخدم.",
            question: "ما معنى AI؟",
            options: ["الإنترنت المتقدم", "الذكاء الاصطناعي", "الابتكار التطبيقي"],
            answer: "الذكاء الاصطناعي",
            explanation: "AI اختصار Artificial Intelligence، أي الذكاء الاصطناعي."
          },
          {
            title: "الوحدة 2: الخصوصية",
            detail: "ماذا يعني حماية بياناتك الشخصية؟",
            question: "لماذا يجب حماية بياناتك؟",
            options: ["لأنها مملة", "لأن الخصوصية مهمة", "لأن الجميع يريد بيانات أقل"],
            answer: "لأن الخصوصية مهمة",
            explanation: "حماية البيانات تساعد في حماية معلوماتك الشخصية وتقليل المخاطر."
          }
        ],
        color: "#fff1d6"
      }
    ]
  },
  tr: {
    appName: "Kurd AI Academy",
    heroEyebrow: "Bugün öğren. Yarını inşa et.",
    heroTitle: "Öğren, geliş, geleceğini kur.",
    heroText:
      "Öğrenme yollarımız dil, dijital okuryazarlık ve yapay zekâ alanlarında pratik beceriler geliştirmenize yardımcı olur.",
    heroPrimary: "Öğrenmeye başla",
    heroSecondary: "Yolu gör",
    pillOne: "Yeni başlayanlara uygun",
    pillTwo: "Ücretsiz erişim",
    pillThree: "Uygulamalı beceriler",
    panelLabel: "Öğrenme yolculuğu",
    miniStatOne: "3",
    miniTextOne: "Yol",
    miniStatTwo: "12+",
    miniTextTwo: "Etkinlik",
    statOne: "Uygulamalı öğrenme",
    statTwo: "Esnek çalışma",
    statThree: "Diller",
    coursesKicker: "Öğrenme yolları",
    coursesTitle: "Hedefinize uygun bir yol seçin",
    roadmapKicker: "Nasıl çalışır",
    roadmapTitle: "Basit bir öğrenme döngüsü",
    stepOneTitle: "Bir beceri seç",
    stepOneText: "Geleceğin için en faydalı yolu belirle.",
    stepTwoTitle: "Öğren ve uygula",
    stepTwoText: "Kısa dersleri oku ve yönlendirilmiş egzersizleri tamamla.",
    stepThreeTitle: "İlerlemeni takip et",
    stepThreeText: "Ne öğrendiğini ölç ve güvenle ilerlemeye devam et.",
    aboutKicker: "Misyon",
    aboutTitle: "Öğrenme herkes için erişilebilir olmalı.",
    aboutText:
      "Kurd AI Academy, insanların dil, dijital beceriler ve yapay zekâ alanında güven kazanmasına ve yeni fırsatlar yaratmasına yardımcı olur.",
    footerText: "Herkes için erişim, beceri ve fırsat.",
    footerNote: "Öğrenme ve gösterim prototipi",
    languageLabel: "Dil",
    courses: [
      {
        id: "languages",
        title: "Dil ve iletişim",
        description: "Günlük iletişim ve iş hayatı için faydalı kelimeleri öğren.",
        level: "Başlangıç",
        lessons: 3,
        icon: "🗣️",
        objective: "Günlük konuşmalarda kullanılacak pratik ifadeleri öğren.",
        modules: [
          {
            title: "Modül 1: Selamlaşma",
            detail: "Günlük hayatta güvenle kullanabileceğin selamlaşma ifadelerini öğren.",
            question: "Hello ne demektir?",
            options: ["Hoşça kal", "Merhaba", "Teşekkürler"],
            answer: "Merhaba",
            explanation: "Hello, selamlaşmada kullanılan bir İngilizce kelimedir."
          },
          {
            title: "Modül 2: Nazik istek",
            detail: "Gerçek hayatta nazik sözler kullanmayı öğren.",
            question: "Please ne demektir?",
            options: ["Lütfen", "Sonra", "Şimdi"],
            answer: "Lütfen",
            explanation: "Please, bir isteği nazik biçimde ifade etmek için kullanılır."
          }
        ],
        color: "#dff3ff"
      },
      {
        id: "translation",
        title: "Çeviri ve yazma",
        description: "Diller arasında anlam aktarımını ve daha net yazmayı öğren.",
        level: "Orta seviye",
        lessons: 3,
        icon: "✍️",
        objective: "Yazı netliğini ve temel çeviri becerilerini güçlendir.",
        modules: [
          {
            title: "Modül 1: Anlam aktarımı",
            detail: "Anlamın diller arasında nasıl aktarıldığını öğren.",
            question: "Translation ne demektir?",
            options: ["Okuma", "Çeviri", "Dinleme"],
            answer: "Çeviri",
            explanation: "Translation, bir dildeki anlamın başka bir dile aktarılmasıdır."
          },
          {
            title: "Modül 2: Net yazım",
            detail: "Basit cümleler ve net yapılar kullan.",
            question: "Net yazım demek:",
            options: ["Yapı olmayan metin", "Okunabilir ve amaçlı yazım", "Daha uzun kelimeler"],
            answer: "Okunabilir ve amaçlı yazım",
            explanation: "Net yazım, okuyucunun anlamayı kolaylaştıran ve ana fikri açıkça aktaran yazıdır."
          }
        ],
        color: "#eaf7ef"
      },
      {
        id: "ai",
        title: "Yapay zekâ ve dijital beceriler",
        description: "Yapay zekâ, dijital araçlar ve sorumlu teknoloji kullanımını öğren.",
        level: "İlerleyen",
        lessons: 4,
        icon: "🤖",
        objective: "Dijital iş akışlarını anlamak ve AI'ı bilinçli kullanmak.",
        modules: [
          {
            title: "Modül 1: AI temelleri",
            detail: "AI'ın ne olduğunu ve nerede kullanıldığını öğren.",
            question: "AI neyin kısaltmasıdır?",
            options: ["Advanced Internet", "Artificial Intelligence", "Applied Innovation"],
            answer: "Artificial Intelligence",
            explanation: "AI, Artificial Intelligence ifadesinin kısaltmasıdır; yani yapay zekâ."
          },
          {
            title: "Modül 2: Gizlilik",
            detail: "Kişisel verilerin neden korunması gerektiğini öğren.",
            question: "Verilerini neden korumalısın?",
            options: ["Çünkü sıkıcı", "Çünkü gizlilik önemlidir", "Çünkü herkes daha az veri istiyor"],
            answer: "Çünkü gizlilik önemlidir",
            explanation: "Verilerini korumak kişisel bilgilerini güvence altına alır ve riskleri azaltır."
          }
        ],
        color: "#fff1d6"
      }
    ]
  }
};

const state = {
  language: "ku",
  activeCourseId: null,
  completedCourses: []
};

const refs = {
  languageSelect: document.querySelector("#languageSelect"),
  courseGrid: document.querySelector("#courseGrid"),
  courseDetail: document.querySelector("#courseDetail"),
  heroEyebrow: document.querySelector("#heroEyebrow"),
  heroTitle: document.querySelector("#heroTitle"),
  heroText: document.querySelector("#heroText"),
  heroBtnPrimary: document.querySelector("#heroBtnPrimary"),
  heroBtnSecondary: document.querySelector("#heroBtnSecondary"),
  pillOne: document.querySelector("#pillOne"),
  pillTwo: document.querySelector("#pillTwo"),
  pillThree: document.querySelector("#pillThree"),
  panelLabel: document.querySelector("#panelLabel"),
  miniStatOne: document.querySelector("#miniStatOne"),
  miniTextOne: document.querySelector("#miniTextOne"),
  miniStatTwo: document.querySelector("#miniStatTwo"),
  miniTextTwo: document.querySelector("#miniTextTwo"),
  statOne: document.querySelector("#statOne"),
  statTwo: document.querySelector("#statTwo"),
  statThree: document.querySelector("#statThree"),
  coursesKicker: document.querySelector("#coursesKicker"),
  coursesTitle: document.querySelector("#coursesTitle"),
  roadmapKicker: document.querySelector("#roadmapKicker"),
  roadmapTitle: document.querySelector("#roadmapTitle"),
  stepOneTitle: document.querySelector("#stepOneTitle"),
  stepOneText: document.querySelector("#stepOneText"),
  stepTwoTitle: document.querySelector("#stepTwoTitle"),
  stepTwoText: document.querySelector("#stepTwoText"),
  stepThreeTitle: document.querySelector("#stepThreeTitle"),
  stepThreeText: document.querySelector("#stepThreeText"),
  aboutKicker: document.querySelector("#aboutKicker"),
  aboutTitle: document.querySelector("#aboutTitle"),
  aboutText: document.querySelector("#aboutText"),
  footerText: document.querySelector("#footerText"),
  footerNote: document.querySelector("#footerNote")
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    state.completedCourses = Array.isArray(saved.completedCourses) ? saved.completedCourses : [];
    state.language = saved.language || "ku";
  } catch {
    state.completedCourses = [];
    state.language = "ku";
  }
}

function saveProgress() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      completedCourses: state.completedCourses,
      language: state.language
    })
  );
}

function getActiveCourse() {
  const langData = appData[state.language];
  return langData.courses.find((course) => course.id === state.activeCourseId) || langData.courses[0];
}

function setLanguage(lang) {
  state.language = lang;
  refs.languageSelect.value = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ku" || lang === "ar" ? "rtl" : "ltr";
  render();
  saveProgress();
}

function renderTranslations() {
  const t = appData[state.language];

  refs.heroEyebrow.textContent = t.heroEyebrow;
  refs.heroTitle.textContent = t.heroTitle;
  refs.heroText.textContent = t.heroText;
  refs.heroBtnPrimary.textContent = t.heroPrimary;
  refs.heroBtnSecondary.textContent = t.heroSecondary;
  refs.pillOne.textContent = t.pillOne;
  refs.pillTwo.textContent = t.pillTwo;
  refs.pillThree.textContent = t.pillThree;
  refs.panelLabel.textContent = t.panelLabel;
  refs.miniStatOne.textContent = t.miniStatOne;
  refs.miniTextOne.textContent = t.miniTextOne;
  refs.miniStatTwo.textContent = t.miniStatTwo;
  refs.miniTextTwo.textContent = t.miniTextTwo;
  refs.statOne.textContent = t.statOne;
  refs.statTwo.textContent = t.statTwo;
  refs.statThree.textContent = t.statThree;
  refs.coursesKicker.textContent = t.coursesKicker;
  refs.coursesTitle.textContent = t.coursesTitle;
  refs.roadmapKicker.textContent = t.roadmapKicker;
  refs.roadmapTitle.textContent = t.roadmapTitle;
  refs.stepOneTitle.textContent = t.stepOneTitle;
  refs.stepOneText.textContent = t.stepOneText;
  refs.stepTwoTitle.textContent = t.stepTwoTitle;
  refs.stepTwoText.textContent = t.stepTwoText;
  refs.stepThreeTitle.textContent = t.stepThreeTitle;
  refs.stepThreeText.textContent = t.stepThreeText;
  refs.aboutKicker.textContent = t.aboutKicker;
  refs.aboutTitle.textContent = t.aboutTitle;
  refs.aboutText.textContent = t.aboutText;
  refs.footerText.textContent = t.footerText;
  refs.footerNote.textContent = t.footerNote;
}

function renderCourses() {
  const t = appData[state.language];
  refs.courseGrid.innerHTML = "";

  t.courses.forEach((course) => {
    const card = document.createElement("article");
    card.className = "course-card" + (state.completedCourses.includes(course.id) ? " completed" : "");

    const icon = document.createElement("div");
    icon.className = "course-icon";
    icon.textContent = course.icon;

    const title = document.createElement("h3");
    title.textContent = course.title;

    const meta = document.createElement("div");
    meta.className = "course-meta";
    meta.innerHTML = `
      <span>${course.lessons} lessons</span>
      <span class="level">${course.level}</span>
    `;

    const description = document.createElement("p");
    description.textContent = course.description;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = state.completedCourses.includes(course.id) ? "Review" : "Start";
    button.addEventListener("click", () => {
      state.activeCourseId = course.id;
      renderDetail();
      document.querySelector("#courseDetail").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    card.append(icon, title, meta, description, button);
    refs.courseGrid.appendChild(card);
  });
}

function renderDetail() {
  const course = getActiveCourse();
  const t = appData[state.language];
  const completed = state.completedCourses.includes(course.id);
  const progress = completed ? 100 : 25;

  let lessonMarkup = "";
  course.modules.forEach((module, index) => {
    lessonMarkup += `
      <div class="lesson-item">
        <strong>${index + 1}. ${module.title}</strong>
        <p>${module.detail}</p>
      </div>
    `;
  });

  const quizMarkup = `
    <div class="quiz-box">
      <h4>${course.modules[0].question}</h4>
      <div class="option-list">
        ${course.modules[0].options
          .map(
            (option, idx) => `
              <label class="option-item">
                <input type="radio" name="quiz-option" value="${option}" />
                <span>${option}</span>
              </label>
            `
          )
          .join("")}
      </div>
      <div class="quiz-actions">
        <button type="button" class="quiz-btn" id="checkAnswerBtn">Check answer</button>
        <button type="button" class="module-button" id="markCourseBtn">Mark complete</button>
      </div>
      <div id="feedback" class="feedback"></div>
    </div>
  `;

  refs.courseDetail.innerHTML = `
    <div class="detail-header">
      <div class="detail-title-wrap">
        <span class="kicker">${course.level}</span>
        <h3>${course.title}</h3>
        <p>${course.objective}</p>
      </div>

      <div class="progress-box">
        <div class="progress-meta">
          <span>${completed ? "Completed" : "Progress"}</span>
          <strong>${progress}%</strong>
        </div>
        <div class="progress-bar"><span style="width:${progress}%"></span></div>
      </div>
    </div>

    <div class="detail-body">
      <div class="lesson-list">${lessonMarkup}</div>
      <div>${quizMarkup}</div>
    </div>
  `;

  const feedbackEl = document.querySelector("#feedback");
  const checkButton = document.querySelector("#checkAnswerBtn");
  const markButton = document.querySelector("#markCourseBtn");

  checkButton.textContent = t.heroPrimary === "دەست پێبکە" ? "پشکنین" : t.heroPrimary === "ابدأ التعلم" ? "تحقق" : t.heroPrimary === "Öğrenmeye başla" ? "Kontrol et" : "Check answer";
  markButton.textContent = t.stepThreeTitle === "پێشکەوتن بەدوادا بکە" ? "تەواوکردنی کۆرس" : t.stepThreeTitle === "تابع التقدم" ? "إكمال المسار" : t.stepThreeTitle === "İlerlemeni takip et" ? "Kursu bitir" : "Mark complete";

  checkButton.addEventListener("click", () => {
    const selected = document.querySelector('input[name="quiz-option"]:checked');
    const message = selected && selected.value === course.modules[0].answer ? course.modules[0].explanation : "Try again.";

    feedbackEl.className = "feedback " + (selected && selected.value === course.modules[0].answer ? "success" : "error");
    feedbackEl.textContent = selected && selected.value === course.modules[0].answer ? message : "Incorrect answer. Please try again.";
  });

  markButton.addEventListener("click", () => {
    if (!state.completedCourses.includes(course.id)) {
      state.completedCourses.push(course.id);
    }
    saveProgress();
    render();
  });
}

function render() {
  renderTranslations();
  renderCourses();
  if (state.activeCourseId) {
    renderDetail();
  } else {
    const firstCourse = appData[state.language].courses[0];
    state.activeCourseId = firstCourse.id;
    renderDetail();
  }
}

refs.languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value);
});

loadProgress();
refs.languageSelect.value = state.language;
setLanguage(state.language);

