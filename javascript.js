
// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber <= 1/3) {
        return "Rock";
    }
    else if (randomNumber <= 2/3) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}


// getHumanChoice will return one of the valid choices depending on what the user inputs

function getHumanChoice() {
    let sign = prompt("Rock, Paper, or Scissors?");
    return sign;
}


// playGame calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end

function playGame() {
    humanScore = 0;
    computerScore = 0;

    // playRound takes the human and computer player choices as arguments, plays a single round,
    //  increments the round winner’s score and logs a winner announcement.

    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase(); // set both variables to lower case no matter the input
        const computer = computerChoice.toLowerCase();

        if (human === computer) {
            console.log(`It's a tie! You both chose ${human}`);
        } 
        else if ((human === "rock" && computer === "scissors") ||
                (human === "paper" && computer === "rock") ||
                (human === "scissors" && computer === "paper") ) {
            humanScore++;
            console.log(`You win! ${human.charAt(0).toUpperCase() + human.slice(1)} beats ${computer}`);
        }
        else {
            computerScore++;
            console.log(`You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${human}`);
        }
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();   // <-- new prompt each round
        const computerChoice = getComputerChoice(); // <-- new random each round
        playRound(humanChoice, computerChoice);
    }

    // declare the winner
    
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();
