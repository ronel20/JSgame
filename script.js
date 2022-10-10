const SELECTION_OPTIONS = ["Rock","Paper","Scissors"];
const WELCOME_MESSAGE = "%cLets Play Rock,Paper,Scissors.";
const SELECTION_MESSAGE = "Select Rock,Paper or Scissors:";
const ERROR_MESSAGE = "Oopss! Unvalid Choice.\n\n";
const EXIT_MESSAGE = "Game closed.";
const ROUND_WIN_MESSAGE = "You Win!";
const ROUND_LOSE_MESSAGE = "You Lose!";
const ROUND_TIE_MESSAGE = "It's A Tie";
const GAME_WIN_MESSAGE = "Player wins the game";
const GAME_LOSE_MESSAGE = "%cComputer wins the game";
const GAME_TIE_MESSAGE = "%cGame ended in a tie";

let playerScore = 0;
let computerScore = 0;
game();


function computerPlay(){
    return SELECTION_OPTIONS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){

    console.log(`Player: ${playerSelection}, Computer: ${computerSelection}`);
    if (playerSelection == computerSelection){
        return ROUND_TIE_MESSAGE;
    }
    else if ((playerSelection == SELECTION_OPTIONS[0] && computerSelection == SELECTION_OPTIONS[2]) ||
             (playerSelection == SELECTION_OPTIONS[1] && computerSelection == SELECTION_OPTIONS[0]) ||
             (playerSelection == SELECTION_OPTIONS[2] && computerSelection == SELECTION_OPTIONS[1])) {
                playerScore++;
                return ROUND_WIN_MESSAGE + ` ${playerSelection} beats ${computerSelection}`;
    }
    else {
        computerScore++;
        return ROUND_LOSE_MESSAGE + ` ${computerSelection} beats ${playerSelection}`;
    }
}

function game(){
    let playerInput;
    let playerSelection= undefined;

    console.log(WELCOME_MESSAGE, "color:aqua");
    for (let i=0; i<5; i++){
        playerInput = prompt(`Round ${i+1}\n`+ SELECTION_MESSAGE);

        if (playerInput === null){
            console.log(EXIT_MESSAGE);
            return;
        }
        
        while ((playerSelection = SELECTION_OPTIONS.find(selection => selection.toLowerCase()==playerInput.trim().toLowerCase())) == undefined){
            playerInput = prompt(ERROR_MESSAGE + `Round ${i+1}\n` + SELECTION_MESSAGE);
        }

        console.log(playRound(playerSelection,computerPlay()));
        console.log(`Score: Player ${playerScore}:${computerScore} Computer`);
    }

    if (playerScore == computerScore){
        console.log(GAME_TIE_MESSAGE);
    }else if (playerScore > computerScore){
        console.log(GAME_WIN_MESSAGE, "color:green");
    }else{
        console.log(GAME_LOSE_MESSAGE, "color:red");
    }
}
