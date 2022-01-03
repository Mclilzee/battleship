import Ship from "./Ship";

class Gameboard {
  constructor() {
    this.missedShots = 0;
    this.board = new Array(10);
    for (let i = 0; i < this.board.length; i++) {
      this.board[i] = new Array(10);
    }

    this.ships = [
      new Ship(5),
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
    ];
  }

  getBoard() {
    return this.board;
  }

  areShipsSunk() {
    if (this.ships.length <= 0) {
      return true;
    } else {
      return false;
    }
  }

  positionShip(row, column, oriantation = "X", shipIndex) {
    const ship = this.ships[shipIndex];
    const shipSize = ship.getLength();
    if (this.isSpaceAvailable(row, column, shipSize, oriantation)) {
      if (oriantation === "X") {
        for (let i = column; i < column + shipSize; i++) {
          this.board[row][i] = shipIndex;
        }
      } else {
        for (let i = row; i < row + shipSize; i++) {
          this.board[i][column] = shipIndex;
        }
      }
      return true;
    }

    return false;
  }

  recieveAttack(row, column) {
    const shipIndex = this.board[row][column];
    if (isNaN(shipIndex)) {
      this.missedShots++;
      return false;
    }
    this.board[row][column] = "X";
    const ship = this.ships[shipIndex];

    ship.hit();

    if (ship.isSunk()) {
      this.ships.splice(shipIndex, 1);
    }

    return true;
  }

  isSpaceAvailable(row, column, shipSize, oriantation) {
    if (oriantation === "X") {
      if (this.board.length < column + shipSize || this.board.length < row) {
        return false;
      }

      for (let i = column; i < shipSize + column; i++) {
        if (!isNaN(this.board[row][i])) {
          return false;
        }
      }
    } else {
      if (this.board.length < row + shipSize || this.board.length < column) {
        return false;
      }
      for (let i = row; i < shipSize + row; i++) {
        if (!isNaN(this.board[i][column])) {
          return false;
        }
      }
    }

    return true;
  }
}

export default Gameboard;
