




var quizTimer = document.querySelector(".timer");
var secondsLeft = 5;





function runTimer() {
    var timeInterval = setInterval(function() {
        secondsLeft--;

    quizTimer.textContent = secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timeInterval);
    }
    },1000);
    
    }









    runTimer();