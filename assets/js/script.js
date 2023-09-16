var countdownElement = document.getElementById("countdown");
var timeLeft = 120;

var score = 0;
var currentQuestionIndex = 0;

function startCountdown() {
  const countdownInterval = setInterval(function () {
    if (timeLeft > 0) {
      countdownElement.textContent = `Time Left: ${timeLeft} seconds`;
      timeLeft--;
    } else {
      clearInterval(countdownInterval);
      alert(`Quiz completed! Your score: ${score}`);
    }
  }, 1000);
}

document.getElementById("start-quiz").addEventListener("click", function () {
  startCountdown();
  var introSection = document.getElementById("intro");
  var quizSection = document.getElementById("quiz");

  introSection.classList.add("hide");
  quizSection.classList.remove("hide");
  displayQuestion();
});

var texth1 = document.getElementById("text-questions");
var button1 = document.getElementById("answer_one");
var button2 = document.getElementById("answer_two");
var button3 = document.getElementById("answer_three");
var button4 = document.getElementById("answer_four");

// Quiz questions and answers:
var quiz = [
  {
    question: "Commonly used data types DO Not Include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: 2,
  },
  {
    question: "The condition in an if/else statement is enclosed with ______.",
    answers: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    correctAnswer: 1,
  },
  {
    question: "Arrays in JavaScript can be used to store which of the following?",
    answers: ["Strings", "Booleans", "Numbers", "All of the above"],
    correctAnswer: 3,
  },
  {
    question: "How do you call a function named myFunction?",
    answers: ["call myFunction()", "call function myFunction()", "myFunction()", "call MyFunction"],
    correctAnswer: 2,
  },
  {
    question: "To see if two variables are equal in type AND value you would use ____.",
    answers: ["&&", "==", "===", "||"],
    correctAnswer: 2,
  },
];
function displayQuestion() {
  texth1.textContent = quiz[currentQuestionIndex].question
  button1.textContent = quiz[currentQuestionIndex].answers[0]
  button2.textContent = quiz[currentQuestionIndex].answers[1]
  button3.textContent = quiz[currentQuestionIndex].answers[2]
  button4.textContent = quiz[currentQuestionIndex].answers[3]
}
function checkAnswer(event) {
  var correctIndex = quiz[currentQuestionIndex].correctAnswer
  var correctAnswer = quiz[currentQuestionIndex].answers[correctIndex];
  var selectedAnswer = event.target.textContent
  if (correctAnswer == selectedAnswer) { alert("Correct") }
  else { timeLeft -= 15; }

  currentQuestionIndex++;
  displayQuestion()
}
button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);


