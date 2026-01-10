// js/data/complementaryData.js
export const complementaryMaterials = [
  {
    id: "my-videos",
    title: "🎥 Meus Vídeos Recomendados",
    description:
      "Vídeos selecionados pessoalmente para complementar seu aprendizado.",
    type: "videos",
    videos: [
      {
        id: "5BBnXnwUiXQ",
        title: "Fluente em Inglês em 6 Meses | Meu Projeto Real",
        duration: "1:10",
        channel: "Kaique Bazil",
        description: "Vídeo introdutório do meu desafio",
      },
      {
        id: "DR-yMtXpzWjAlI",
        title: "AS 4 REGRAS DA FLUÊNCIA EM INGLÊS | Para Aprender Rápido",
        duration: "6:53",
        channel: "Kaique Bazil",
        description: "Regras essenciais para acelerar seu aprendizado",
      },
      {
        id: "NkRbxN5v0VQ",
        title:
          'Destrave sua FALA no INGLÊS: O guia prático para parar de "congelar"',
        duration: "7:30",
        channel: "Kaique Bazil",
        description: "Regras essenciais para acelerar seu aprendizado",
      },
    ],
    materials: [
      "Playlist completa: (link: https://www.youtube.com/playlist?list=PLTzvJzAFb2UzLfI71n9ebaV1AHqpwIOYH)",
    ],
  },
  {
    id: "resources-tools",
    title: "📱 Recursos & Aplicativos que Uso",
    description:
      "Ferramentas, aplicativos e recursos que uso/recomendo para acelerar o aprendizado",
    type: "tools",
    categories: [
      {
        name: "🗣️ Prática de Conversação",
        items: [
          {
            name: "HelloTalk",
            description: "Troca de idiomas com nativos",
            link: "https://www.hellotalk.com",
            icon: "comments",
            myReview: "Uso 2x por semana para conversas reais",
          },
          {
            name: "Tandem",
            description: "Comunidade de intercâmbio linguístico",
            link: "https://www.tandem.net",
            icon: "user-friends",
          },
          {
            name: "Preply/iTalki",
            description: "Aulas particulares com professores",
            link: "https://preply.com",
            icon: "graduation-cap",
            myReview: "Recomendo 1 aula por semana para correção direta",
          },
        ],
      },
      {
        name: "🎧 Aplicativos de Pronúncia",
        items: [
          {
            name: "Elsa Speak",
            description: "Correção de pronúncia com IA",
            link: "https://elsaspeak.com",
            icon: "microphone-alt",
            myReview:
              "Ótimo para identificar e corrigir erros específicos de pronúncia",
          },
          {
            name: "youglish",
            description: "Vídeos com legendas em inglês",
            link: "https://youglish.com",
            icon: "play-circle",
          },
          {
            name: "Sounds: The Pronunciation App",
            description: "Foco nos sons do inglês",
            link: "https://apps.apple.com/us/app/sounds-the-pronunciation-app/id493324438",
            icon: "volume-up",
          },
        ],
      },
      // {
      //   name: "📚 Aulas de Gramática",
      //   items: [
      //     {
      //       name: "English Grammar in Use (App)",
      //       description: "Exercícios interativos do livro clássico",
      //       link: "https://www.cambridge.org/grammarinuse",
      //       icon: "book",
      //       myReview: "O melhor para prática de gramática contextualizada",
      //     },
      //     {
      //       name: "Grammarly",
      //       description: "Corretor gramatical avançado",
      //       link: "https://www.grammarly.com",
      //       icon: "spell-check",
      //       myReview: "Uso diariamente para escrever emails e textos",
      //     },
      //     {
      //       name: "Canal: English with Lucy",
      //       description: "Gramática com explicações claras",
      //       link: "https://www.youtube.com/c/EnglishwithLucy",
      //       icon: "chalkboard-teacher",
      //       myReview: "Explicações visuais excelentes para regras complexas",
      //     },
      //   ],
      // },

      {
        name: "🧠 Memória & Vocabulário",
        items: [
          {
            name: "Anki",
            description: "Flashcards espaçados (gratuito)",
            link: "https://apps.ankiweb.net",
            icon: "layer-group",
            myReview: "Essencial para memorizar vocabulário novo",
          },
          {
            name: "Quizlet",
            description: "Flashcards com jogos",
            link: "https://quizlet.com",
            icon: "gamepad",
          },
        ],
      },
      {
        name: "🎬 Imersão",
        items: [
          {
            name: "Language Reactor (extensão Chrome)",
            description: "Legendagem dupla para Netflix/YouTube",
            link: "https://www.languagereactor.com",
            icon: "browser",
            myReview: "Revolucionou como assisto séries em inglês",
          },
          {
            name: "Video Speed Controller (extensão Chrome)",
            description: "Controle de velocidade de vídeos",
            link: "https://chromewebstore.google.com/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk?hl=en",
            icon: "browser",
            myReview: "Diminuir a velocidade. Ajuda na compreensão auditiva",
          },
          {
            name: "YouTube Focus Mode (extensão Chrome)",
            description: "Remover distrações do YouTube",
            link: "https://chromewebstore.google.com/detail/youtube-focus-mode/jedeklblgiihonnldgldeagmbkhlblek?hl=pt-br",
            icon: "browser",
            myReview: "Diminuir a velocidade. Ajuda na compreensão auditiva",
          },
          {
            name: "Radio Garden",
            description: "Rádios em inglês (WBEZ, KQED, WNYC, WCSD)",
            link: "https://radio.garden",
            icon: "headphones",
          },
          {
            name: "Tv Garden",
            description: "Tv em inglês",
            link: "https://tv.garden",
            icon: "tv",
          },
        ],
      },

      {
        name: "🎬 Canais e Podcasts - Absolute Beginner",
        items: [
          {
            name: "Inglês do Zero",
            description:
              "Conteúdo focado em quem está dando os primeiros passos no idioma.",
            icon: "star",
          },
          {
            name: "Curso Inglês Rapidão",
            description:
              "Focar nos episódios 1, 2, 4 e 5 (velocidade 0.6x/0.7x). Ideal para habituar o ouvido à pronúncia americana nativa.",
            icon: "zap",
          },
          {
            name: "Inglês Básico Todos os Dias",
            description: "Prática diária de fundamentos para iniciantes.",
            icon: "calendar",
          },
          {
            name: "Fale Inglês Naturalmente",
            description:
              "Dicas iniciais para desenvolver uma fala fluida desde o começo.",
            icon: "message-circle",
          },
          {
            name: "Learn English Vocabulary",
            description:
              "Foque nos episódios com 'A1' ou 'A2' no título para um vocabulário compatível com o nível iniciante.",
            icon: "book-open",
          },
        ],
      },
      {
        name: "🎬 Podcasts - Basic",
        items: [
          {
            name: "Basic English",
            description: "Estruturas fundamentais do idioma.",
            icon: "headphones",
          },
          {
            name: "Listening Time: English Practice",
            description: "Treino de escuta com fala clara e pausada.",
            icon: "ear",
          },
          {
            name: "Simple English News Daily",
            description: "Notícias do mundo explicadas em inglês simplificado.",
            icon: "globe",
          },
          {
            name: "Easy Stories in English",
            description: "Contos e histórias adaptadas para estudantes.",
            icon: "smile",
          },
          {
            name: "Speak English with Tiffani Podcast",
            description:
              "Dicas práticas e motivacionais para estudantes básicos.",
            icon: "video",
          },
          {
            name: "Happy English Podcast",
            description: "Explicações rápidas de gramática e expressões.",
            icon: "sun",
          },
          {
            name: "American English Podcast",
            description: "Cultura e pronúncia dos Estados Unidos.",
            icon: "flag",
          },
          {
            name: "Culips Everyday English Podcast",
            description: "Inglês usado em situações reais do dia a dia.",
            icon: "coffee",
          },
          {
            name: "Learn English with the British Council and Premier League",
            description: "Inglês britânico com temática de futebol e cultura.",
            icon: "target",
          },
          {
            name: "English Vocabulary Help",
            description: "Focado em expandir o repertório de palavras.",
            icon: "plus-circle",
          },
          {
            name: "Into the Story: Learn English with True Stories",
            description: "Aprendizado através de narrativas reais.",
            icon: "book",
          },
        ],
      },
      {
        name: "🎬 Podcasts - Intermediate",
        items: [
          {
            name: "RealLife English",
            description: "Inglês natural e confidente para o mundo real.",
            icon: "users",
          },
          {
            name: "All Ears English Podcast",
            description:
              "Focado em 'Connection NOT Perfection' e expressões idiomáticas.",
            icon: "mic",
          },
          {
            name: "This American Life",
            description: "Narrativas jornalísticas profundas e envolventes.",
            icon: "map",
          },
          {
            name: "Crime Junkie",
            description: "Histórias de True Crime com vocabulário descritivo.",
            icon: "search",
          },
          {
            name: "The Moth",
            description: "Storytelling artístico e pessoal.",
            icon: "feather",
          },
          {
            name: "Hidden Brain",
            description: "Ciência e psicologia do comportamento humano.",
            icon: "activity",
          },
          {
            name: "Learn English | EnglishClass101.com",
            description:
              "Lições estruturadas para diversos tópicos intermediários.",
            icon: "layers",
          },
          {
            name: "Luke's ENGLISH Podcast",
            description: "Inglês britânico autêntico com humor e insights.",
            icon: "award",
          },
          {
            name: "Speak Better English with Harry",
            description:
              "Foco em gramática avançada e vocabulário de negócios.",
            icon: "trending-up",
          },
          {
            name: "6 Minute English",
            description: "Pílulas de conhecimento da BBC Learning English.",
            icon: "clock",
          },
          {
            name: "Global News Podcast",
            description: "Notícias globais da BBC.",
            icon: "rss",
          },
          {
            name: "Business English Pod",
            description: "Focado exclusivamente no ambiente corporativo.",
            icon: "briefcase",
          },
        ],
      },
      {
        name: "🎬 Podcasts - Advanced (Native Content)",
        items: [
          {
            name: "The Koe Cast",
            description: "Desenvolvimento pessoal e filosofia moderna.",
            icon: "cpu",
          },
          {
            name: "Modern Wisdom",
            description: "Entrevistas sobre produtividade e biologia.",
            icon: "brain",
          },
          {
            name: "Huberman Lab",
            description: "Neurociência e protocolos de saúde.",
            icon: "microscope",
          },
          {
            name: "The Diary Of A CEO",
            description: "Histórias de sucesso e vulnerabilidade de líderes.",
            icon: "unlock",
          },
          {
            name: "The Joe Rogan Experience",
            description: "Conversas longas sobre temas variados.",
            icon: "hash",
          },
          {
            name: "Lex Fridman Podcast",
            description: "Ciência, tecnologia e a natureza da inteligência.",
            icon: "terminal",
          },
          {
            name: "The Game w/ Alex Hormozi",
            description: "Estratégias de negócios e empreendedorismo.",
            icon: "bar-chart",
          },
          {
            name: "The Rich Roll Podcast",
            description: "Saúde, espiritualidade e ultra-performance.",
            icon: "heart",
          },
          {
            name: "Bedros Keuilian Podcast Show",
            description: "Liderança e mindset de negócios.",
            icon: "shield",
          },
          {
            name: "Freakonomics Radio",
            description: "O lado oculto de tudo sob a ótica da economia.",
            icon: "pie-chart",
          },
          {
            name: "Planet Money",
            description: "Economia explicada de forma narrativa.",
            icon: "dollar-sign",
          },
          {
            name: "WSJ Tech News Briefing",
            description: "Atualizações rápidas sobre o mundo da tecnologia.",
            icon: "smartphone",
          },
          {
            name: "Modern Love",
            description: "Histórias reais sobre relacionamentos e sentimentos.",
            icon: "heart",
          },
          {
            name: "First Things THRST",
            description: "Podcast focado em fitness e lifestyle.",
            icon: "anchor",
          },
        ],
      },
      {
        name: "🎬 Canais Comprehensible input",
        items: [
          {
            name: "Comprehensible English",
            description:
              "Aulas focadas 100% em input compreensível divididas por níveis.",
            link: "https://www.youtube.com/@ComprehensibleEnglish",
            icon: "layers",
          },
          {
            name: "Learn English with TV Series",
            description:
              "Aprendizado de inglês através de clipes de filmes, séries e músicas.",
            link: "https://www.youtube.com/@LearnEnglishWithTVSeries",
            icon: "monitor",
          },
          {
            name: "TED-Ed",
            description:
              "Lições animadas sobre diversos temas com narração clara e profissional.",
            link: "https://www.youtube.com/@TEDEd",
            icon: "lightbulb",
          },
          {
            name: "English with Lucy",
            description:
              "Inglês britânico focado em pronúncia, vocabulário e cultura.",
            link: "https://www.youtube.com/@englishwithlucy",
            icon: "mic",
          },
          {
            name: "The School of Life",
            description:
              "Vídeos sobre psicologia e filosofia com dicção pausada e clara.",
            icon: "book",
            link: "https://www.youtube.com/@theschooloflifetv",
          },
        ],
      },
      // {
      //   name: "📝 Ferramentas de Escrita",
      //   items: [
      //     {
      //       name: "DeepL Write",
      //       description: "Reescreve textos de forma natural",
      //       link: "https://www.deepl.com/write",
      //       icon: "pen-fancy",
      //       myReview: "Melhor que o tradutor comum para frases complexas",
      //     },
      //     {
      //       name: "Hemingway Editor",
      //       description: "Simplifica escrita para clareza",
      //       link: "https://hemingwayapp.com",
      //       icon: "edit",
      //     },
      //     {
      //       name: "Notion",
      //       description: "Organização de estudos",
      //       link: "https://www.notion.so",
      //       icon: "sticky-note",
      //       myReview: "Uso para planejar semana de estudos",
      //     },
      //   ],
      // },
    ],
    tips: [
      "Combine 2-3 apps diferentes para cobrir todas as habilidades",
      "Use a função 'Lembretes Diários' dos apps",
      "Foque em QUALIDADE de uso, não quantidade de apps",
      "Desative notificações desnecessárias para evitar distrações",
    ],
  },
  // Adicione este objeto ao final do array complementaryMaterials em complementaryData.js
  // {
  //   id: "grammar-videos",
  //   title: "🎬 Vídeos de Gramática que Recomendo",
  //   description:
  //     "Playlists e vídeos específicos que uso para ensinar/aprender gramática de forma prática",
  //   type: "grammar-videos",
  //   playlists: [
  //     {
  //       name: "📚 Gramática Essencial para Iniciantes",
  //       creator: "Kaique Bazil (Meu canal)",
  //       description:
  //         "Série focada nas estruturas gramaticais mais importantes para começar",
  //       link: "https://www.youtube.com/playlist?list=...",
  //       videos: [
  //         {
  //           id: "abc123", // ID do YouTube
  //           title: "Verbo TO BE: Aprenda de uma vez por todas!",
  //           duration: "8:15",
  //           description:
  //             "Explicação prática do verbo mais importante do inglês",
  //           difficulty: "Iniciante",
  //           tags: ["verb-to-be", "básico", "essencial"],
  //         },
  //         {
  //           id: "def456",
  //           title: "Presente Simples: Como falar sobre rotina",
  //           duration: "10:30",
  //           description: "Domine o tempo verbal mais usado no dia a dia",
  //           difficulty: "Iniciante",
  //           tags: ["present-simple", "rotina", "habitos"],
  //         },
  //         {
  //           id: "ghi789",
  //           title: "Passado Simples: Conte histórias em inglês",
  //           duration: "12:45",
  //           description: "Aprenda a falar sobre experiências passadas",
  //           difficulty: "Intermediário",
  //           tags: ["past-simple", "histórias", "experiências"],
  //         },
  //       ],
  //     },
  //     {
  //       name: "🔍 Gramática Avançada e Nuances",
  //       creator: "English with Lucy",
  //       description: "Detalhes e exceções para quem quer dominar a gramática",
  //       link: "https://www.youtube.com/playlist?list=...",
  //       videos: [
  //         {
  //           id: "jkl012",
  //           title: "Conditionals: Todos os tipos explicados",
  //           duration: "15:20",
  //           description: "If clauses do zero ao terceiro condicional",
  //           difficulty: "Avançado",
  //           tags: ["conditionals", "if-clauses", "hipotéticos"],
  //         },
  //         {
  //           id: "mno345",
  //           title: "Phrasal Verbs: Os 50 mais usados",
  //           duration: "18:30",
  //           description: "Verbos frasais essenciais para fluência",
  //           difficulty: "Intermediário-Avançado",
  //           tags: ["phrasal-verbs", "expressões", "informal"],
  //         },
  //       ],
  //     },
  //     {
  //       name: "🎯 Gramática para Conversação",
  //       creator: "mmmEnglish",
  //       description: "Foque na gramática que realmente importa para falar",
  //       link: "https://www.youtube.com/playlist?list=...",
  //       videos: [
  //         {
  //           id: "pqr678",
  //           title: "Como fazer perguntas naturalmente",
  //           duration: "11:15",
  //           description: "Estruturas de pergunta para conversas reais",
  //           difficulty: "Intermediário",
  //           tags: ["perguntas", "conversação", "diálogo"],
  //         },
  //         {
  //           id: "stu901",
  //           title: "Contrações: Fale como um nativo",
  //           duration: "9:40",
  //           description: "I'm, don't, won't, etc. - use como nativos",
  //           difficulty: "Todos os níveis",
  //           tags: ["contractions", "pronúncia", "naturalidade"],
  //         },
  //       ],
  //     },
  //   ],

  //   // individualVideos: [
  //   //   {
  //   //     id: "vwx234",
  //   //     title: "🚀 Meu Método para Estudar Gramática",
  //   //     creator: "Kaique Bazil",
  //   //     duration: "14:25",
  //   //     description:
  //   //       "Como estudo gramática de forma eficiente (sem decorar regras)",
  //   //     whyRecommend: "Mostro minha abordagem prática em vez de teórica",
  //   //     difficulty: "Todos os níveis",
  //   //     tags: ["método", "estratégia", "eficiencia"],
  //   //   },
  //   //   {
  //   //     id: "yzab567",
  //   //     title: "Os 3 Erros de Gramática que Todo Brasileiro Comete",
  //   //     creator: "Small Advantage",
  //   //     duration: "13:10",
  //   //     description: "Erros comuns e como corrigi-los",
  //   //     whyRecommend: "Foco específico em problemas de falantes de português",
  //   //     difficulty: "Intermediário",
  //   //     tags: ["erros-comuns", "português-inglês", "correção"],
  //   //   },
  //   //   {
  //   //     id: "cdef890",
  //   //     title: "Gramática Visual: Aprenda com Diagramas",
  //   //     creator: "English Lessons with Adam",
  //   //     duration: "16:45",
  //   //     description: "Explicações visuais de estruturas complexas",
  //   //     whyRecommend: "Abordagem visual que facilita compreensão",
  //   //     difficulty: "Intermediário-Avançado",
  //   //     tags: ["visual", "diagramas", "estruturas-complexas"],
  //   //   },
  //   // ],
  //   studyTips: [
  //     "Assista o vídeo uma vez sem pausar para entender o contexto",
  //     "Assista novamente pausando para fazer anotações",
  //     "Pratique imediatamente criando suas próprias frases",
  //     "Reveja após 24h e 7 dias para consolidação",
  //   ],
  //   recommendationLevels: {
  //     beginner: ["📚 Gramática Essencial para Iniciantes"],
  //     intermediate: [
  //       "🎯 Gramática para Conversação",
  //       "individualVideos[0]",
  //       "individualVideos[1]",
  //     ],
  //     advanced: ["🔍 Gramática Avançada e Nuances", "individualVideos[2]"],
  //   },
  // },
  {
    id: "fluency-pillars",
    title: "🔥 OS 7 PILARES PARA FLUÊNCIA EM 6 MESES",
    description: "Princípios fundamentais baseados em evidências científicas",
    type: "rules",
    rules: [
      {
        icon: "water", // Imersão -> água
        title: "Imersão Inteligente (70/30)",
        description:
          "70% conteúdo compreensível + 30% desafio. Contexto > Tradução",
      },
      {
        icon: "microphone-alt", // Fala -> microfone
        title: "Fala Desde o Dia 1",
        description:
          "5 minutos falando > 1 hora estudando. Errar é obrigatório",
      },
      {
        icon: "book", // Vocabulário -> livro
        title: "Vocabulário Estratégico (2.000 palavras)",
        description:
          "Foco nas palavras que cobrem 90% das conversas cotidianas",
      },
      {
        icon: "cogs", // Gramática -> engrenagens
        title: "Gramática Funcional",
        description:
          "Aprender o que PRECISA para se expressar, não tudo que existe",
      },
      {
        icon: "volume-up", // Pronúncia -> volume
        title: "Pronúncia Compreensível",
        description:
          "Ser entendido, não ter sotaque perfeito. Foco em sons problemáticos",
      },
      {
        icon: "brain", // Mindset -> cérebro
        title: "Mindset de Fluência",
        description:
          "'Eu já consigo me comunicar com o que sei'. Progresso em comunicação, não perfeição",
      },
      {
        icon: "calendar-check", // Consistência -> calendário com check
        title: "Consistência > Intensidade",
        description:
          "30 minutos todos os dias é melhor que 5 horas só no sábado. Sistema > Meta",
      },
    ],
  },
  {
    id: "6month-roadmap",
    title: "🗓️ ROADMAP DE 180 DIAS PARA FLUÊNCIA",
    description: "Metas mensuráveis mês a mês",
    type: "timeline",
    months: [
      {
        month: "Mês 1",
        theme: "Sobrevivência Conversacional",
        goal: "Cumprimentar, pedir coisas, informações básicas",
        focus: "Frases prontas, pronúncia clara, 300 palavras",
        marker: "Consegue pedir um café sem hesitar",
      },
      {
        month: "Mês 2",
        theme: "Vida Cotidiana",
        goal: "Falar sobre rotina, família, trabalho, hobbies",
        focus: "Presente simples, vocabulário concreto, 700 palavras",
        marker: "Consegue contar como foi seu dia",
      },
      {
        month: "Mês 3",
        theme: "Passado e Experiências",
        goal: "Contar histórias, falar sobre viagens, infância",
        focus: "Passado simples, conectores de tempo, 1.200 palavras",
        marker: "Consegue dar sua opinião sobre um filme",
      },
      {
        month: "Mês 4",
        theme: "Opiniões e Sentimentos",
        goal: "Expressar o que pensa e sente",
        focus: "Adjetivos, estruturas de opinião, modal verbs, 1.600 palavras",
        marker: "Consegue contar uma história interessante",
      },
      {
        month: "Mês 5",
        theme: "Tópicos Complexos",
        goal: "Debater, argumentar, explicar conceitos",
        focus: "Vocabulário abstrato, estruturas complexas, 2.000 palavras",
        marker: "Consegue explicar seu trabalho/hobby em detalhes",
      },
      {
        month: "Mês 6",
        theme: "Fluência Natural",
        goal: "Pensar em inglês, improvisar, adaptar-se",
        focus: "Velocidade, naturalidade, filler words, 2.500+ palavras",
        marker: "Consegue falar 5 minutos sobre qualquer tema que domina",
      },
    ],
  },

  // {
  //   id: "daily-formula",
  //   title: "⚡ FÓRMULA DO SUCESSO DIÁRIO",
  //   description: "Estrutura otimizada para máximo resultado em mínimo tempo",
  //   type: "schedule",
  //   schedule: [
  //     {
  //       time: "30 minutos",
  //       activity: "Input Compreensível",
  //       examples: [
  //         "Vídeos com legenda EM INGLÊS",
  //         "Podcasts para aprendizes",
  //         "Séries que você já conhece",
  //       ],
  //     },
  //     {
  //       time: "30 minutos",
  //       activity: "Prática Ativa",
  //       examples: [
  //         "Falar sozinho sobre seu dia",
  //         "Gravações próprias",
  //         "Shadowing (repetir após nativos)",
  //       ],
  //     },
  //     {
  //       time: "30 minutos",
  //       activity: "Vocabulário + Gramática Funcional",
  //       examples: [
  //         "10 palavras novas no contexto",
  //         "1 estrutura gramatical aplicada",
  //         "Flashcards com frases",
  //       ],
  //     },
  //     {
  //       time: "30 minutos",
  //       activity: "Revisão + Aplicação",
  //       examples: [
  //         "Revisar erros da semana",
  //         "Usar o que aprendeu em conversa real",
  //         "Planejar aprendizado",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: "progress-markers",
  //   title: "✅ COMO MEDIR SEU PROGRESSO",
  //   description: "Sinais concretos de que está ficando fluente",
  //   type: "checkpoints",
  //   markers: [
  //     {
  //       stage: "Início (Dia 1-30)",
  //       signs: [
  //         "Consegue cumprimentar",
  //         "Entende instruções básicas",
  //         "Pede informações simples",
  //       ],
  //     },
  //     {
  //       stage: "Intermediário (Dia 31-90)",
  //       signs: [
  //         "Para de traduzir mentalmente frases simples",
  //         "Consegue contar uma história curta",
  //         "Entende piadas básicas",
  //       ],
  //     },
  //     {
  //       stage: "Avançando (Dia 91-150)",
  //       signs: [
  //         "Sonha em inglês ocasionalmente",
  //         "'Sente' quando uma frase soa errada",
  //         "Consegue explicar algo de outra forma",
  //       ],
  //     },
  //     {
  //       stage: "Fluência Emergente (Dia 151-180)",
  //       signs: [
  //         "Pensa diretamente em inglês para temas familiares",
  //         "Não tem medo de cometer erros",
  //         "Consegue acompanhar conversas entre nativos",
  //       ],
  //     },
  //   ],
  // },
  {
    id: "common-mistakes",
    title: "🚫 ERROS A EVITAR",
    description: "Armadilhas comuns que atrasam a fluência",
    type: "warnings",
    warnings: [
      {
        mistake: "Estudar gramática isoladamente",
        why: "O cérebro aprende linguagem em contexto, não regras",
        solution: "Aprender gramática através de frases e situações reais",
      },
      {
        mistake: "Tentar aprender todas as palavras",
        why: "2.000 palavras cobrem 90% das conversas. Foco no essencial",
        solution: "Vocabulário estratégico por prioridade",
      },
      {
        mistake: "Esperar estar 'pronto' para falar",
        why: "A fala desenvolve a fala. Não há preparação suficiente",
        solution: "Falar desde o primeiro dia, mesmo com erro",
      },
    ],
  },
  {
    id: "180day-challenge",
    title: "🎮 DESAFIO: FLUÊNCIA EM 180 DIAS",
    description: "Compromisso público com metas claras",
    type: "challenge",
    commitment:
      "Nos próximos 180 dias, dedicarei pelo menos 90 minutos diários para me tornar fluente em inglês. Aceito que vou cometer erros, que alguns dias serão difíceis, mas que no final conseguirei expressar qualquer ideia que tenha na minha cabeça.",
    rules: [
      "Falar em inglês todo dia, mesmo que sozinho (mínimo 5 minutos)",
      "Consumir conteúdo em inglês diariamente (mínimo 30 minutos)",
      "Aplicar o que aprendi imediatamente em contexto real",
      "Medir progresso por comunicação eficaz, não por perfeição gramatical",
      "Celebrar pequenas vitórias (cada conversa bem-sucedida conta)",
    ],
  },
  // {
  //   id: "fluency-manifesto",
  //   title: "📢 MANIFESTO: FLUÊNCIA EM 6 MESES É POSSÍVEL",
  //   description: "Princípios filosóficos do método",
  //   type: "manifesto",
  //   forWho: [
  //     "Quem entende que COMUNICAÇÃO > PERFEIÇÃO",
  //     "Quem está disposto a FALAR MESMO COM ERRO",
  //     "Quem aceita que ALGUNS DIAS SERÃO DIFÍCEIS",
  //     "Quem confia no PROCESSO mais que no TALENTO",
  //     "Quem quer RESULTADOS, não apenas conhecimento",
  //   ],
  //   thisIsNot: [
  //     "Um curso tradicional de inglês",
  //     "Focado em passar em provas",
  //     "Sobre memorizar regras gramaticais",
  //     "Para quem quer perfeição antes de praticar",
  //   ],
  //   thisIs: [
  //     "Um TREINAMENTO DE COMUNICAÇÃO",
  //     "Focado em USAR inglês na vida real",
  //     "Sobre desenvolver CONFIANÇA para se expressar",
  //     "Para quem quer RESULTADOS em tempo recorde",
  //   ],
  // },
  // {
  //   id: "finish-line",
  //   title: "🏁 DIA 180: O QUE VOCÊ CONSEGUIRÁ",
  //   description: "Habilidades concretas após 6 meses de método",
  //   type: "outcomes",
  //   willBeAbleTo: [
  //     "Iniciar e manter conversas sobre diversos temas",
  //     "Expressar opiniões, sentimentos e desejos claramente",
  //     "Contar histórias com começo, meio e fim",
  //     "Entender filmes/séries sem legendas (em grande parte)",
  //     "Pensar em inglês sem esforço consciente para temas familiares",
  //     "Adaptar sua linguagem para diferentes situações (formal/informal)",
  //     "Aprender novas palavras no contexto, sem tradução",
  //     "Recuperar-se quando cometer um erro (reformular, explicar de outra forma)",
  //   ],
  // },
  // {
  //   id: "first-step",
  //   title: "🎬 SEU PRIMEIRO PASSO (HOJE MESMO)",
  //   description: "Ações concretas para começar AGORA",
  //   type: "actionable",
  //   actions: [
  //     {
  //       action: "Grave um áudio de 30 segundos",
  //       instructions:
  //         "Pode ser lendo um texto simples ou falando sobre seu dia",
  //       purpose: "Marcador inicial - em 180 dias você comparará",
  //     },
  //     {
  //       action: "Assista um vídeo de 5 minutos",
  //       instructions: "Com legenda EM INGLÊS (não português)",
  //       purpose: "Exposição inicial a input compreensível",
  //     },
  //     {
  //       action: "Pratique 3 frases em voz alta",
  //       instructions:
  //         "Frases que você usaria hoje (ex: 'I'm learning English', 'Today is [day]', 'I like [something]')",
  //       purpose: "Fala desde o dia 1",
  //     },
  //   ],
  // },
];
