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

/* I didn't actually read the asignment, so I know that this is probably a bit unorthodox comparatively,
 * but I did go back and read that there were meant to be rounds involved.
 * This would be easy enough to add, just make a matchCounter variable, as well as two winCounters for the AI and the Player.
 * After (matchCounter == matchAmount) compare winCountAI and winCountPlr. If AI > Plr, the AI won, else the player won. 
 * 
 * Just can't really be assed to add it in because the code is spaghetti as is, and I have to leave room for some improvement in the later chapter. ;)
 */
