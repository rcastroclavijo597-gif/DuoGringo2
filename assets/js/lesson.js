(() => {
  "use strict";

  const questionSets = {
    principiante: [
      { emoji: "🐱", hint: "PISTA: UN ANIMALITO QUE DICE MIAU", question: "¿Cómo se dice “gato” en inglés?", answer: "cat", choices: ["cat", "dog", "bird", "fish"], word: ["🐱", "cat", "significa “gato”"] },
      { emoji: "🍎", hint: "PISTA: UNA FRUTA ROJA O VERDE", question: "¿Cómo se dice “manzana” en inglés?", answer: "apple", choices: ["orange", "apple", "banana", "grape"], word: ["🍎", "apple", "significa “manzana”"] },
      { emoji: "💙", hint: "PISTA: EL COLOR DEL CIELO EN UN DÍA SOLEADO", question: "¿Cómo se dice “azul” en inglés?", answer: "blue", choices: ["green", "yellow", "blue", "pink"], word: ["💙", "blue", "significa “azul”"] },
      { emoji: "🐶", hint: "PISTA: EL MEJOR AMIGO DE MUCHOS NIÑOS", question: "¿Cómo se dice “perro” en inglés?", answer: "dog", choices: ["rabbit", "dog", "cat", "horse"], word: ["🐶", "dog", "significa “perro”"] },
      { emoji: "👋", hint: "PISTA: LO DICES CUANDO SALUDAS A ALGUIEN", question: "¿Qué significa “hello”?", answer: "hola", answerLanguage: "es-ES", choices: ["adiós", "gracias", "hola", "por favor"], word: ["👋", "hello", "significa “hola”"] },
      { emoji: "☀️", hint: "PISTA: BRILLA EN EL CIELO DURANTE EL DÍA", question: "¿Cómo se dice “sol” en inglés?", answer: "sun", choices: ["moon", "star", "sun", "cloud"], word: ["☀️", "sun", "significa “sol”"] },
      { emoji: "🍌", hint: "PISTA: UNA FRUTA AMARILLA QUE LES GUSTA A LOS MONOS", question: "¿Cómo se dice “plátano” en inglés?", answer: "banana", choices: ["apple", "banana", "lemon", "pear"], word: ["🍌", "banana", "significa “plátano”"] }
    ],
    basico: [
      { emoji: "🏠", hint: "PISTA: EL LUGAR DONDE VIVES", question: "Completa: “This is my ___.” (Esta es mi casa.)", answer: "house", choices: ["school", "house", "garden", "friend"], word: ["🏠", "house", "significa “casa”"] },
      { emoji: "📚", hint: "PISTA: ALGO QUE LEES EN LA ESCUELA", question: "¿Cuál es el plural de “book”?", answer: "books", choices: ["bookes", "bookies", "books", "book"], word: ["📚", "books", "significa “libros”"] },
      { emoji: "🍽️", hint: "PISTA: LO DICES ANTES DE COMER", question: "¿Qué significa “I am hungry”?", answer: "Tengo hambre", answerLanguage: "es-ES", choices: ["Tengo sueño", "Tengo hambre", "Estoy feliz", "Tengo frío"], word: ["🍽️", "hungry", "significa “tener hambre”"] },
      { emoji: "🐦", hint: "PISTA: UN ANIMAL QUE PUEDE VOLAR", question: "Completa: “The bird ___ flying.”", answer: "is", choices: ["am", "are", "is", "be"], word: ["🐦", "bird", "significa “pájaro”"] },
      { emoji: "🧒", hint: "PISTA: HABLAS DE TI MISMO", question: "¿Cuál es la forma correcta? “___ seven years old.”", answer: "I am", choices: ["I is", "I am", "I are", "I be"], word: ["🧒", "I am", "significa “yo soy / estoy”"] },
      { emoji: "🍊", hint: "PISTA: UNA FRUTA CÍTRICA Y NARANJA", question: "¿Cómo se dice “naranja” en inglés?", answer: "orange", choices: ["peach", "orange", "grape", "lemon"], word: ["🍊", "orange", "significa “naranja”"] },
      { emoji: "🌧️", hint: "PISTA: CAE DE LAS NUBES", question: "Completa: “It is ___ today.” (Está lluvioso hoy.)", answer: "rainy", choices: ["sunny", "rainy", "windy", "cloud"], word: ["🌧️", "rainy", "significa “lluvioso”"] }
    ],
    avanzado: [
      { emoji: "🦋", hint: "PISTA: UN INSECTO DE ALAS COLORIDAS", question: "Completa: “The butterfly ___ colorful wings.”", answer: "has", choices: ["have", "has", "is", "are"], word: ["🦋", "butterfly", "significa “mariposa”"] },
      { emoji: "📖", hint: "PISTA: CUANDO TERMINAS ALGO ANTES DE OTRA COSA", question: "Completa: “She ___ her homework before dinner.”", answer: "finished", choices: ["finish", "finishes", "finished", "finishing"], word: ["📖", "before", "significa “antes de”"] },
      { emoji: "🌳", hint: "PISTA: UNA FORMA DE COMPARAR DOS COSAS", question: "Completa: “An elephant is ___ than a mouse.”", answer: "bigger", choices: ["big", "biggest", "bigger", "more big"], word: ["🐘", "bigger", "significa “más grande”"] },
      { emoji: "🧭", hint: "PISTA: PALABRA QUE SIGNIFICA “AUNQUE”", question: "¿Qué significa “although”?", answer: "aunque", answerLanguage: "es-ES", choices: ["porque", "después", "aunque", "siempre"], word: ["🧭", "although", "significa “aunque”"] },
      { emoji: "🌍", hint: "PISTA: ALGO QUE OCURRIÓ ANTES", question: "¿Cuál es el pasado de “go”?", answer: "went", choices: ["goed", "goes", "going", "went"], word: ["🌍", "went", "es el pasado de “go”"] },
      { emoji: "🎨", hint: "PISTA: UNA PALABRA PARA DAR UNA OPINIÓN", question: "Completa: “I think this story is ___.”", answer: "interesting", choices: ["interested", "interest", "interesting", "interests"], word: ["🎨", "interesting", "significa “interesante”"] },
      { emoji: "🌦️", hint: "PISTA: HABLA DE ALGO QUE PODRÍA PASAR", question: "Completa: “If it rains, we ___ stay inside.”", answer: "will", choices: ["would", "will", "are", "did"], word: ["🌦️", "will", "se usa para hablar del futuro"] }
    ]
  };

  const levels = {
    principiante: { name: "Principiante" },
    basico: { name: "Básico" },
    avanzado: { name: "Avanzado" }
  };
  const gameNames = {
    quiz: "RETO ALEATORIO",
    listen: "ESCUCHA Y ADIVINA",
    scramble: "ORDENA LAS LETRAS"
  };
  const levelButtons = [...document.querySelectorAll(".level-card")];
  const gameButtons = [...document.querySelectorAll(".game-tab")];
  const optionContainer = document.querySelector("#answer-options");
  const scrambleArea = document.querySelector("#scramble-area");
  const scrambleAnswer = document.querySelector("#scramble-answer");
  const letterOptions = document.querySelector("#letter-options");
  const checkButton = document.querySelector("#check-answer");
  const nextButton = document.querySelector("#next-question");
  const feedback = document.querySelector("#feedback");
  const voiceStatus = document.querySelector("#voice-status");
  let currentLevel = "principiante";
  let currentGame = "quiz";
  let currentQuestion;
  let selectedAnswer = null;
  let selectedLetters = [];
  let scrambledLetters = [];
  let answered = false;
  let questionNumber = 0;
  let correctCount = 0;
  let streak = 0;
  let xp = 0;
  let previousQuestion = null;

  function speak(text, language = "en-US") {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      voiceStatus.textContent = "La pronunciación no está disponible en este navegador.";
      voiceStatus.hidden = false;
      return;
    }

    voiceStatus.hidden = true;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.onerror = event => {
      if (event.error !== "canceled" && event.error !== "interrupted") {
        voiceStatus.textContent = "No se pudo reproducir el audio. Intenta tocar el botón de sonido.";
        voiceStatus.hidden = false;
      }
    };
    window.speechSynthesis.speak(utterance);
  }

  function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
  }

  function chooseQuestion() {
    let available = questionSets[currentLevel];
    if (currentGame === "listen") {
      available = available.filter(question => !question.answerLanguage);
    } else if (currentGame === "scramble") {
      available = available.filter(question => !question.answerLanguage && /^[a-z]+$/i.test(question.answer));
    }
    const questionsToChoose = available.filter(question => question !== previousQuestion);
    const selection = questionsToChoose[Math.floor(Math.random() * questionsToChoose.length)];
    previousQuestion = selection;
    return selection;
  }

  function renderQuestion() {
    currentQuestion = chooseQuestion();
    selectedAnswer = null;
    selectedLetters = [];
    scrambledLetters = [];
    answered = false;
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.className = "feedback";
    voiceStatus.hidden = true;
    checkButton.hidden = false;
    checkButton.disabled = true;
    nextButton.hidden = true;
    optionContainer.hidden = currentGame === "scramble";
    scrambleArea.hidden = currentGame !== "scramble";
    document.querySelector("#game-label").textContent = gameNames[currentGame];
    document.querySelector("#question-emoji").textContent = currentQuestion.emoji;
    document.querySelector("#question-hint").textContent = currentQuestion.hint;
    document.querySelector("#question-title").textContent = currentGame === "listen"
      ? "¿Qué palabra escuchas en inglés?"
      : currentGame === "scramble"
        ? "Ordena las letras para formar la palabra"
        : currentQuestion.question;
    document.querySelector("#question-subtitle").textContent = currentGame === "listen"
      ? "Escucha y elige la palabra que oíste"
      : currentGame === "scramble"
        ? "Toca las letras en el orden correcto"
        : "Toca una respuesta para escucharla";
    document.querySelector("#round-count").textContent = `Reto ${questionNumber + 1}`;
    document.querySelector("#level-caption").textContent = levels[currentLevel].name;
    document.querySelector("#word-emoji").textContent = currentQuestion.word[0];
    document.querySelector("#word-english").textContent = currentQuestion.word[1];
    document.querySelector("#word-translation").textContent = currentQuestion.word[2];
    const progress = (questionNumber / 5) * 100;
    document.querySelector("#progress-fill").style.width = `${progress}%`;
    document.querySelector(".progress-track").setAttribute("aria-valuenow", Math.min(questionNumber, 5));

    if (currentGame === "scramble") {
      renderScramble();
    } else {
      renderOptions();
      if (currentGame === "listen") speak(currentQuestion.answer);
    }
  }

  function renderOptions() {
    optionContainer.replaceChildren();
    shuffle(currentQuestion.choices).forEach(choice => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "answer-option";
      option.textContent = choice;
      option.setAttribute("aria-pressed", "false");
      option.addEventListener("click", () => selectAnswer(option, choice));
      optionContainer.append(option);
    });
  }

  function selectAnswer(option, answer) {
    if (answered) return;
    selectedAnswer = answer;
    optionContainer.querySelectorAll(".answer-option").forEach(button => {
      const isSelected = button === option;
      button.classList.toggle("selected", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    });
    checkButton.disabled = false;
    speak(answer, currentQuestion.answerLanguage || "en-US");
  }

  function renderScramble() {
    scrambledLetters = shuffle([...currentQuestion.answer]);
    if (scrambledLetters.join("") === currentQuestion.answer) {
      scrambledLetters = shuffle(scrambledLetters);
    }
    scrambleAnswer.replaceChildren();
    letterOptions.replaceChildren();

    scrambledLetters.forEach((letter, index) => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "letter-tile";
      tile.textContent = letter;
      tile.setAttribute("aria-label", `Letra ${letter}`);
      tile.addEventListener("click", () => selectLetter(index));
      letterOptions.append(tile);
    });
    renderLetterSlots();
  }

  function renderLetterSlots() {
    scrambleAnswer.replaceChildren();
    scrambledLetters.forEach((letter, index) => {
      const selectedPosition = selectedLetters.indexOf(index);
      const slot = document.createElement("button");
      slot.type = "button";
      slot.className = `letter-slot${selectedPosition >= 0 ? " filled" : ""}`;
      slot.textContent = selectedPosition >= 0 ? letter : "";
      slot.setAttribute("aria-label", selectedPosition >= 0 ? `Quitar letra ${letter}` : "Espacio vacío");
      slot.disabled = selectedPosition < 0 || answered;
      if (selectedPosition >= 0) {
        slot.addEventListener("click", () => {
          selectedLetters.splice(selectedPosition, 1);
          updateScramble();
        });
      }
      scrambleAnswer.append(slot);
    });
    [...letterOptions.children].forEach((tile, index) => {
      tile.disabled = selectedLetters.includes(index) || answered;
    });
  }

  function selectLetter(index) {
    if (answered || selectedLetters.includes(index)) return;
    selectedLetters.push(index);
    updateScramble();
    speak(scrambledLetters[index]);
  }

  function updateScramble() {
    selectedAnswer = selectedLetters.map(index => scrambledLetters[index]).join("");
    renderLetterSlots();
    checkButton.disabled = selectedLetters.length !== currentQuestion.answer.length;
  }

  function checkAnswer() {
    if (selectedAnswer === null || answered) return;
    answered = true;
    questionNumber += 1;
    const isCorrect = selectedAnswer === currentQuestion.answer;

    if (currentGame === "scramble") {
      renderLetterSlots();
    } else {
      const options = [...optionContainer.querySelectorAll(".answer-option")];
      options.forEach(option => {
        option.disabled = true;
        if (option.textContent === currentQuestion.answer) option.classList.add("correct");
        if (option.textContent === selectedAnswer && !isCorrect) option.classList.add("incorrect");
      });
    }

    if (isCorrect) {
      correctCount += 1;
      streak += 1;
      xp += 10;
      document.querySelector("#streak-count").textContent = streak;
      document.querySelector("#xp-count").textContent = xp;
      feedback.textContent = "¡Correcto! Eres increíble. +10 XP ⭐";
      feedback.className = "feedback correct-feedback";
      speak(currentQuestion.answer, currentQuestion.answerLanguage || "en-US");
    } else {
      streak = 0;
      document.querySelector("#streak-count").textContent = streak;
      feedback.textContent = `¡Buen intento! La respuesta correcta es “${currentQuestion.answer}”. ¡Ya aprendiste algo nuevo!`;
      feedback.className = "feedback incorrect-feedback";
    }

    feedback.hidden = false;
    checkButton.hidden = true;
    nextButton.hidden = false;
    document.querySelector("#daily-count").textContent = `${Math.min(questionNumber, 5)} de 5 preguntas`;
    document.querySelector("#daily-progress-fill").style.width = `${Math.min(questionNumber / 5 * 100, 100)}%`;
    if (questionNumber >= 5) {
      document.querySelector("#daily-count").textContent = "¡Reto completado!";
      document.querySelector(".daily-icon").textContent = "🏆";
    }
  }

  levelButtons.forEach(button => {
    button.addEventListener("click", () => {
      currentLevel = button.dataset.level;
      questionNumber = 0;
      correctCount = 0;
      previousQuestion = null;
      streak = 0;
      levelButtons.forEach(levelButton => {
        const selected = levelButton === button;
        levelButton.classList.toggle("selected", selected);
        levelButton.setAttribute("aria-pressed", String(selected));
      });
      document.querySelector("#streak-count").textContent = streak;
      document.querySelector("#daily-count").textContent = "0 de 5 preguntas";
      document.querySelector("#daily-progress-fill").style.width = "0%";
      document.querySelector(".daily-icon").textContent = "🌈";
      renderQuestion();
    });
  });

  gameButtons.forEach(button => {
    button.addEventListener("click", () => {
      currentGame = button.dataset.game;
      gameButtons.forEach(gameButton => {
        const selected = gameButton === button;
        gameButton.classList.toggle("active", selected);
        gameButton.setAttribute("aria-pressed", String(selected));
      });
      renderQuestion();
    });
  });

  document.querySelector("#repeat-audio").addEventListener("click", () => {
    if (currentQuestion) speak(currentQuestion.answer, currentQuestion.answerLanguage || "en-US");
  });
  checkButton.addEventListener("click", checkAnswer);
  nextButton.addEventListener("click", renderQuestion);
  renderQuestion();
})();
