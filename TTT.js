const Gameboard = (() => {

    const columns = 9;
    let board = [];

    for (let i = 0; i < columns; i++) {
        board.push(0);
    }

    const cell0 = document.createElement("div");
    const cell1 = document.createElement("div");
    const cell2 = document.createElement("div");
    const cell3 = document.createElement("div");
    const cell4 = document.createElement("div");
    const cell5 = document.createElement("div");
    const cell6 = document.createElement("div");
    const cell7 = document.createElement("div");
    const cell8 = document.createElement("div");

    return { board, cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8 }
})()
console.log(Gameboard);


const gameFlow = () => {

    let { board } = Gameboard;

    function winDrawLogic(eachCell, index, mark, player1UserInput, player2UserInput, h3PlayersNameHeading, h2PlayersMarkHeading) {

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

                if (mark == 'X') {
                    // console.log("player2UserInput:", player2UserInput)
                    // console.log("mark:", mark)
                    h3PlayersNameHeading.textContent = `${player2UserInput + "'s Turn"}`;
                    h2PlayersMarkHeading.textContent = 'O';
                    console.log("PlayerTurnSwitch:", h2PlayersMarkHeading.textContent)
                }
                else {
                    // console.log(player1UserInput)
                    // console.log(mark)
                    h3PlayersNameHeading.textContent = `${player1UserInput + "'s Turn"}`;
                    h2PlayersMarkHeading.textContent = 'X';
                    console.log("PlayerTurnSwitch:", h2PlayersMarkHeading.textContent)

                }


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
                console.log(`${mark}`)

                if (mark == 'X') {
                    h3PlayersNameHeading.textContent = `${player1UserInput} Wins`;
                    h2PlayersMarkHeading.textContent = `${mark}`;
                }
                else {
                    h3PlayersNameHeading.textContent = `${player2UserInput} Wins`;
                    h2PlayersMarkHeading.textContent = `${mark}`;
                }
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
                h3PlayersNameHeading.textContent = '';
                h2PlayersMarkHeading.textContent = "Its a draw"
            }
        }
        console.log('latest', board)
        function restartBtn(player1UserInput, h2PlayersMarkHeading, h3PlayersNameHeading) {

            const restartBtn = document.createElement("startGameBtn");
            restartBtn.classList.add('restartBtn');
            document.body.appendChild(restartBtn);
            console.log(restartBtn);
            restartBtn.textContent = 'Reset and Restart Game';

            restartBtn.addEventListener("click", () => {
                //when click restartBtn then TTT board 
                // should reset
                //board should be zero and each cell should be ''

                // board should be zero
                //now every Cell textContent should be zero

                //if X win, then O turn and if O win then X turn

                h2PlayersMarkHeading.textContent = 'X';
                h3PlayersNameHeading.textContent = `${player1UserInput + "'s Turn"}`;
                console.log("PlayerTurnSwitch:", h2PlayersMarkHeading.textContent)

                // let { board } = winDrawLogic();
                board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                console.log(board)
                const { cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8 } = Gameboard;

                cell0.textContent = '';
                cell1.textContent = '';
                cell2.textContent = '';
                cell3.textContent = '';
                cell4.textContent = '';
                cell5.textContent = '';
                cell6.textContent = '';
                cell7.textContent = '';
                cell8.textContent = '';

            })
        }
        return { board, restartBtn }
    } //winDrawLogic() closed bracket
    return { winDrawLogic }
}//gameflow() closed bracket


