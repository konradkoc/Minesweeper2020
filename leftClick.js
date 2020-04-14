let toReavel = [];

function reavelNeighbours() {

    while(toReavel.length>0){
        for(i=0;i<toReavel[0].neighbours.length;i++){
            if(arrOfCells[toReavel[0].neighbours[i]].state === "hidden"){
                arrOfCells[toReavel[0].neighbours[i]].state = "reaveled";
                
                document.getElementById(toReavel[0].neighbours[i]).className = "reaveled";
                    
                        if(arrOfCells[toReavel[0].neighbours[i]].text === 0){
                            document.getElementById(toReavel[0].neighbours[i]).textContent = "";
                            toReavel.push(arrOfCells[toReavel[0].neighbours[i]]);
                        } else {
                            document.getElementById(toReavel[0].neighbours[i]).textContent = arrOfCells[toReavel[0].neighbours[i]].text
                        }
                }
        }   
    toReavel.shift();
    }
}


document.querySelectorAll('td').forEach(e => e.addEventListener("click", function() {

    if(gameIsOn && arrOfCells[this.id].state === "hidden") {
        clockStop2 = 0;
        arrOfCells[this.id].state = "reaveled";
        this.className = "reaveled";

        
            if(arrOfCells[this.id].text === 0){
                this.textContent = "";
                toReavel.push(arrOfCells[this.id]);
                reavelNeighbours();

            } else if(arrOfCells[this.id].isBombed){
                this.className = "bombed";
                const span = document.createElement('span')
                this.appendChild(span)
                this.children[0].className = "fas fa-bomb"
                stopTimer();
                gameIsOn = false ;
            } else {       
                this.textContent = arrOfCells[this.id].text;
            }      
    }
}));


    
