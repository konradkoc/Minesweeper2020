let toReavel = [];

const reavelNeighbours = () => {

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

cells.forEach(e => e.addEventListener("click", function() {

    const clickedCell = arrOfCells[this.id]
   
    if(gameIsOn && clickedCell.state === "hidden") {
        clickedCell.state = "reaveled";
        this.className = "reaveled";

            if (clickedCell.isBombed === true){
                this.className = "bombed";
                const span = document.createElement('span')
                this.appendChild(span)
                this.children[0].className = "fas fa-bomb"
                gameIsOn = false ;
                stopTimer()

            } else if (clickedCell.text === 0) {
                this.textContent = "";
                toReavel.push(arrOfCells[this.id]);
                reavelNeighbours();
            }  else {       
                this.textContent = clickedCell.text;
            }   
            
           
            
              
    }
}
));


    
