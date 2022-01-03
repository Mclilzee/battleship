class Ship {
  constructor(length) {
    this.length = length;
    this.positions = new Array(length);
    this.sunk = false;
  }

  getLength() {
    return this.length;
  }

  getPositions() {
    return this.positions;
  }

  isSunk() {
    return this.sunk;
  }

  positionShip(positionX, positionY, oriantation = "X") {
    if (oriantation === "X") {
      let newX = positionX;
      for (let i = 0; i < this.positions.length; i += 1) {
        this.positions[i] = { positionX: newX, positionY };
        newX += 1;
      }
    } else {
      let newY = positionY;

      for (let i = 0; i < this.positions.length; i += 1) {
        this.positions[i] = { positionX, positionY: newY };
        newY += 1;
      }
    }
  }

  hit(positionX, positionY) {
    if (this.sunk || (!this.positions[0])) {
      return false;
    }

    const index = this.findIndex(positionX, positionY);
    if (index !== -1) {
      this.positions.splice(index, 1);
      if (this.positions.length <= 0) {
        this.sunk = true;
      }

      return true;
    }

    return false;
  }

  findIndex(positionX, positionY) {
    for (let i = 0; i < this.positions.length; i += 1) {
      if (
        this.positions[i].positionX === positionX &&
        this.positions[i].positionY === positionY
      ) {
        return i;
      }
    }

    return -1;
  }
}

module.exports = Ship;
