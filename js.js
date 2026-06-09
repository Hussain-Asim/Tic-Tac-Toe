//little global code and tucked inside factories
// If you only need a single instance of something (e.g. the board, the displayController etc.) then wrap the factory inside an IIFE (module pattern) so it cannot be used to create additional instances.
// Each little piece of functionality should be able to fit in the game, player or board objects, save time by brainstorming about it.

//right now goal is to make game work in board via console only and put all logic seperate from UI.

//You have board, how u will put 'X' mark in board at any place with player 1


//3 'X'/'O' mark, horizontally, vertically or diagonally. win
//3 'X'/'O' mark, not horizontally, vertically or diagonally. loose

//winning 3-in-a-rows and ties. then show who wins loose or draw.

//little global code
//try as much as u can in factories
//single instance like board and display controller. wrap factory inside iife.


// [
// [0,0,0],
// [0,0,0],
// [0,0,0]
// ]


const Gameboard = (() => {

    const columns = 9;
    let board = [];

    for (let i = 0; i < columns; i++) {
        board.push(0);
    }


    const playerOne = {
        name: "playerOne",
    }
    const playerTwo = {
        name: "playerTwo",
    }


    return { board, playerOne, playerTwo }
})()
console.log(Gameboard);


const gameFlow = () => {
    const { board } = Gameboard;

    //IF there is 'X' mark horizonally win
    // , vertically,
    //  diagonally


    // if (horizontalWin !== 'X' ){
    // click, go to player1 func, if there is 0 in board entry argument, then put 'X'. 

    // }

    //  if horizontal wins X, then a 
    //at 3rd turn: put X mark, with console win
    function winDrawLogic(row, column, mark) {
        //hVD 
        if (//horizontal
            board[0][0] == mark && board[0][1] == mark && board[0][2] == mark ||

            board[1][0] == mark && board[1][1] == mark && board[1][2] == mark ||

            board[2][0] == mark && board[2][1] == mark && board[2][2] == mark ||
            // vertical
            board[0][0] == mark && board[1][0] == mark && board[2][0] == mark ||

            board[0][1] == mark && board[1][1] == mark && board[2][1] == mark ||

            board[0][2] == mark && board[1][2] == mark && board[2][2] == mark ||
            // //diagonal
            board[0][0] == mark && board[1][1] == mark && board[2][2] == mark ||

            board[0][2] == mark && board[1][1] == mark && board[2][0] == mark) {
            return
        }
        else {

            if (board[row][column] == 0) {
                board[row][column] = mark;

                console.log(board)
            }
            // hVD
            if (board[0][0] == mark && board[0][1] == mark && board[0][2] == mark ||

                board[1][0] == mark && board[1][1] == mark && board[1][2] == mark ||

                board[2][0] == mark && board[2][1] == mark && board[2][2] == mark ||
                // vertical
                board[0][0] == mark && board[1][0] == mark && board[2][0] == mark ||

                board[0][1] == mark && board[1][1] == mark && board[2][1] == mark ||

                board[0][2] == mark && board[1][2] == mark && board[2][2] == mark ||
                // //diagonal
                board[0][0] == mark && board[1][1] == mark && board[2][2] == mark ||

                board[0][2] == mark && board[1][1] == mark && board[2][0] == mark) {
                console.log('win')
            }
        }

        //If all entries used then draw.
        //if all entries not equal to 0 then log tie but one time.

        if (
            (board[0][0] && board[0][1] && board[0][2] &&

                board[1][0] && board[1][1] && board[1][2] &&

                board[2][0] && board[2][1] && board[2][2]) != 0

        ) {
            console.log("It's a draw")
        }

    } //winDrawLogic() closed bracket
    return { winDrawLogic }
}//gameflow() closed bracket


const displayToPage = (() => {

    const renderContents = () => {
        // from board array to webpage.

        //css grid make 3*3 
        // make div container and elements in dom
        //add console logic 'X', 'O' in it 

        const container = document.createElement("div");

        container.classList.add("container");
        document.body.appendChild(container);

        const cell0 = document.createElement("div");
        const cell1 = document.createElement("div");
        const cell2 = document.createElement("div");
        const cell3 = document.createElement("div");
        const cell4 = document.createElement("div");
        const cell5 = document.createElement("div");
        const cell6 = document.createElement("div");
        const cell7 = document.createElement("div");
        const cell8 = document.createElement("div");

        cell0.classList.add("cell0", "cell");
        cell1.classList.add("cell1", "cell");
        cell2.classList.add("cell2", "cell");
        cell3.classList.add("cell3", "cell");
        cell4.classList.add("cell4", "cell");
        cell5.classList.add("cell5", "cell");
        cell6.classList.add("cell6", "cell");
        cell7.classList.add("cell7", "cell");
        cell8.classList.add("cell8", "cell");

        //In the container
        container.appendChild(cell0);
        container.appendChild(cell1);
        container.appendChild(cell2);
        container.appendChild(cell3);
        container.appendChild(cell4);
        container.appendChild(cell5);
        container.appendChild(cell6);
        container.appendChild(cell7);
        container.appendChild(cell8);


        const { winDrawLogic } = gameFlow();

        //  winDrawLogic(row, column, mark)

        // if (board[row][column] == 0) {
        // board[row][column] = mark;

        // Write the functions that allow players to add marks to a specific spot on the board
        // When click at any grid spot add 'X' in array and in that grid cell.

        //i have grid
        //i have 1d array.
        //make array control in grid
        //when click that cell of grid, index should be added to windrawlogic

        //make grid through array
        //array for each. make elements

        const cell = document.querySelectorAll("div.cell");
        cell.forEach((eachCell) => {
            eachCell.addEventListener("click", () => {
                if (eachCell.textContent == '') {
                    eachCell.textContent = 'X';
                    console.log(eachCell);

                    // winDrawLogic()
                }
                else {
                    return
                }
            })
        })

        // for (let i=0; i<9; i++){

        // }


        function playerOneTurn() {
            console.log('Player 1 turn');
            // winDrawLogic(0, 0, 'X')
            // winDrawLogic(1, 1, 'X')
            // winDrawLogic(2, 2, 'X')
            // winDrawLogic(0, 1, 'X')
            // winDrawLogic(1, 2, 'X')
            // winDrawLogic(2, 1, 'X')
            // winDrawLogic(2, 0, 'X')
        }
        function playerTwoTurn() {
            console.log('Player 2 turn');
            // winDrawLogic(0, 2, 'O')
            // winDrawLogic(1, 1, 'O')
            // winDrawLogic(1, 0, 'O')
            // winDrawLogic(2, 2, 'O')
        }
        playerOneTurn();
        playerTwoTurn();
    }
    return { renderContents }
})()

console.log(displayToPage.renderContents())
