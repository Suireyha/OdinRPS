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
const btns = document.querySelectorAll('.btn');
//let winStat = document.querySelector('.winStat');
//let pHealth = document.getElementById('aiTal');
//let uiHealth = document.getElementById('plrTal');
let aiLives = document.querySelectorAll('#aiTal .mark');
let plrLives = document.querySelectorAll('#plrTal .mark');

//Initialize logic variables
var playerChoice = move.MAX_VALUE;
var aiWins = 0;
var plrWins = 0;

//Functions

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function gameOver(won){
    if(won){
        //Won
    }
    
    else{
        //Lost
    }
}

function gameWin(){
    console.log("You won!");

    aiLives[4 - plrWins].style.backgroundColor = 'transparent';
    plrWins++;

    if (plrWins > 4){
        gameOver(true);
    }
}

function gameLose(){
    console.log("You lost!");

    plrLives[4 - aiWins].style.backgroundColor = 'transparent';
    aiWins++;

    gameOver();
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
    




//Heart # works l-r: (0,1,2,3,4). So, maths should decrement from 4.