import Player from "./Player";

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

  const playerGameboard = createGameBoard(firstPlayer.getBoardSize(), "playerCell");
  playerGameboard.classList.add("playerGameboard");
  firstPlayerContainer.appendChild(playerGameboard);

  secondPlayerContainer.appendChild(secondPlayerName);

  const AIGameboard = createGameBoard(secondPlayer.getBoardSize(), "AICell");
  AIGameboard.classList.add("AIGameboard");

  secondPlayerContainer.appendChild(AIGameboard);

  playerContainer.appendChild(firstPlayerContainer);
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

function setPlayerName(name) {
  document.querySelector("#playerName").textContent = name;
}

export { gameField, setPlayerName };
