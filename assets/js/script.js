var countdownElement = document.getElementById("countdown");
//initial time in seconds
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
    //maybe we can show the results of the quiz here?
    }
  }, 1000);
}

document.getElementById("start-quiz").addEventListener("click", function () {
  startCountdown();
var introSection = document.getElementById("intro");
var quizSection = document.getElementById("quiz");

introSection.classList.add("hide");
quizSection.classList.remove("hide");

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
      correctAnswer: 2, // Index of the correct answer in the 'answers' array
    },

    {
        question: "The condition in an if/else statement is enclosed with ______.",
        answers: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        correctAnswer: 2,
      },

      {
        question: "Arrays in JavaScript can be used to store which of the following?",
        answers: ["Strings", "Booleans", "Numbers", "All of the above"],
        correctAnswer: 4,
      },
      
      {
        question: "How do you call a function named myFunction?",
        answers: ["call myFunction()", "call function myFunction()", "myFunction()", "call MyFunction"],
        correctAnswer: 3,
      },

      {
        question: "To see if two variables are equal in type AND value you would use ____.",
        answers: ["&&", "==", "===", "||"],
        correctAnswer: 3,
      },
   
   
  ];

  texth1.textContent = quiz[0].question
  button1.textContent = quiz[0].answers[0]
  button2.textContent = quiz[0].answers[1]
  button3.textContent = quiz[0].answers[2]
  button4.textContent = quiz[0].answers[3]

  function checkAnswer(event) {
var correctAnswer = quiz[0].answers[2];
var selectedAnswer = event.target.textContent
if (correctAnswer == selectedAnswer) {alert("Correct")}
  }
  button1.addEventListener("click", checkAnswer);
  button2.addEventListener("click", checkAnswer);
  button3.addEventListener("click", checkAnswer);
  button4.addEventListener("click", checkAnswer);



  texth1.textContent = quiz[1].question
  button1.textContent = quiz[1].answers[0]
  button2.textContent = quiz[1].answers[1]
  button3.textContent = quiz[1].answers[2]
  button4.textContent = quiz[1].answers[3]

  texth1.textContent = quiz[2].question
  button1.textContent = quiz[2].answers[0]
  button2.textContent = quiz[2].answers[1]
  button3.textContent = quiz[2].answers[2]
  button4.textContent = quiz[2].answers[3]

  texth1.textContent = quiz[3].question
  button1.textContent = quiz[3].answers[0]
  button2.textContent = quiz[3].answers[1]
  button3.textContent = quiz[3].answers[2]
  button4.textContent = quiz[3].answers[3]

  texth1.textContent = quiz[4].question
  button1.textContent = quiz[4].answers[0]
  button2.textContent = quiz[4].answers[1]
  button3.textContent = quiz[4].answers[2]
  button4.textContent = quiz[4].answers[3]