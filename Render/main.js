
import * as piece from "../data/pieces.js";
import { ROOT } from "../Helper/constants.js";
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
      //render black rook
      if (square.id == "a8" ||square.id == "h8") {
        square.piece = piece.blackRook(square.id);
      }
      //render black knight
      if (square.id == "b8" ||square.id == "g8") {
        square.piece = piece.blackKnight(square.id);
      }
      //render black bishop
      if (square.id == "c8" ||square.id == "f8") {
        square.piece = piece.blackBishop(square.id);
      }
      //render black Queen
      if (square.id == "d8") {
        square.piece = piece.blackQueen(square.id);
      }
      //render black king
      if (square.id == "e8") {
        square.piece = piece.blackKing(square.id);
      }
      //render white pawn
      if (square.id[1] == 2) {
        square.piece = piece.whitePawn(square.id);
        //console.log(square.piece);
      }
      //render white rook
      if (square.id == "a1" ||square.id == "h1") {
        square.piece = piece.whiteRook(square.id);
      }
      //render white knight
      if (square.id == "b1" ||square.id == "g1") {
        square.piece = piece.whiteKnight(square.id);
      }
      //render white bishop
      if (square.id == "c1" ||square.id == "f1") {
        square.piece = piece.whiteBishop(square.id);
      }
      //render white Queen
      if (square.id == "d1") {
        square.piece = piece.whiteQueen(square.id);
      }
      //render white king
      if (square.id == "e1") {
        square.piece = piece.whiteKing(square.id);
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
