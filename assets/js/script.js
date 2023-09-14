// Set the countdown time in seconds
var countdownTimeInSeconds = 120;

// Getting the countdown element from the HTML
var countdownElement = document.getElementById('countdown');

function updateCountdown() {
    var minutes = Math.floor(countdownTimeInSeconds / 60);
    var seconds = countdownTimeInSeconds % 60;

    // Countdown clock:
    countdownElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // has the countdown reached zero?
    if (countdownTimeInSeconds <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'Time is up!';
    } else {
        countdownTimeInSeconds--;
    }
}

// Call the updateCountdown function every second (1000 milliseconds)
const countdownInterval = setInterval(updateCountdown, 1000);

// Quiz questions and answers:
var quiz = [
    {
      question: "Commonly used data types DO Not Include:",
      answers: ["Answer Strings", "Booleans", "Alerts", "Numbers"],
      correctAnswer: 3, // Index of the correct answer in the 'answers' array
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