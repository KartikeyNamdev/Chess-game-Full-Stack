const ROOT = document.getElementById("root");
import * as piece from "../data/pieces.js";

//use when you want to render pieces on board
function pieceRender(data) {
  data.forEach((row) => {
    row.forEach((Square) => {
      //if square has piece
      if (Square.piece) {
        const squareEl = document.getElementById(Square.id);
        const piece = document.createElement("img");
        piece.src = Square.piece.img;

        piece.classList.add("piece");
        //add piece to squareEl
        squareEl.appendChild(piece);
      }
    });
  });
}
//use when you want to render board (only when game starts one time run)
function startGameRenderer(data) {
  data.forEach((element) => {
    const rowElement = document.createElement("div");
    element.forEach((square) => {
      const squareDiv = document.createElement("div");
      squareDiv.id = square.id;
      squareDiv.classList.add(square.color, "square");

      //render black pawn
      if (square.id[1] == 7) {
        square.piece = piece.blackPawn(square.id);
        //console.log(square.piece);
      }
      //render black king
      
      //render white pawn
      if (square.id[1] == 2) {
        square.piece = piece.whitePawn(square.id);
        //console.log(square.piece);
      }

      rowElement.appendChild(squareDiv);
    });
    rowElement.classList.add("squareRow");
    ROOT.appendChild(rowElement);
  });
  //console.log(data);
  pieceRender(data);
}

export { startGameRenderer, pieceRender };
