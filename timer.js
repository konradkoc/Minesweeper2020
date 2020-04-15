
let timer = 0;
const timerEl = document.querySelector('#timer')

const timerinnio = () => {

    setInterval( () => {
  
    if(!gameIsOn) {
        return
    }

    timer += 1;

    if(timer < 10) {
        timerEl.textContent = "00"+ timer;
    } else if(timer > 9 && timer < 100) {
        timerEl.textContent = "0" + timer;
    } else {
        timerEl.textContent = timer;
    }}

    , 1000)

}

document.querySelector('table').addEventListener("click", timerinnio, {once:true});

