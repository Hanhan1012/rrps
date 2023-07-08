function computerPlay() {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let getRandomValue = Math.random();
    if (getRandomValue <= 0.33) {
        return rock;
    } else if (getRandomValue <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
}
  

// the game start
function game() {
    let playerscore = 0;
    let computerscore = 0;
    let gamescore = "";

    //  Add event listeners for all three buttons/run round on click/track and end game
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = computerPlay();
            battleWinText.textContent = (playRound(playerSelection, computerSelection));
            playerWinText.textContent = "Player Win totals: " + playerscore;
            computerWinText.textContent = "Computer Win totals: " + computerscore;
            endGame();
        })
    })

        // play the round and determine winner
        function playRound(playerSelection, computerSelection) {
            let tie = "It's a Tie! You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let pbr = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let rbs = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let sbp = "You Win!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let sbpl = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let pbrl = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";
            let rbsl = "You lose!  You selected " + playerSelection + " and the computer selected " + computerSelection + ".";

            if (playerSelection === computerSelection) {
                return tie;
            } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
                playerscore++;
                return pbr;
            } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
                computerscore++;
                return sbpl;
            } else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
                computerscore++;
                return pbrl;
            } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
                playerscore++;
                return rbs;
            } else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
                computerscore++;
                return rbsl;
            } else {
                playerscore++;
                return sbp;
            }
        }
    
    //  div dom
    const container = document.querySelector("#container");
    const div = document.createElement("div");
    container.appendChild(div);

    const playerWinText = document.createElement("p");
    playerWinText.style.color = "red";
    playerWinText.textContent = "Player Win totals: " + playerscore;
    div.appendChild(playerWinText);

    const computerWinText = document.createElement("p");
    computerWinText.style.color = "blue";
    computerWinText.textContent = "Computer Win totals: " + computerscore;
    div.appendChild(computerWinText);

    const battleWinText = document.createElement("p");
    battleWinText.style.color = "black";
    div.appendChild(battleWinText);
    
    const gameWinText = document.createElement("p");
    gameWinText.style.color = "red";
    gameWinText.textContent = gamescore;
    resultsDiv.appendChild(gameWinText);

    function endGame() {
        if (playerscore == 5) {
            gamescore= "YOU WIN!";
            gameWinText.textContent = gamescore;
            
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;
            
            const Again = document.createElement("button");
            Again.textContent = "Play Again!";
            div.appendChild(Again);
            
            Again.addEventListener('click', () => {
                location.reload();
                })
        } else if (computerscore == 5) {
            gamescore = "COMPUTER WINS!";
            gameWinText.textContent = gamescore;
            
            document.getElementById("1").disabled = true;
            document.getElementById("2").disabled = true;
            document.getElementById("3").disabled = true;

            const Again = document.createElement("button");
            Again.textContent = "Play Again!";
            div.appendChild(Again);
            
            Again.addEventListener('click', () => {
                location.reload();
                })
        }   
    }
}

game();

