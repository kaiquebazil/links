// Dados para pesquisa
// const searchData = [
//   {
//     title: "Site Portfólio",
//     category: "projeto",
//     description: "Site pessoal desenvolvido com HTML, CSS e JavaScript",
//     keywords: ["portfolio", "site", "web", "html", "css", "javascript"],
//   },
//   {
//     title: "App To-Do",
//     category: "projeto",
//     description: "Aplicativo de tarefas com React Native",
//     keywords: ["app", "todo", "react native", "mobile", "tarefas"],
//   },
//   {
//     title: "Dashboard Analytics",
//     category: "projeto",
//     description: "Painel de análise de dados com Vue.js e Node.js",
//     keywords: ["dashboard", "analytics", "vue", "node", "dados"],
//   },
//   {
//     title: "GitHub",
//     category: "rede social",
//     description: "Perfil no GitHub com repositórios de projetos",
//     keywords: ["github", "repositorio", "codigo", "git", "projetos"],
//   },
//   {
//     title: "React",
//     category: "habilidade",
//     description: "Biblioteca JavaScript para construção de interfaces",
//     keywords: ["react", "frontend", "javascript", "ui", "interface"],
//   },
//   {
//     title: "TypeScript",
//     category: "habilidade",
//     description: "Linguagem que adiciona tipagem ao JavaScript",
//     keywords: ["typescript", "javascript", "tipagem", "linguagem"],
//   },
//   {
//     title: "Metas 2025",
//     category: "meta",
//     description: "Objetivos profissionais e de aprendizado para 2025",
//     keywords: ["metas", "objetivos", "2025", "aprendizado", "carreira"],
//   },
// ];

// Atualizar data e dia
function updateDateTime() {
  const now = new Date();
  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  document.getElementById("currentDay").textContent = dayName;
  document.getElementById(
    "currentDate"
  ).textContent = `${day} de ${month} de ${year}`;
  document.getElementById("currentYear").textContent = year;
}

// Criar mini checks baseados no progresso
function createMiniChecks(checkbox) {
  const progress = checkbox.getAttribute("data-progress") || 0;
  const miniChecksContainer = checkbox.querySelector(".mini-checks");

  // Limpar container
  miniChecksContainer.innerHTML = "";

  // Criar 20 mini checks (cada um representa 5%)
  const totalChecks = 20;
  const filledChecks = Math.floor(progress / 5);

  for (let i = 0; i < totalChecks; i++) {
    const miniCheck = document.createElement("div");
    miniCheck.className = "mini-check";

    // Preencher apenas os checks correspondentes ao progresso
    if (i < filledChecks) {
      miniCheck.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    } else {
      miniCheck.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    }

    miniChecksContainer.appendChild(miniCheck);
  }

  // Mostrar os mini checks apenas se o progresso for maior que 0
  if (progress > 0) {
    miniChecksContainer.style.opacity = "1";
  }
}

// Marcar/desmarcar metas
document.querySelectorAll(".goal-checkbox").forEach((checkbox) => {
  // Criar mini checks iniciais
  if (!checkbox.classList.contains("checked")) {
    createMiniChecks(checkbox);
  }

  checkbox.addEventListener("click", function (e) {
    // Criar efeito ripple
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = e.clientX - rect.left - size / 2 + "px";
    ripple.style.top = e.clientY - rect.top - size / 2 + "px";
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    const wasChecked = this.classList.contains("checked");

    if (wasChecked) {
      // Se estava marcado, desmarcar
      this.classList.remove("checked");

      // Remover ícone de check
      const icon = this.querySelector("i");
      if (icon) {
        icon.remove();
      }

      // Restaurar mini checks baseados no progresso
      createMiniChecks(this);

      // Animação de shake
      this.style.animation = "shake 0.5s ease";
      setTimeout(() => {
        this.style.animation = "";
      }, 500);
    } else {
      // Se não estava marcado, marcar como 100%
      this.classList.add("checked");

      // Adicionar ícone de check
      if (!this.querySelector("i")) {
        const icon = document.createElement("i");
        icon.className = "fas fa-check";
        this.appendChild(icon);
      }

      // Preencher todos os mini checks (100%)
      const miniChecks = this.querySelectorAll(".mini-check");
      miniChecks.forEach((check) => {
        check.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        check.style.animation = "miniCheckWave 1.5s ease infinite";
      });

      // Garantir que os mini checks sejam visíveis
      const miniChecksContainer = this.querySelector(".mini-checks");
      if (miniChecksContainer) {
        miniChecksContainer.style.opacity = "1";
      }
    }
  });
});

// Funcionalidade do Modal "Saiba Mais"
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

