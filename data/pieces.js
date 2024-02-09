//black
function blackPawn(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/pawn.png",
    piece_name :"BLACK_PAWN"
  };
}

function blackRook(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/rook.png",
    piece_name :"BLACK_ROOK"
  };
}
function blackKnight(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/knight.png",
    piece_name :"BLACK_KNIGHT"
  };
}
function blackQueen(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/Queen.png",
    piece_name :"BLACK_QUEEN"
  };
}
function blackKing(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/King.png",
    piece_name :"BLACK_KING"
  };
}
function blackBishop(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/black/Bishop.png",
    piece_name :"BLACK_BISHOP"
  };
}

//white
function whitePawn(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/pawn.png",
    piece_name :"WHITE_PAWN"
  };
}
function whiteRook(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/rook.png",
    piece_name :"WHITE_ROOK"
  };

}
function whiteKnight(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/knight.png",
    piece_name :"WHITE_KNIGHT"
  };
}
function whiteQueen(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/Queen.png",
    piece_name :"WHITE_QUEEN"
  };
}
function whiteKing(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/king.png",
    piece_name :"WHITE_KING"
  };
}
function whiteBishop(current_position) {
  return {
    current_position,
    img: "Assets/images/pieces/white/Bishop.png",
    piece_name :"WHITE_BISHOP"
  };
}
export {
  blackPawn,
  blackKing,
  blackQueen,
  blackRook,
  blackKnight,
  blackBishop,
  whiteKnight,
  whitePawn,
  whiteKing,
  whiteQueen,
  whiteRook,
  whiteBishop,
};
