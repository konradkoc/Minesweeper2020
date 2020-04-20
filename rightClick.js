let flagged = []; 
let bombsAmount = 0 ;
const scoreText = document.getElementById("score")

cells.forEach(e => e.addEventListener("contextmenu", function(ev) {
    ev.preventDefault()
    if(!gameIsOn) {
        return
    }

    const clickedCell = arrOfCells[this.id]

    if(clickedCell.state === "hidden") {

        flagged.push(clickedCell.id);
        clickedCell.state = "flagged";
        this.className = 'flagged'
        this.appendChild(document.createElement('span'))
        this.children[0].className = "fas fa-flag"
        
        bombsAmount++;
        scoreUpgrade()

        if(flagged.length === 99 ) {
            checkWin()
        }

    } else if (clickedCell.state === "flagged"){
        clickedCell.state = "hidden"
        this.textContent = ""
        this.className = "hidden"
        //get rid of the cell from flagged
        const index = flagged.indexOf(clickedCell.id)
        flagged.splice(index,1)
   
        bombsAmount--;   
        scoreUpgrade()
    
        
    }
}), false);


const scoreUpgrade = () => {

    let bombsLeft = 99 - bombsAmount;
    
    if(bombsLeft > 9){       
        scoreText.textContent = "0" + bombsLeft;
    } else if(bombsLeft >= 0 && bombsLeft < 10){
        scoreText.textContent = "00" + bombsLeft;
    } else if(bombsAmount > 99 && bombsAmount < 109) {
        scoreText.textContent = "-0" + Math.abs(bombsLeft);
    } else {
        scoreText.textContent = "-" + Math.abs(bombsLeft);
    }
}