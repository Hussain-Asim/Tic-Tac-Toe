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
    // function winDrawLogic(eachCell, index, markX, markO) {

    function winDrawLogic(eachCell, index, mark) {

        //with player1, X marker in same function.
        //with player2, O marker in same function.
        //click 1st cell, player1 turns, click again 1st cell, nobody turns.







        //with turn1 X mark should go.
        //with turn2 O mark should go.

        let column = index;

        //hVD 
        if (//horizontal
            board[0] == 'X' && board[1] == 'X' && board[2] == 'X' ||

            board[3] == 'X' && board[4] == 'X' && board[5] == 'X' ||

            board[6] == 'X' && board[7] == 'X' && board[8] == 'X' ||
            // vertical
            board[0] == 'X' && board[3] == 'X' && board[6] == 'X' ||

            board[1] == 'X' && board[4] == 'X' && board[7] == 'X' ||

            board[2] == 'X' && board[5] == 'X' && board[8] == 'X' ||
            // //diagonal
            board[0] == 'X' && board[4] == 'X' && board[8] == 'X' ||

            board[2] == 'X' && board[4] == 'X' && board[6] == 'X' ||

            board[0] == 'O' && board[1] == 'O' && board[2] == 'O' ||

            board[3] == 'O' && board[4] == 'O' && board[5] == 'O' ||

            board[6] == 'O' && board[7] == 'O' && board[8] == 'O' ||
            // vertical
            board[0] == 'O' && board[3] == 'O' && board[6] == 'O' ||

            board[1] == 'O' && board[4] == 'O' && board[7] == 'O' ||

            board[2] == 'O' && board[5] == 'O' && board[8] == 'O' ||
            // //diagonal
            board[0] == 'O' && board[4] == 'O' && board[8] == 'O' ||

            board[2] == 'O' && board[4] == 'O' && board[6] == 'O'

        ) {
            return
        }
        else {

            if (board[column] == 0) {
                board[column] = mark;
                eachCell.textContent = mark;
                console.log(board)
            }
            // hVD after 3rd turn check
            if (//horizontal
                board[0] == mark && board[1] == mark && board[2] == mark ||

                board[3] == mark && board[4] == mark && board[5] == mark ||

                board[6] == mark && board[7] == mark && board[8] == mark ||
                // vertical
                board[0] == mark && board[3] == mark && board[6] == mark ||

                board[1] == mark && board[4] == mark && board[7] == mark ||

                board[2] == mark && board[5] == mark && board[8] == mark ||
                // //diagonal
                board[0] == mark && board[4] == mark && board[8] == mark ||

                board[2] == mark && board[4] == mark && board[6] == mark) {
                console.log('win')
            }
            //if at last standing cell it wins then not draw 
            //if win then not draw
            //If all entries used then draw.
            //if all entries not equal to 0 then log tie but one time.
            else if (
                (board[0] && board[1] && board[2] &&

                    board[3] && board[4] && board[5] &&

                    board[6] && board[7] && board[8]) != 0

            ) {
                console.log("It's a draw")
            }
        }





    } //winDrawLogic() closed bracket
    return { winDrawLogic }
}//gameflow() closed bracket


const displayToPage = (() => {

    const renderContents = () => {
        // firstPageRemove();
        // from board array to webpage.

        //css grid make 3*3 
        // make div container and elements in dom
        //add console logic 'X', 'O' in it 

        // const container = document.createElement("div");

        // container.classList.add("container");
        // document.body.appendChild(container);


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
        //clean interface,
        //show player 1,2 with textContent to add
        // A div inputContainer

        // A div firstInputBlock
        // A label firstLabel
        // input firstInput
        // A div secondInputBlock
        // A label secondLabel
        // input secondInput

        //Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that shows the results upon game end!

        // click start and firstPageDiv remove and container should be added.
        function firstPageRemove() {
            const firstPageDiv = document.querySelector(".firstPageDiv");
            const button = document.querySelector("button")
            button.addEventListener("click", () => {
                //                 const element = document.getElementById("idOfParent");
                // while (element.firstChild) {
                //   element.removeChild(element.firstChild);
                // }
                firstPageDiv.remove()



            })

            // const { playerOne, playerTwo } = Gameboard;
            // const container 

        }


        firstPageRemove();


        const { winDrawLogic } = gameFlow();

        //i have grid
        //i have 1d array.
        //make array control in grid

        //make grid through array
        //array for each. make elements

        //when click that cell of grid, X should be shown in array as well as in cell. 

        //start with playerOneTurn(in end add switch to player 2 turn) windraw logic with X. 
        //with playerTwoTurn 

        // const playerOne = 'Player 1';
        // const playerTwo = 'Player 2'



        let turn = 1;
        const cell = document.querySelectorAll("div.cell");
        cell.forEach((eachCell, index) => {
            eachCell.addEventListener("click", () => {

                if (turn === 1) {

                    //after 2 1 if eachCell is still X, O then return
                    //after win if click at empty cells, then none.

                    if (eachCell.textContent == 'X' || eachCell.textContent == 'O') {
                        return
                    }

                    else {


                        console.log(turn);
                        winDrawLogic(eachCell, index, 'X')
                        if (eachCell.textContent == 0) {
                            return
                        }
                        else {

                            turn = 2;
                            console.log(turn);
                        }
                    }
                }
                else if (turn === 2) {

                    if (eachCell.textContent == 'X' || eachCell.textContent == 'O') {
                        return
                    }
                    else {

                        console.log(turn);
                        winDrawLogic(eachCell, index, 'O')
                        if (eachCell.textContent == 0) {
                            return
                        }
                        else {
                            turn = 1;
                            console.log(turn);
                        }
                    }
                }

            })
        })
    }
    return { renderContents }
})();

console.log(displayToPage.renderContents())


