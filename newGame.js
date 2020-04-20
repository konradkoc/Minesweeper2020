const newGame = () => {
    gameIsOn = true
    //set everything to default
    arrOfCells.forEach( el => {
        el.isBombed = 'false'
        el.text = 'c'
        el.state = 'hidden'
    })

    bombTheCells()
    countBombs()

    cells.forEach(cell => {
        cell.className = "hidden"
        cell.textContent= ''
    })

    stopTimer()
    timer = 0 
    timerEl.textContent = '000'
    document.querySelector('table').addEventListener("click", () => startTimer = setInterval(timerinnio, 1000) , {once:true});

    flagged = []
    bombsAmount = 0 ;
    scoreText.textContent = '099'

}

document.querySelector('button').addEventListener("click", newGame);




