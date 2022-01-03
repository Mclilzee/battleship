/* eslint-disable no-undef */
import { expect, test } from "@jest/globals";
import Ship from "../src/Ship";

test("check length = length", () => {
  const ship = new Ship(4);
  const anotherShip = new Ship(20);

  expect(ship.getLength()).toBe(4);
  expect(anotherShip.getLength()).toBe(20);
});

test("sunk ship test", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(true);
});

test("sunk ship test", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();

  expect(ship.isSunk()).toBe(false);
});

test("ship hit", () => {
  const ship = new Ship(4);

  expect(ship.hit()).toBe(true);
  expect(ship.hit()).toBe(true);
  expect(ship.hit()).toBe(true);
  expect(ship.hit()).toBe(true);
  expect(ship.hit()).toBe(false);
  expect(ship.isSunk()).toBe(true);
});
