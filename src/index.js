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

let precisionMoves = [];

gameField(player, AI);
AI.fillBoardRandomly();

document
  .getElementById("changeOriantationButton")
  .addEventListener("click", () => {
    if (oriantation === "X") {
      oriantation = "Y";
      document
        .querySelector(".shipsContainerY")
        .classList.replace("shipsContainerY", "shipsContainerX");

      document.querySelectorAll(".shipIconX").forEach((shipIcon) => {
        shipIcon.classList.replace("shipIconX", "shipIconY");
      });
    } else {
      oriantation = "X";
      document
        .querySelector(".shipsContainerX")
        .classList.replace("shipsContainerX", "shipsContainerY");

      document.querySelectorAll(".shipIconY").forEach((shipIcon) => {
        shipIcon.classList.replace("shipIconY", "shipIconX");
      });
    }
  });

document.getElementById("randomButton").addEventListener("click", () => {
  player.fillBoardRandomly();
  markShips(true);
  showPlayerShips();
});

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

  document.querySelectorAll(".playerCell").forEach((cell) => {
    cell.classList.remove("greenHover");
    cell.classList.remove("redHover");
  });
  document.querySelector(".AIGameboard").classList.remove("locked");
  document.querySelector(".AIContent").classList.remove("notAllowed");

  document.querySelector(".playerGameboard").classList.add("locked");
  document.querySelector(".playerContent").classList.add("notAllowed");

  hintMessage.classList.add("hidden");
  startButton.classList.add("hidden");
  restartButton.classList.remove("hidden");
  document.querySelector(".shipsContainerDiv").classList.add("hidden");
});

restartButton.addEventListener("click", () => {
  restartGame();
});

