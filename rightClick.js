let flagged = []; 
var bombsAmount = 0 ;
var ifWin = 0 ;

document.querySelectorAll('td').forEach(e => e.addEventListener("contextmenu", function(ev){
    ev.preventDefault();

    if(gameIsOn){
        
        

        if(arrOfCells[this.id].state === "hidden"){
            flagged.push(arrOfCells[this.id].id);
            arrOfCells[this.id].state = "flagged";
            this.className = 'flagged'
            this.appendChild(document.createElement('span'))
            this.children[0].className = "fas fa-flag"
            bombsAmount++;

            if(flagged.length === 99 ) {
                    checkWin()
            }

            var bombsLeft = 99 - bombsAmount;
            if(bombsLeft>9){       
            document.getElementById("score").textContent = "0" + bombsLeft;
            }else if(bombsLeft>=0 && bombsLeft<10){
            document.getElementById("score").textContent = "00" + bombsLeft;
            }else if(bombsAmount>99 && bombsAmount < 109) {
            document.getElementById("score").textContent = "-0" + Math.abs(bombsLeft);
            }else {
            document.getElementById("score").textContent = "-" + Math.abs(bombsLeft);
            }

        } else if (arrOfCells[this.id].state === "flagged"){
            arrOfCells[this.id].state = "hidden";
            this.textContent = "";
            this.className = "hidden"
            var index = flagged.indexOf(arrOfCells[this.id]);
            flagged.splice(index,1);
            bombsAmount--;
            bombsLeft = 99 - bombsAmount
            if(bombsLeft>9){       
                document.getElementById("score").textContent = "0" + bombsLeft;
                }else if(bombsLeft>=0 && bombsLeft<10){
                document.getElementById("score").textContent = "00" + bombsLeft;
                }else if(bombsAmount>99 && bombsAmount < 109) {
                document.getElementById("score").textContent = "-0" + Math.abs(bombsLeft);
                }else {
                document.getElementById("score").textContent = "-" + Math.abs(bombsLeft);
                }
      
        
    }}
}), false);
