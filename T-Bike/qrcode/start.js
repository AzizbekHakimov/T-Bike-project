'use strict'

const timerDiv = document.querySelector('.timer-div');

const timer = document.querySelector('.timerShow');
const stopBtn = document.querySelector(".stop-riding")
const costNow = document.querySelector(".costsNow")

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}
let cost = 0;
// function calculatorIncome(){
    // costNow.innerHTML = `${cost}`;
    // cost+=10
    // setTimeout("calculatorIncome()",5000)
// }

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;
    cost=cost +10;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    costNow.innerHTML = cost;
    timer.innerHTML = hr + ':' + min + ':' + sec;
    // setTimeout("calculatorIncome()", 1000);
    setTimeout("timerCycle()", 1000);
    
  }
}
const receipt =document.querySelector(".receipt")
const displayCost =document.querySelector(".display-cost")


function resetTimer() {
    timer.innerHTML = '00:00:00';
    costNow.innerHTML ="0";
}
startTimer()
stopBtn.addEventListener("click", e=>{
    stopTimer()
    timerDiv.style.display ="none";
    receipt.style.display ="flex";
    displayCost.innerHTML = `${cost} sum`
    resetTimer()
})
