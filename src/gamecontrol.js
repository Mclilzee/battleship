class Gamecontrol {
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
}