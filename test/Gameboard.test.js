/* eslint-disable no-sparse-arrays */
import { expect, test } from "@jest/globals";
import Gameboard from "../src/Gameboard";

test("board array", () => {
  const gameboard = new Gameboard();

  expect(gameboard.getBoard()).toEqual([
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
  ]);
});

test("insert in valid position", () => {
  const gameboard = new Gameboard();

  expect(gameboard.positionShip(10, 10, "X", 0)).toBe(false);
  expect(gameboard.positionShip(5, 5, "X", 0)).toBe(true);
  expect(gameboard.positionShip(5, 5, "X", 0)).toBe(false);
  expect(gameboard.positionShip(7, 5, "X", 0)).toBe(true);
  expect(gameboard.positionShip(8, 5, "X", 4)).toBe(true);
  expect(gameboard.positionShip(7, 5, "X", 2)).toBe(false);
  expect(gameboard.positionShip(9, 5, "Y", 0)).toBe(false);
  expect(gameboard.positionShip(9, 6, "Y", 0)).toBe(false);
  expect(gameboard.positionShip(9, 6, "Y", 1)).toBe(false);
  expect(gameboard.positionShip(1, 2, "X", 2)).toBe(true);
  expect(gameboard.positionShip(1, 5, "X", 0)).toBe(true);
  expect(gameboard.positionShip(2, 9, "Y", 2)).toBe(true);
  expect(gameboard.positionShip(0, 7, "X", 2)).toBe(true);
});

test("check board changes", () => {
  const gameboard = new Gameboard();
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 4, 4, 0, 0, 0, 0, 0],
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
    new Array(10),
  ];

  board[3][0] = 1;
  board[4][0] = 1;
  board[5][0] = 1;
  board[6][0] = 1;
  board[4][1] = 4;
  board[5][1] = 4;
  gameboard.positionShip(0, 0, "X", 0);
  gameboard.positionShip(0, 5, "X", 0);
  gameboard.positionShip(1, 0, "X", 2);
  gameboard.positionShip(1, 3, "X", 4);
  gameboard.positionShip(1, 5, "X", 0);
  gameboard.positionShip(10, 10, "X", 0);
  gameboard.positionShip(3, 0, "Y", 1);
  gameboard.positionShip(4, 1, "Y", 4);
  expect(gameboard.getBoard()).toEqual(board);
});

test("hit or miss", () => {
  const gameboard = new Gameboard();

  gameboard.positionShip(0, 0, "X", 0);

  expect(gameboard.ships.length).toBe(5);
  expect(gameboard.getBoard()[0]).toEqual([0, 0, 0, 0, 0, , , , , ,]);
  expect(gameboard.recieveAttack(0, 0)).toBe(true);
  expect(gameboard.getBoard()[0]).toEqual(["X", 0, 0, 0, 0, , , , , ,]);
  expect(gameboard.recieveAttack(0, 0)).toBe(false);
  expect(gameboard.recieveAttack(0, 4)).toBe(true);
  expect(gameboard.recieveAttack(1, 2)).toBe(false);
  expect(gameboard.recieveAttack(0, 2)).toBe(true);
  expect(gameboard.recieveAttack(0, 3)).toBe(true);
  expect(gameboard.recieveAttack(0, 1)).toBe(true);
  expect(gameboard.getBoard()[0]).toEqual(["X", "X", "X", "X", "X", , , , , ,]);
  expect(gameboard.ships.length).toBe(4);
});
