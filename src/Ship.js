class Ship {
  constructor(length) {
    this.length = length;
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
    return this.hp === 0;
  }

  hit() {
    if (this.hp === 0) {
      return false;
    }

    this.hp--;

    return true;
  }
}

export default Ship;
