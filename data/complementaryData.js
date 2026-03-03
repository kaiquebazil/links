// js/data/complementaryData.js
export const complementaryMaterials = [
  // ATUALIZE A ESTRUTURA DA WEEK-0 NO complementaryData.js:
  {
    id: "week-0",
    title: "⚙️ Preparação e Configuração do Ambiente",
    type: "setup",
    icon: "tools",
    // Conteúdos diretos, sem subseções
    contents: [
      {
        id: "visao-geral",
        title: "🗺️ Visão Geral do Plano",
        description: "Entenda a estrutura dos 6 meses",
        type: "overview",
        difficulty: "recomendado",
        duration: "10 min",
        videos: [],
        materials: [
          "Mapa Mental dos 6 Meses",
          "Linha do Tempo de Aprendizado",
          "Checklist de Competências por Mês",
          "Calendário de Marcos Importantes",
        ],
        learning: [
          "Mês 1: Sobrevivência Conversacional",
          "Mês 2: Vida Cotidiana",
          "Mês 3: Passado e Experiências",
          "Mês 4: Opiniões e Sentimentos",
          "Mês 5: Tópicos Complexos",
          "Mês 6: Fluência Natural",
        ],
      },
      // Dentro do array contents do objeto com id "week-0", adicione este novo objeto:

{
  id: "modo-difuso-imersao",
  title: "🧠 Técnica de Imersão (Modo Difuso)",
  description: "Aprenda a fazer imersão no inglês mesmo sem tempo, usando seu 'tempo morto'",
  type: "tutorial",
  difficulty: "Essencial",
  duration: "8 min",
  videos: [
    {
      id: "LLZ3xU6tESo",
      title: "COMO FAZER IMERSÃO | Técnica de Imersão no Inglês para quem NÃO TEM TEMPO (Modo Difuso)",
      duration: "7:53", // Aproximado
      channel: "Kaique Bazil",
    }
  ],
  materials: [
    "Livro: Hábitos Atômicos - James Clear (link: https://www.amazon.com.br/Hábitos-Atômicos-James-Clear/dp/8550807563/)",
    "App: TV Garden (link: https://tv.garden/)",
    "App: Radio Garden (link: https://radio.garden/)",
    "Dica: Configurar celular e apps em inglês para imersão passiva.",
  ],
  learning: [
    "O que é o Modo Difuso: Contato com o inglês sem a pressão de entender tudo.",
    "Gestão de Tempo: Acumule até 2 horas de imersão diária usando intervalos de 15 minutos ('tempo morto').",
    "Criação de Hábitos: Use 'deixas' (gatilhos) para automatizar seus estudos (ex: 'depois do café, 15 min de rádio').",
    "Ferramentas: Utilize TV Garden e Radio Garden para ouvir inglês de qualquer lugar.",
    "Dica Prática: Mude o idioma do celular e apps para inglês.",
  ],
},
// Dentro do array contents do objeto com id "week-0", adicione este novo objeto após o conteúdo do Modo Difuso:

{
  id: "modo-focado-imersao",
  title: "🎯 Técnica de Imersão (Modo Focado)",
  description: "Aprenda a fazer imersão ativa e concentrada para acelerar seu aprendizado",
  type: "tutorial",
  difficulty: "Essencial",
  duration: "8-10 min",
  videos: [
    {
      id: "cswbKngQSgU",
      title: "COMO FAZER IMERSÃO NO INGLÊS do jeito certo (Modo Focado)",
      duration: "8:00", // Duração aproximada
      channel: "Kaique Bazil",
    }
  ],
  materials: [
    "Material de apoio para anotações durante o modo focado",
    "Fones de ouvido para melhor concentração",
    "Transcrições ou legendas (quando disponíveis)",
    "App Language Reactor para legendas duplas: (link: https://www.languagereactor.com/)",
    "Dica: Use timer Pomodoro (25 min foco / 5 min pausa)",
  ],
  learning: [
    "O que é o Modo Focado: Estudo ativo e concentrado sem distrações.",
    "Diferença entre Modo Focado x Modo Difuso: Quando usar cada um.",
    "Técnicas para manter a concentração durante a imersão ativa.",
    "Como usar legendas de forma estratégica no modo focado.",
    "Prática de shadowing (repetição em voz alta) para melhorar pronúncia.",
    "Anotação de vocabulário novo e expressões durante o estudo.",
    "Como combinar Modo Focado (manhã) e Modo Difuso (ao longo do dia).",
  ],
},
      {
        id: "config-anki",
        title: "🔧 Configuração Anki para aprendizado eficiente",
        description: "Configure o Anki passo a passo",
        type: "tutorial",
        difficulty: "essencial",
        duration: "25 min",
        videos: [
          {
            id: "ZfD0OL0ZluM",
            title: "Como Configurar o ANKI para Aprender Inglês e Não Esquecer Mais (Passo a Passo)",
            duration: "7:37",
            channel: "Kaique Bazil",
          },
        ],
        materials: [
          "Site Oficial para Download (PC/Mac/Linux): (link: https://apps.ankiweb.net/)",
          "App Android: (link: https://play.google.com/store/apps/details?id=com.ichi2.anki)",
          "App iOS: (link: https://apps.apple.com/us/app/ankimobile-flashcards/id373493387)",
          "AnkiWeb (Acesso Online): (link: https://ankiweb.net/)",
          "Criar Conta Gratuita: (link: https://ankiweb.net/account/register)",
          "Login na Conta: (link: https://ankiweb.net/account/login)",
          "Decks Compartilhados: (link: https://ankiweb.net/shared/decks/)",
          "Manual Oficial: (link: https://docs.ankiweb.net/)",
          "Extensões Usadas: 723520343, 1436550454",
        ],
        learning: [
          "Passo 1: Baixar e instalar o Anki no computador",
          "Passo 2: Criar conta gratuita no AnkiWeb",
          "Passo 3: Fazer login no app desktop com sua conta",
          "Passo 4: Instalar AnkiDroid (Android) ou AnkiMobile (iOS)",
          "Passo 5: Fazer login no app móvel para sincronizar",
          "Passo 6: Criar seu primeiro deck de inglês",
          "Passo 7: Adicionar cards diariamente e revisar todos os dias",
        ],
      },
      {
        id: "notion-config-ingles",
        title: "📝 Configuração do Notion para Aprender Inglês",
        description: "Organize seu vocabulário e frases de alta frequência",
        type: "tutorial",
        difficulty: "Recomendado",
        duration: "2 min",
        videos: [
          {
            id: "POPROUlBUCw",
            title: "COMO USAR O NOTION PARA APRENDER INGLÊS",
            duration: "02:11",
            channel: "Kaique Bazil",
          },
        ],
        materials: [
          "Conta Notion: (link: https://www.notion.so/)",
          "Aplicativo Notion (Desktop ou Mobile)",
          "Projeto Fluência Conversacional (Recursos Adicionais)",
          "Lista de Frases de Alta Frequência",
        ],
        learning: [
          "Criar página para Roleplays e Vida Real",
          "Separar conteúdo por categorias (Pessoal, Escola, Trabalho)",
          "Estruturar frases com inglês seguido de tradução",
          "Criar página de palavras esquecidas com frequência",
          "Desenvolver repertório e tendências linguísticas",
        ],
      },
      {
        id: "chatgpt-ingles-config",
        title: "🤖 Configuração do ChatGPT para Aprender Inglês",
        description: "Estratégias para usar IA como tutor pessoal",
        type: "tutorial",
        difficulty: "Recomendado",
        duration: "10 min",
        videos: [
          {
            id: "RezD4X6GxDE",
            title: "COMO APRENDER INGLÊS COM CHATGPT",
            duration: "10:23",
            channel: "Kaique Bazil",
          },
        ],
        materials: [
          "Conta no ChatGPT (Web ou Mobile)",
          "Teste de Nivelamento",
          "Anki (para repetição espaçada)",
          "Notion (para registro de Roleplays)",
        ],
        learning: [
          "Configurar Instruções Personalizadas",
          "Criar chat para depósito de frases naturais",
          "Desenvolver Roleplays baseados na vida real",
          "Praticar com o método Rapid Fire (Perguntas Rápidas)",
          "Integrar frases do ChatGPT com Anki e Notion",
          "instrucoes pessoais: Estou aprendendo inglês (nível intermediário/básico). Quero que você seja meu mentor nesta jornada. Fale sempre em inglês (se nível intermediário) de forma simples e fácil de entender. Tudo que eu enviar, mande a tradução em inglês logo abaixo.",
          "deposito de frases: Neste chat eu vou enviar frases a você em português e quero que você me traga a forma que é falada de forma natural em inglês, sempre com diversas variações e exemplos.",
          "criacao_roleplays: Este chat é para criação de roleplays personalizados baseados na minha vida real. Para cada assunto, traga as formas e variações de falar. As falas precisam ser em inglês com a tradução ao lado.",
          "rapid_fire: Quero criar um Rapid Fire com você de perguntas e respostas, onde você me faz perguntas e eu respondo da forma mais seca, rápida e direta possível em inglês.",
        ],
      },
    ],
    tips: [
      "Dedique 1-2 horas para configurar tudo corretamente antes de começar",
      "Faça um print das suas metas e coloque como wallpaper do celular",
      "Teste todas as ferramentas para garantir que funcionam",
      "Compartilhe suas metas com alguém para ter accountability",
      "Configure lembretes diários no seu calendário",
    ],
  },
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

  // Adicione este objeto após a "week-0" no arquivo complementaryData.js
  {
    id: "level-links",
    title: "🔗 Links Rápidos - Testes & Vocabulário",
    description: "Teste seu nível e aprenda o vocabulário essencial",
    type: "simple-links",
    links: {
      "🧪 Teste de Nivelamento": [
        {
          name: "Teste de Nivelamento - Projeto Fluente em 6 Meses",
          url: "../links/pages/test.html",
          description: "60 questões - Rápido e preciso",
        },
      ],
      "📚 Vocabulário Essencial": [
        {
          name: "Frases de Alta Frequência",
          url: "../links/pages/frequentes/frasesfrequentes.html",
          description: "Mais de 80 frases essenciais para comunicação diária",
        },
        {
          name: "100 Verbos Mais Frequentes",
          url: "../links/pages/frequentes/verbosfrequentes.html",
          description: "Be, have, do, say, get, make, go, know...",
        },
        {
          name: "100 Palavras Mais Frequentes",
          url: "../links/pages/frequentes/palavras.html",
          description: "Cobre 90% das conversas diárias",
        },
      ],
      "⚡ Ferramentas Rápidas": [
        {
          name: "AnkiWeb",
          url: "https://ankiweb.net",
          description: "Flashcards grátis",
        },
      ],
    },
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
  {
    id: "podcasts-recommended",
    title: "🎧 Podcasts Recomendados por Nível",
    description:
      "Playlists curatas de podcasts organizadas por nível (Beginner → Advanced) para imersão auditiva",
    type: "podcasts",
    levels: [
      {
        name: "🎬 Canais e Podcasts - Iniciante Absoluto",
        description:
          "Conteúdo focado em quem está dando os primeiros passos no idioma",
        color: "green",
        items: [
          {
            name: "Inglês do Zero",
            description:
              "Conteúdo focado em quem está dando os primeiros passos no idioma.",
            icon: "star",
            platform: "YouTube",
            frequency: "2x por semana",
            bestFor: "Primeiros 30 dias",
          },
          {
            name: "Curso Inglês Rapidão",
            description:
              "Focar nos episódios 1, 2, 4 e 5 (velocidade 0.6x/0.7x). Ideal para habituar o ouvido à pronúncia americana nativa.",
            icon: "zap",
            platform: "Spotify/Apple",
            frequency: "Diário",
            bestFor: "Treino auditivo inicial",
          },
          {
            name: "Inglês Básico Todos os Dias",
            description: "Prática diária de fundamentos para iniciantes.",
            icon: "calendar",
            platform: "YouTube",
            frequency: "Diário",
            bestFor: "Rotina consistente",
          },
          {
            name: "Fale Inglês Naturalmente",
            description:
              "Dicas iniciais para desenvolver uma fala fluida desde o começo.",
            icon: "message-circle",
            platform: "Spotify",
            frequency: "3x por semana",
            bestFor: "Confiança inicial",
          },
          {
            name: "Learn English Vocabulary",
            description:
              "Foque nos episódios com 'A1' ou 'A2' no título para um vocabulário compatível com o nível iniciante.",
            icon: "book-open",
            platform: "Apple Podcasts",
            frequency: "2x por semana",
            bestFor: "Expansão de vocabulário",
          },
        ],
      },
      {
        name: "🎧 Podcasts - Básico",
        description: "Para quem já entende o básico e quer expandir",
        color: "blue",
        items: [
          {
            name: "Basic English",
            description: "Estruturas fundamentais do idioma.",
            icon: "headphones",
            platform: "Spotify",
            frequency: "Diário",
          },
          {
            name: "Listening Time: English Practice",
            description: "Treino de escuta com fala clara e pausada.",
            icon: "ear",
            platform: "Apple Podcasts",
            frequency: "3x por semana",
          },
          {
            name: "Simple English News Daily",
            description: "Notícias do mundo explicadas em inglês simplificado.",
            icon: "globe",
            platform: "Spotify/Apple",
            frequency: "Diário",
          },
          {
            name: "Easy Stories in English",
            description: "Contos e histórias adaptadas para estudantes.",
            icon: "smile",
            platform: "Spotify",
            frequency: "1x por semana",
          },
          {
            name: "Speak English with Tiffani Podcast",
            description:
              "Dicas práticas e motivacionais para estudantes básicos.",
            icon: "video",
            platform: "YouTube",
            frequency: "2x por semana",
          },
          {
            name: "Happy English Podcast",
            description: "Explicações rápidas de gramática e expressões.",
            icon: "sun",
            platform: "Apple Podcasts",
            frequency: "2x por semana",
          },
          {
            name: "American English Podcast",
            description: "Cultura e pronúncia dos Estados Unidos.",
            icon: "flag",
            platform: "Spotify",
            frequency: "1x por semana",
          },
          {
            name: "Culips Everyday English Podcast",
            description: "Inglês usado em situações reais do dia a dia.",
            icon: "coffee",
            platform: "Spotify/Apple",
            frequency: "2x por semana",
          },
          {
            name: "Learn English with the British Council and Premier League",
            description: "Inglês britânico com temática de futebol e cultura.",
            icon: "target",
            platform: "Spotify",
            frequency: "1x por semana",
          },
          {
            name: "English Vocabulary Help",
            description: "Focado em expandir o repertório de palavras.",
            icon: "plus-circle",
            platform: "Apple Podcasts",
            frequency: "Diário",
          },
          {
            name: "Into the Story: Learn English with True Stories",
            description: "Aprendizado através de narrativas reais.",
            icon: "book",
            platform: "Spotify",
            frequency: "1x por semana",
          },
        ],
      },
      {
        name: "🎙️ Podcasts - Intermediário",
        description: "Para quem já consegue entender conversas básicas",
        color: "yellow",
        items: [
          {
            name: "RealLife English",
            description: "Inglês natural e confidente para o mundo real.",
            icon: "users",
            platform: "Spotify/YouTube",
            frequency: "2x por semana",
          },
          {
            name: "All Ears English Podcast",
            description:
              "Focado em 'Connection NOT Perfection' e expressões idiomáticas.",
            icon: "mic",
            platform: "Apple Podcasts",
            frequency: "Diário",
          },
          {
            name: "This American Life",
            description: "Narrativas jornalísticas profundas e envolventes.",
            icon: "map",
            platform: "Spotify/Apple",
            frequency: "1x por semana",
          },
          {
            name: "Crime Junkie",
            description: "Histórias de True Crime com vocabulário descritivo.",
            icon: "search",
            platform: "Spotify",
            frequency: "1x por semana",
          },
          {
            name: "The Moth",
            description: "Storytelling artístico e pessoal.",
            icon: "feather",
            platform: "Apple Podcasts",
            frequency: "1x por semana",
          },
          {
            name: "Hidden Brain",
            description: "Ciência e psicologia do comportamento humano.",
            icon: "activity",
            platform: "Spotify/Apple",
            frequency: "1x por semana",
          },
          {
            name: "Learn English | EnglishClass101.com",
            description:
              "Lições estruturadas para diversos tópicos intermediários.",
            icon: "layers",
            platform: "Site próprio",
            frequency: "Diário",
          },
          {
            name: "Luke's ENGLISH Podcast",
            description: "Inglês britânico autêntico com humor e insights.",
            icon: "award",
            platform: "Spotify/Apple",
            frequency: "1x por semana",
          },
          {
            name: "Speak Better English with Harry",
            description:
              "Foco em gramática avançada e vocabulário de negócios.",
            icon: "trending-up",
            platform: "YouTube",
            frequency: "2x por semana",
          },
          {
            name: "6 Minute English",
            description: "Pílulas de conhecimento da BBC Learning English.",
            icon: "clock",
            platform: "Spotify/Apple",
            frequency: "Diário",
          },
          {
            name: "Global News Podcast",
            description: "Notícias globais da BBC.",
            icon: "rss",
            platform: "Spotify/Apple",
            frequency: "Diário",
          },
          {
            name: "Business English Pod",
            description: "Focado exclusivamente no ambiente corporativo.",
            icon: "briefcase",
            platform: "Site próprio",
            frequency: "2x por semana",
          },
        ],
      },
      {
        name: "🔥 Podcasts - Avançado (Native Content)",
        description: "Conteúdo feito para nativos - imersão total",
        color: "red",
        items: [
          {
            name: "The Koe Cast",
            description: "Desenvolvimento pessoal e filosofia moderna.",
            icon: "cpu",
            platform: "Spotify/YouTube",
            frequency: "1x por semana",
          },
          {
            name: "Modern Wisdom",
            description: "Entrevistas sobre produtividade e biologia.",
            icon: "brain",
            platform: "Spotify/Apple",
            frequency: "3x por semana",
          },
          {
            name: "Huberman Lab",
            description: "Neurociência e protocolos de saúde.",
            icon: "microscope",
            platform: "Spotify/Apple",
            frequency: "1x por semana",
          },
          {
            name: "The Diary Of A CEO",
            description: "Histórias de sucesso e vulnerabilidade de líderes.",
            icon: "unlock",
            platform: "YouTube/Spotify",
            frequency: "2x por semana",
          },
          {
            name: "The Joe Rogan Experience",
            description: "Conversas longas sobre temas variados.",
            icon: "hash",
            platform: "Spotify",
            frequency: "3x por semana",
          },
          {
            name: "Lex Fridman Podcast",
            description: "Ciência, tecnologia e a natureza da inteligência.",
            icon: "terminal",
            platform: "Spotify/YouTube",
            frequency: "1x por semana",
          },
          {
            name: "The Game w/ Alex Hormozi",
            description: "Estratégias de negócios e empreendedorismo.",
            icon: "bar-chart",
            platform: "YouTube/Spotify",
            frequency: "2x por semana",
          },
          {
            name: "The Rich Roll Podcast",
            description: "Saúde, espiritualidade e ultra-performance.",
            icon: "heart",
            platform: "Apple/Spotify",
            frequency: "2x por semana",
          },
          {
            name: "Bedros Keuilian Podcast Show",
            description: "Liderança e mindset de negócios.",
            icon: "shield",
            platform: "YouTube/Spotify",
            frequency: "2x por semana",
          },
          {
            name: "Freakonomics Radio",
            description: "O lado oculto de tudo sob a ótica da economia.",
            icon: "pie-chart",
            platform: "Spotify/Apple",
            frequency: "1x por semana",
          },
          {
            name: "Planet Money",
            description: "Economia explicada de forma narrativa.",
            icon: "dollar-sign",
            platform: "Spotify/Apple",
            frequency: "3x por semana",
          },
          {
            name: "WSJ Tech News Briefing",
            description: "Atualizações rápidas sobre o mundo da tecnologia.",
            icon: "smartphone",
            platform: "Spotify/Apple",
            frequency: "Diário",
          },
          {
            name: "Modern Love",
            description: "Histórias reais sobre relacionamentos e sentimentos.",
            icon: "heart",
            platform: "Spotify/Apple",
            frequency: "1x por semana",
          },
          {
            name: "First Things THRST",
            description: "Podcast focado em fitness e lifestyle.",
            icon: "anchor",
            platform: "Apple Podcasts",
            frequency: "2x por semana",
          },
        ],
      },
    ],
    filters: [{ id: "all", name: "Todos", icon: "grid" }],
    platforms: {
      Spotify: "https://open.spotify.com",
      YouTube: "https://youtube.com",
      "Apple Podcasts": "https://podcasts.apple.com",
    },
    tips: [
      "Comece com 15 minutos diários e aumente gradualmente",
      "Use a função de velocidade reduzida (0.75x) se necessário",
      "Ouça ativamente - pause e repita frases que não entendeu",
      "Combine com a leitura das transcrições (quando disponíveis)",
      "Escute enquanto faz outras atividades (exercício, limpeza, transporte)",
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
];
