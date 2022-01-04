import Gameboard from "./Gameboard";

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.gameBoard = new Gameboard();
    this.fleetSize = this.gameBoard.getFleetSize();
    this.shipsPositions = 0;
  }

  fillBoardRandomly() {
    let shipIndex = this.shipsPositions;
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
    if (this.gameBoard.positionShip(row, column, oriantation, index)) {
      this.shipsPositions++;
      return true;
    }
    return false;
  }
}

export default Player;
