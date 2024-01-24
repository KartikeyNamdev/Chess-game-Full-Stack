import { startGame } from "./data/data.js";
import { startGameRenderer,pieceRender } from "./Render/main.js";
//useful till the game ends
const globalState = startGame();
startGameRenderer(globalState);
// console.log(globalState);