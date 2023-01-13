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


//Theme moment
const whiteSquares = document.querySelectorAll(".white-square")
const blackSquares = document.querySelectorAll(".black-square")

function toCleanTheme() {
    whiteSquares.forEach(square => {
       square.style.backgroundColor = "#ccc";
       square.style.backgroundImage = "none";
    });
    blackSquares.forEach(square => {
       square.style.backgroundColor = "transparent";
       square.style.backgroundImage = "none";
    });
}

function toGreenTheme() {
    whiteSquares.forEach(square => {
       square.style.backgroundColor = "palegreen";
       square.style.backgroundImage = "none";
    });
    blackSquares.forEach(square => {
       square.style.backgroundColor = "green";
       square.style.backgroundImage = "none";
    });
}

function toBlueTheme() {
    whiteSquares.forEach(square => {
       square.style.backgroundColor = "lightblue";
       square.style.backgroundImage = "none";
    });
    blackSquares.forEach(square => {
       square.style.backgroundColor = "blue";
       square.style.backgroundImage = "none";
    });
}

function toRedTheme() {
    whiteSquares.forEach(square => {
       square.style.backgroundColor = "red";
       square.style.backgroundImage = "none";
    });
    blackSquares.forEach(square => {
       square.style.backgroundColor = "darkred";
       square.style.backgroundImage = "none";
    });
}

function toPinkTheme() {
    whiteSquares.forEach(square => {
       square.style.backgroundColor = "lavenderblush";
       square.style.backgroundImage = "none";
    });
    blackSquares.forEach(square => {
       square.style.backgroundColor = "pink";
       square.style.backgroundImage = "none";
    });
}
