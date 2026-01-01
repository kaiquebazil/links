// js/data/resources.js
export const resourcesDatabase = {
  Alfabeto: {
    videos: [
      {
        id: "pGdos0z14aQ",
        title: "ALFABETO EM INGLÊS: Pronúncia completa e dicas | Meu vídeo",
        duration: "8:42",
        channel: "Kaique's Growth Journal",
      },
      {
        id: "ChqnN3cKzXQ",
        title:
          "ABC Phonics Chant for Children | Sounds and Actions from A to Z",
        duration: "4:22",
        channel: "Tora the Teacher",
      },
      {
        id: "ccEpTTZW34g",
        title: "The Alphabet Song | Learn The ABCs | Finny The Shark",
        duration: "1:29",
        channel: "Finny The Shark",
      },
    ],
    materials: [
      "Alfabeto: Site com Alfabeto e treinos de escuta e fala (link: https://www.languageguide.org/english/alphabet/)",
      "Jogo: Quiz do Alfabeto (link: https://www.educaplay.com/learning-resources/7802284-alphabet_game_3b.html)",
      "Jogo: Memory do Alfabeto (link: https://www.educaplay.com/learning-resources/23966277-alfhabet_quiz.html)",
      "Exercícios: Soletre seu Nome Completo, Nome de Familiares. Emails E Coisas do dia a dia.",
    ],
  },
  Números: {
    videos: [
      {
        id: "XD6n4vqVGFo",
        title:
          "Como Aprender os Números em Inglês: O Guia Definitivo ( DO 1 AO 1 TRILÃO)",
        duration: "5:44",
        channel: "Kaique's Growth Journal",
      },
      {
        id: "V9QBe0GfyDU",
        title: "Count to 100 Song",
        duration: "3:20",
        channel: "The Singing Walrus",
      },
    ],
    materials: [
      "Numeros: Site com Numeros e treinos de escuta e fala (link: https://www.languageguide.org/english/numbers/)",
      "Jogo:Palavras Cruzadas de Números (link: https://www.educaplay.com/learning-resources/9030866-numbers.html)",
      "Exercícios: escreva frases com a idade de seus familiares(Dominar de 1 a 100), frases de contas de casa e preços de produtos.",
    ],
  },
  // "Saudações básicas": {
  //   videos: [
  //     {
  //       id: "2Y0P5hT_5eQ",
  //       title: "Learn Basic English Greetings",
  //       duration: "5:10",
  //       channel: "English with Lucy",
  //     },
  //   ],
  //   materials: [
  //     "Diálogos: Situações Cotidianas",
  //     "Flashcards: Saudações Formais e Informais",
  //     "Exercício: Role-play de Apresentações",
  //   ],
  // },
  // "Apresentações pessoais": {
  //   videos: [
  //     {
  //       id: "F5tF5QwQj5M",
  //       title: "Introducing Yourself in English",
  //       duration: "6:15",
  //       channel: "mmmEnglish",
  //     },
  //   ],
  //   materials: [
  //     "Template: Frases para Autointrodução",
  //     "Exercício: Criar seu Perfil em Inglês",
  //     "Quiz: Perguntas Pessoais",
  //   ],
  // },
  // "Pronomes pessoais": {
  //   videos: [
  //     {
  //       id: "Z7zqR00gHnw",
  //       title: "Subject Pronouns | English Grammar",
  //       duration: "4:55",
  //       channel: "English Lessons with Adam",
  //     },
  //   ],
  //   materials: [
  //     "Tabela: Pronomes Pessoais",
  //     "Exercício: Substituição de Pronomes",
  //     "Jogo: Memory dos Pronomes",
  //   ],
  // },
  // "Verbo 'to be' (presente)": {
  //   videos: [
  //     {
  //       id: "5wvzgid7oeU",
  //       title: "The verb 'TO BE' - Present Simple",
  //       duration: "7:20",
  //       channel: "Easy English",
  //     },
  //   ],
  //   materials: [
  //     "PDF: Conjugação do Verbo To Be",
  //     "Exercício: Frases Afirmativas, Negativas e Interrogativas",
  //     "Quiz: Uso Correto do To Be",
  //   ],
  // },
  // Adicione todos os outros 137 conteúdos aqui...
  // Para não sobrecarregar, vou mostrar como adicionar mais:
  "Artigos (a, an, the)": {
    videos: [
      {
        id: "dG8aVpGUDdA",
        title: "A, AN, THE - Articles in English",
        duration: "6:30",
        channel: "English with Emma",
      },
    ],
    materials: [
      "Guia: Quando Usar A, An ou The",
      "Exercício: Preenchimento com Artigos",
      "Lista: Exceções e Casos Especiais",
    ],
  },
};

// Exportar recursos padrão para conteúdos não listados
export const defaultResources = {
  videos: [],
  materials: [
    "⚠️ Conteúdo em desenvolvimento",
    "Este tópico ainda não possui recursos disponíveis",
    "Volte em breve para atualizações",
  ],
};

export const getResources = (topic) => {
  return resourcesDatabase[topic] || defaultResources;
};
