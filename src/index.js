import "./styles/style.css";
import Player from "./Player";
import { gameField, setPlayerName } from "./createDOM";

const player = new Player("Player");
const AI = new Player("AI Opponent");

let currentPlayer = player;

gameField(player, AI);
AI.fillBoardRandomly();
player.fillBoardRandomly();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  setPlayerName(e.target.name.value);

  document.querySelector(".formContainer").classList.add("hidden");
});

document.querySelector(".AIGameboard").addEventListener("click", (e) => {
  attackAI(e.target, "AICell");
});

function attackAI(targetCell, cellName) {
  if (targetCell.classList[0] === "cell") {
    const information = targetCell.id.split(" ");
    const row = Number(information[1]);
    const column = Number(information[2]);

    const result = AI.attack(row, column);

    attack(targetCell, cellName, result);
  }
}

function attackPlayer() {
  const index = Math.floor(
    Math.random() * player.gameBoard.availableMoves.length,
  );

  const cords = player.gameBoard.availableMoves[index];
  const row = cords[0];
  const column = cords[1];

  const result = player.attack(row, column);
  const cell = document.getElementById(`playerCell ${row} ${column}`);
  attack(cell, "playerCell", result);
}

function attack(targetCell, cellName, result) {
  if (result === -1) {
    return;
  }

  if (result === 1) {
    targetCell.classList.add("hit");
    targetCell.textContent = "hit";
  } else if (result === 0) {
    targetCell.classList.add("miss");
    targetCell.textContent = "miss";
  } else {
    targetCell.classList.add("sunk");
    targetCell.textContent = "sunk";

    for (let cords of result) {
      const row = cords[0];
      const column = cords[1];

      const cell = document.getElementById(`${cellName} ${row} ${column}`);
      cell.classList.replace("hit", "sunk");
      cell.textContent = "sunk";
    }
  }

  targetCell.classList.add("clicked");
}

function showPlayerShips() {
  for (let positions of player.getShipsPositions()) {
    for (let position of positions) {
      const cell = document.getElementById(
        `playerCell ${position[0]} ${position[1]}`,
      );
      cell.classList.add("ship");
    }
  }
}

function gameStart () {
  document.querySelector(".playersContainer").classList.remove("gamePaused");

}

gameStart();

showPlayerShips();

