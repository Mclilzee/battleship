class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.hp = length;
    this.position;
  }

  setPosition(position) {
    this.position = position;
  }

  getPosition() {
    return this.position;
  }

  getLength() {
    return this.length;
  }

  isSunk() {
    return this.sunk;
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
