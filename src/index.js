import "./styles/style.css";
import Player from "./Player";
import { gameField, setPlayerName } from "./createDOM";

const player = new Player("Player");
const AI = new Player("AI Opponent");

gameField(player, AI);
player.fillBoardRandomly();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  setPlayerName(e.target.name.value);

  document.querySelector(".formContainer").classList.add("hidden");
});
