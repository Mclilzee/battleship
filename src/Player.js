import Gameboard from "./Gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.gameBoard = new Gameboard();
    this.fleetSize = this.gameBoard.getFleetSize();
  }

  getShipsPositions() {
    return this.gameBoard.getShipsPositions();
  }
  attack(row, column) {
    return this.gameBoard.recieveAttack(row, column);
  }

  resetBoard() {
    this.gameBoard = new Gameboard();
  }

  getBoardSize() {
    return this.gameBoard.getBoardSize();
  }

  setName(name) {
    this.name = name;
  }

  fillBoardRandomly() {
    let shipIndex = 0;
    const boardSize = this.gameBoard.getBoardSize();
    const oriantations = ["X", "Y"];
    while (shipIndex < this.fleetSize) {
      let row = Math.floor(Math.random() * boardSize);
      let column = Math.floor(Math.random() * boardSize);
      let oriantation = oriantations[Math.floor(Math.random() * 2)];

      if (this.positionShip(row, column, oriantation, shipIndex)) {
        shipIndex++;
      }
    }
  }

  positionShip(row, column, oriantation, index) {
    return this.gameBoard.positionShip(row, column, oriantation, index);
  }
}

export default Player;
