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
var questionPool =
    [
        {
            firstQuestion: "Commonly used data types DO NOT include:",
            firstAnswer: [
                { text: "alerts", correct: true },
                { text: "booleans", correct: false },
                { text: "strings", correct: false },
                { text: "numbers", correct: false },

            ]
        }
    ]


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
    questionElement.innerText = questionPool[0].firstQuestion;
    questionPool[0].firstAnswer.forEach(function(answer) {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button)
    })
}





function resetState() {
while (answerButtons.firstChild) {
    answerButtons.removeChild
    (answerButtons.firstChild)
}

}

function selectAnswer(e) {
   var selectedAnswer = e.target;
   var correct = selectedAnswer.dataset.correct;
 
}


// button that is suppose to start the quiz 
startButton.addEventListener("click", startQuiz);



