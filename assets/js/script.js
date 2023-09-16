var countdownElement = document.getElementById("countdown");
var timeLeft = 120;
var checkDiv = document.getElementById("check_answers");
var score = 0;
var currentQuestionIndex = 0;
var texth1 = document.getElementById("text-questions");
var button1 = document.getElementById("answer_one");
var button2 = document.getElementById("answer_two");
var button3 = document.getElementById("answer_three");
var button4 = document.getElementById("answer_four");
var introSection = document.getElementById("intro");
var quizSection = document.getElementById("quiz");
var doneSection = document.getElementById("done");

var countdownInterval;
var quizCompleted = false;

function startCountdown() {
  countdownInterval = setInterval(function () {
    if (!quizCompleted) {
      if (timeLeft > 0) {
        countdownElement.textContent = `Time Left: ${timeLeft} seconds`;
        timeLeft--;
      } else {
        clearInterval(countdownInterval);
        if (!quizCompleted) {
          quizCompleted = true;
          updateHighScores();
        }
      }
    }
  }, 1000);
}

document.getElementById("start-quiz").addEventListener("click", function () {
  startCountdown();
  introSection.classList.add("hide");
  quizSection.classList.remove("hide");
  displayQuestion();
});

// Quiz questions and answers:
var quiz = [
  {
    question: "Commonly used data types do NOT Include:",
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
  texth1.textContent = quiz[currentQuestionIndex].question;
  button1.textContent = quiz[currentQuestionIndex].answers[0];
  button2.textContent = quiz[currentQuestionIndex].answers[1];
  button3.textContent = quiz[currentQuestionIndex].answers[2];
  button4.textContent = quiz[currentQuestionIndex].answers[3];
}

button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);

function checkAnswer(event) {
  if (!quizCompleted) {
    var correctIndex = quiz[currentQuestionIndex].correctAnswer;
    var correctAnswer = quiz[currentQuestionIndex].answers[correctIndex];
    var selectedAnswer = event.target.textContent;
    if (correctAnswer == selectedAnswer) {
      checkDiv.textContent = "Correct!";
      score++;
    } else {
      checkDiv.textContent = "Not Quite!";
      timeLeft -= 15;
    }

    if (currentQuestionIndex < quiz.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
    } else {
      doneSection.classList.remove("hide");
      quizSection.classList.add("hide");
      quizCompleted = true;
      clearInterval(countdownInterval);
      var finalScoreElement = document.getElementById("final-score");
      finalScoreElement.textContent = score;
      showHighScores();
      displayHighScores(getHighScores());
    }
  }
}

document.getElementById("submit-score").addEventListener("click", function () {
  var playerName = document.getElementById("player-name").value;
  if (playerName) {
    var playerScore = score;
    var playerInfo = { name: playerName, score: playerScore };
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(playerInfo);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "highscores.html";
  } else {
    alert("Please enter your name.");
  }
});

document.addEventListener("DOMContentLoaded", function () {

  var highScoresList = document.getElementById("high-scores-list");
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScoresList.innerHTML = "";


  highScores.forEach(function (entry) {
    var listItem = document.createElement("li");
    listItem.textContent = entry.name + ": " + entry.score;
    highScoresList.appendChild(listItem);
  });

  document.getElementById("go-back").addEventListener("click", function () {
    window.location.href = "index.html";
  });

  document.getElementById("clear-scores").addEventListener("click", function () {
    localStorage.removeItem("highScores");
    highScoresList.innerHTML = "";
  });
});





