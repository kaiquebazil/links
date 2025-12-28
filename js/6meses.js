document.addEventListener("DOMContentLoaded", function () {
  const studyPlan = [
    {
      month: "Mês 1: Fundamentos",
      weeks: [
        {
          title: "Semana 1",
          contents: [
            "Alfabeto",
            "Números (0-100)",
            "Saudações básicas",
            "Apresentações pessoais",
          ],
        },
        {
          title: "Semana 2",
          contents: [
            "Pronomes pessoais",
            "Verbo 'to be' (presente)",
            "Artigos (a, an, the)",
            "Frases simples com 'to be'",
          ],
        },
        {
          title: "Semana 3",
          contents: [
            "Vocabulário: casa e família",
            "Vocabulário: comida",
            "Perguntas básicas (What, Where, Who)",
            "Prática de diálogos simples",
          ],
        },
        {
          title: "Semana 4",
          contents: [
            "Dias da semana",
            "Meses do ano",
            "Cores",
            "Descrição simples de objetos",
          ],
        },
      ],
    },
    {
      month: "Mês 2: Construindo Frases",
      weeks: [
        {
          title: "Semana 5",
          contents: [
            "Verbos de ação comuns",
            "Presente simples",
            "Rotina diária",
            "Exercícios de conjugação",
          ],
        },
        {
          title: "Semana 6",
          contents: [
            "Preposições de lugar (in, on, under)",
            "Adjetivos descritivos",
            "Frases com localização",
            "Descrição de cenas",
          ],
        },
        {
          title: "Semana 7",
          contents: [
            "Formas negativas (presente simples)",
            "Formas interrogativas",
            "Vocabulário de trabalho/escola",
            "Prática de perguntas e respostas",
          ],
        },
        {
          title: "Semana 8",
          contents: [
            "Números ordinais",
            "Como dizer horas",
            "Vocabulário de transporte",
            "Diálogos sobre horários",
          ],
        },
      ],
    },
    {
      month: "Mês 3: Passado e Futuro Simples",
      weeks: [
        {
          title: "Semana 9",
          contents: [
            "Verbos regulares no passado",
            "Expressões de tempo (yesterday, last week)",
            "Forma afirmativa do passado",
            "Exercícios de transformação",
          ],
        },
        {
          title: "Semana 10",
          contents: [
            "Verbos irregulares comuns",
            "Lista de verbos irregulares",
            "Vocabulário de viagens",
            "Contar experiências passadas",
          ],
        },
        {
          title: "Semana 11",
          contents: [
            "Futuro com 'will'",
            "Futuro com 'be going to'",
            "Diferenças entre os futuros",
            "Fazer planos futuros",
          ],
        },
        {
          title: "Semana 12",
          contents: [
            "Vocabulário de hobbies",
            "Vocabulário de lazer",
            "Descrever eventos passados",
            "Falar sobre planos de fim de semana",
          ],
        },
      ],
    },
    {
      month: "Mês 4: Expandindo o Conhecimento",
      weeks: [
        {
          title: "Semana 13",
          contents: [
            "Comparativos",
            "Superlativos",
            "Descrição de pessoas",
            "Descrição de lugares",
          ],
        },
        {
          title: "Semana 14",
          contents: [
            "Modal verbs (can, could, should)",
            "Expressar habilidades",
            "Dar conselhos",
            "Pedidos e permissões",
          ],
        },
        {
          title: "Semana 15",
          contents: [
            "Presente contínuo",
            "Ações em andamento",
            "Diferença para presente simples",
            "Descrever ações no momento",
          ],
        },
        {
          title: "Semana 16",
          contents: [
            "Vocabulário de saúde",
            "Vocabulário de bem-estar",
            "Dar direções",
            "Pedir e entender direções",
          ],
        },
      ],
    },
    {
      month: "Mês 5: Aprofundando a Gramática",
      weeks: [
        {
          title: "Semana 17",
          contents: [
            "Passado contínuo",
            "Ações simultâneas no passado",
            "Contraste com passado simples",
            "Narrar histórias",
          ],
        },
        {
          title: "Semana 18",
          contents: [
            "Present perfect (experiências)",
            "Present perfect (ações não finalizadas)",
            "For/since",
            "Conversas sobre experiências",
          ],
        },
        {
          title: "Semana 19",
          contents: [
            "Condicionais tipo 0",
            "Condicionais tipo 1",
            "Expressar causa e efeito",
            "Fazer suposições",
          ],
        },
        {
          title: "Semana 20",
          contents: [
            "Vocabulário de tecnologia",
            "Vocabulário de mídias sociais",
            "Expressar opiniões",
            "Debates simples",
          ],
        },
      ],
    },
    {
      month: "Mês 6: Revisão e Fluência",
      weeks: [
        {
          title: "Semana 21",
          contents: [
            "Revisão de tempos verbais",
            "Prática de conversação 1",
            "Correção de erros comuns",
            "Jogos de revisão",
          ],
        },
        {
          title: "Semana 22",
          contents: [
            "Leitura de textos complexos",
            "Escrita de parágrafos",
            "Estrutura de pequenos textos",
            "Exercícios de compreensão",
          ],
        },
        {
          title: "Semana 23",
          contents: [
            "Ouvir podcasts",
            "Assistir vídeos sem legendas",
            "Exercícios de compreensão auditiva",
            "Tomar notas enquanto ouve",
          ],
        },
        {
          title: "Semana 24",
          contents: [
            "Simulações de conversas 1",
            "Simulações de conversas 2",
            "Fluência e naturalidade",
            "Feedback final",
          ],
        },
      ],
    },
  ];

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

  let completedContents =
    JSON.parse(localStorage.getItem("completedContents")) || [];

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

    currentDayElement.textContent = dayName;
    currentDateElement.textContent = `${day} de ${month} de ${year}`;
  }

  // Criar mini checks para checkbox
  function createMiniChecks(checkbox) {
    const miniChecksContainer = document.createElement("div");
    miniChecksContainer.className = "mini-checks";

    // Criar 16 mini checks (4x4)
    for (let i = 0; i < 16; i++) {
      const miniCheck = document.createElement("div");
      miniCheck.className = "mini-check";
      miniChecksContainer.appendChild(miniCheck);
    }

    return miniChecksContainer;
  }

  // Renderizar o plano de estudos
  function renderStudyPlan(filter = "all") {
    monthsContainer.innerHTML = "";

    studyPlan.forEach((monthData, monthIndex) => {
      const monthCard = document.createElement("div");
      monthCard.className = "month-card";

      // Calcular progresso do mês
      let monthCompleted = 0;
      let monthTotal = 0;

      monthData.weeks.forEach((week) => {
        monthTotal += week.contents.length;
        week.contents.forEach((content, contentIndex) => {
          const contentId = `${monthIndex}-${week.title}-${contentIndex}`;
          if (completedContents.includes(contentId)) {
            monthCompleted++;
          }
        });
      });

      const monthPercentage =
        monthTotal > 0 ? Math.round((monthCompleted / monthTotal) * 100) : 0;

      const monthHeader = document.createElement("div");
      monthHeader.className = "month-header";

      const monthTitle = document.createElement("div");
      monthTitle.className = "month-title";
      monthTitle.textContent = monthData.month;

      const monthProgress = document.createElement("div");
      monthProgress.className = "month-progress";
      monthProgress.textContent = `${monthCompleted}/${monthTotal} (${monthPercentage}%)`;

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

          const checkboxContainer = document.createElement("div");
          checkboxContainer.className = "content-checkbox";
          if (isCompleted) checkboxContainer.classList.add("checked");

          // Adicionar mini checks
          const miniChecks = createMiniChecks();
          checkboxContainer.appendChild(miniChecks);

          // Adicionar ícone de check se estiver marcado
          if (isCompleted) {
            const checkIcon = document.createElement("i");
            checkIcon.className = "fas fa-check";
            checkboxContainer.appendChild(checkIcon);
          }

          const label = document.createElement("span");
          label.className = `content-label ${isCompleted ? "completed" : ""}`;
          label.textContent = content;

          checkboxContainer.addEventListener("click", function () {
            const contentId = `${monthIndex}-${week.title}-${contentIndex}`;
            const isCurrentlyCompleted = completedContents.includes(contentId);

            if (!isCurrentlyCompleted) {
              // Marcar como concluído
              completedContents.push(contentId);
              this.classList.add("checked");

              // Adicionar ícone de check
              if (!this.querySelector("i.fa-check")) {
                const checkIcon = document.createElement("i");
                checkIcon.className = "fas fa-check";
                this.appendChild(checkIcon);
              }

              // Mostrar mini checks
              const miniChecks = this.querySelector(".mini-checks");
              if (miniChecks) {
                miniChecks.style.opacity = "1";
              }

              label.classList.add("completed");
            } else {
              // Desmarcar
              completedContents = completedContents.filter(
                (id) => id !== contentId
              );
              this.classList.remove("checked");

              // Remover ícone de check
              const checkIcon = this.querySelector("i.fa-check");
              if (checkIcon) {
                this.removeChild(checkIcon);
              }

              // Esconder mini checks
              const miniChecks = this.querySelector(".mini-checks");
              if (miniChecks) {
                miniChecks.style.opacity = "0";
              }

              label.classList.remove("completed");
            }

            localStorage.setItem(
              "completedContents",
              JSON.stringify(completedContents)
            );
            updateProgress();

            // Atualizar progresso do mês
            let monthCompleted = 0;
            let monthTotal = 0;

            monthData.weeks.forEach((w) => {
              monthTotal += w.contents.length;
              w.contents.forEach((c, ci) => {
                const id = `${monthIndex}-${w.title}-${ci}`;
                if (completedContents.includes(id)) {
                  monthCompleted++;
                }
              });
            });

            const monthPercentage =
              monthTotal > 0
                ? Math.round((monthCompleted / monthTotal) * 100)
                : 0;
            monthProgress.textContent = `${monthCompleted}/${monthTotal} (${monthPercentage}%)`;
          });

          contentItem.appendChild(checkboxContainer);
          contentItem.appendChild(label);
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
    const completed = completedContents.length;
    const percentage = Math.round((completed / totalContents) * 100);

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

      // Resetar filtro para 'Todos'
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      document
        .querySelector('.filter-btn[data-filter="all"]')
        .classList.add("active");
    }
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

  // Inicializar
  updateDateTime();
  updateProgress();
  renderStudyPlan();

  // Atualizar data a cada minuto (caso a página fique aberta)
  setInterval(updateDateTime, 60000);

  // Animar entrada dos elementos
  setTimeout(() => {
    document.querySelectorAll(".month-card, .stat-card").forEach((el) => {
      el.style.animationPlayState = "running";
    });
  }, 100);
});
