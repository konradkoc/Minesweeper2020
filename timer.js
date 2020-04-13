let timer = 0;
let clockStop = 0;
let clockStop2 = 0;

function timerinnio() {
    
    setInterval(function(){
        
        if(clockStop === 0 && clockStop2 === 0 ){
        timer += 1;
        if(timer<10){
            document.getElementById("timer").textContent = "00"+ timer;
        } else if(timer>9 && timer < 100){
            document.getElementById("timer").textContent = "0" + timer;
        } else {
            document.getElementById("timer").textContent = timer;
        }}
        }, 1000)

}

document.querySelector('table').addEventListener("click", timerinnio, {once:true});

function stopTimer() {
    clockStop = 1;
    clockStop2 = 1;
}

