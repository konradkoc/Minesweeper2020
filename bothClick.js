let leftButtonDown = false;
let rightButtonDown = false;

document.querySelectorAll('td').forEach(el => el.addEventListener("mousedown", function(){
    if (event.which == 1) {
        leftButtonDown = true;
    } else if (event.which == 3) {
        rightButtonDown = true;
    }
    
}));

document.querySelectorAll('td').forEach(el => el.addEventListener("mouseup", function(){
    if (event.which == 1) {
        leftButtonDown = false;
    } else if (event.which == 3) {
        rightButtonDown = false;
    }
}));

var bombNearBy = 0 

document.querySelectorAll('td').forEach(el => el.addEventListener("mousedown", function(){
 
    if(arrOfCells[this.id].state === "reaveled" && leftButtonDown && rightButtonDown){
        
        for(let i = 0 ; i <neighbours[this.id].length ; i ++) {
            if(arrOfCells[neighbours[this.id][i]].isBombed === true && arrOfCells[neighbours[this.id][i]].state !== "flagged"){
                bombNearBy = 1;
            }
        }
            if(bombNearBy === 0) {
                toReavel.push(arrOfCells[this.id])
                reavelNeighbours()
                
            } bombNearBy = 0

       
    }}));



