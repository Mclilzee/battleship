import "./styles/style.css";
import Player from "./Player";
import { gameField, setPlayerName } from "./createDOM";

const player = new Player("Player");
const AI = new Player("AI Opponent");

let shipIndex = -1;
let oriantation = "X";

let ships = [
  { index: 0, place: false },
  { index: 1, placed: false },
  { index: 2, placed: false },
  { index: 3, placed: false },
  { index: 4, placed: false },
];

let currentPlayer = player;

gameField(player, AI);
AI.fillBoardRandomly();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  setPlayerName(e.target.name.value);

  document.querySelector(".formContainer").classList.add("hidden");
});

document.querySelector(".changePlayerName").addEventListener("click", () => {
  document.querySelector(".formContainer").classList.remove("hidden");
});
const restartButton = document.querySelector(".restartButton");
const startButton = document.querySelector(".startButton");
const hintMessage = document.querySelector(".hintMessage");

startButton.addEventListener("click", () => {
  if (!shipsReady()) {
    alert("You need to place all the ships before you can start");
    return;
  }
  document.querySelector(".playersContainer").classList.remove("gamePaused");
  hintMessage.classList.add("hidden");
  startButton.classList.add("hidden");
  restartButton.classList.remove("hidden");
  document.querySelector(".shipsContainerDiv").classList.add("hidden");

  document
    .querySelectorAll(".playerCell")
    .forEach((cell) => cell.classList.add("clicked"));
});

restartButton.addEventListener("click", () => {
  document.querySelector(".playersContainer").classList.add("gamePaused");

  hintMessage.classList.remove("hidden");
  startButton.classList.remove("hidden");
  restartButton.classList.add("hidden");
  document.querySelector(".shipsContainerDiv").classList.remove("hidden");
  document
    .querySelectorAll(".playerCell")
    .forEach((cell) => cell.classList.remove("clicked"));

  restartGame();
});

const allShips = document.querySelectorAll(".shipIcon");
allShips.forEach((ship) => {
  ship.addEventListener("click", () => {
    allShips.forEach((ship) => ship.classList.remove("chosen"));

    shipIndex = Number(ship.id.split(" ")[1]);
    ship.classList.add("chosen");
  });
});

document.querySelector(".playerGameboard").addEventListener("click", (e) => {
  if (shipIndex === -1) {
    return;
  }
  const cords = e.target.id.split(" ");
  const row = Number(cords[1]);
  const column = Number(cords[2]);

  placeShips(row, column, shipIndex, oriantation);
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
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("ship");
  });
  for (let positions of player.getShipsPositions()) {
    if (!positions) {
      return;
    }
    for (let position of positions) {
      const cell = document.getElementById(
        `playerCell ${position[0]} ${position[1]}`,
      );
      cell.classList.add("ship");
    }
  }
}

function restartGame() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("sunk");
    cell.classList.remove("hit");
    cell.classList.remove("miss");
    cell.classList.remove("ship");
    cell.classList.remove("clicked");
    cell.textContent = "";
    player.resetBoard();
    AI.resetBoard();
    AI.fillBoardRandomly();
    markShips(false);
  });
}

function shipsReady() {
  for (let ship of ships) {
    if (!ship.placed) {
      return false;
    }
  }

  return true;
}

function markShips(boolean) {
  for (let ship of ships) {
    ship.placed = boolean;
  }
}

function placeShips(row, column, shipIndex, oriantation) {
  if (player.positionShip(row, column, oriantation, shipIndex)) {
    ships[shipIndex].placed = true;
    showPlayerShips();
  }
}
