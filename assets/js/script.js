// these are all my IDs that traverse the DOM 
var startButton = document.getElementById("start-button");
var secondsLeft = 76;
var startPage = document.getElementById("start-page");
var questionContainer = document.getElementById("questionBlock");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");

// these are all my classes that traverse the DOM 
var quizTimer = document.querySelector(".timer");

// a pool of questions to replace my questio id h2 tag 
var questionPool = {
    
    firstQuestion:"Commonly used data types DO NOT include:",
    secondQuestion:"What is 1 + 1?",
    secondQuestion:"What is 1 + 1?",
    secondQuestion:"What is 1 + 1?"


}



// timer function
function startQuiz() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        quizTimer.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);

startButton.classList.add("hide");
startPage.classList.add("hide");
questionContainer.classList.remove("hide");
showQuestion();
}


// shows the first question in the quiz 
function showQuestion() {
    questionElement.innerText = questionPool.firstQuestion;


}




// button that is suppose to start the quiz 
startButton.addEventListener("click", startQuiz);



