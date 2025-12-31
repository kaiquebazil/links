// js/6meses.js
// Importar dados e funções
import { studyPlan } from "../data/studyPlan.js";
import { resourcesDatabase, defaultResources } from "../data/resources.js";
import { complementaryMaterials } from "../data/complementaryData.js";
import {
  getFormattedDate,
  createVideoCard,
  createMaterialItem,
  calculateProgress,
  calculateMonthProgress,
} from "./utils/helpers.js";

document.addEventListener("DOMContentLoaded", function () {
  // Elementos DOM
  const monthsContainer = document.getElementById("months-container");
  const globalProgress = document.getElementById("global-progress");
  const progressText = document.getElementById("progress-text");
  const contentsCompletedElement =
    document.getElementById("contents-completed");
  const completionRateElement = document.getElementById("completion-rate");
  const totalContentsElement = document.getElementById("total-contents");
  const filterButtons = document.querySelectorAll(".filter-btn[data-filter]");
  const resetButton = document.getElementById("reset-btn");
  const currentDayElement = document.getElementById("currentDay");
  const currentDateElement = document.getElementById("currentDate");

  // Remover o botão e modal de fluência do DOM (já que movemos para conteúdos adicionais)
  const fluencyButtonContainer = document.querySelector(
    ".fluency-button-container"
  );
  const fluencyModal = document.getElementById("fluency-modal");

  if (fluencyButtonContainer) fluencyButtonContainer.remove();
  if (fluencyModal) fluencyModal.remove();

  // Calcular total de conteúdos
  let totalContents = 0;
  studyPlan.forEach((month) => {
    month.weeks.forEach((week) => {
      totalContents += week.contents.length;
    });
  });
  totalContentsElement.textContent = totalContents;

  // Progresso salvo no localStorage
  let completedContents =
    JSON.parse(localStorage.getItem("completedContents")) || [];

  // Atualizar data e dia
  function updateDateTime() {
    const { dayName, day, month, year } = getFormattedDate();
    currentDayElement.textContent = dayName;
    currentDateElement.textContent = `${day} de ${month} de ${year}`;
  }

  // ========== SISTEMA DE TOGGLE ÚNICO ==========
  let currentlyOpenCard = null;

  function closeAllCards() {
    const allCards = document.querySelectorAll(".complementary-card-content");
    const allToggles = document.querySelectorAll(".complementary-card-toggle");

    allCards.forEach((card) => {
      card.style.maxHeight = "0px";
    });

    allToggles.forEach((toggle) => {
      toggle.classList.remove("expanded");
      const icon = toggle.querySelector("i");
      if (icon) icon.style.transform = "rotate(0deg)";
    });

    currentlyOpenCard = null;
  }

  function toggleCard(cardId, cardContent, toggleButton) {
    const icon = toggleButton.querySelector("i");

    if (currentlyOpenCard === cardId) {
      // Fechar este card
      cardContent.style.maxHeight = "0px";
      toggleButton.classList.remove("expanded");
      icon.style.transform = "rotate(0deg)";
      currentlyOpenCard = null;
    } else {
      // Fechar todos e abrir este
      closeAllCards();

      cardContent.style.maxHeight = cardContent.scrollHeight + "px";
      toggleButton.classList.add("expanded");
      icon.style.transform = "rotate(180deg)";
      currentlyOpenCard = cardId;
    }
  }

  // ========== RENDERIZAR MATERIAIS COMPLEMENTARES ==========
  function renderComplementaryMaterials() {
    // Criar container principal
    const complementaryContainer = document.createElement("div");
    complementaryContainer.className = "complementary-container";
    complementaryContainer.innerHTML = `
      <div class="complementary-header">
        <div class="complementary-title">
          <i class="fas fa-plus-circle"></i>
          <span>Conteúdos Adicionais</span>
        </div>
        <button class="complementary-toggle" id="complementary-toggle">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
      <div class="complementary-content" id="complementary-content">
        <!-- Conteúdo será inserido aqui -->
      </div>
    `;

    // Inserir antes dos meses
    monthsContainer.parentNode.insertBefore(
      complementaryContainer,
      monthsContainer
    );

    // Referências aos elementos
    const complementaryContent = document.getElementById(
      "complementary-content"
    );
    const complementaryToggle = document.getElementById("complementary-toggle");

    // Renderizar os cards de materiais
    const materialsGrid = document.createElement("div");
    materialsGrid.className = "complementary-grid";

    complementaryMaterials.forEach((material) => {
      const materialCard = document.createElement("div");
      materialCard.className = "complementary-card";

      // Criar conteúdo interno do card
      const cardContent = document.createElement("div");
      cardContent.className = "complementary-card-content";
      cardContent.style.maxHeight = "0px";
      cardContent.style.overflow = "hidden";
      cardContent.style.transition = "max-height 0.3s ease-out";
      cardContent.id = `card-content-${material.id}`;

      // Header do card com toggle individual
      const cardHeader = document.createElement("div");
      cardHeader.className = "complementary-card-header";
      cardHeader.innerHTML = `
        <div class="complementary-card-title">
          <h3>${material.title}</h3>
          <p class="complementary-card-desc">${material.description}</p>
        </div>
        <button class="complementary-card-toggle" data-target="${material.id}">
          <i class="fas fa-chevron-down"></i>
        </button>
      `;

      // Conteúdo específico baseado no tipo
      let cardBodyHTML = "";

      if (material.type === "videos") {
        // Card de vídeos (com conteúdos adicionais)
        cardBodyHTML = `
          <div class="complementary-card-body">
            <div class="complementary-videos">
              <div class="complementary-section">
                <div class="complementary-section-title">
                  <i class="fas fa-video"></i>
                  <span>Vídeos Recomendados</span>
                </div>
                <div class="complementary-videos-grid">
                  ${material.videos
                    .map(
                      (video) => `
                    <div class="complementary-video-item">
                      <a href="https://www.youtube.com/watch?v=${
                        video.id
                      }" target="_blank" class="complementary-video-card">
                        <div class="complementary-video-icon">
                          <i class="fas fa-play-circle"></i>
                        </div>
                        <div class="complementary-video-info">
                          <div class="complementary-video-title">${
                            video.title
                          }</div>
                          <div class="complementary-video-details">
                            <span><i class="fas fa-clock"></i> ${
                              video.duration
                            }</span>
                            <span>${video.channel}</span>
                          </div>
                          <div class="complementary-video-desc">${
                            video.description
                          }</div>
                        </div>
                      </a>
                      
                      ${
                        video.additionalContent
                          ? `
                        <div class="video-additional-toggle">
                          <button class="video-additional-btn" data-video="${
                            video.id
                          }">
                            <i class="fas fa-plus-circle"></i>
                            <span>Conteúdo Adicional</span>
                          </button>
                        </div>
                        
                        <div class="video-additional-content" id="additional-${
                          video.id
                        }">
                          <div class="video-additional-section">
                            <div class="complementary-section-title">
                              <i class="fas fa-book"></i>
                              <span>Materiais Complementares</span>
                            </div>
                            <ul class="complementary-materials-list">
                              ${video.additionalContent.materials
                                .map((item) => {
                                  if (item.includes("(link:")) {
                                    const linkMatch =
                                      item.match(/\((link:[^)]+)\)/);
                                    if (linkMatch) {
                                      const linkText = linkMatch[0]
                                        .replace("(link:", "")
                                        .replace(")", "");
                                      const displayText = item
                                        .replace(linkMatch[0], "")
                                        .trim();
                                      return `<li>${displayText} <a href="${linkText}" target="_blank" class="material-link"><i class="fas fa-external-link-alt"></i></a></li>`;
                                    }
                                  }
                                  return `<li>${item}</li>`;
                                })
                                .join("")}
                            </ul>
                          </div>
                          
                          <div class="video-additional-section">
                            <div class="complementary-section-title">
                              <i class="fas fa-lightbulb"></i>
                              <span>Dicas de Estudo</span>
                            </div>
                            <ul class="complementary-list">
                              ${video.additionalContent.tips
                                .map((tip) => `<li>${tip}</li>`)
                                .join("")}
                            </ul>
                          </div>
                        </div>
                      `
                          : ""
                      }
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
              
              <div class="complementary-section">
                <div class="complementary-section-title">
                  <i class="fas fa-book"></i>
                  <span>Materiais Gerais</span>
                </div>
                <ul class="complementary-materials-list">
                  ${
                    material.materials
                      ? material.materials
                          .map((item) => {
                            if (item.includes("(link:")) {
                              const linkMatch = item.match(/\((link:[^)]+)\)/);
                              if (linkMatch) {
                                const linkText = linkMatch[0]
                                  .replace("(link:", "")
                                  .replace(")", "");
                                const displayText = item
                                  .replace(linkMatch[0], "")
                                  .trim();
                                return `<li>${displayText} <a href="${linkText}" target="_blank" class="material-link"><i class="fas fa-external-link-alt"></i></a></li>`;
                              }
                            }
                            return `<li>${item}</li>`;
                          })
                          .join("")
                      : ""
                  }
                </ul>
              </div>
            </div>
          </div>
        `;
      } else if (material.type === "rules") {
        // Card de regras de fluência
        cardBodyHTML = `
          <div class="complementary-card-body">
            <div class="rules-grid">
              ${material.rules
                .map(
                  (rule) => `
                <div class="rule-card-small">
                  <div class="rule-icon-small">
                    <i class="fas fa-${rule.icon}"></i>
                  </div>
                  <h4>${rule.title}</h4>
                  <p>${rule.description}</p>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `;
      } else {
        // Card padrão (exemplos e dicas)
        cardBodyHTML = `
          <div class="complementary-card-body">
            <div class="complementary-section">
              <div class="complementary-section-title">
                <i class="fas fa-star"></i>
                <span>Exemplos Recomendados</span>
              </div>
              <ul class="complementary-list">
                ${material.examples
                  .map((example) => `<li>${example}</li>`)
                  .join("")}
              </ul>
            </div>
            
            <div class="complementary-section">
              <div class="complementary-section-title">
                <i class="fas fa-lightbulb"></i>
                <span>Dicas Práticas</span>
              </div>
              <ul class="complementary-list">
                ${material.tips.map((tip) => `<li>${tip}</li>`).join("")}
              </ul>
            </div>
          </div>
        `;
      }

      cardContent.innerHTML = cardBodyHTML;

      // Montar card completo
      materialCard.appendChild(cardHeader);
      materialCard.appendChild(cardContent);
      materialsGrid.appendChild(materialCard);

      // Configurar toggle individual para cada card (sistema de toggle único)
      const cardToggle = cardHeader.querySelector(".complementary-card-toggle");
      cardToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        const targetId = this.dataset.target;
        const targetContent = document.getElementById(
          `card-content-${targetId}`
        );
        toggleCard(targetId, targetContent, this);
      });
    });

    complementaryContent.appendChild(materialsGrid);

    // Configurar toggles de conteúdo adicional dos vídeos
    setTimeout(() => {
      const videoAdditionalButtons = document.querySelectorAll(
        ".video-additional-btn"
      );
      videoAdditionalButtons.forEach((button) => {
        button.addEventListener("click", function (e) {
          e.stopPropagation();
          const videoId = this.dataset.video;
          const additionalContent = document.getElementById(
            `additional-${videoId}`
          );
          const icon = this.querySelector("i");

          if (
            additionalContent.style.maxHeight === "0px" ||
            additionalContent.style.maxHeight === ""
          ) {
            additionalContent.style.maxHeight =
              additionalContent.scrollHeight + "px";
            icon.classList.remove("fa-plus-circle");
            icon.classList.add("fa-minus-circle");
            this.querySelector("span").textContent = "Esconder Conteúdo";
          } else {
            additionalContent.style.maxHeight = "0px";
            icon.classList.remove("fa-minus-circle");
            icon.classList.add("fa-plus-circle");
            this.querySelector("span").textContent = "Conteúdo Adicional";
          }
        });
      });
    }, 100);

    // Configurar toggle principal
    complementaryToggle.addEventListener("click", function () {
      complementaryContent.classList.toggle("active");
      this.classList.toggle("expanded");

      // Rotacionar ícone
      const icon = this.querySelector("i");
      if (complementaryContent.classList.contains("active")) {
        icon.style.transform = "rotate(180deg)";
      } else {
        icon.style.transform = "rotate(0deg)";
        // Se fechar o container principal, fecha todos os cards também
        closeAllCards();
      }
    });

    // Abrir o card "Meus Vídeos" por padrão
    setTimeout(() => {
      const firstCardToggle = document.querySelector(
        '[data-target="my-videos"]'
      );
      const firstCardContent = document.getElementById(
        "card-content-my-videos"
      );
      if (firstCardToggle && firstCardContent) {
        toggleCard("my-videos", firstCardContent, firstCardToggle);
      }
    }, 200);
  }

  // Renderizar o plano de estudos
  function renderStudyPlan(filter = "all") {
    monthsContainer.innerHTML = "";

    studyPlan.forEach((monthData, monthIndex) => {
      const monthCard = document.createElement("div");
      monthCard.className = "month-card";

      // Calcular progresso do mês usando função auxiliar
      const { monthCompleted, monthTotal, percentage } = calculateMonthProgress(
        monthData,
        completedContents,
        monthIndex
      );

      const monthHeader = document.createElement("div");
      monthHeader.className = "month-header";

      const monthTitle = document.createElement("div");
      monthTitle.className = "month-title";
      monthTitle.textContent = monthData.month;

      const monthProgress = document.createElement("div");
      monthProgress.className = "month-progress";
      monthProgress.textContent = `${monthCompleted}/${monthTotal} (${percentage}%)`;

      monthHeader.appendChild(monthTitle);
      monthHeader.appendChild(monthProgress);
      monthCard.appendChild(monthHeader);

      const weeksContainer = document.createElement("div");
      weeksContainer.className = "weeks-container";

      monthData.weeks.forEach((week, weekIndex) => {
        const weekCard = document.createElement("div");
        weekCard.className = "week-card";

        const weekTitle = document.createElement("div");
        weekTitle.className = "week-title";
        weekTitle.innerHTML = `<span>${week.title}</span> <i class="fas fa-book-open"></i>`;
        weekCard.appendChild(weekTitle);

        const contentList = document.createElement("ul");
        contentList.className = "content-list";

        week.contents.forEach((content, contentIndex) => {
          const contentId = `${monthIndex}-${week.title}-${contentIndex}`;
          const isCompleted = completedContents.includes(contentId);

          // Aplicar filtro
          if (filter === "completed" && !isCompleted) return;
          if (filter === "pending" && isCompleted) return;

          const contentItem = document.createElement("li");
          contentItem.className = "content-item";

          // Header do conteúdo
          const contentHeader = document.createElement("div");
          contentHeader.className = "content-header";

          // Checkbox
          const checkboxContainer = document.createElement("div");
          checkboxContainer.className = "content-checkbox";
          if (isCompleted) checkboxContainer.classList.add("checked");

          if (isCompleted) {
            const checkIcon = document.createElement("i");
            checkIcon.className = "fas fa-check";
            checkboxContainer.appendChild(checkIcon);
          }

          // Label
          const label = document.createElement("span");
          label.className = `content-label ${isCompleted ? "completed" : ""}`;
          label.textContent = content;

          // Botão toggle
          const toggleBtn = document.createElement("button");
          toggleBtn.className = "toggle-btn";
          toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';

          // Conteúdo expandido
          const expandedContent = document.createElement("div");
          expandedContent.className = "expanded-content";

          // Obter recursos (usa padrão se não encontrar)
          const resources = resourcesDatabase[content] || defaultResources;

          // Seção de vídeos
          const videosSection = document.createElement("div");
          videosSection.className = "resources-section";

          const videosHeader = document.createElement("div");
          videosHeader.className = "section-header";
          videosHeader.innerHTML =
            '<i class="fas fa-video"></i> Vídeos Recomendados';

          const videosGrid = document.createElement("div");
          videosGrid.className = "videos-grid";

          resources.videos.forEach((video) => {
            const videoCard = createVideoCard(video);
            videosGrid.appendChild(videoCard);
          });

          videosSection.appendChild(videosHeader);
          videosSection.appendChild(videosGrid);
          expandedContent.appendChild(videosSection);

          // Seção de materiais
          const materialsSection = document.createElement("div");
          materialsSection.className = "resources-section";

          const materialsHeader = document.createElement("div");
          materialsHeader.className = "section-header";
          materialsHeader.innerHTML =
            '<i class="fas fa-book"></i> Materiais Complementares';

          const materialsList = document.createElement("ul");
          materialsList.className = "materials-list";

          resources.materials.forEach((material) => {
            const materialItem = createMaterialItem(material);
            materialsList.appendChild(materialItem);
          });

          materialsSection.appendChild(materialsHeader);
          materialsSection.appendChild(materialsList);
          expandedContent.appendChild(materialsSection);

          // Evento do toggle
          toggleBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            expandedContent.classList.toggle("active");
            this.classList.toggle("expanded");
          });

          // Evento do checkbox
          checkboxContainer.addEventListener("click", function (e) {
            e.stopPropagation();
            const isCurrentlyCompleted = completedContents.includes(contentId);

            if (!isCurrentlyCompleted) {
              // Marcar como concluído
              completedContents.push(contentId);
              this.classList.add("checked");

              if (!this.querySelector("i.fa-check")) {
                const checkIcon = document.createElement("i");
                checkIcon.className = "fas fa-check";
                this.appendChild(checkIcon);
              }

              label.classList.add("completed");

              // Expandir automaticamente quando marcar como concluído
              if (!expandedContent.classList.contains("active")) {
                expandedContent.classList.add("active");
                toggleBtn.classList.add("expanded");
              }
            } else {
              // Desmarcar
              completedContents = completedContents.filter(
                (id) => id !== contentId
              );
              this.classList.remove("checked");

              const checkIcon = this.querySelector("i.fa-check");
              if (checkIcon) {
                this.removeChild(checkIcon);
              }

              label.classList.remove("completed");
            }

            localStorage.setItem(
              "completedContents",
              JSON.stringify(completedContents)
            );
            updateProgress();

            // Atualizar progresso do mês
            const {
              monthCompleted: newMonthCompleted,
              monthTotal: newMonthTotal,
              percentage: newPercentage,
            } = calculateMonthProgress(
              monthData,
              completedContents,
              monthIndex
            );

            monthProgress.textContent = `${newMonthCompleted}/${newMonthTotal} (${newPercentage}%)`;
          });

          // Adicionar elementos ao header
          contentHeader.appendChild(checkboxContainer);
          contentHeader.appendChild(label);
          contentHeader.appendChild(toggleBtn);

          // Adicionar ao item
          contentItem.appendChild(contentHeader);
          contentItem.appendChild(expandedContent);
          contentList.appendChild(contentItem);
        });

        weekCard.appendChild(contentList);
        weeksContainer.appendChild(weekCard);
      });

      monthCard.appendChild(weeksContainer);
      monthsContainer.appendChild(monthCard);
    });
  }

  // Atualizar progresso
  function updateProgress() {
    const { completed, percentage } = calculateProgress(
      completedContents,
      totalContents
    );

    globalProgress.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% Completo`;
    contentsCompletedElement.textContent = completed;
    completionRateElement.textContent = `${percentage}%`;
  }

  // Filtros
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      renderStudyPlan(filter);
    });
  });

  // Reiniciar progresso
  resetButton.addEventListener("click", function () {
    if (confirm("Tem certeza que deseja reiniciar todo o progresso?")) {
      completedContents = [];
      localStorage.removeItem("completedContents");
      updateProgress();
      renderStudyPlan();

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      document
        .querySelector('.filter-btn[data-filter="all"]')
        .classList.add("active");
    }
  });

  // Inicializar
  updateDateTime();
  updateProgress();
  renderComplementaryMaterials();
  renderStudyPlan();

  // Atualizar data a cada minuto
  setInterval(updateDateTime, 60000);
});