const displayToPageFunctions = (() => {


    const firstWholePageDiv = document.querySelector(".firstWholePageDiv");
    const startGameBtn = document.querySelector(".startGameBtn");

    let firstUserInput = document.querySelector(".firstUserInput");
    let secondUserInput = document.querySelector(".secondUserInput");

    const h3PlayersNameHeading = document.querySelector(".playerName");
    const h2PlayersMarkHeading = document.querySelector(".mark");

    let { winDrawLogic } = gameFlow();
    let { board, restartBtn } = winDrawLogic()
    // function 

    function firstPageRemove() {

        startGameBtn.addEventListener("click", (e) => {
            if (!firstWholePageDiv.checkValidity()) {
                return;
            }
            const player1UserInput = firstUserInput.value;
            const player2UserInput = secondUserInput.value;

            firstWholePageDiv.remove();
            h3PlayersNameHeading.textContent = `${player1UserInput + "'s Turn"}`;
            h2PlayersMarkHeading.textContent = 'X';
            secondPage(player1UserInput, player2UserInput, h3PlayersNameHeading, h2PlayersMarkHeading);

            restartBtn(player1UserInput, h2PlayersMarkHeading, h3PlayersNameHeading);
        })
    }

    function secondPage(player1UserInput, player2UserInput, h3PlayersNameHeading, h2PlayersMarkHeading) {

        const containerOfTTTBoard = document.createElement("div");

        containerOfTTTBoard.classList.add("containerOfTTTBoard");
        document.body.appendChild(containerOfTTTBoard);

        let { cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8 } = Gameboard;
        // let { cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8 } = cellsElement();
        // console.log(cell0)

        cell0.classList.add("cell0", "cell");
        cell1.classList.add("cell1", "cell");
        cell2.classList.add("cell2", "cell");
        cell3.classList.add("cell3", "cell");
        cell4.classList.add("cell4", "cell");
        cell5.classList.add("cell5", "cell");
        cell6.classList.add("cell6", "cell");
        cell7.classList.add("cell7", "cell");
        cell8.classList.add("cell8", "cell");

        //In the containerOfTTTBoard
        containerOfTTTBoard.appendChild(cell0);
        containerOfTTTBoard.appendChild(cell1);
        containerOfTTTBoard.appendChild(cell2);
        containerOfTTTBoard.appendChild(cell3);
        containerOfTTTBoard.appendChild(cell4);
        containerOfTTTBoard.appendChild(cell5);
        containerOfTTTBoard.appendChild(cell6);
        containerOfTTTBoard.appendChild(cell7);
        containerOfTTTBoard.appendChild(cell8);

        // const { winDrawLogic } = gameFlow();

        // let playerTurn = 'X';

        const AllCells = document.querySelectorAll("div.cell");
        AllCells.forEach((eachCell, index) => {
            eachCell.addEventListener("click", () => {
                // console.log(h2PlayersMarkHeading)
                if (h2PlayersMarkHeading.textContent == 'X') {


                    if (eachCell.textContent == 'X' || eachCell.textContent == 'O') {
                        return
                    }

                    else {

                        console.log("PlayerTurn:", h2PlayersMarkHeading.textContent);
                        winDrawLogic(eachCell, index, 'X', player1UserInput, player2UserInput, h3PlayersNameHeading, h2PlayersMarkHeading)
                        if (eachCell.textContent == 0) {
                            return
                        }
                        // else {

                        //     h2PlayersMarkHeading.textContent = 'O';
                        //     console.log("PlayerTurnSwitch:", h2PlayersMarkHeading.textContent);

                        // }

                    }
                }


                else if (h2PlayersMarkHeading.textContent == 'O') {

                    if (eachCell.textContent == 'X' || eachCell.textContent == 'O') {
                        return
                    }
                    else {

                        console.log("PlayerTurn:", h2PlayersMarkHeading.textContent);
                        winDrawLogic(eachCell, index, 'O', player1UserInput, player2UserInput, h3PlayersNameHeading, h2PlayersMarkHeading)
                        if (eachCell.textContent == 0) {
                            return
                        }
                        // else {
                        //     h2PlayersMarkHeading.textContent = 'X';
                        //     console.log("PlayerTurnSwitch:", h2PlayersMarkHeading.textContent);
                        // }
                    }
                }

            })
        })

    }


    firstPageRemove();

    // const renderContents = () => {

    // }

    // return { renderContents }

})();

// console.log(displayToPageFunctions())
