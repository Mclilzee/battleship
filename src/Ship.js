class Ship {
  constructor(length) {
    this.length = length;
    this.positions = new Array(length);
    this.sunk = false;
    this.hp = length;
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

  hit() {
    if (this.sunk) {
      return false;
    }

    this.hp--;

    if (this.hp === 0) {
      this.sunk = true;
    }

    return true;
  }
}

export default Ship;
