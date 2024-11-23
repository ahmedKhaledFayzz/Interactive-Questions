const questions = [
  {
    question: "What is the result of 'Hello' + 'World'?",
    options: ["Hello World", "HelloWorld", "Error"],
    answer: "HelloWorld",
  },
  {
    question: "What is the result of '5' + 5?",
    options: ["55", "10", "Error"],
    answer: "55",
  },
  {
    question: "What is the result of true + false?",
    options: ["1", "truefalse", "0"],
    answer: "1",
  },
  {
    question: "What does the operator '+=' do?",
    options: ["Add and assign", "Subtract and assign", "Multiply and assign"],
    answer: "Add and assign",
  },
  {
    question: "What is the result of true && false?",
    options: ["true", "false", "Error"],
    answer: "false",
  },
  {
    question: "What is the result of true || false?",
    options: ["true", "false", "Error"],
    answer: "true",
  },
  {
    question: "What does the operator '===' check?",
    options: ["Strict equality", "Loose equality", "Assignment"],
    answer: "Strict equality",
  },
  {
    question: "What is the result of 5 > 3 && 8 < 10?",
    options: ["true", "false", "undefined"],
    answer: "true",
  },
  {
    question: "What is the result of 10 + '5'?",
    options: ["15", "105", "Error"],
    answer: "105",
  },
  {
    question: "What does the operator '!=' mean?",
    options: ["Not equal", "Equal", "Assignment"],
    answer: "Not equal",
  },
  {
    question: "What is the result of '5' === 5?",
    options: ["true", "false", "undefined"],
    answer: "false",
  },
  {
    question: "What is the result of null || 'default'?",
    options: ["null", "default", "undefined"],
    answer: "default",
  },
  {
    question: "What is the result of '10' / '2'?",
    options: ["5", "10", "Error"],
    answer: "5",
  },
  {
    question: "What does the operator '||' do?",
    options: ["Logical OR", "Logical AND", "Logical NOT"],
    answer: "Logical OR",
  },
  {
    question: "What is the result of !(5 > 3)?",
    options: ["true", "false", "undefined"],
    answer: "false",
  },
  {
    question: "What does '--' do in JavaScript?",
    options: ["Decrement", "Increment", "Multiply"],
    answer: "Decrement",
  },
  {
    question: "What is the result of NaN || 10?",
    options: ["NaN", "10", "undefined"],
    answer: "10",
  },
  {
    question: "What is the result of '5' * '3'?",
    options: ["15", "53", "Error"],
    answer: "15",
  },
  {
    question: "What is the result of true && 0?",
    options: ["true", "0", "false"],
    answer: "0",
  },
  {
    question: "What is the result of 10 >= 5?",
    options: ["true", "false", "undefined"],
    answer: "true",
  },
];

let currentQuestionIndex = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.createElement("div");
const questionContainer = document.getElementById("question-container");
const successMessage = document.getElementById("success-message");

optionsContainer.classList.add("options-container", "mb-3");
questionContainer.appendChild(optionsContainer);

function loadQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    // Display options
    currentQuestion.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.classList.add(
        "btn",
        "btn-outline-primary",
        "w-100",
        "mb-2",
        "btn-lg",
        "fs-4",
        "fw-bold",
        "py-3",
        "px-4",
        "rounded-pill",
        "shadow-lg",
        "shadow-primary",
        "shadow-5-strong",

        "mb-3",
        "mt-3",
        "align-items-center"
      );
      optionButton.dataset.value = option;

      // Handle click
      optionButton.addEventListener("click", () => {
        checkAnswer(option);
      });

      optionsContainer.appendChild(optionButton);
    });
  } else {
    questionContainer.classList.add("d-none");
    successMessage.classList.remove("d-none");
  }
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.answer) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    alert("Incorrect! Try again.");
  }
}

// Load the first question
loadQuestion();
