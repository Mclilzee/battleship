import Ship from "./Ship";

class Gameboard {
  constructor() {
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

  isSpaceAvailable(row, column, shipSize, oriantation) {
    if (oriantation === "X") {
      if (
        this.board.length < column + shipSize ||
        this.board.length < row
      ) {
        return false;
      }

      for (let i = column; i < shipSize + column; i++) {
        if (!isNaN(this.board[row][i])) {
          return false;
        }
      }
    } else {
      if (
        this.board.length < row + shipSize ||
        this.board.length < column
      ) {
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
