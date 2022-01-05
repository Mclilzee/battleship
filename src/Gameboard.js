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

    this.availableMoves = this.fillAvailableMoves();
  }

  getShipsPositions() {
    const shipsPositions = [];
    for (let ship of this.ships) {
      shipsPositions.push(ship.getPosition());
    }

    return shipsPositions;
  }

  getFleetSize() {
    return this.ships.length;
  }

  getBoardSize() {
    return this.board.length;
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
    const shipPosition = new Set();
    if (this.isSpaceAvailable(row, column, shipSize, oriantation)) {
      if (oriantation === "X") {
        for (let i = column; i < column + shipSize; i++) {
          this.board[row][i] = shipIndex;
          shipPosition.add([row, i]);
        }
      } else {
        for (let i = row; i < row + shipSize; i++) {
          this.board[i][column] = shipIndex;
          shipPosition.add([i, column]);
        }
      }

      ship.setPosition(shipPosition);
      return true;
    }

    return false;
  }

  recieveAttack(row, column) {
    if (!this.containMove(row, column)) {
      return -1;
    }

    const shipIndex = this.board[row][column];
    if (isNaN(shipIndex)) {
      this.missedShots++;
      return 0;
    }
    const ship = this.ships[shipIndex];

    ship.hit();

    if (ship.isSunk()) {
      return ship.getPosition();
    }

    return 1;
  }

  containMove(row, column) {
    for (let i = 0; i < this.availableMoves.length; i++) {
      let move = this.availableMoves[i];
      if (move[0] === row && move[1] === column) {
        this.availableMoves.splice(i, 1);
        return true;
      }
    }
    return false;
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

  fillAvailableMoves() {
    const moves = [];

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        moves.push([i, j]);
      }
    }

    return moves;
  }
}

export default Gameboard;
