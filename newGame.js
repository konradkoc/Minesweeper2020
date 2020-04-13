function checkWin() {
    if(flagged.length === 99 ){
        
    }

}





function newGame() {
    location.reload(true);
}
document.querySelector('button').addEventListener("click", newGame);


function youLoose(){
    console.log("you dead buddy");
    stopTimer();
    gameIsOn = 0 ; 
}
