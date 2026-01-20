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

  // js/6meses.js - Função renderComplementaryMaterials COMPLETA
  function renderComplementaryMaterials() {
    // Criar container principal
    const complementaryContainer = document.createElement("div");
    complementaryContainer.className = "complementary-container";
    complementaryContainer.innerHTML = `
    <div class="complementary-header">
      <div class="complementary-title">
        <i class="fas fa-plus-circle"></i>
        <span>📚 Conteúdos Adicionais - Fluência em 6 Meses</span>
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
        const videosContent =
          material.videos && material.videos.length > 0
            ? material.videos
                .map((video) => {
                  let videoHTML = `
              <div class="complementary-video-item">
                <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" class="complementary-video-card">
                  <div class="complementary-video-icon">
                    <i class="fas fa-play-circle"></i>
                  </div>
                  <div class="complementary-video-info">
                    <div class="complementary-video-title">${video.title}</div>
                    <div class="complementary-video-details">
                      <span><i class="fas fa-clock"></i> ${video.duration}</span>
                      <span>${video.channel}</span>
                    </div>
                    <div class="complementary-video-desc">${video.description}</div>
                  </div>
                </a>
            `;

                  // Conteúdo adicional do vídeo
                  if (video.additionalContent) {
                    videoHTML += `
                <div class="video-additional-toggle">
                  <button class="video-additional-btn" data-video="${video.id}">
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
              `;
                  }

                  videoHTML += `</div>`;
                  return videoHTML;
                })
                .join("")
            : '<p style="text-align: center; color: var(--text-secondary); padding: 10px;">Sem vídeos disponíveis no momento</p>';

        const materialsContent =
          material.materials && material.materials.length > 0
            ? `
          <div class="complementary-section">
            <div class="complementary-section-title">
              <i class="fas fa-book"></i>
              <span>Materiais Gerais</span>
            </div>
            <ul class="complementary-materials-list">
              ${material.materials
                .map((item) => {
                  if (item.includes("(link:")) {
                    const linkMatch = item.match(/\((link:[^)]+)\)/);
                    if (linkMatch) {
                      const linkText = linkMatch[0]
                        .replace("(link:", "")
                        .replace(")", "");
                      const displayText = item.replace(linkMatch[0], "").trim();
                      return `<li>${displayText} <a href="${linkText}" target="_blank" class="material-link"><i class="fas fa-external-link-alt"></i></a></li>`;
                    }
                  }
                  return `<li>${item}</li>`;
                })
                .join("")}
            </ul>
          </div>
        `
            : "";

        cardBodyHTML = `
        <div class="complementary-card-body">
          <div class="complementary-videos">
            <div class="complementary-section">
              <div class="complementary-section-title">
                <i class="fas fa-video"></i>
                <span>Vídeos Recomendados</span>
              </div>
              <div class="complementary-videos-grid">
                ${videosContent}
              </div>
            </div>
            ${materialsContent}
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
      } else if (material.type === "grammar-videos") {
        // Card de vídeos de gramática
        cardBodyHTML = `
    <div class="complementary-card-body">
      <div class="grammar-videos-container">
        
        <!-- Introdução -->
        <div class="grammar-intro">
          <p><strong>Minha filosofia:</strong> Gramática deve ser aprendida em contexto, não em listas de regras. 
          Estes vídeos focam na <em>aplicação prática</em> para comunicação real.</p>
        </div>
        
        <!-- Playlists organizadas -->
        <div class="complementary-section">
          <div class="complementary-section-title">
            <i class="fas fa-list-ol"></i>
            <span>Playlists Organizadas</span>
          </div>
          
          <div class="playlists-grid">
            ${material.playlists
              .map(
                (playlist) => `
              <div class="playlist-card">
                <div class="playlist-header">
                  <div class="playlist-icon">
                    <i class="fas fa-play-circle"></i>
                  </div>
                  <div class="playlist-info">
                    <h4>${playlist.name}</h4>
                    <p class="playlist-creator">
                      <i class="fas fa-user"></i> ${playlist.creator}
                    </p>
                    <p class="playlist-desc">${playlist.description}</p>
                  </div>
                </div>
                
                <div class="playlist-videos">
                  <h5>Vídeos desta playlist:</h5>
                  ${playlist.videos
                    .map(
                      (video) => `
                    <div class="playlist-video-item">
                      <a href="https://www.youtube.com/watch?v=${
                        video.id
                      }" target="_blank" class="video-link">
                        <div class="video-thumb">
                          <img src="https://img.youtube.com/vi/${
                            video.id
                          }/hqdefault.jpg" alt="${video.title}">
                          <div class="video-overlay">
                            <i class="fas fa-play"></i>
                            <span class="duration">${video.duration}</span>
                          </div>
                        </div>
                        <div class="video-details">
                          <h6>${video.title}</h6>
                          <div class="video-meta">
                            <span class="difficulty difficulty-${video.difficulty.toLowerCase()}">
                              ${video.difficulty}
                            </span>
                            <div class="video-tags">
                              ${video.tags
                                .map((tag) => `<span class="tag">${tag}</span>`)
                                .join("")}
                            </div>
                          </div>
                          <p class="video-description">${video.description}</p>
                        </div>
                      </a>
                    </div>
                  `
                    )
                    .join("")}
                </div>
                
                <div class="playlist-actions">
                  <a href="${
                    playlist.link
                  }" target="_blank" class="playlist-link-btn">
                    <i class="fab fa-youtube"></i> Ver playlist completa
                  </a>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        
        <!-- Vídeos individuais recomendados -->
        <div class="complementary-section">
          <div class="complementary-section-title">
            <i class="fas fa-star"></i>
            <span>Vídeos Específicos que Recomendo</span>
          </div>
          
          <div class="individual-videos-grid">
            ${material.individualVideos
              .map(
                (video) => `
              <div class="individual-video-card">
                <div class="video-main">
                  <div class="video-thumb-large">
                    <img src="https://img.youtube.com/vi/${
                      video.id
                    }/hqdefault.jpg" alt="${video.title}">
                    <div class="video-overlay-large">
                      <i class="fas fa-play"></i>
                    </div>
                    <div class="video-duration-large">${video.duration}</div>
                  </div>
                  
                  <div class="video-content">
                    <h4>${video.title}</h4>
                    <p class="video-creator">
                      <i class="fas fa-user"></i> ${video.creator}
                    </p>
                    <p class="video-description-large">${video.description}</p>
                    
                    ${
                      video.whyRecommend
                        ? `
                      <div class="why-recommend">
                        <strong><i class="fas fa-thumbs-up"></i> Por que recomendo:</strong>
                        <p>${video.whyRecommend}</p>
                      </div>
                    `
                        : ""
                    }
                    
                    <div class="video-meta-large">
                      <span class="difficulty difficulty-${
                        video.difficulty
                          ? video.difficulty.toLowerCase().split(" ")[0]
                          : "intermediate"
                      }">
                        ${video.difficulty || "Intermediário"}
                      </span>
                      <div class="video-tags-large">
                        ${
                          video.tags
                            ? video.tags
                                .map((tag) => `<span class="tag">${tag}</span>`)
                                .join("")
                            : ""
                        }
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="video-actions">
                  <a href="https://www.youtube.com/watch?v=${
                    video.id
                  }" target="_blank" class="watch-btn">
                    <i class="fab fa-youtube"></i> Assistir no YouTube
                  </a>
                  <button class="save-btn" data-video-id="${video.id}">
                    <i class="far fa-bookmark"></i> Salvar para depois
                  </button>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        
        <!-- Níveis de recomendação -->
        <div class="complementary-section">
          <div class="complementary-section-title">
            <i class="fas fa-chart-bar"></i>
            <span>Recomendação por Nível</span>
          </div>
          
          <div class="recommendation-levels">
            ${Object.entries(material.recommendationLevels)
              .map(
                ([level, items]) => `
              <div class="level-card level-${level}">
                <h4>
                  <i class="fas fa-${
                    level === "beginner"
                      ? "seedling"
                      : level === "intermediate"
                      ? "leaf"
                      : "tree"
                  }"></i>
                  Para ${
                    level === "beginner"
                      ? "Iniciantes"
                      : level === "intermediate"
                      ? "Intermediários"
                      : "Avançados"
                  }
                </h4>
                <ul>
                  ${items.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        
        <!-- Dicas de estudo -->
        <div class="complementary-section">
          <div class="complementary-section-title">
            <i class="fas fa-lightbulb"></i>
            <span>Como Estudar com Estes Vídeos</span>
          </div>
          
          <div class="study-tips">
            <div class="tips-steps">
              ${material.studyTips
                .map(
                  (tip, index) => `
                <div class="tip-step">
                  <div class="step-number">${index + 1}</div>
                  <div class="step-content">${tip}</div>
                </div>
              `
                )
                .join("")}
            </div>
            
            <div class="pro-tip">
              <strong><i class="fas fa-gem"></i> Dica Pro:</strong>
              Grave você mesmo explicando o conceito após assistir. Ensine para consolidar!
            </div>
          </div>
        </div>
        
      </div>
    </div>
  `;
      } else if (material.type === "timeline") {
        // Card de timeline/roadmap
        cardBodyHTML = `
        <div class="complementary-card-body">
          <div class="complementary-section">
            <div class="complementary-section-title">
              <i class="fas fa-road"></i>
              <span>Roadmap de 6 Meses</span>
            </div>
            <div class="timeline-container">
              ${material.months
                .map(
                  (month) => `
                <div class="timeline-month">
                  <div class="timeline-month-header">
                    <h4>${month.month}</h4>
                    <span class="timeline-theme">${month.theme}</span>
                  </div>
                  <div class="timeline-month-content">
                    <p><strong>Meta:</strong> ${month.goal}</p>
                    <p><strong>Foco:</strong> ${month.focus}</p>
                    <p><strong>Marcador:</strong> ${month.marker}</p>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
      } else if (material.type === "schedule") {
        // Card de cronograma
        cardBodyHTML = `
        <div class="complementary-card-body">
          <div class="complementary-section">
            <div class="complementary-section-title">
              <i class="fas fa-calendar-day"></i>
              <span>Fórmula Diária</span>
            </div>
            <div class="schedule-grid">
              ${material.schedule
                .map(
                  (item) => `
                <div class="schedule-item">
                  <div class="schedule-time">${item.time}</div>
                  <div class="schedule-activity">
                    <h5>${item.activity}</h5>
                    <ul>
                      ${item.examples
                        .map((example) => `<li>${example}</li>`)
                        .join("")}
                    </ul>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
      } else if (material.type === "checkpoints") {
        // Card de marcadores de progresso
        cardBodyHTML = `
        <div class="complementary-card-body">
          <div class="complementary-section">
            <div class="complementary-section-title">
              <i class="fas fa-chart-line"></i>
              <span>Marcadores de Progresso</span>
            </div>
            <div class="checkpoints-container">
              ${material.markers
                .map(
                  (marker) => `
                <div class="checkpoint-stage">
                  <h5>${marker.stage}</h5>
                  <ul class="checkpoint-signs">
                    ${marker.signs.map((sign) => `<li>${sign}</li>`).join("")}
                  </ul>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
      } else if (material.type === "warnings") {
        // Card de erros a evitar
        cardBodyHTML = `
        <div class="complementary-card-body">
          <div class="complementary-section">
            <div class="complementary-section-title">
              <i class="fas fa-exclamation-triangle"></i>
              <span>Erros a Evitar</span>
            </div>
            <div class="warnings-container">
              ${material.warnings
                .map(
                  (warning) => `
                <div class="warning-item">
                  <h5>${warning.mistake}</h5>
                  <p><strong>Por que evitar:</strong> ${warning.why}</p>
                  <p><strong>Solução:</strong> ${warning.solution}</p>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
      } else if (material.type === "challenge") {
        // Card de desafio
        cardBodyHTML = `
        <div class="complementary-card-body">
          <div class="complementary-section">
            <div class="complementary-section-title">
              <i class="fas fa-trophy"></i>
              <span>Desafio dos 180 Dias</span>
            </div>
            <div class="challenge-container">
              <p class="challenge-commitment">${material.commitment}</p>
              <h5>Regras do Desafio:</h5>
              <ul class="challenge-rules">
                ${material.rules.map((rule) => `<li>${rule}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      `;
      } else if (material.type === "manifesto") {
        // Card de manifesto
        cardBodyHTML = `
        <div class="complementary-card-body">
          <div class="complementary-section">
            <div class="complementary-section-title">
              <i class="fas fa-bullhorn"></i>
              <span>Manifesto da Fluência Rápida</span>
            </div>
            <div class="manifesto-container">
              <div class="manifesto-section">
                <h5>PARA QUEM:</h5>
                <ul>
                  ${material.forWho.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </div>
              <div class="manifesto-section">
                <h5>ESTE MÉTODO NÃO É:</h5>
                <ul class="manifesto-not">
                  ${material.thisIsNot
                    .map((item) => `<li>${item}</li>`)
                    .join("")}
                </ul>
              </div>
              <div class="manifesto-section">
                <h5>ESTE MÉTODO É:</h5>
                <ul class="manifesto-is">
                  ${material.thisIs.map((item) => `<li>${item}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;
      } else if (material.type === "outcomes") {
        // Card de resultados
        cardBodyHTML = `
        <div class="complementary-card-body">
          <div class="complementary-section">
            <div class="complementary-section-title">
              <i class="fas fa-flag-checkered"></i>
              <span>Dia 180: Linha de Chegada</span>
            </div>
            <div class="outcomes-container">
              <h5>Você será capaz de:</h5>
              <ul class="outcomes-list">
                ${material.willBeAbleTo
                  .map((item) => `<li>✓ ${item}</li>`)
                  .join("")}
              </ul>
            </div>
          </div>
        </div>
      `;
      } else if (material.type === "actionable") {
        // Card de ações práticas
        cardBodyHTML = `
        <div class="complementary-card-body">
          <div class="complementary-section">
            <div class="complementary-section-title">
              <i class="fas fa-play-circle"></i>
              <span>Primeiro Passo (Hoje Mesmo)</span>
            </div>
            <div class="actions-container">
              ${material.actions
                .map(
                  (action) => `
                <div class="action-item">
                  <div class="action-header">
                    <h5>${action.action}</h5>
                  </div>
                  <p><strong>Como fazer:</strong> ${action.instructions}</p>
                  <p><strong>Propósito:</strong> ${action.purpose}</p>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      `;
      } else if (material.type === "tools") {
        // Card de ferramentas e recursos
        cardBodyHTML = `
    <div class="complementary-card-body">
      <div class="complementary-section">
        <div class="complementary-section-title">
          <i class="fas fa-tools"></i>
          <span>Recursos & Ferramentas</span>
        </div>
        
        <div class="tools-intro">
          <p>Aqui estão os recursos que uso pessoalmente e recomendo para acelerar seu aprendizado. 
          Todos foram testados e aprovados!</p>
        </div>
        
        ${material.categories
          .map(
            (category) => `
          <div class="tools-category">
            <h4 class="tools-category-title">
              <i class="fas fa-${category.icon || "folder"}"></i>
              ${category.name}
            </h4>
            <div class="tools-items-grid">
              ${category.items
                .map(
                  (item) => `
                <div class="tool-item">
                  <div class="tool-header">
                    <div class="tool-icon">
                      <i class="fas fa-${item.icon || "link"}"></i>
                    </div>
                    <div class="tool-info">
                      <h5>${item.name}</h5>
                      <p class="tool-desc">${item.description}</p>
                    </div>
                  </div>
                  
                  <div class="tool-content">
                    ${
                      item.myReview
                        ? `
                      <div class="tool-review">
                        <strong><i class="fas fa-star"></i> Minha avaliação:</strong>
                        <p>${item.myReview}</p>
                      </div>
                    `
                        : ""
                    }
                    
                    <div class="tool-actions">
                      <a href="${item.link}" target="_blank" class="tool-link">
                        <i class="fas fa-external-link-alt"></i> Acessar
                      </a>
                      ${
                        item.isFree
                          ? '<span class="tool-badge free">Gratuito</span>'
                          : ""
                      }
                      ${
                        item.isPaid
                          ? '<span class="tool-badge paid">Premium</span>'
                          : ""
                      }
                    </div>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `
          )
          .join("")}
        
        ${
          material.tips && material.tips.length > 0
            ? `
          <div class="tools-tips">
            <h4 class="tools-tips-title">
              <i class="fas fa-lightbulb"></i>
              Dicas de Uso
            </h4>
            <ul class="tools-tips-list">
              ${material.tips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
          </div>
        `
            : ""
        }
      </div>
    </div>
  `;
      } else if (material.type === "podcasts") {
        // Card de podcasts
        cardBodyHTML = `
    <div class="complementary-card-body">
      <div class="podcasts-container">
        
        <!-- Header com filtros -->
        <div class="podcasts-header">
          <div class="podcasts-intro">
            <h4><i class="fas fa-podcast"></i> Guia de Podcasts por Nível</h4>
            <p>Selecione podcasts baseado no seu nível atual. A recomendação é ouvir <strong>30-60 minutos por dia</strong> para imersão auditiva eficiente.</p>
          </div>
          
          <div class="podcasts-filters">
            <div class="filter-buttons">
              ${material.filters
                .map(
                  (filter) => `
                <button class="podcast-filter-btn ${
                  filter.id === "all" ? "active" : ""
                }" 
                        data-filter="${filter.id}">
                  <i class="fas fa-${filter.icon}"></i>
                  ${filter.name}
                </button>
              `
                )
                .join("")}
            </div>
            
            <div class="stats-info">
              <span class="stat">
                <i class="fas fa-headphones"></i>
                <strong>${material.levels.reduce(
                  (total, level) => total + level.items.length,
                  0
                )}</strong> podcasts
              </span>
              <span class="stat">
                <i class="fas fa-layer-group"></i>
                <strong>${material.levels.length}</strong> níveis
              </span>
            </div>
          </div>
        </div>
        
        <!-- Níveis de podcasts -->
        <div class="podcasts-levels">
          ${material.levels
            .map(
              (level, levelIndex) => `
            <div class="podcast-level-card level-${level.color} ${
                levelIndex === 0 ? "active" : ""
              }" 
                 data-level="${
                   level.name.toLowerCase().includes("beginner")
                     ? "beginner"
                     : level.name.toLowerCase().includes("basic")
                     ? "basic"
                     : level.name.toLowerCase().includes("intermediate")
                     ? "intermediate"
                     : "advanced"
                 }">
              
              <div class="level-header">
                <div class="level-title">
                  <h4>${level.name}</h4>
                  <p class="level-desc">${level.description}</p>
                </div>
                <div class="level-badge">
                  <span class="badge-count">${
                    level.items.length
                  } podcasts</span>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              
              <div class="level-content" style="max-height: ${
                levelIndex === 0 ? "1000px" : "0px"
              };">
                <div class="podcast-grid">
                  ${level.items
                    .map(
                      (podcast, podcastIndex) => `
                    <div class="podcast-item" data-index="${podcastIndex}">
                      <div class="podcast-card">
                        <div class="podcast-icon">
                          <i class="fas fa-${podcast.icon}"></i>
                        </div>
                        
                        <div class="podcast-info">
                          <h5>${podcast.name}</h5>
                          <p class="podcast-desc">${podcast.description}</p>
                          
                          <div class="podcast-meta">
                            <span class="platform-badge">
                              <i class="fas fa-${
                                podcast.platform === "YouTube"
                                  ? "youtube"
                                  : podcast.platform === "Spotify"
                                  ? "spotify"
                                  : podcast.platform === "Apple Podcasts"
                                  ? "podcast"
                                  : "globe"
                              }"></i>
                              ${podcast.platform}
                            </span>
                            <span class="frequency-badge">
                              <i class="fas fa-calendar-alt"></i>
                              ${podcast.frequency}
                            </span>
                            ${
                              podcast.bestFor
                                ? `
                              <span class="bestfor-badge">
                                <i class="fas fa-bullseye"></i>
                                ${podcast.bestFor}
                              </span>
                            `
                                : ""
                            }
                          </div>
                        </div>
                        
                        <div class="podcast-actions">
                          <button class="save-podcast-btn" data-podcast="${podcast.name
                            .replace(/\s+/g, "-")
                            .toLowerCase()}">
                            <i class="far fa-bookmark"></i>
                          </button>
                          <button class="play-podcast-btn" data-platform="${
                            podcast.platform
                          }" 
                                  data-search="${encodeURIComponent(
                                    podcast.name
                                  )}">
                            <i class="fas fa-play"></i> Ouvir
                          </button>
                        </div>
                      </div>
                      
                      <!-- Detalhes expandidos -->
                      <div class="podcast-details">
                        <div class="details-content">
                          <div class="study-plan">
                            <h6><i class="fas fa-graduation-cap"></i> Plano de Estudo Sugerido</h6>
                            <ul>
                              <li><strong>Frequência:</strong> ${
                                podcast.frequency
                              }</li>
                              <li><strong>Duração por sessão:</strong> ${
                                level.color === "green"
                                  ? "15-20 minutos"
                                  : level.color === "blue"
                                  ? "20-30 minutos"
                                  : level.color === "yellow"
                                  ? "30-45 minutos"
                                  : "45-60 minutos"
                              }</li>
                              <li><strong>Foco principal:</strong> ${
                                podcast.description.split(".")[0]
                              }</li>
                              ${
                                podcast.bestFor
                                  ? `<li><strong>Melhor para:</strong> ${podcast.bestFor}</li>`
                                  : ""
                              }
                            </ul>
                          </div>
                          
                          <div class="tips-section">
                            <h6><i class="fas fa-lightbulb"></i> Dicas para este podcast</h6>
                            <ul>
                              ${
                                level.color === "green"
                                  ? `<li>Ouça em velocidade reduzida (0.75x) nas primeiras semanas</li>
                                 <li>Repita as frases em voz alta após o apresentador</li>
                                 <li>Foque em entender o contexto geral, não cada palavra</li>`
                                  : level.color === "blue"
                                  ? `<li>Ouça uma vez sem pausar, depois ouça novamente com pausas</li>
                                 <li>Anote 3-5 palavras novas por episódio</li>
                                 <li>Tente resumir o episódio em 2-3 frases</li>`
                                  : level.color === "yellow"
                                  ? `<li>Ouça sem legendas/transcrições primeiro</li>
                                 <li>Foque na entonação e expressões idiomáticas</li>
                                 <li>Discuta o conteúdo com um parceiro de estudo</li>`
                                  : `<li>Ouça como entretenimento, não como "estudo"</li>
                                 <li>Pesquise contextos culturais que não entender</li>
                                 <li>Experimente fazer outras atividades enquanto ouve</li>`
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
        
        <!-- Dicas gerais -->
        <div class="podcasts-tips-section">
          <div class="tips-header">
            <h4><i class="fas fa-gem"></i> Estratégias de Escuta Eficiente</h4>
          </div>
          
          <div class="tips-grid">
            ${material.tips
              .map(
                (tip, index) => `
              <div class="tip-card">
                <div class="tip-number">${index + 1}</div>
                <div class="tip-content">
                  <p>${tip}</p>
                </div>
              </div>
            `
              )
              .join("")}
          </div>
          
          <div class="pro-tip-podcast">
            <i class="fas fa-rocket"></i>
            <strong>Dica Pro:</strong> Crie uma playlist semanal com podcasts de diferentes níveis para exposição variada.
          </div>
        </div>
        
        <!-- Plataformas -->
        <div class="platforms-section">
          <h4><i class="fas fa-mobile-alt"></i> Plataformas Recomendadas</h4>
          <div class="platforms-grid">
            ${Object.entries(material.platforms)
              .map(
                ([name, url]) => `
              <a href="${url}" target="_blank" class="platform-card">
                <div class="platform-icon">
                  <i class="fab fa-${
                    name === "Spotify"
                      ? "spotify"
                      : name === "YouTube"
                      ? "youtube"
                      : name === "Apple Podcasts"
                      ? "apple"
                      : "chrome"
                  }"></i>
                </div>
                <div class="platform-info">
                  <h5>${name}</h5>
                  <p>Clique para acessar</p>
                </div>
              </a>
            `
              )
              .join("")}
          </div>
        </div>
        
      </div>
    </div>
  `;
      } else {
        // Card padrão (fallback)
        cardBodyHTML = `
        <div class="complementary-card-body">
          <p style="text-align: center; color: var(--text-secondary); padding: 20px;">
            Conteúdo em desenvolvimento
          </p>
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

      // Configurar toggles de conteúdo adicional dos vídeos (se houver)
      if (
        material.type === "videos" &&
        material.videos &&
        material.videos.some((v) => v.additionalContent)
      ) {
        // Configuração será feita após o timeout abaixo
      }

      // Adicionar funcionalidades específicas para podcasts
      if (material.type === "podcasts") {
        setTimeout(() => {
          // 1. Filtros por nível
          const filterButtons = document.querySelectorAll(
            ".podcast-filter-btn"
          );
          const levelCards = document.querySelectorAll(".podcast-level-card");

          filterButtons.forEach((button) => {
            button.addEventListener("click", function () {
              const filter = this.dataset.filter;

              // Atualizar botão ativo
              filterButtons.forEach((btn) => btn.classList.remove("active"));
              this.classList.add("active");

              // Mostrar/ocultar níveis baseado no filtro
              levelCards.forEach((card) => {
                const levelType = card.dataset.level;

                if (filter === "all" || levelType === filter) {
                  card.style.display = "block";
                  // Se for o primeiro, garantir que está expandido
                  if (filter !== "all" && !card.classList.contains("active")) {
                    const content = card.querySelector(".level-content");
                    const header = card.querySelector(".level-header");
                    header.click();
                  }
                } else {
                  card.style.display = "none";
                }
              });
            });
          });

          // 2. Expandir/colapsar níveis
          document.querySelectorAll(".level-header").forEach((header) => {
            header.addEventListener("click", function () {
              const levelCard = this.closest(".podcast-level-card");
              const content = levelCard.querySelector(".level-content");
              const icon = this.querySelector(".fa-chevron-down");

              levelCard.classList.toggle("active");

              if (levelCard.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = "rotate(180deg)";
              } else {
                content.style.maxHeight = "0px";
                icon.style.transform = "rotate(0deg)";
              }
            });
          });

          // 3. Expandir detalhes do podcast
          document.querySelectorAll(".podcast-card").forEach((card) => {
            card.addEventListener("click", function (e) {
              // Não disparar se clicar nos botões de ação
              if (e.target.closest(".podcast-actions")) return;

              const podcastItem = this.closest(".podcast-item");
              const details = podcastItem.querySelector(".podcast-details");

              // Fechar outros abertos
              document
                .querySelectorAll(".podcast-item.active")
                .forEach((item) => {
                  if (item !== podcastItem) {
                    item.classList.remove("active");
                    item.querySelector(".podcast-details").style.maxHeight =
                      "0px";
                  }
                });

              podcastItem.classList.toggle("active");

              if (podcastItem.classList.contains("active")) {
                details.style.maxHeight = details.scrollHeight + "px";
              } else {
                details.style.maxHeight = "0px";
              }
            });
          });

          // 4. Botão de salvar podcast
          document.querySelectorAll(".save-podcast-btn").forEach((button) => {
            button.addEventListener("click", function (e) {
              e.stopPropagation();
              const podcastName = this.dataset.podcast;

              // Salvar no localStorage
              let savedPodcasts =
                JSON.parse(localStorage.getItem("savedPodcasts")) || [];

              if (!savedPodcasts.includes(podcastName)) {
                savedPodcasts.push(podcastName);
                localStorage.setItem(
                  "savedPodcasts",
                  JSON.stringify(savedPodcasts)
                );

                // Feedback visual
                const icon = this.querySelector("i");
                icon.classList.remove("far", "fa-bookmark");
                icon.classList.add("fas", "fa-check");
                this.style.color = "var(--accent-green)";
                this.style.borderColor = "var(--accent-green)";

                setTimeout(() => {
                  icon.classList.remove("fas", "fa-check");
                  icon.classList.add("far", "fa-bookmark");
                  this.style.color = "";
                  this.style.borderColor = "";
                }, 1500);
              } else {
                // Remover se já estiver salvo
                savedPodcasts = savedPodcasts.filter(
                  (name) => name !== podcastName
                );
                localStorage.setItem(
                  "savedPodcasts",
                  JSON.stringify(savedPodcasts)
                );

                const icon = this.querySelector("i");
                icon.classList.remove("far", "fa-bookmark");
                icon.classList.add("fas", "fa-times");
                this.style.color = "var(--accent-pink)";
                this.style.borderColor = "var(--accent-pink)";

                setTimeout(() => {
                  icon.classList.remove("fas", "fa-times");
                  icon.classList.add("far", "fa-bookmark");
                  this.style.color = "";
                  this.style.borderColor = "";
                }, 1500);
              }
            });
          });

          // 5. Botão de ouvir (redirecionar para plataforma)
          document.querySelectorAll(".play-podcast-btn").forEach((button) => {
            button.addEventListener("click", function (e) {
              e.stopPropagation();
              const platform = this.dataset.platform;
              const searchQuery = this.dataset.search;

              let url = "";
              switch (platform) {
                case "YouTube":
                  url = `https://www.youtube.com/results?search_query=${searchQuery}`;
                  break;
                case "Spotify":
                  url = `https://open.spotify.com/search/${searchQuery}`;
                  break;
                case "Apple Podcasts":
                  url = `https://podcasts.apple.com/us/search?term=${searchQuery}`;
                  break;
                default:
                  // Para sites próprios, tenta buscar no Google
                  url = `https://www.google.com/search?q=${searchQuery}+podcast`;
              }

              window.open(url, "_blank");
            });
          });

          // 6. Inicializar com o primeiro nível expandido
          const firstLevel = document.querySelector(".podcast-level-card");
          if (firstLevel && !firstLevel.classList.contains("active")) {
            const firstHeader = firstLevel.querySelector(".level-header");
            firstHeader.click();
          }
        }, 300);
      }
    });

    complementaryContent.appendChild(materialsGrid);

    // Configurar toggles de conteúdo adicional dos vídeos (após renderização)
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

    // Adicionar funcionalidade ao botão "Salvar para depois"
    setTimeout(() => {
      const saveButtons = document.querySelectorAll(".save-btn");
      saveButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const videoId = this.dataset.videoId;
          const videoTitle = this.closest(
            ".individual-video-card"
          ).querySelector("h4").textContent;

          // Salvar no localStorage
          let savedVideos =
            JSON.parse(localStorage.getItem("savedGrammarVideos")) || [];

          if (!savedVideos.find((v) => v.id === videoId)) {
            savedVideos.push({
              id: videoId,
              title: videoTitle,
              savedAt: new Date().toISOString(),
            });
            localStorage.setItem(
              "savedGrammarVideos",
              JSON.stringify(savedVideos)
            );

            // Feedback visual
            const icon = this.querySelector("i");
            icon.classList.remove("fa-bookmark", "far");
            icon.classList.add("fa-check", "fas");
            this.textContent = " Salvo!";
            this.style.backgroundColor = "rgba(63, 185, 80, 0.2)";
            this.style.borderColor = "var(--accent-green)";

            setTimeout(() => {
              icon.classList.remove("fa-check", "fas");
              icon.classList.add("fa-bookmark", "far");
              this.innerHTML =
                '<i class="far fa-bookmark"></i> Salvar para depois';
              this.style.backgroundColor = "";
              this.style.borderColor = "";
            }, 2000);
          } else {
            // Já está salvo
            const icon = this.querySelector("i");
            icon.classList.remove("fa-bookmark", "far");
            icon.classList.add("fa-check", "fas");
            this.textContent = " Já salvo";

            setTimeout(() => {
              icon.classList.remove("fa-check", "fas");
              icon.classList.add("fa-bookmark", "far");
              this.innerHTML =
                '<i class="far fa-bookmark"></i> Salvar para depois';
            }, 1500);
          }
        });
      });
    }, 300);

    // Função para mostrar podcasts salvos (opcional)
    function showSavedPodcasts() {
      const savedPodcasts =
        JSON.parse(localStorage.getItem("savedPodcasts")) || [];

      if (savedPodcasts.length === 0) {
        return '<p class="no-saved">Você ainda não salvou nenhum podcast.</p>';
      }

      return `
    <div class="saved-podcasts">
      <h4><i class="fas fa-bookmark"></i> Seus Podcasts Salvos</h4>
      <div class="saved-list">
        ${savedPodcasts
          .map(
            (podcast) => `
          <div class="saved-podcast-item">
            <i class="fas fa-headphones"></i>
            <span>${podcast.replace(/-/g, " ")}</span>
            <button class="remove-saved" data-podcast="${podcast}">
              <i class="fas fa-times"></i>
            </button>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
    }
  }

  // Adicione esta função em algum lugar do seu código
  function showSavedVideos() {
    const savedVideos =
      JSON.parse(localStorage.getItem("savedGrammarVideos")) || [];

    if (savedVideos.length === 0) {
      return '<p style="text-align: center; color: var(--text-secondary); padding: 20px;">Nenhum vídeo salvo ainda.</p>';
    }

    return `
    <div class="saved-videos-list">
      <h4>📌 Seus vídeos salvos:</h4>
      ${savedVideos
        .map(
          (video) => `
        <div class="saved-video-item">
          <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
            <i class="fab fa-youtube"></i> ${video.title}
          </a>
          <span class="saved-date">Salvo em ${new Date(
            video.savedAt
          ).toLocaleDateString("pt-BR")}</span>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  }

  // Renderizar o plano de estudos
  // No arquivo 6meses.js, atualize a função renderStudyPlan:

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

    monthData.weeks.forEach((week) => {
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

        // Label - agora usando content.title se for objeto
        const label = document.createElement("span");
        label.className = `content-label ${isCompleted ? "completed" : ""}`;
        label.textContent = typeof content === 'object' ? content.title : content;

        // Botão toggle
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "toggle-btn";
        toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';

        // Conteúdo expandido
        const expandedContent = document.createElement("div");
        expandedContent.className = "expanded-content";

        // Obter recursos
        const topicTitle = typeof content === 'object' ? content.title : content;
        const resources = getResources(topicTitle);

        // Seção de vídeos
        const videosSection = document.createElement("div");
        videosSection.className = "resources-section";
        
        const videosHeader = document.createElement("div");
        videosHeader.className = "section-header";
        videosHeader.innerHTML = '<i class="fas fa-video"></i> Vídeos Recomendados';
        
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
        materialsHeader.innerHTML = '<i class="fas fa-book"></i> Materiais Complementares';
        
        const materialsList = document.createElement("ul");
        materialsList.className = "materials-list";
        
        resources.materials.forEach((material) => {
          const materialItem = createMaterialItem(material);
          materialsList.appendChild(materialItem);
        });
        
        materialsSection.appendChild(materialsHeader);
        materialsSection.appendChild(materialsList);
        expandedContent.appendChild(materialsSection);

        // SEÇÃO DE APRENDIZAGEM (NO FINAL)
        if (resources.learning && resources.learning.length > 0) {
          const learningSection = document.createElement("div");
          learningSection.className = "learning-section";
          
          const learningHeader = document.createElement("div");
          learningHeader.className = "section-header learning-header";
          learningHeader.innerHTML = '<i class="fas fa-graduation-cap"></i> O que você vai aprender';
          
          const learningList = document.createElement("ul");
          learningList.className = "learning-list";
          
          resources.learning.forEach((item) => {
            const learningItem = document.createElement("li");
            learningItem.className = "learning-item";
            learningItem.innerHTML = `<i class="fas fa-check-circle"></i> ${item}`;
            learningList.appendChild(learningItem);
          });
          
          learningSection.appendChild(learningHeader);
          learningSection.appendChild(learningList);
          expandedContent.appendChild(learningSection);
        }

        // Evento do toggle
        toggleBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          expandedContent.classList.toggle("active");
          this.classList.toggle("expanded");
          
          // Se estiver abrindo, ajustar altura
          if (expandedContent.classList.contains("active")) {
            expandedContent.style.maxHeight = expandedContent.scrollHeight + "px";
          } else {
            expandedContent.style.maxHeight = "0px";
          }
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
              expandedContent.style.maxHeight = expandedContent.scrollHeight + "px";
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

// Adicione também a função getResources no topo do arquivo
function getResources(topic) {
  return resourcesDatabase[topic] || defaultResources;
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

// js/app.js
class PWAManager {
  constructor() {
    this.deferredPrompt = null;
    this.installButton = null;
    this.installContainer = null;
    this.init();
  }

  init() {
    // Registrar Service Worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log(
              "ServiceWorker registrado com sucesso:",
              registration.scope
            );
            this.checkForUpdates(registration);
          })
          .catch((error) => {
            console.log("Falha ao registrar ServiceWorker:", error);
          });
      });
    }

    // Detectar evento de instalação
    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("beforeinstallprompt disparado");
      e.preventDefault();
      this.deferredPrompt = e;
      this.showInstallPromotion();
    });

    // Detectar se app já está instalado
    window.addEventListener("appinstalled", () => {
      console.log("App instalado com sucesso!");
      this.deferredPrompt = null;
      this.hideInstallPromotion();
    });

    // Verificar modo standalone (se já está instalado)
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("App rodando em modo standalone");
      this.onAppInstalled();
    }
  }

  showInstallPromotion() {
    // Criar botão de instalação se não existir
    if (!this.installContainer) {
      this.createInstallButton();
    }

    this.installContainer.style.display = "flex";

    // Mostrar por 10 segundos, depois esconder
    setTimeout(() => {
      if (this.installContainer) {
        this.installContainer.style.display = "none";
      }
    }, 10000);
  }

  createInstallButton() {
    this.installContainer = document.createElement("div");
    this.installContainer.className = "install-container";
    this.installContainer.innerHTML = `
      <div class="install-card">
        <div class="install-icon">
          <i class="fas fa-download"></i>
        </div>
        <div class="install-content">
          <h3>Instalar App</h3>
          <p>Instale o app para acesso offline e notificações de estudo!</p>
          <div class="install-buttons">
            <button class="install-btn" id="install-button">
              <i class="fas fa-mobile-alt"></i> Instalar
            </button>
            <button class="install-cancel" id="install-cancel">
              Agora não
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.installContainer);

    this.installButton = document.getElementById("install-button");
    const cancelButton = document.getElementById("install-cancel");

    this.installButton.addEventListener("click", () => this.installApp());
    cancelButton.addEventListener("click", () => this.hideInstallPromotion());
  }

  hideInstallPromotion() {
    if (this.installContainer) {
      this.installContainer.style.display = "none";
    }
  }

  async installApp() {
    if (!this.deferredPrompt) return;

    this.deferredPrompt.prompt();
    const { outcome } = await this.deferredPrompt.userChoice;

    console.log(`Usuário ${outcome} a instalação`);
    this.deferredPrompt = null;
    this.hideInstallPromotion();
  }

  onAppInstalled() {
    // Configurações específicas para quando o app está instalado
    console.log("App está instalado, configurando...");

    // Adicionar funcionalidades específicas para app instalado
    this.setupAppFeatures();
  }

  setupAppFeatures() {
    // Notificações diárias
    this.setupDailyNotifications();

    // Sync em background
    this.setupBackgroundSync();

    // Gerenciamento de armazenamento
    this.setupStorageManagement();
  }

  setupDailyNotifications() {
    // Pedir permissão para notificações
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Permissão para notificações concedida");
          this.scheduleDailyReminder();
        }
      });
    }
  }

  scheduleDailyReminder() {
    // Agendar notificação diária às 19:00
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Hora de Estudar Inglês!", {
          body: "Não se esqueça de completar seus estudos diários de inglês!",
          icon: "icons/icon-192x192.png",
          badge: "icons/icon-72x72.png",
          tag: "daily-reminder",
          requireInteraction: true,
          actions: [
            { action: "study", title: "Estudar Agora" },
            { action: "snooze", title: "Lembrar mais tarde" },
          ],
        });
      });
    }
  }

  setupBackgroundSync() {
    if ("serviceWorker" in navigator && "SyncManager" in window) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.sync
          .register("sync-progress")
          .then(() => console.log("Background sync registrado"))
          .catch(console.error);
      });
    }
  }

  setupStorageManagement() {
    // Monitorar uso de armazenamento
    if ("storage" in navigator && "estimate" in navigator.storage) {
      navigator.storage.estimate().then((estimate) => {
        console.log(`Usando ${estimate.usage} de ${estimate.quota} bytes`);
      });
    }
  }

  checkForUpdates(registration) {
    // Verificar atualizações periodicamente
    setInterval(() => {
      registration.update();
    }, 60 * 60 * 1000); // A cada hora
  }

  // Métodos para funcionalidades do app
  static shareProgress() {
    if (navigator.share) {
      const progress = localStorage.getItem("completedContents");
      const completed = progress ? JSON.parse(progress).length : 0;

      navigator.share({
        title: "Meu Progresso em Inglês",
        text: `Já completei ${completed} conteúdos no app Inglês em 6 Meses!`,
        url: window.location.href,
      });
    }
  }

  static addToHomeScreen() {
    // Esta função pode ser chamada de um botão no app
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
    }
  }
}

// Exportar para uso global
window.PWAManager = PWAManager;
