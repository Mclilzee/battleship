/* eslint-disable no-undef */
const Ship = require("../src/ship");

test("check length = length", () => {
  const ship = new Ship(4);

  expect(ship.getLength()).toBe(4);
});

test("position 4-2, 5-2, 6-2, 7-2", () => {
  const ship = new Ship(4);
  ship.positionShip(4, 2);
  expect(ship.getPositions()).toEqual([
    { positionX: 4, positionY: 2 },
    { positionX: 5, positionY: 2 },
    { positionX: 6, positionY: 2 },
    { positionX: 7, positionY: 2 },
  ]);
});

test("position 4-2, 5-2, 6-2, 7-2 with parameter X", () => {
  const ship = new Ship(4);
  ship.positionShip(4, 2, "X");
  expect(ship.getPositions()).toEqual([
    { positionX: 4, positionY: 2 },
    { positionX: 5, positionY: 2 },
    { positionX: 6, positionY: 2 },
    { positionX: 7, positionY: 2 },
  ]);
});

test("position 4-2, 4-3, 4-4, 4-5 with parameter Y", () => {
  const ship = new Ship(5);
  ship.positionShip(4, 2, "Y");
  expect(ship.getPositions()).toEqual([
    { positionX: 4, positionY: 2 },
    { positionX: 4, positionY: 3 },
    { positionX: 4, positionY: 4 },
    { positionX: 4, positionY: 5 },
    { positionX: 4, positionY: 6 },
  ]);
});

test("position 4-2 X hit test", () => {
  const ship = new Ship(5);
  ship.positionShip(4, 2);
  ship.hit(4, 2);
  ship.hit(6, 238);
  ship.hit(5, 2);
  ship.hit(6, 2);

  expect(ship.getPositions()).toEqual([
    { positionX: 7, positionY: 2 },
    { positionX: 8, positionY: 2 },
  ]);
});

test("sunk ship test", () => {
  const ship = new Ship(2);
  ship.positionShip(2, 2);
  ship.hit(2, 2);
  ship.hit(3, 2);

  expect(ship.isSunk()).toBe(true);
});

test("sunk ship test", () => {
  const ship = new Ship(2);
  ship.positionShip(2, 2);
  ship.hit(4, 2);
  ship.hit(3, 2);

  expect(ship.isSunk()).toBe(false);
});

test("hit to return true or false", () => {
  const ship = new Ship(6);
  expect(ship.hit(6, 0)).toBe(false);

  ship.positionShip(5, 5, "Y");
  expect(ship.hit(5, 7)).toBe(true);
  expect(ship.hit(6, 8)).toBe(false);
  expect(ship.hit(5, 8)).toBe(true);
  expect(ship.hit(5, 8)).toBe(false);
});
