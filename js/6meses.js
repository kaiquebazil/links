// js/6meses.js
// Importar dados e funções
import { studyPlan } from "../data/studyPlan.js";
import { resourcesDatabase, defaultResources } from "../data/resources.js";
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

  // Elementos do Modal
  const fluencyBtn = document.getElementById("fluency-btn");
  const fluencyModal = document.getElementById("fluency-modal");
  const modalClose = document.getElementById("modal-close");

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

  // ========== CONTROLE DO MODAL ==========

  // Função para abrir o modal
  function openFluencyModal() {
    console.log("Abrindo modal...");
    fluencyModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Função para fechar o modal
  function closeFluencyModal() {
    console.log("Fechando modal...");
    fluencyModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  // Configurar eventos do modal
  if (fluencyBtn && fluencyModal && modalClose) {
    console.log("Elementos do modal encontrados!");

    // Abrir modal ao clicar no botão
    fluencyBtn.addEventListener("click", openFluencyModal);

    // Fechar modal com botão X
    modalClose.addEventListener("click", closeFluencyModal);

    // Fechar modal clicando fora do conteúdo
    fluencyModal.addEventListener("click", function (event) {
      if (event.target === fluencyModal) {
        closeFluencyModal();
      }
    });

    // Fechar modal com tecla ESC
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && fluencyModal.classList.contains("active")) {
        closeFluencyModal();
      }
    });
  } else {
    console.error("Erro: Elementos do modal não encontrados!");
    console.log("fluencyBtn:", fluencyBtn);
    console.log("fluencyModal:", fluencyModal);
    console.log("modalClose:", modalClose);
  }

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
  renderStudyPlan();

  // Atualizar data a cada minuto
  setInterval(updateDateTime, 60000);
});
