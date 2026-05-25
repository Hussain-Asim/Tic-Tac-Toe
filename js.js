//little global code and tucked inside factories
// If you only need a single instance of something (e.g. the gameboard, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be used to create additional instances.
// Each little piece of functionality should be able to fit in the game, player or gameboard objects, save time by brainstorming about it.

//right now goal is to make game work in board via console only and put all logic seperate from UI.

//You have gameboard, how u will put 'X' marker in board at any place with player 1


//3 'X'/'O' marker, horizontally, vertically or diagonally. win
//3 'X'/'O' marker, not horizontally, vertically or diagonally. loose

//winning 3-in-a-rows and ties. then show who wins loose or draw.

//little global code
//try as much as u can in factories
//single instance like gameboard and display controller. wrap factory inside iife.


// [
// [0,0,0],
// [0,0,0],
// [0,0,0]
// ]


const Gameboard = (() => {

    const rows = 3;
    const columns = 3;
    let gameboard = [];

    for (let i = 0; i != rows; i++) {
        gameboard.push([]);
        for (let j = 0; j != columns; j++) {
            gameboard[i].push(0);
        }
    }

    const playerOne = {
        name: "playerOne",
    }
    const playerTwo = {
        name: "playerTwo",
    }


    return { gameboard, playerOne, playerTwo }
})()
console.log(Gameboard);

//You have gameboard, how u will put 'X' marker in board at any place with player 1
//You have gameboard, how u will put 'O' marker in board at any place with player 2

//If there is no 0, then not write at that. 
// and make winning/loose and tie logic.

//there is no 0 left in board, do nothing, else put X marker with player 1. same with player2


//3 'X'/'O' marker, horizontally, vertically or diagonally. win

// after winning, not any entity should be fulfilled.
//horizontal || vertical || diagonal fulfilled 



function gameFlow() {
    const { gameboard } = Gameboard;

    function playerOneTurn(addYourMarker) {

        console.log('Player 1 turn');
        winDrawLogic(0, 0, 'X')
        winDrawLogic(0, 1, 'X')
        winDrawLogic(1, 2, 'X')
        winDrawLogic(2, 1, 'X')
        winDrawLogic(2, 0, 'X')

    }

    function playerTwoTurn(addYourMarker) {

        console.log('Player 2 turn');
        winDrawLogic(0, 2, 'O')
        winDrawLogic(1, 1, 'O')
        winDrawLogic(1, 0, 'O')
        winDrawLogic(2, 2, 'O')

    }

    playerOneTurn();
    playerTwoTurn();


    //IF there is 'X' marker horizonally win
    // , vertically,
    //  diagonally


    // if (horizontalWin !== 'X' ){
    // click, go to player1 func, if there is 0 in gameboard entry argument, then put 'X'. 

    // }

    //  if horizontal wins X, then a 
    //at 3rd turn: put X marker, with console win
    function winDrawLogic(row, column, marker) {
        //horizontal
        if (

            gameboard[0][0] == marker && gameboard[0][1] == marker && gameboard[0][2] == marker ||

            gameboard[1][0] == marker && gameboard[1][1] == marker && gameboard[1][2] == marker ||

            gameboard[2][0] == marker && gameboard[2][1] == marker && gameboard[2][2] == marker ||
            // vertical
            gameboard[0][0] == marker && gameboard[1][0] == marker && gameboard[2][0] == marker ||

            gameboard[0][1] == marker && gameboard[1][1] == marker && gameboard[2][1] == marker ||

            gameboard[0][2] == marker && gameboard[1][2] == marker && gameboard[2][2] == marker ||
            // //diagonal
            gameboard[0][0] == marker && gameboard[1][1] == marker && gameboard[2][2] == marker ||

            gameboard[0][2] == marker && gameboard[1][1] == marker && gameboard[2][0] == marker

        ) {
            return
        } else {

            if (gameboard[row][column] == 0) {

                gameboard[row][column] = marker
                console.log(gameboard)
            }
            if (
                //if horizontal wins X, at 3rd turn: put X marker, with console win 
                gameboard[0][0] == marker && gameboard[0][1] == marker && gameboard[0][2] == marker ||

                gameboard[1][0] == marker && gameboard[1][1] == marker && gameboard[1][2] == marker ||

                gameboard[2][0] == marker && gameboard[2][1] == marker && gameboard[2][2] == marker ||

                gameboard[0][0] == marker && gameboard[1][0] == marker && gameboard[2][0] == marker ||

                gameboard[0][1] == marker && gameboard[1][1] == marker && gameboard[2][1] == marker ||

                gameboard[0][2] == marker && gameboard[1][2] == marker && gameboard[2][2] == marker ||
                // //diagonal
                gameboard[0][0] == marker && gameboard[1][1] == marker && gameboard[2][2] == marker ||

                gameboard[0][2] == marker && gameboard[1][1] == marker && gameboard[2][0] == marker
            ) {
                console.log('win')
            }
        }

        //If all entries used then draw.
        //if all entries not equal to 0 then log tie but one time.

        if (
            (gameboard[0][0] && gameboard[0][1] && gameboard[0][2] &&

                gameboard[1][0] && gameboard[1][1] && gameboard[1][2] &&

                gameboard[2][0] && gameboard[2][1] && gameboard[2][2]) != 0

        ) {
            console.log("It's a draw")
        }

    }
    // winLogic()
    // return {gameboard}
}
console.log(gameFlow())

//create display/DOM logic object
//create funct gameboard array to just page.  

//see article again of brandon

// const displayToPage = (() => {

//     function renderContents() {


//     }


// })()

