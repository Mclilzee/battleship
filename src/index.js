import "./styles/style.css";
import Player from "./Player";

const player = new Player("Emad");
player.fillBoardRandomly();
console.log(player);
console.log(player.gameBoard.getShipsPositions());