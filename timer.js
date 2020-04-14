let timer = 0;
let clockStop = false;
let clockStop2 = false;

const timerEl = document.querySelector('#timer')

const timerinnio = () => {
    
    setInterval( () => {
        
        if( !(clockStop&&clockStop2) ) {
            timer += 1;

            if(timer<10){
                timerEl.textContent = "00"+ timer;
            } else if(timer>9 && timer < 100) {
                timerEl.textContent = "0" + timer;
            } else {
                timerEl.textContent = timer;
            }}

        }, 1000)

}

document.querySelector('table').addEventListener("click", timerinnio, {once:true});

const stopTimer = () => {
    clockStop = true;
    clockStop2 = true;
}

