function gameField(firstPlayer, secondPlayer) {
  const playerContainer = document.querySelector(".playersContainer");
  playerContainer.classList.add("gamePaused");

  const firstPlayerContainer = document.createElement("div");
  firstPlayerContainer.classList.add("playerContent");

  const secondPlayerContainer = document.createElement("div");
  secondPlayerContainer.classList.add("playerContent");

  const firstPlayerName = document.createElement("h2");
  firstPlayerName.id = "playerName";

  const secondPlayerName = document.createElement("h2");

  firstPlayerName.textContent = firstPlayer.name;
  secondPlayerName.textContent = secondPlayer.name;

  firstPlayerContainer.appendChild(firstPlayerName);

  const playerGameboard = createGameBoard(
    firstPlayer.getBoardSize(),
    "playerCell",
  );
  playerGameboard.classList.add("playerGameboard");
  firstPlayerContainer.appendChild(playerGameboard);

  secondPlayerContainer.appendChild(secondPlayerName);

  const AIGameboard = createGameBoard(secondPlayer.getBoardSize(), "AICell");
  AIGameboard.classList.add("AIGameboard");

  secondPlayerContainer.appendChild(AIGameboard);

  playerContainer.appendChild(firstPlayerContainer);
  playerContainer.appendChild(
    createShipsIcons(firstPlayer.gameBoard.getShipsSizes()),
  );

  playerContainer.appendChild(secondPlayerContainer);
}

function createGameBoard(size, player) {
  const gameboard = document.createElement("div");
  gameboard.classList.add("gameboard");

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < size; j++) {
      const column = document.createElement("div");
      column.classList.add("cell");
      column.classList.add(player);
      column.id = player + " " + i + " " + j;

      row.appendChild(column);
    }

    gameboard.appendChild(row);
  }

  return gameboard;
}

function createShipsIcons(ships) {
  const shipsContainerDiv = document.createElement("div");
  shipsContainerDiv.classList.add("shipsContainerDiv");
  const shipsContainer = document.createElement("div");
  shipsContainer.classList.add("shipsContainer");
  shipsContainer.classList.add("shipsContainerX");

  for (let ship of ships) {
    const shipElement = document.createElement("div");
    shipElement.classList.add("shipIcon");
    shipElement.classList.add("shipIconY");
    shipElement.id = "shipIndex " + ship.index;
    for (let i = 0; i < ship.size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("shipIconCell");
      shipElement.appendChild(cell);
    }

    shipsContainer.appendChild(shipElement);
  }

  const oriantationButton = document.createElement("button");
  oriantationButton.id = "changeOriantationButton";
  oriantationButton.textContent = "Change Oriantation";

  const fillRandomlyButton = document.createElement("button");
  fillRandomlyButton.style.marginTop = "30px";
  fillRandomlyButton.id = "randomButton";
  fillRandomlyButton.textContent = "Place ships Randomly";

  

  const hintText = document.createElement("h4");
  hintText.textContent = "Select ship to place";
  shipsContainerDiv.appendChild(hintText);
  shipsContainerDiv.appendChild(shipsContainer);
  shipsContainerDiv.appendChild(oriantationButton);
  shipsContainerDiv.appendChild(fillRandomlyButton);

  return shipsContainerDiv;
}

function setPlayerName(name) {
  document.querySelector("#playerName").textContent = name;
}

export { gameField, setPlayerName };
