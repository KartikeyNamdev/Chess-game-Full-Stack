import { startGame } from "./data/data.js";
import { startGameRenderer,pieceRender } from "./Render/main.js";
import { GlobalEvent } from "./Events/global.js";
//useful till the game ends
const globalState = startGame();
startGameRenderer(globalState);
GlobalEvent();
export{globalState};