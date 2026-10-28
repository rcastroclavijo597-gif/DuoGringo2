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
      { emoji: "🍌", hint: "PISTA: UNA FRUTA AMARILLA QUE LES GUSTA A LOS MONOS", question: "¿Cómo se dice “plátano” en inglés?", answer: "banana", choices: ["apple", "banana", "lemon", "pear"], word: ["🍌", "banana", "significa “plátano”"] },
      { emoji: "📘", hint: "PISTA: LO USAS PARA LEER", question: "¿Cómo se dice “libro” en inglés?", answer: "book", choices: ["book", "pen", "desk", "door"], word: ["📘", "book", "significa “libro”"] },
      { emoji: "❤️", hint: "PISTA: EL COLOR DE UN TOMATE MADURO", question: "¿Cómo se dice “rojo” en inglés?", answer: "red", choices: ["blue", "red", "green", "white"], word: ["❤️", "red", "significa “rojo”"] },
      { emoji: "💧", hint: "PISTA: LA BEBIDA QUE NECESITAS TODOS LOS DÍAS", question: "¿Cómo se dice “agua” en inglés?", answer: "water", choices: ["juice", "milk", "water", "tea"], word: ["💧", "water", "significa “agua”"] },
      { emoji: "⭐", hint: "PISTA: BRILLA EN EL CIELO DE NOCHE", question: "¿Cómo se dice “estrella” en inglés?", answer: "star", choices: ["moon", "star", "sun", "cloud"], word: ["⭐", "star", "significa “estrella”"] },
      { emoji: "🐰", hint: "PISTA: UN ANIMALITO DE OREJAS LARGAS", question: "¿Cómo se dice “conejo” en inglés?", answer: "rabbit", choices: ["rabbit", "turtle", "horse", "duck"], word: ["🐰", "rabbit", "significa “conejo”"] },
      { emoji: "🌙", hint: "PISTA: BRILLA EN EL CIELO DE NOCHE", question: "¿Cómo se dice “luna” en inglés?", answer: "moon", choices: ["sun", "moon", "star", "sky"], word: ["🌙", "moon", "significa “luna”"] },
      { emoji: "🐟", hint: "PISTA: VIVE EN EL AGUA Y TIENE ALETAS", question: "¿Cómo se dice “pez” en inglés?", answer: "fish", choices: ["frog", "fish", "bird", "cat"], word: ["🐟", "fish", "significa “pez”"] },
      { emoji: "🍇", hint: "PISTA: RACIMOS DE PEQUEÑAS FRUTAS", question: "¿Cómo se dice “uvas” en inglés?", answer: "grapes", choices: ["grapes", "apples", "peaches", "pears"], word: ["🍇", "grapes", "significa “uvas”"] },
      { emoji: "🌳", hint: "PISTA: TIENE TRONCO Y MUCHAS HOJAS", question: "¿Cómo se dice “árbol” en inglés?", answer: "tree", choices: ["flower", "grass", "tree", "cloud"], word: ["🌳", "tree", "significa “árbol”"] },
      { emoji: "🐻", hint: "PISTA: UN ANIMAL GRANDE Y PELUDO", question: "¿Cómo se dice “oso” en inglés?", answer: "bear", choices: ["bear", "lion", "mouse", "sheep"], word: ["🐻", "bear", "significa “oso”"] },
      { emoji: "💚", hint: "PISTA: EL COLOR DE LAS HOJAS", question: "¿Cómo se dice “verde” en inglés?", answer: "green", choices: ["purple", "green", "orange", "black"], word: ["💚", "green", "significa “verde”"] },
      { emoji: "🥛", hint: "PISTA: UNA BEBIDA BLANCA QUE VIENE DE LA VACA", question: "¿Cómo se dice “leche” en inglés?", answer: "milk", choices: ["water", "juice", "milk", "bread"], word: ["🥛", "milk", "significa “leche”"] },
      { emoji: "🌸", hint: "PISTA: UNA PLANTA CON PÉTALOS DE COLORES", question: "¿Cómo se dice “flor” en inglés?", answer: "flower", choices: ["flower", "tree", "leaf", "fruit"], word: ["🌸", "flower", "significa “flor”"] },
      { emoji: "🚗", hint: "PISTA: UN VEHÍCULO CON CUATRO RUEDAS", question: "¿Cómo se dice “coche” en inglés?", answer: "car", choices: ["bus", "bike", "car", "boat"], word: ["🚗", "car", "significa “coche”"] }
    ],
    basico: [
      { emoji: "🏠", hint: "PISTA: EL LUGAR DONDE VIVES", question: "Completa: “This is my ___.” (Esta es mi casa.)", answer: "house", choices: ["school", "house", "garden", "friend"], word: ["🏠", "house", "significa “casa”"] },
      { emoji: "📚", hint: "PISTA: ALGO QUE LEES EN LA ESCUELA", question: "¿Cuál es el plural de “book”?", answer: "books", choices: ["bookes", "bookies", "books", "book"], word: ["📚", "books", "significa “libros”"] },
      { emoji: "🍽️", hint: "PISTA: LO DICES ANTES DE COMER", question: "¿Qué significa “I am hungry”?", answer: "Tengo hambre", answerLanguage: "es-ES", choices: ["Tengo sueño", "Tengo hambre", "Estoy feliz", "Tengo frío"], word: ["🍽️", "hungry", "significa “tener hambre”"] },
      { emoji: "🐦", hint: "PISTA: UN ANIMAL QUE PUEDE VOLAR", question: "Completa: “The bird ___ flying.”", answer: "is", choices: ["am", "are", "is", "be"], word: ["🐦", "bird", "significa “pájaro”"] },
      { emoji: "🧒", hint: "PISTA: HABLAS DE TI MISMO", question: "¿Cuál es la forma correcta? “___ seven years old.”", answer: "I am", choices: ["I is", "I am", "I are", "I be"], word: ["🧒", "I am", "significa “yo soy / estoy”"] },
      { emoji: "🍊", hint: "PISTA: UNA FRUTA CÍTRICA Y NARANJA", question: "¿Cómo se dice “naranja” en inglés?", answer: "orange", choices: ["peach", "orange", "grape", "lemon"], word: ["🍊", "orange", "significa “naranja”"] },
      { emoji: "🌧️", hint: "PISTA: CAE DE LAS NUBES", question: "Completa: “It is ___ today.” (Está lluvioso hoy.)", answer: "rainy", choices: ["sunny", "rainy", "windy", "cloud"], word: ["🌧️", "rainy", "significa “lluvioso”"] },
      { emoji: "🪑", hint: "PISTA: TE SIENTAS EN ELLA", question: "¿Cómo se dice “silla” en inglés?", answer: "chair", choices: ["table", "chair", "window", "floor"], word: ["🪑", "chair", "significa “silla”"] },
      { emoji: "🏊", hint: "PISTA: LO HACES EN UNA PISCINA", question: "Completa: “I can ___.” (Puedo nadar.)", answer: "swim", choices: ["run", "jump", "swim", "sleep"], word: ["🏊", "swim", "significa “nadar”"] },
      { emoji: "👧", hint: "PISTA: ES LA HIJA DE TUS MISMOS PADRES", question: "¿Cómo se dice “hermana” en inglés?", answer: "sister", choices: ["mother", "cousin", "sister", "aunt"], word: ["👧", "sister", "significa “hermana”"] },
      { emoji: "🌞", hint: "PISTA: ASÍ ESTÁ EL DÍA CUANDO HAY MUCHO SOL", question: "Completa: “It is ___ outside.”", answer: "sunny", choices: ["cloudy", "sunny", "rainy", "cold"], word: ["🌞", "sunny", "significa “soleado”"] },
      { emoji: "🍞", hint: "PISTA: UN ALIMENTO QUE SE HACE CON HARINA", question: "¿Cómo se dice “pan” en inglés?", answer: "bread", choices: ["cheese", "bread", "rice", "soup"], word: ["🍞", "bread", "significa “pan”"] },
      { emoji: "🪟", hint: "PISTA: TE DEJA MIRAR HACIA AFUERA", question: "¿Cómo se dice “ventana” en inglés?", answer: "window", choices: ["door", "wall", "window", "floor"], word: ["🪟", "window", "significa “ventana”"] },
      { emoji: "👟", hint: "PISTA: TE LO PONES EN EL PIE PARA CAMINAR", question: "¿Cómo se dice “zapato” en inglés?", answer: "shoe", choices: ["shirt", "sock", "shoe", "hat"], word: ["👟", "shoe", "significa “zapato”"] },
      { emoji: "⏰", hint: "PISTA: TE DICE QUÉ HORA ES", question: "¿Cómo se dice “reloj” en inglés?", answer: "clock", choices: ["clock", "phone", "pencil", "plate"], word: ["⏰", "clock", "significa “reloj”"] },
      { emoji: "🍳", hint: "PISTA: LA PRIMERA COMIDA DEL DÍA", question: "¿Cómo se dice “desayuno” en inglés?", answer: "breakfast", choices: ["lunch", "dinner", "snack", "breakfast"], word: ["🍳", "breakfast", "significa “desayuno”"] },
      { emoji: "🐴", hint: "PISTA: UN ANIMAL QUE PUEDES MONTAR", question: "¿Cómo se dice “caballo” en inglés?", answer: "horse", choices: ["horse", "sheep", "goat", "duck"], word: ["🐴", "horse", "significa “caballo”"] },
      { emoji: "📏", hint: "PISTA: LO USAS PARA MEDIR UNA LÍNEA", question: "¿Cómo se dice “regla” en inglés?", answer: "ruler", choices: ["eraser", "ruler", "notebook", "marker"], word: ["📏", "ruler", "significa “regla”"] },
      { emoji: "🌬️", hint: "PISTA: CUANDO EL AIRE SE MUEVE MUCHO", question: "Completa: “It is ___ today.”", answer: "windy", choices: ["windy", "cloud", "sun", "snow"], word: ["🌬️", "windy", "significa “ventoso”"] },
      { emoji: "🏃‍♀️", hint: "PISTA: EL OPUESTO DE “SLOW”", question: "¿Qué significa “fast”?", answer: "rápido", answerLanguage: "es-ES", choices: ["lento", "rápido", "alto", "corto"], word: ["🏃‍♀️", "fast", "significa “rápido”"] },
      { emoji: "🎒", hint: "PISTA: LA LLEVAS EN LA ESPALDA A LA ESCUELA", question: "¿Cómo se dice “mochila” en inglés?", answer: "backpack", choices: ["backpack", "jacket", "lunchbox", "pencil"], word: ["🎒", "backpack", "significa “mochila”"] }
    ],
    avanzado: [
      { emoji: "🦋", hint: "PISTA: UN INSECTO DE ALAS COLORIDAS", question: "Completa: “The butterfly ___ colorful wings.”", answer: "has", choices: ["have", "has", "is", "are"], word: ["🦋", "butterfly", "significa “mariposa”"] },
      { emoji: "📖", hint: "PISTA: CUANDO TERMINAS ALGO ANTES DE OTRA COSA", question: "Completa: “She ___ her homework before dinner.”", answer: "finished", choices: ["finish", "finishes", "finished", "finishing"], word: ["📖", "before", "significa “antes de”"] },
      { emoji: "🌳", hint: "PISTA: UNA FORMA DE COMPARAR DOS COSAS", question: "Completa: “An elephant is ___ than a mouse.”", answer: "bigger", choices: ["big", "biggest", "bigger", "more big"], word: ["🐘", "bigger", "significa “más grande”"] },
      { emoji: "🧭", hint: "PISTA: PALABRA QUE SIGNIFICA “AUNQUE”", question: "¿Qué significa “although”?", answer: "aunque", answerLanguage: "es-ES", choices: ["porque", "después", "aunque", "siempre"], word: ["🧭", "although", "significa “aunque”"] },
      { emoji: "🌍", hint: "PISTA: ALGO QUE OCURRIÓ ANTES", question: "¿Cuál es el pasado de “go”?", answer: "went", choices: ["goed", "goes", "going", "went"], word: ["🌍", "went", "es el pasado de “go”"] },
      { emoji: "🎨", hint: "PISTA: UNA PALABRA PARA DAR UNA OPINIÓN", question: "Completa: “I think this story is ___.”", answer: "interesting", choices: ["interested", "interest", "interesting", "interests"], word: ["🎨", "interesting", "significa “interesante”"] },
      { emoji: "🌦️", hint: "PISTA: HABLA DE ALGO QUE PODRÍA PASAR", question: "Completa: “If it rains, we ___ stay inside.”", answer: "will", choices: ["would", "will", "are", "did"], word: ["🌦️", "will", "se usa para hablar del futuro"] },
      { emoji: "🧤", hint: "PISTA: LO HACES PARA NO COMETER ERRORES", question: "Completa: “Be ___ when you cross the street.”", answer: "careful", choices: ["carefully", "careful", "careless", "caring"], word: ["🧤", "careful", "significa “cuidadoso”"] },
      { emoji: "🏃", hint: "PISTA: DESCRIBE CÓMO SE MUEVE ALGUIEN CON RAPIDEZ", question: "Completa: “She runs ___.”", answer: "quickly", choices: ["quick", "quickly", "quicker", "quickest"], word: ["🏃", "quickly", "significa “rápidamente”"] },
      { emoji: "🧩", hint: "PISTA: CONECTA UNA RAZÓN CON SU RESULTADO", question: "¿Qué significa “because”?", answer: "porque", answerLanguage: "es-ES", choices: ["aunque", "porque", "entonces", "mientras"], word: ["🧩", "because", "significa “porque”"] },
      { emoji: "🏔️", hint: "PISTA: EL SUPERLATIVO DE “LARGE”", question: "Completa: “That is the ___ mountain in the country.”", answer: "largest", choices: ["larger", "large", "largest", "more large"], word: ["🏔️", "largest", "significa “el más grande”"] },
      { emoji: "🧪", hint: "PISTA: UN LUGAR DONDE SE HACEN EXPERIMENTOS", question: "¿Cómo se dice “laboratorio” en inglés?", answer: "laboratory", choices: ["library", "laboratory", "factory", "classroom"], word: ["🧪", "laboratory", "significa “laboratorio”"] },
      { emoji: "🦉", hint: "PISTA: UN AVE QUE SUELE ESTAR DESPIERTA DE NOCHE", question: "¿Cómo se dice “búho” en inglés?", answer: "owl", choices: ["eagle", "owl", "parrot", "swan"], word: ["🦉", "owl", "significa “búho”"] },
      { emoji: "🛫", hint: "PISTA: EL LUGAR DONDE TOMAS UN AVIÓN", question: "¿Cómo se dice “aeropuerto” en inglés?", answer: "airport", choices: ["station", "airport", "harbor", "museum"], word: ["🛫", "airport", "significa “aeropuerto”"] },
      { emoji: "🌊", hint: "PISTA: UNA GRAN EXTENSIÓN DE AGUA SALADA", question: "¿Cómo se dice “océano” en inglés?", answer: "ocean", choices: ["river", "lake", "ocean", "island"], word: ["🌊", "ocean", "significa “océano”"] },
      { emoji: "🔍", hint: "PISTA: BUSCAR INFORMACIÓN PARA ENCONTRAR UNA RESPUESTA", question: "¿Qué significa “discover”?", answer: "descubrir", answerLanguage: "es-ES", choices: ["olvidar", "descubrir", "construir", "dibujar"], word: ["🔍", "discover", "significa “descubrir”"] },
      { emoji: "🌱", hint: "PISTA: HACER QUE ALGO CREZCA O SE HAGA MAYOR", question: "¿Qué significa “improve”?", answer: "mejorar", answerLanguage: "es-ES", choices: ["empezar", "mejorar", "explicar", "elegir"], word: ["🌱", "improve", "significa “mejorar”"] },
      { emoji: "🧳", hint: "PISTA: UN VIAJE QUE HACES POR DIVERSIÓN", question: "¿Qué significa “journey”?", answer: "viaje", answerLanguage: "es-ES", choices: ["camino", "viaje", "equipaje", "destino"], word: ["🧳", "journey", "significa “viaje”"] },
      { emoji: "💭", hint: "PISTA: PALABRA PARA DECIR “SIN EMBARGO”", question: "¿Qué significa “however”?", answer: "sin embargo", answerLanguage: "es-ES", choices: ["por ejemplo", "sin embargo", "por eso", "además"], word: ["💭", "however", "significa “sin embargo”"] },
      { emoji: "🌟", hint: "PISTA: ALGO EXTRAORDINARIO Y FUERA DE LO COMÚN", question: "¿Qué significa “remarkable”?", answer: "extraordinario", answerLanguage: "es-ES", choices: ["ordinario", "extraordinario", "complicado", "desconocido"], word: ["🌟", "remarkable", "significa “extraordinario”"] },
      { emoji: "🌿", hint: "PISTA: ALGO QUE SE PUEDE MANTENER SIN DAÑAR EL ENTORNO", question: "¿Qué significa “sustainable”?", answer: "sostenible", answerLanguage: "es-ES", choices: ["renovable", "sostenible", "reciclado", "natural"], word: ["🌿", "sustainable", "significa “sostenible”"] }
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
  const quizCard = document.querySelector("#quiz-card");
  const startButton = document.querySelector("#start-quiz");
  const exitButton = document.querySelector("#exit-quiz");
  const scrambleArea = document.querySelector("#scramble-area");
  const scrambleAnswer = document.querySelector("#scramble-answer");
  const letterOptions = document.querySelector("#letter-options");
  const checkButton = document.querySelector("#check-answer");
  const nextButton = document.querySelector("#next-question");
  const feedback = document.querySelector("#feedback");
  const voiceStatus = document.querySelector("#voice-status");
  const timerDisplay = document.querySelector("#question-timer");
  const timerWrap = document.querySelector("#question-timer-wrap");
  const challengeCelebration = document.querySelector("#challenge-celebration");
  const dailyProgress = document.querySelector(".daily-progress");
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
  const seenQuestions = new Set();
  let timerInterval = null;
  let timeLeft = 10;

  function stopTimer() {
    window.clearInterval(timerInterval);
    timerInterval = null;
  }

  function startTimer(seconds = 10) {
    stopTimer();
    timeLeft = seconds;
    timerDisplay.textContent = timeLeft;
    timerWrap.classList.remove("is-urgent");
    timerWrap.setAttribute("aria-label", `Tiempo restante: ${timeLeft} segundos`);
    timerInterval = window.setInterval(() => {
      timeLeft -= 1;
      timerDisplay.textContent = timeLeft;
      timerWrap.classList.toggle("is-urgent", timeLeft <= 3);
      timerWrap.setAttribute("aria-label", `Tiempo restante: ${timeLeft} segundos`);
      if (timeLeft <= 0) finishQuestion(null, true);
    }, 1000);
  }

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

  function scrambleTimeLimit(answer) {
    return Math.min(30, 10 + Math.max(0, answer.length - 5) * 2);
  }

  function chooseQuestion() {
    let available = questionSets[currentLevel];
    if (currentGame === "listen") {
      available = available.filter(question => !question.answerLanguage);
    } else if (currentGame === "scramble") {
      available = available.filter(question => !question.answerLanguage && /^[a-z]+$/i.test(question.answer));
    }
    const questionsToChoose = available.filter(question => !seenQuestions.has(question));
    const selection = questionsToChoose[Math.floor(Math.random() * questionsToChoose.length)];
    if (selection) seenQuestions.add(selection);
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
    timerWrap.hidden = !currentQuestion;
    document.querySelector("#repeat-audio").hidden = !currentQuestion;
    if (!currentQuestion) {
      stopTimer();
      document.querySelector("#question-emoji").textContent = "🎉";
      document.querySelector("#question-hint").textContent = "¡EXCELENTE TRABAJO!";
      document.querySelector("#question-title").textContent = "¡Ya practicaste todas las preguntas nuevas!";
      document.querySelector("#question-subtitle").textContent = "Cambia el nivel o el juego para seguir aprendiendo.";
      document.querySelector("#round-count").textContent = "Reto completado";
      optionContainer.hidden = true;
      scrambleArea.hidden = true;
      checkButton.hidden = true;
      feedback.textContent = "No repetiremos preguntas que ya jugaste.";
      feedback.className = "feedback correct-feedback";
      feedback.hidden = false;
      return;
    }
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
        ? "Toca las letras o escríbelas con el teclado"
        : "Toca una respuesta para escucharla";
    document.querySelector("#round-count").textContent = `Reto ${questionNumber + 1}`;
    document.querySelector("#level-caption").textContent = levels[currentLevel].name;
    document.querySelector("#word-emoji").textContent = currentQuestion.word[0];
    document.querySelector("#word-english").textContent = currentQuestion.word[1];
    document.querySelector("#word-translation").textContent = currentQuestion.word[2];
    const progress = (Math.min(correctCount, 5) / 5) * 100;
    document.querySelector("#progress-fill").style.width = `${progress}%`;
    document.querySelector(".progress-track").setAttribute("aria-valuenow", Math.min(correctCount, 5));

    if (currentGame === "scramble") {
      renderScramble();
    } else {
      renderOptions();
      if (currentGame === "listen") speak(currentQuestion.answer);
    }
    startTimer(currentGame === "scramble" ? scrambleTimeLimit(currentQuestion.answer) : 10);
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
    if (scrambledLetters.join("") === currentQuestion.answer && scrambledLetters.length > 1) {
      scrambledLetters.push(scrambledLetters.shift());
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
    scrambledLetters.forEach((_, position) => {
      const selectedLetterIndex = selectedLetters[position];
      const slot = document.createElement("button");
      slot.type = "button";
      slot.className = `letter-slot${selectedLetterIndex !== undefined ? " filled" : ""}`;
      slot.textContent = selectedLetterIndex !== undefined ? scrambledLetters[selectedLetterIndex] : "";
      slot.setAttribute("aria-label", selectedLetterIndex !== undefined ? `Quitar letra ${scrambledLetters[selectedLetterIndex]}` : "Espacio vacío");
      slot.disabled = selectedLetterIndex === undefined || answered;
      if (selectedLetterIndex !== undefined) {
        slot.addEventListener("click", () => {
          selectedLetters.splice(position, 1);
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

  function handleScrambleKey(event) {
    if (quizCard.hidden || answered || currentGame !== "scramble") return;
    if (event.target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;

    if (event.key === "Backspace") {
      if (selectedLetters.length > 0) {
        event.preventDefault();
        selectedLetters.pop();
        updateScramble();
      }
      return;
    }

    if (event.key === "Enter") {
      if (selectedLetters.length === currentQuestion.answer.length) {
        event.preventDefault();
        checkAnswer();
      }
      return;
    }

    if (!/^[a-z]$/i.test(event.key)) return;
    const letterIndex = scrambledLetters.findIndex((letter, index) =>
      letter.toLowerCase() === event.key.toLowerCase() && !selectedLetters.includes(index)
    );
    if (letterIndex >= 0) {
      event.preventDefault();
      selectLetter(letterIndex);
    }
  }

  function updateScramble() {
    selectedAnswer = selectedLetters.map(index => scrambledLetters[index]).join("");
    renderLetterSlots();
    checkButton.disabled = selectedLetters.length !== currentQuestion.answer.length;
  }

  function checkAnswer() {
    if (selectedAnswer === null || answered) return;
    finishQuestion(selectedAnswer);
  }

  function finishQuestion(answer, timedOut = false) {
    if (answered || !currentQuestion) return;
    stopTimer();
    answered = true;
    questionNumber += 1;
    const isCorrect = answer === currentQuestion.answer;

    if (timedOut && currentGame === "scramble") {
      const remainingLetters = [...scrambledLetters];
      selectedLetters = [...currentQuestion.answer].map(letter => {
        const index = remainingLetters.indexOf(letter);
        remainingLetters[index] = "";
        return index;
      });
    }

    if (currentGame === "scramble") {
      renderLetterSlots();
    } else {
      const options = [...optionContainer.querySelectorAll(".answer-option")];
      options.forEach(option => {
        option.disabled = true;
        if (option.textContent === currentQuestion.answer) option.classList.add("correct");
        if (option.textContent === answer && !isCorrect) option.classList.add("incorrect");
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
      feedback.textContent = timedOut
        ? `¡Se acabó el tiempo! La respuesta correcta es “${currentQuestion.answer}”.`
        : `¡Buen intento! La respuesta correcta es “${currentQuestion.answer}”. ¡Ya aprendiste algo nuevo!`;
      feedback.className = "feedback incorrect-feedback";
    }

    feedback.hidden = false;
    checkButton.hidden = true;
    nextButton.hidden = false;
    document.querySelector("#progress-fill").style.width = `${Math.min(correctCount / 5 * 100, 100)}%`;
    document.querySelector(".progress-track").setAttribute("aria-valuenow", Math.min(correctCount, 5));
    document.querySelector("#daily-count").textContent = `${Math.min(correctCount, 5)} de 5 respuestas correctas`;
    document.querySelector("#daily-progress-fill").style.width = `${Math.min(correctCount / 5 * 100, 100)}%`;
    if (correctCount === 5) {
      challengeCelebration.hidden = false;
      challengeCelebration.classList.add("is-celebrating");
      dailyProgress.classList.add("is-complete");
      document.querySelector("#daily-count").textContent = "¡Reto completado!";
      document.querySelector(".daily-icon").textContent = "🏆";
    }
  }

  levelButtons.forEach(button => {
    button.addEventListener("click", () => {
      currentLevel = button.dataset.level;
      questionNumber = 0;
      correctCount = 0;
      streak = 0;
      levelButtons.forEach(levelButton => {
        const selected = levelButton === button;
        levelButton.classList.toggle("selected", selected);
        levelButton.setAttribute("aria-pressed", String(selected));
      });
      document.querySelector("#streak-count").textContent = streak;
      document.querySelector("#daily-count").textContent = "0 de 5 respuestas correctas";
      document.querySelector("#daily-progress-fill").style.width = "0%";
      dailyProgress.classList.remove("is-complete");
      challengeCelebration.classList.remove("is-celebrating");
      challengeCelebration.hidden = true;
      document.querySelector(".daily-icon").textContent = "🌈";
      if (!quizCard.hidden) renderQuestion();
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
      if (!quizCard.hidden) renderQuestion();
    });
  });

  document.querySelector("#repeat-audio").addEventListener("click", () => {
    if (currentQuestion) speak(currentQuestion.answer, currentQuestion.answerLanguage || "en-US");
  });
  checkButton.addEventListener("click", checkAnswer);
  nextButton.addEventListener("click", renderQuestion);
  document.addEventListener("keydown", handleScrambleKey);
  startButton.addEventListener("click", async () => {
    startButton.hidden = true;
    quizCard.hidden = false;
    quizCard.classList.add("is-fullscreen");
    document.body.classList.add("quiz-open");
    renderQuestion();
    const requestFullscreen = quizCard.requestFullscreen || quizCard.webkitRequestFullscreen;
    if (typeof requestFullscreen === "function") {
      try {
        await requestFullscreen.call(quizCard);
      } catch {
        // Keep the in-page fullscreen layout when native fullscreen is unavailable.
      }
    }
    quizCard.focus();
  });
  exitButton.addEventListener("click", async () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
    const exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen;
    if (fullscreenElement === quizCard && typeof exitFullscreen === "function") {
      try {
        await exitFullscreen.call(document);
      } catch (error) {
        console.error("No se pudo salir de la pantalla completa nativa.", error);
        voiceStatus.textContent = "No se pudo salir de la pantalla completa. Inténtalo de nuevo.";
        voiceStatus.hidden = false;
        return;
      }
    }
    closeQuiz();
  });
  ["fullscreenchange", "webkitfullscreenchange"].forEach(eventName => {
    document.addEventListener(eventName, () => {
      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;
      if (fullscreenElement !== quizCard && quizCard.classList.contains("is-fullscreen")) closeQuiz();
    });
  });

  function closeQuiz() {
    stopTimer();
    if (quizCard.hidden) return;
    quizCard.classList.remove("is-fullscreen");
    document.body.classList.remove("quiz-open");
    quizCard.hidden = true;
    startButton.hidden = false;
    startButton.focus();
  }
})();
