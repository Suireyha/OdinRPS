//Classes
const move = {
    0: "Rock",
    1: "Paper",
    2: "Scissors",
    3: "MAX_VALUE"
}

class object {
    constructor(move, cont){
        this.move = move;
        this.cont = cont;
    }
}

//Define controllers
let btnRock = new object(move.Rock, document.querySelector('.rock'));
let btnPaper = new object(move.Paper, document.querySelector('.paper'));
let btnScissors = new object(move.Scissors, document.querySelector('.scissors'));
let winStat = document.querySelector('.winStat');

//Initialize logic variables
var playerChoice = move.MAX_VALUE;

//Functions

function gameWin(){
    console.log("You won!");
    document.getElementById("winStat").style.backgroundColor = "lime";
}

function gameLose(){
    console.log("You lost!");
    document.getElementById("winStat").style.backgroundColor = "red";
}

function result(op, plr){
    var tie = false;
    switch (op){

        case "Rock":
            if(plr == "Paper"){
                gameWin();
            }
            else if(plr == "Scissors"){
                gameLose();
            }
            else{
                tie = true;
            }
            break;
        case "Scissors":
            if(plr === "Rock"){
                gameWin();
            }
            else if (plr ==="Paper"){
                gameLose();
            }
            else{
                tie = true;
            }
            break;
        case "Paper":
            if(plr == "Scissors"){
                gameWin();
            }
            else if(plr == "Rock"){
                gameLose();
            }
            else{
                tie = true;
            }
            break;
        default:
            break;
    }

    if (tie){
        console.log("You tied!");
        document.getElementById("winStat").style.backgroundColor = "yellow";
    }
}

function playRPS(select){
    let opponent = move[Math.floor(Math.random() * 3)];
    console.log(opponent + " vs " + select);

    result(opponent, select);
}

//Button functionality
btnRock.cont.addEventListener('click', ()=>{playRPS(move[0]);});
btnPaper.cont.addEventListener('click', ()=>{playRPS(move[1])});
btnScissors.cont.addEventListener('click', ()=>{playRPS(move[2])});
