// js/6meses.js
import { studyPlan } from "../data/studyPlan.js";
import { complementaryMaterials } from "../data/complementaryData.js";
import { getFormattedDate } from "./utils/helpers.js";

document.addEventListener("DOMContentLoaded", function () {
  // --- DOM Elements ---
  const monthsContainer = document.getElementById("months-container");
  const globalProgressFill = document.getElementById("global-progress");
  const progressText = document.getElementById("progress-text");
  const contentsCompletedElement = document.getElementById("contents-completed");
  const completionRateElement = document.getElementById("completion-rate");
  const totalContentsElement = document.getElementById("total-contents");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const resetButton = document.getElementById("reset-btn");
  const currentDayElement = document.getElementById("currentDay");
  const currentDateElement = document.getElementById("currentDate");

  // --- State ---
  let completedContents = JSON.parse(localStorage.getItem("completedContents")) || [];
  let week0Progress = JSON.parse(localStorage.getItem("week0Progress")) || { completedContents: [] };
  let currentFilter = "all";

  // --- Initialization ---
  function init() {
    updateDate();
    calculateTotals();
    renderAll();
    setupEventListeners();
    updateProgress();
  }

  function updateDate() {
    const date = getFormattedDate();
    if (currentDayElement) currentDayElement.textContent = date.dayName;
    if (currentDateElement) currentDateElement.textContent = `${date.day} de ${date.month} de ${date.year}`;
  }

  function calculateTotals() {
    let total = 0;
    studyPlan.forEach(month => {
      month.weeks.forEach(week => {
        total += week.contents.length;
      });
    });
    if (totalContentsElement) totalContentsElement.textContent = total;
    return total;
  }

  function updateProgress() {
    const total = calculateTotals();
    const completed = completedContents.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    if (globalProgressFill) globalProgressFill.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${percentage}%`;
    if (contentsCompletedElement) contentsCompletedElement.textContent = completed;
    if (completionRateElement) completionRateElement.textContent = `${percentage}%`;

    // Save to localStorage
    localStorage.setItem("completedContents", JSON.stringify(completedContents));
  }

  // --- Rendering Functions ---

  function renderAll() {
    monthsContainer.innerHTML = "";
    
    // 1. Render Week 0 (Special Section)
    const week0Data = complementaryMaterials.find(item => item.id === 'week-0');
    if (week0Data) {
      monthsContainer.appendChild(createWeek0Element(week0Data));
    }

    // 2. Render Study Plan Months
    studyPlan.forEach((month, index) => {
      monthsContainer.appendChild(createMonthElement(month, index));
    });
  }

  function createWeek0Element(data) {
    const item = document.createElement("div");
    item.className = "timeline-item week-zero-item";
    item.id = "week-zero-timeline";

    const completedInWeek0 = data.contents.filter(c => week0Progress.completedContents.includes(c.id)).length;
    const totalInWeek0 = data.contents.length;
    const percentage = Math.round((completedInWeek0 / totalInWeek0) * 100);

    item.innerHTML = `
      <div class="month-header week-zero-header" onclick="this.parentElement.classList.toggle('active')">
        <div class="month-info">
          <div class="month-icon"><i class="fas fa-${data.icon || 'star'}"></i></div>
          <div class="month-title-section">
            <h3 class="month-title">${data.title}</h3>
            <span class="month-focus">Preparação e Configuração</span>
          </div>
        </div>
        <div class="month-progress">
          <span class="month-progress-text">${percentage}%</span>
          <div class="month-toggle"><i class="fas fa-chevron-down"></i></div>
        </div>
      </div>
      <div class="month-content week-zero-content">
        <div class="week-zero-cards">
          ${data.contents.map(content => createWeek0ContentCard(content)).join('')}
        </div>
        ${data.tips ? `
          <div class="footer-hint" style="margin-top: 20px; justify-content: flex-start;">
            <i class="fas fa-lightbulb"></i>
            <span><strong>Dicas:</strong> ${data.tips[0]}</span>
          </div>
        ` : ''}
      </div>
    `;

    return item;
  }

  function createWeek0ContentCard(content) {
    const isCompleted = week0Progress.completedContents.includes(content.id);
    return `
      <div class="week-zero-content-card ${isCompleted ? 'completed' : ''}" id="w0-${content.id}">
        <div class="content-card-header" onclick="toggleWeek0Detail('${content.id}')">
          <div class="content-card-icon"><i class="fas fa-book"></i></div>
          <div class="content-card-title">
            <h4>${content.title}</h4>
            <p>${content.description}</p>
          </div>
          <div class="content-card-meta">
            <span class="meta-difficulty difficulty-${(content.difficulty || 'fácil').toLowerCase()}">${content.difficulty || 'Fácil'}</span>
          </div>
          <div class="content-card-toggle"><i class="fas fa-chevron-down"></i></div>
        </div>
        <div class="content-card-body" id="w0-body-${content.id}">
          <div class="content-section">
            <h5><i class="fas fa-video"></i> Vídeos</h5>
            <div class="content-videos">
              ${(content.videos || []).map(v => `
                <div class="content-video-card" onclick="window.open('https://youtube.com/watch?v=${v.id}', '_blank')">
                  <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="">
                  <div class="video-info">
                    <h6>${v.title}</h6>
                    <div class="video-meta"><span>${v.channel}</span></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <button class="complete-content-btn ${isCompleted ? 'completed' : ''}" onclick="toggleWeek0Complete('${content.id}')">
            <i class="fas ${isCompleted ? 'fa-check-double' : 'fa-check'}"></i>
            <span>${isCompleted ? 'Concluído!' : 'Marcar como Concluído'}</span>
          </button>
        </div>
      </div>
    `;
  }

  function createMonthElement(month, monthIndex) {
    const item = document.createElement("div");
    item.className = "timeline-item";
    
    // Calculate month progress
    let monthTotal = 0;
    let monthCompleted = 0;
    month.weeks.forEach((week, wIdx) => {
      week.contents.forEach((_, cIdx) => {
        monthTotal++;
        if (completedContents.includes(`${monthIndex}-${wIdx}-${cIdx}`)) monthCompleted++;
      });
    });
    const percentage = monthTotal > 0 ? Math.round((monthCompleted / monthTotal) * 100) : 0;

    item.innerHTML = `
      <div class="month-header" onclick="this.parentElement.classList.toggle('active')">
        <div class="month-info">
          <div class="month-icon">${monthIndex + 1}</div>
          <div class="month-title-section">
            <h3 class="month-title">${month.month}</h3>
            <span class="month-focus">${month.focus || 'Foco do mês'}</span>
          </div>
        </div>
        <div class="month-progress">
          <span class="month-progress-text">${percentage}%</span>
          <div class="month-toggle"><i class="fas fa-chevron-down"></i></div>
        </div>
      </div>
      <div class="month-content">
        <div class="weeks-container">
          ${month.weeks.map((week, weekIndex) => createWeekElement(week, monthIndex, weekIndex)).join('')}
        </div>
      </div>
    `;
    return item;
  }

  function createWeekElement(week, monthIndex, weekIndex) {
    return `
      <div class="week-item">
        <div class="week-header" onclick="this.parentElement.classList.toggle('active')">
          <h4 class="week-title"><i class="fas fa-calendar-week"></i> ${week.title}</h4>
          <div class="week-toggle"><i class="fas fa-chevron-down"></i></div>
        </div>
        <div class="week-content">
          <div class="content-items">
            ${week.contents.map((content, contentIndex) => {
              const id = `${monthIndex}-${weekIndex}-${contentIndex}`;
              const isCompleted = completedContents.includes(id);
              
              // Apply filter
              if (currentFilter === "completed" && !isCompleted) return "";
              if (currentFilter === "pending" && isCompleted) return "";

              return `
                <div class="content-item ${isCompleted ? 'completed' : ''}" onclick="toggleContent('${id}')">
                  <div class="content-checkbox">
                    ${isCompleted ? '<i class="fas fa-check"></i>' : ''}
                  </div>
                  <span class="content-text">${content}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // --- Event Handlers ---

  function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderAll();
      });
    });

    // Reset button
    if (resetButton) {
      resetButton.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja reiniciar todo o seu progresso?")) {
          completedContents = [];
          week0Progress = { completedContents: [] };
          localStorage.removeItem("completedContents");
          localStorage.removeItem("week0Progress");
          renderAll();
          updateProgress();
        }
      });
    }
  }

  // Global functions for inline onclick
  window.toggleContent = function(id) {
    const index = completedContents.indexOf(id);
    if (index > -1) {
      completedContents.splice(index, 1);
    } else {
      completedContents.push(id);
    }
    updateProgress();
    renderAll();
  };

  window.toggleWeek0Detail = function(id) {
    const card = document.getElementById(`w0-${id}`);
    if (card) card.classList.toggle('active');
  };

  window.toggleWeek0Complete = function(id) {
    const index = week0Progress.completedContents.indexOf(id);
    if (index > -1) {
      week0Progress.completedContents.splice(index, 1);
    } else {
      week0Progress.completedContents.push(id);
    }
    localStorage.setItem("week0Progress", JSON.stringify(week0Progress));
    renderAll();
  };

  // Run init
  init();
});
