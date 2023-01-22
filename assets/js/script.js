var startButton = document.getElementById("start-button");
var quizTimer = document.querySelector(".timer");
var secondsLeft = 76;
var startPage = document.getElementById("start-page");





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

}

startButton.addEventListener("click", startQuiz);

