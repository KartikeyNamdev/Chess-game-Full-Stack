import { ROOT } from "../Helper/constants.js";
import { globalState } from "../index.js";
import { renderHighlight } from "D:/javascript/CHESS/Chess-game-Full-Stack/Render/main.js";

function whitePawnClicked({ piece }) {
  const current_pos = piece.current_position;
  const flatArray = globalState.flat();
  //on initial position
  if (current_pos[1] == "2") {
    const highlightSquareIds = [
      `${current_pos[0]}${Number(current_pos[1]) + 1}`,
      `${current_pos[0]}${Number(current_pos[1]) + 2}`,
    ];
    highlightSquareIds.forEach((highlight) => {
      globalState.forEach((row) => {
        row.forEach((element) => {
          if (element.id == highlight) {
            element.highlight=true;
            
          }
        });
      });
      renderHighlight(highlight);
    });
  }
  console.log(globalState);
}
function GlobalEvent() {
  ROOT.addEventListener("click", function (event) {
    if (event.target.localName === "img") {
      const clickId = event.target.parentNode.id;
      const flatArray = globalState.flat();
      const square = flatArray.find((el) => el.id == clickId);
      if (square.piece.piece_name == "WHITE_PAWN") {
        whitePawnClicked(square);
      }
    }
  });
}
export { GlobalEvent };
