let leftButtonDown = false;
let rightButtonDown = false;

cells.forEach(el => el.addEventListener("mousedown", function(){
    if (event.which == 1) {
        leftButtonDown = true;
    } else if (event.which == 3) {
        rightButtonDown = true;
    }
    
}));

cells.forEach(el => el.addEventListener("mouseup", function(){
    if (event.which == 1) {
        leftButtonDown = false;
    } else if (event.which == 3) {
        rightButtonDown = false;
    }
}));

let bombNearBy = 0 

cells.forEach(el => el.addEventListener("mousedown", function(){
 
    if(arrOfCells[this.id].state === "reaveled" && leftButtonDown && rightButtonDown){
        
        for(let i = 0 ; i <neighbours[this.id].length ; i ++) {
            if(arrOfCells[neighbours[this.id][i]].isBombed === true && arrOfCells[neighbours[this.id][i]].state !== "flagged"){
                popUpNeighbours(this.id)
                bombNearBy = 1;
            }
        }
            if(bombNearBy === 0) {
                toReavel.push(arrOfCells[this.id])
                reavelNeighbours()
                
            } bombNearBy = 0

       
    }}));


