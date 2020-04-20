class Cell {
    constructor(id, neighbours, isBombed, text, state) {
        this.id = id;
        this.neighbours = neighbours;
        this.isBombed = isBombed;
        this.text = text;
        this.state = state;
    }
}

let gameIsOn = true ; 
let arrOfCells = [];
const neighbours = []; 
let bombArray = []

let score = document.getElementById("score");
let oneCell = document.querySelectorAll("td");

//creating a table with js 
const tableCreate = () => {
    const tableContainer = document.querySelector(".tableHere");
    tableContainer.textContent = "";
    const tbl  = document.createElement('table')
    //this var gonna be from 0 to 479 - and later gonna be asigned as an ID of every cell
    let cellNumber = 0 ;
    //creating 16 rows and 30 columns (expert minesweeper table)
    
    for(let i = 0; i < 16; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < 30; j++){
            if(i == 16 && j == 30){
                break;
            } else {
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(""));
                //setting id of every cell, so we have easy access to every cell in the table
                td.setAttribute('id', cellNumber)

                cellNumber++;
            }
        }
    }
    tableContainer.appendChild(tbl);
}
tableCreate();

//defining neighbours using ID
const defineNeighbours = () => {


    for(i=0;i<480;i++){
        if(i===0){
            neighbours.push([i+1,i+30,i+31]);
        } else if(i===450){
            neighbours.push([i+1,i-30,i-29]);
        } else if(i===29){
            neighbours.push([i-1,i+30,i+29]);
        } else if(i===479){
            neighbours.push([i-1,i-30,i-31]);
        } else if(i<29) {
            neighbours.push([i+1,i+30,i+31,i+29,i-1]);
        } else if(i%30===0){
            neighbours.push([i+1,i+30,i+31,i-29,i-30]);
        } else if(i>450){
            neighbours.push([i+1,i-1,i-31,i-29,i-30]);
        } else if((i-29)%30===0){
            neighbours.push([i-1,i+30,i+29,i-31,i-30]);
        } else {
            neighbours.push([i-1,i+1,i+29,i+31,i+30,i-30,i-29,i-31]);
        };  
    };

    //putting neighbours into array of cell objects
    for(let i=0;i<480;i++){
        arrOfCells[i] = new Cell(i, neighbours[i], false, "c", "hidden" );
        }
    
};
defineNeighbours();

const bombTheCells = () => {
    //bombing random cells -> putting bombed id's into a set (no duplicates)

    const bombSet = new Set();
    while(bombSet.size < 99 ){
        bombSet.add(Math.floor(Math.random()*479));
    }

    bombArray = Array.from(bombSet);
    for(i=0;i<bombArray.length;i++) {
        //document.getElementById(bombRealArray[i]).textContent = "B";
        arrOfCells[bombArray[i]].isBombed = true;     
        arrOfCells[bombArray[i]].text = "B";     

    }
}
bombTheCells()


const countBombs = () => {
    for(let i=0; i< 480; i++){
        let number = 0;
        for(j=0; j<arrOfCells[i].neighbours.length; j++){
            let temp = arrOfCells[i];
            arrOfCells[temp.neighbours[j]].text;
            if(arrOfCells[temp.neighbours[j]].text === "B"){
            number += 1;
            };
            
        };
        //we only wanna change cells which arent bombed (they have text  of c which was declared in table creation)
        if(arrOfCells[i].text === "c"){
            arrOfCells[i].text = number;
        };
    };
};
countBombs()

const cells = document.querySelectorAll('td')

