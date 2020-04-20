
function checkWin() {
// check if both arrays are equal
    bombArray.sort((a,b) => a-b)
    flagged.sort((a,b) => a-b)
    
    if(JSON.stringify(flagged) === JSON.stringify(bombArray)) {
        gameIsOn = false
        animateWin()
    }
}

function animateWin() {
    const victoryArray = [90,120,150,180,211,242,213,184,154,124,94,96,126,156,186,216,246,128,158,188,218,99,100,249,250,102,103,104,131,221,313,343,316,346,371,402,378,407,
    133,163,193,223,253,136,166,196,226,107,108,257,258,229,199,169,139,141,171,201,231,261,112,113,144,174,203,202,234,264,267,237,207,177,146,115,148,119,111,433,434,435,436] 
    for(let i = 0 ; i < 480 ; i++) {
        setTimeout(() => {
        
        if(victoryArray.includes(i)) {
            cells[i].style.backgroundColor = '#FCEC09'
        } else {
            cells[i].style.backgroundColor = 'rgb(2, 109, 197)'
        }
        cells[i].textContent = ''
        }, i*10)
    }

}