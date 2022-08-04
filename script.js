function compVoice(string) {
    document.getElementById('computerVoice').innerHTML
        = string;
}
function tallyHuman() {
    document.getElementById('scoreboardHuman').innerHTML
        += "|";
        humanScore++;
        human.style.color = "red";
        machine.style.color = "rgb(176, 109, 176)";


}
function tallyComputer() {
    document.getElementById('scoreboardComputer').innerHTML
        += "|";
        computerScore++;
        machine.style.color = "red";
        human.style.color = "rgb(176, 109, 176)";
}

function showHumanChoice(string) {
    document.getElementById('human').innerHTML
        = string;
}
function showMachineChoice(string) {
    document.getElementById('machine').innerHTML
        = string;
}
function tie() {
        machine.style.color = "rgb(176, 109, 176)";
        human.style.color = "rgb(176, 109, 176)";
        compVoice("Eh, it's a tie!");
}

let playerSelection;
let humanScore = 0;
let computerScore = 0;


// INITIATES GAME PLAY / GETS PLAYER INPUT
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", function(){
    playRound("ROCK", getComputerChoice());
});
paper.addEventListener("click", function(){
    playRound("PAPER", getComputerChoice());
});
scissors.addEventListener("click", function(){
    playRound("SCISSORS", getComputerChoice());
});
              
// RANDOM COMPUTER INPUT
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){return "ROCK"}
    else if (randomNumber === 1){return "PAPER"}
    else if (randomNumber === 2){return "SCISSORS"}
}
function checkForGameOver(){
if (computerScore >= 5 || humanScore >= 5){
    location.reload();

}
}
function checkForWinner(){
    if (computerScore >= 5){
        computerVoice.style.color = "red";
        scoreboardHuman.style.color = "black";
        scoreboardComputer.style.color = "red";
        compVoice("That was so easy for me, you know.")
    }
    else if (humanScore >= 5){
        computerVoice.style.color = "red";
        scoreboardComputer.style.color = "black";
        scoreboardHuman.style.color = "red";
        compVoice("Whatever, I let you win.")
    }
    else {}
}

// GAMEPLAY
function playRound(playerSelection, func){

         checkForGameOver();
         computerSelection = getComputerChoice()

        if (playerSelection === "ROCK"){showHumanChoice("ROCK")} 
        else if (playerSelection === "PAPER"){showHumanChoice("PAPER")} 
        else if (playerSelection === "SCISSORS"){showHumanChoice("SCISSORS")}
        
        if (computerSelection === "ROCK"){showMachineChoice("ROCK")} 
        else if (computerSelection === "PAPER"){showMachineChoice("PAPER")} 
        else if (computerSelection === "SCISSORS"){showMachineChoice("SCISSORS")}
        

        if (playerSelection === computerSelection){
            tie();
        }
        else if ((computerSelection == "ROCK" && playerSelection == "PAPER")||
            (computerSelection == "PAPER" && playerSelection == "SCISSORS")||
            (computerSelection == "SCISSORS" && playerSelection == "ROCK")){
            compVoice("Damn, you!");
            tallyHuman();
        }
        else {
        tallyComputer();
        compVoice("Obviously.")     
        } 

        checkForWinner();
}