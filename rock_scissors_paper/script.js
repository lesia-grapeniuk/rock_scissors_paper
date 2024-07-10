let userScore = 0;
let computerScore = 0;

const resultText = document.getElementById("result");

const playGame = (userChoice) => {
  const choices = ["rock", "scissors", "paper"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";

  if (userChoice === computerChoice) {
    result = "Нічия!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result = "Ви перемогли!";
    userScore++;
    updateScore(userScore, "userScore");
  } else {
    result = "Ви програли!";
    computerScore++;
    updateScore(computerScore, "computerScore");
  }

  resultText.innerText = `Ваш вибір: ${userChoice}, вибір компютера: ${computerChoice}. ${result}`;

  if (userScore === 3) {
    resultText.innerText = "Ви виграли гру!";
    resetGame();
  } else if (computerScore === 3) {
    resultText.innerText = "Ви програли гру!";
    resetGame();
  }
};

const updateScore = (score, player) => {
  for (let i = 1; i <= 3; i++) {
    const scoreBox = document.getElementById(`${player}${i}`);
    if (i <= score) {
      scoreBox.classList.add("win");
    } else {
      scoreBox.classList.remove("win");
    }
  }
};

const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  updateScore(userScore, "userScore");
  updateScore(computerScore, "computerScore");
};

document.getElementById("rockButton").addEventListener("click", () => playGame("rock"));
document.getElementById("scissorsButton").addEventListener("click", () => playGame("scissors"));
document.getElementById("paperButton").addEventListener("click", () => playGame("paper"));