document.getElementById("playAgain").addEventListener("click", () => {
  document.getElementById("losingMessageContainer").classList.add("hidden");
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

document
  .querySelector(".playerGameboard")
  .addEventListener("mouseover", (e) => {
    if (shipIndex === -1) {
      return;
    }
    const cords = e.target.id.split(" ");
    const row = Number(cords[1]);
    const column = Number(cords[2]);
    const shipSize = player.gameBoard.ships[shipIndex].getLength();
    const cellsArray = [];
    let color = "greenHover";

    document.querySelectorAll(".playerCell").forEach((cell) => {
      cell.classList.remove("greenHover");
      cell.classList.remove("redHover");
    });

    if (oriantation === "X") {
      for (let i = column; i < column + shipSize; i++) {
        if (i >= player.getBoardSize()) {
          color = "redHover";
          break;
        }

        if (checkIfShipBlocked(row, i)) {
          color = "redHover";
        }

        const cell = document.getElementById(`playerCell ${row} ${i}`);
        cellsArray.push(cell);
      }
    } else {
      for (let i = row; i < row + shipSize; i++) {
        if (i >= player.getBoardSize()) {
          color = "redHover";
          [];
          break;
        }

        if (checkIfShipBlocked(i, column)) {
          color = "redHover";
        }

        const cell = document.getElementById(`playerCell ${i} ${column}`);
        cellsArray.push(cell);
      }
    }

    cellsArray.forEach((cell) => {
      cell.classList.add(color);
    });
  });

document.querySelector(".AIGameboard").addEventListener("click", (e) => {
  if (e.target.classList.contains("clicked")) {
    return;
  }
  attackAI(e.target, "AICell");
  attackPlayer();
});

function checkIfShipBlocked(row, column) {
  const placedShips = player
    .getShipsPositions()
    .filter((ship) => ship.index !== shipIndex)
    .map((ship) => ship.cords);

  for (let cords of placedShips) {
    for (let cord of cords) {
      const x = cord[0];
      const y = cord[1];

      if (x === row && y === column) {
        return true;
      }
    }
  }

  return false;
}

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
  document.querySelector(".AIGameboard").classList.add("locked");
  document.querySelector(".AIContent").classList.add("notAllowed");

  const index = Math.floor(
    Math.random() * player.gameBoard.availableMoves.length,
  );

  const randomCords = player.gameBoard.availableMoves[index];

  let result = -1;
  let row;
  let column;

  while (result === -1 && precisionMoves.length > 0) {
    let cords = precisionMoves.pop();
    row = cords[0];
    column = cords[1];

    result = player.attack(row, column);
  }

  if (result === -1) {
    row = randomCords[0];
    column = randomCords[1];
    result = player.attack(row, column);
  }

  const cell = document.getElementById(`playerCell ${row} ${column}`);
  attack(cell, "playerCell", result);
  if (result === 1) {
    presitionScanner(row, column, cell);
  }

  document.querySelector(".AIGameboard").classList.remove("locked");
  document.querySelector(".AIContent").classList.remove("notAllowed");
}

function attack(targetCell, cellName, result) {
  if (result === -1) {
    return;
  }

  if (currentPlayer === player) {
    currentPlayer = AI;
  } else {
    currentPlayer = player;
  }

  if (result === 1) {
    targetCell.classList.add("hit");
    targetCell.textContent = "hit";
  } else if (result === 0) {
    targetCell.classList.add("miss");
    targetCell.textContent = "miss";
  } else {
    console.log(currentPlayer);

    targetCell.classList.add("sunk");
    targetCell.textContent = "sunk";

    for (let cords of result) {
      const row = cords[0];
      const column = cords[1];

      const cell = document.getElementById(`${cellName} ${row} ${column}`);
      cell.classList.replace("hit", "sunk");
      cell.textContent = "sunk";
    }

    if (currentPlayer.isLost()) {
      document.querySelector(".losingAnnouncement").textContent =
        currentPlayer === player
          ? "AI Has beaten you this time :("
          : "Congratulation! you have won :)";
      document
        .getElementById("losingMessageContainer")
        .classList.remove("hidden");
    }
  }

  targetCell.classList.add("clicked");
}

function presitionScanner(row, column) {
  const size = player.getBoardSize();

  if (row + 1 < size && row - 1 > 0) {
    const above = document.getElementById(`playerCell ${row + 1} ${column}`);
    const bellow = document.getElementById(`playerCell ${row - 1} ${column}`);

    if (above.classList.contains("hit") || bellow.classList.contains("hit")) {
      for (let i = row - 1; i <= row + 1; i++) {
        precisionMoves.push([i, column]);
      }

      return;
    }
  }

  if (column + 1 < size && column - 1 > 0) {
    const above = document.getElementById(`playerCell ${row} ${column + 1}`);
    const bellow = document.getElementById(`playerCell ${row} ${column - 1}`);

    if (above.classList.contains("hit") || bellow.classList.contains("hit")) {
      for (let i = column - 1; i <= column + 1; i++) {
        precisionMoves.push([row, i]);
      }

      return;
    }
  }

  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = column - 1; j <= column + 1; j++) {
      precisionMoves.push([i, j]);
    }
  }
}

function showPlayerShips() {
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.classList.remove("ship");
  });

  for (let shipObject of player.getShipsPositions()) {
    shipObject.cords.forEach((position) => {
      const cell = document.getElementById(
        `playerCell ${position[0]} ${position[1]}`,
      );
      cell.classList.add("ship");
    });
  }
}

function restartGame() {
  document.querySelector(".AIGameboard").classList.add("locked");
  document.querySelector(".AIContent").classList.add("notAllowed");

  document.querySelector(".playerGameboard").classList.remove("locked");
  document.querySelector(".playerContent").classList.remove("notAllowed");

  hintMessage.classList.remove("hidden");
  startButton.classList.remove("hidden");
  restartButton.classList.add("hidden");
  document.querySelector(".shipsContainerDiv").classList.remove("hidden");

  document
    .querySelectorAll(".playerCell")
    .forEach((cell) => cell.classList.remove("clicked"));

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
