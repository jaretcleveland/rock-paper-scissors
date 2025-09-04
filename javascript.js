// Initialize scores
humanScore = 0;
computerScore = 0;

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
};

// getHumanChoice will return one of the valid choices depending on what the user inputs
function getHumanChoice() {
    let sign = prompt("Rock, Paper, or Scissors?");
    return sign;
};

// playRound takes the human and computer player choices as arguments, plays a single round,
//  increments the round winner’s score and logs a winner announcement.
function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase(); // set both variables to lower case no matter the input
    const computer = computerChoice.toLowerCase();

    if (human === computer) {
        displayResult(`It's a tie! You both chose ${human}`);
    } 
    else if ((human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock") ||
            (human === "scissors" && computer === "paper") ) {
        humanScore++;
        displayResult(`You win! ${human.charAt(0).toUpperCase() + human.slice(1)} beats ${computer}`);
    }
    else {
        computerScore++;
        displayResult(`You lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${human}`);
    }
    updateScore();
    checkWinner();
};

// Create and insert the results div below the buttons div
const buttonsDiv = document.getElementById("buttons");
const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
buttonsDiv.insertAdjacentElement("afterend", resultsDiv);

// Helper function to append a message to the results div
function displayResult(message) {
    const p = document.createElement("p");
    p.textContent = message;
    resultsDiv.appendChild(p);
}

// Create and insert the score div above the results div
const scoreDiv = document.createElement("div");
scoreDiv.id = "score";
scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
buttonsDiv.insertAdjacentElement("afterend", scoreDiv);

// Helper function to update the score display
function updateScore() {
    scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
}

// Function to check if someone has won the game
function checkWinner() {
    if (humanScore === 5) {
        displayResult("🎉 You win the game! 🎉");
        disableButtons();
    } else if (computerScore === 5) {
        displayResult("💻 Computer wins the game! 💻");
        disableButtons();
    }
}

// Disable all buttons when game ends
function disableButtons() {
    buttons.forEach(btn => btn.disabled = true);
}

// Select all buttons and add event listeners to each
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const humanChoice = btn.textContent; // Get the text content of the clicked button
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});
