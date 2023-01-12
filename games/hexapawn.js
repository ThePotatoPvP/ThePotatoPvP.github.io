const baseBoard = [[1,1,1]
                  ,[0,0,0]
                  ,[2,2,2]];

function estAuBout(board) {
    if (board[0].includes(2)) {
        return 2;
    } else if (board[2].includes(1)) {
        return 1;
    } 
    return 0;
}


function allMoves(board, x, y) {
    let side = board[x][y];
    let 
    if (side == 0){
        return 0;
    } else if (side == 1) {

    }

}