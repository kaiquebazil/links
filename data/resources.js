// js/data/resources.js
export const resourcesDatabase = {
  // Alfabeto: {
  //   videos: [
  //     {
  //       id: "Gs069dndIYk",
  //       title: "ABC Song | Learn ABC Alphabet for Children",
  //       duration: "2:15",
  //       channel: "ABC Kids TV",
  //     },
  //   ],
  //   materials: [
  //     "PDF: Alfabeto Ilustrado (link: https://example.com/alfabeto.pdf)",
  //     "Exercícios: Escrita do Alfabeto",
  //     "Quiz: Reconhecimento de Letras",
  //   ],
  // },
  // "Números (0-100)": {
  //   videos: [
  //     {
  //       id: "DR-cfDsHCGA",
  //       title: "Numbers 1-100 in English",
  //       duration: "4:30",
  //       channel: "Woodward English",
  //     },
  //     {
  //       id: "V9QBe0GfyDU",
  //       title: "Count to 100 Song",
  //       duration: "3:20",
  //       channel: "The Singing Walrus",
  //     },
  //   ],
  //   materials: [
  //     "Planilha: Números por Extenso",
  //     "Jogo: Bingo dos Números",
  //     "Áudio: Pronúncia dos Números",
  //   ],
  // },
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