// Abrir modal
learnMoreButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Criar efeito ripple
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = "50%";
    ripple.style.top = "50%";
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// Fechar modal
modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Fechar modal com ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModal();
  }
});

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Funcionalidade da Barra de Pesquisa
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");

function performSearch() {
  const query = searchInput.value.trim().toLowerCase();

  // Limpar resultados anteriores
  searchResults.innerHTML = "";

  if (query === "") {
    searchResults.classList.remove("active");
    return;
  }

  // Filtrar dados baseado na consulta
  const filteredResults = searchData.filter((item) => {
    // Verificar se a consulta está no título, descrição ou palavras-chave
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.some((keyword) => keyword.includes(query)) ||
      item.category.toLowerCase().includes(query)
    );
  });

  // Exibir resultados
  if (filteredResults.length > 0) {
    filteredResults.forEach((result, index) => {
      const resultItem = document.createElement("div");
      resultItem.className = "search-result-item";
      resultItem.style.animationDelay = `${index * 0.1}s`;

      resultItem.innerHTML = `
                        <div class="search-result-title">
                            <i class="fas fa-${getIconForCategory(
                              result.category
                            )}"></i> ${result.title}
                            <span style="font-size: 11px; background: ${getColorForCategory(
                              result.category
                            )}; padding: 2px 8px; border-radius: 10px; margin-left: 8px;">${
        result.category
      }</span>
                        </div>
                        <div class="search-result-desc">${
                          result.description
                        }</div>
                    `;

      searchResults.appendChild(resultItem);
    });
  } else {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.textContent = "Nenhum resultado encontrado para sua pesquisa.";
    searchResults.appendChild(noResults);
  }

  // Mostrar container de resultados
  searchResults.classList.add("active");
}

function getIconForCategory(category) {
  switch (category) {
    case "projeto":
      return "code";
    case "habilidade":
      return "cog";
    case "meta":
      return "flag";
    case "rede social":
      return "share-alt";
    default:
      return "search";
  }
}

function getColorForCategory(category) {
  switch (category) {
    case "projeto":
      return "rgba(88, 166, 255, 0.2)";
    case "habilidade":
      return "rgba(188, 140, 255, 0.2)";
    case "meta":
      return "rgba(63, 185, 80, 0.2)";
    case "rede social":
      return "rgba(247, 129, 102, 0.2)";
    default:
      return "rgba(139, 148, 158, 0.2)";
  }
}

// // Event listeners para pesquisa
// searchBtn.addEventListener("click", performSearch);
// searchInput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     performSearch();
//   }
// });

// Funcionalidade do Botão de Currículo
const resumeBtn = document.getElementById("resumeBtn");
resumeBtn.addEventListener("click", function () {
  // Criar efeito ripple
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  const rect = this.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = "50%";
  ripple.style.top = "50%";
  this.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);

  // Simular download do currículo
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Baixando...';
  this.disabled = true;

  setTimeout(() => {
    this.innerHTML = '<i class="fas fa-check"></i> Baixado!';

    // Criar link de download simulado
    const link = document.createElement("a");
    link.href = "data:application/pdf;base64,JVBERi0xLjQKJc..."; // PDF vazio simulado
    link.download = "Curriculo_Desenvolvedor.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Resetar botão após 2 segundos
    setTimeout(() => {
      this.innerHTML = '<i class="fas fa-file-download"></i> Baixar Currículo';
      this.disabled = false;
    }, 2000);
  }, 1500);
});

// Efeito ripple em todos os clicáveis
document
  .querySelectorAll(".social-block, .project-item, .contact-link")
  .forEach((element) => {
    element.addEventListener("click", function (e) {
      if (
        element.classList.contains("social-block") ||
        element.classList.contains("contact-link")
      ) {
        return; // Links externos não precisam do ripple
      }

      const ripple = document.createElement("span");
      ripple.classList.add("ripple");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

// Animar barras de fluência ao carregar
function animateFluencyBars() {
  const bars = document.querySelectorAll(".fluency-fill");
  bars.forEach((bar) => {
    const width = getComputedStyle(bar).getPropertyValue("--progress-width");
    bar.style.setProperty("--progress-width", width);
  });
}

// Inicializar
document.addEventListener("DOMContentLoaded", function () {
  updateDateTime();
  setTimeout(animateFluencyBars, 500);

  // Animar entrada dos elementos
  setTimeout(() => {
    document
      .querySelectorAll(".social-block, .project-item, .goal-item")
      .forEach((el) => {
        el.style.animationPlayState = "running";
      });
  }, 100);

  // Atualizar data a cada minuto (caso a página fique aberta)
  setInterval(updateDateTime, 60000);
});
