let currentSecond = 0;
let currentCentiSecond = 0;

let maxSecond = 999;
let maxCentiSecond = 59;

const start_button = document.querySelector(".start");
const stop_button = document.querySelector(".stop");
const reset_button = document.querySelector(".reset");

const second = document.querySelector(".second");
const centiSecond = document.querySelector(".centisecond");

// second.innerHTML = "0" + currentSecond;
second.innerHTML = "00" + currentSecond;
centiSecond.innerHTML =  "0" + currentCentiSecond;

// must to be defined
let interval;

start_button.addEventListener('click', function(){
    startTimer();
});

stop_button.addEventListener('click', function(){
    stopTimer();
});

reset_button.addEventListener('click', function(){
    resetTimer();
});

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);

    currentSecond  = 0;
    currentCentiSecond = 0;
    second.innerHTML = "00" + currentSecond;
    centiSecond.innerHTML = "0" + currentCentiSecond;
}

function startTimer() {
    interval = setInterval(function(){
        currentCentiSecond += 1;

        if( currentSecond >= maxSecond && currentCentiSecond > maxCentiSecond ) {
            console.log('ud berhenti harusnya');
            clearInterval(interval);
        } else if( currentCentiSecond > 9 && currentCentiSecond <= maxCentiSecond ) {
            centiSecond.innerHTML = currentCentiSecond;
        } else if( currentCentiSecond > maxCentiSecond ) {
            // centiSecond.innerHTML = currentCentiSecond;
            currentCentiSecond = 0;
            currentSecond += 1;
            if( currentSecond > 9 && currentSecond <= 99 ) {
                second.innerHTML = "0" + currentSecond;
            } else if( currentSecond > 99 ) {
                second.innerHTML = currentSecond;
            } else {
                second.innerHTML = "00" + currentSecond;

            }
        } else {
            centiSecond.innerHTML = "0" + currentCentiSecond;
        }
    }, 16.666666666666668);
}