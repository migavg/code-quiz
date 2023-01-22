var startButton = document.getElementById("start-button");
var quizTimer = document.querySelector(".timer");
var secondsLeft = 76;
var startPage = document.getElementById("start-page");
var questionContainer = document.getElementById("questionBlock");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");


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

function showQuestion() {
    questionElement.innerText = questionPool.firstQuestion;


}




// button that is suppose to start the quiz 
startButton.addEventListener("click", startQuiz);



