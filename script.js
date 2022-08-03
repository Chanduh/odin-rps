
let computerVoice = "Let's play a game..."
let computerSelection = getComputerChoice();

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

      rock.addEventListener("click", function(rock){
        playerSelection = "ROCK";
        let result = playRound("ROCK", computerSelection);
        return result;
      });

      
      paper.addEventListener("click", function(paper){
        playerSelection = "PAPER"
      });
      scissors.addEventListener("click", function(scissors){
        playerSelection = "SCISSORS"
      });
              



function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){return "ROCK"}
    else if (randomNumber === 1){return "PAPER"}
    else if (randomNumber === 2){return "SCISSORS"}
}

let scoreboardHuman = "0";
let scoreboardComputer = "0";

function playRound(playerSelection, computerSelection){


    return function(){
        if (scoreboardHuman > 3 || scoreboardComputer > 3){
            computerVoice = `We have a winner! You have ${scoreboardHuman}, I have ${scoreboardComputer};
            return;`
        }
        else if (playerSelection === computerSelection){
            computerVoice = "Tie!"
        }
        else if ((computerSelection == "ROCK" && playerSelection == "PAPER")||
            (computerSelection == "PAPER" && playerSelection == "SCISSORS")||
            (computerSelection == "SCISSORS" && playerSelection == "ROCK")){
                scoreboardHuman++;
                computerVoice = "Damn, you!";
        }
    }

}


 
 

    document.getElementById('computerVoice').innerHTML = computerVoice
    document.getElementById('scoreboardHuman').innerHTML = scoreboardHuman
    document.getElementById('scoreboardComputer').innerHTML = scoreboardComputer









