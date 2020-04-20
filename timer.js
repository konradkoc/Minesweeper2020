
let timer = 0;
const timerEl = document.querySelector('#timer')

function timerinnio() {

    if (!gameIsOn) return

    timer += 1;
    if(timer < 10) {
        timerEl.textContent = "00"+ timer;
    } else if(timer > 9 && timer < 100) {
        timerEl.textContent = "0" + timer;
    } else {
        timerEl.textContent = timer;
    }}


let startTimer 
const stopTimer = () => clearInterval(startTimer)


document.querySelector('table').addEventListener("click", () => startTimer = setInterval(timerinnio, 1000) , {once:true});

