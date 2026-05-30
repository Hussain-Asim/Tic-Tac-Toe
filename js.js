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



// function gameFlow() {
//     const { gameboard } = Gameboard;

//     //css grid make 3*3 
//     // make div container and elements in dom
//     //add console logic 'X', 'O' in it 

//     const container = document.createElement("div");

//     container.classList.add("container");
//     // container.textContent = "doorbella";
//     document.body.appendChild(container);

//     const cell1 = document.createElement("div");
//     const cell2 = document.createElement("div");
//     const cell3 = document.createElement("div");
//     const cell4 = document.createElement("div");
//     const cell5 = document.createElement("div");
//     const cell6 = document.createElement("div");
//     const cell7 = document.createElement("div");
//     const cell8 = document.createElement("div");
//     const cell9 = document.createElement("div");

//     cell1.classList.add("cell1");
//     cell2.classList.add("cell2");
//     cell3.classList.add("cell3");
//     cell4.classList.add("cell4");
//     cell5.classList.add("cell5");
//     cell6.classList.add("cell6");
//     cell7.classList.add("cell7");
//     cell8.classList.add("cell8");
//     cell9.classList.add("cell9");

//     // cell1.textContent = 'cell1';
//     // cell2.textContent = 'cell2';
//     // cell3.textContent = 'cell3';
//     // cell4.textContent = 'cell4';
//     // cell5.textContent = 'cell5';
//     // cell6.textContent = 'cell6';
//     // cell7.textContent = 'cell7';
//     // cell8.textContent = 'cell8';
//     // cell9.textContent = 'cell9';

//     //container k andr
//     container.appendChild(cell1);
//     container.appendChild(cell2);
//     container.appendChild(cell3);
//     container.appendChild(cell4);
//     container.appendChild(cell5);
//     container.appendChild(cell6);
//     container.appendChild(cell7);
//     container.appendChild(cell8);
//     container.appendChild(cell9);



//     function playerOneTurn() {

//         console.log('Player 1 turn');
//         winDrawLogic(0, 0, 'X', cell1)
//         winDrawLogic(0, 1, 'X', cell2)
//         winDrawLogic(1, 2, 'X', cell6)
//         winDrawLogic(2, 1, 'X', cell8)
//         winDrawLogic(2, 0, 'X', cell7)

//     }

//     function playerTwoTurn() {

//         console.log('Player 2 turn');
//         winDrawLogic(0, 2, 'O', cell3)
//         winDrawLogic(1, 1, 'O', cell5)
//         winDrawLogic(1, 0, 'O', cell4)
//         winDrawLogic(2, 2, 'O', cell9)

//     }

//     playerOneTurn();
//     playerTwoTurn();


//     //IF there is 'X' marker horizonally win
//     // , vertically,
//     //  diagonally


//     // if (horizontalWin !== 'X' ){
//     // click, go to player1 func, if there is 0 in gameboard entry argument, then put 'X'. 

//     // }

//     //  if horizontal wins X, then a 
//     //at 3rd turn: put X marker, with console win
//     function winDrawLogic(row, column, marker, cell) {
//         //horizontal
//         if (

//             gameboard[0][0] == marker && gameboard[0][1] == marker && gameboard[0][2] == marker ||

//             gameboard[1][0] == marker && gameboard[1][1] == marker && gameboard[1][2] == marker ||

//             gameboard[2][0] == marker && gameboard[2][1] == marker && gameboard[2][2] == marker ||
//             // vertical
//             gameboard[0][0] == marker && gameboard[1][0] == marker && gameboard[2][0] == marker ||

//             gameboard[0][1] == marker && gameboard[1][1] == marker && gameboard[2][1] == marker ||

//             gameboard[0][2] == marker && gameboard[1][2] == marker && gameboard[2][2] == marker ||
//             // //diagonal
//             gameboard[0][0] == marker && gameboard[1][1] == marker && gameboard[2][2] == marker ||

//             gameboard[0][2] == marker && gameboard[1][1] == marker && gameboard[2][0] == marker

//         ) {
//             return
//         } else {
//             // The above in playerOneTurn or playerTwoTurn it is using this logic
//             // e.g winDrawLogic(0, 0, 'X') or 'Y' marker depends on.

//             //If gameboard[0][0] == 0 then in cell1 add marker
//             //How would i know that 
//             // at 0,0 use cell1,
//             // at 0,1 use cell2
//             // at 0,2 use cell3 
//             // at 1,0 use cell4 
//             // at 1,1 use cell5 
//             // at 1,2 use cell6 
//             // at 2,0 use cell7 
//             // at 2,1 use cell8 
//             // at 2,2 use cell9 

//             //lets use for loop in which rows = 3, columns =3, i=0
//             //In that, loop i<3 and 

//             // let rows =3;
//             // let columns =3
//             // let cells = 10

//             // for (let i=0; i<rows; i++){
//             //     for (let j=0; j<columns; j++) {
//             //         for (let c=1; c<cells; c++){
//             //             if (gameboard[i][j]==0) {
//             //                 cell(c).textContent = marker;
//             //             }
//             //         }
//             //     }
//             // }

//             if (gameboard[row][column] == 0) {
//                 gameboard[row][column] = marker;
//                 cell.textContent = marker;
//                 // container.appendChild(cells);

//                 console.log(gameboard)
//             }
//             if (
//                 //if horizontal wins X, at 3rd turn: put X marker, with console win 
//                 gameboard[0][0] == marker && gameboard[0][1] == marker && gameboard[0][2] == marker ||

//                 gameboard[1][0] == marker && gameboard[1][1] == marker && gameboard[1][2] == marker ||

//                 gameboard[2][0] == marker && gameboard[2][1] == marker && gameboard[2][2] == marker ||

//                 gameboard[0][0] == marker && gameboard[1][0] == marker && gameboard[2][0] == marker ||

//                 gameboard[0][1] == marker && gameboard[1][1] == marker && gameboard[2][1] == marker ||

//                 gameboard[0][2] == marker && gameboard[1][2] == marker && gameboard[2][2] == marker ||
//                 // //diagonal
//                 gameboard[0][0] == marker && gameboard[1][1] == marker && gameboard[2][2] == marker ||

//                 gameboard[0][2] == marker && gameboard[1][1] == marker && gameboard[2][0] == marker
//             ) {
//                 console.log('win')
//             }
//         }

//         //If all entries used then draw.
//         //if all entries not equal to 0 then log tie but one time.

//         if (
//             (gameboard[0][0] && gameboard[0][1] && gameboard[0][2] &&

//                 gameboard[1][0] && gameboard[1][1] && gameboard[1][2] &&

//                 gameboard[2][0] && gameboard[2][1] && gameboard[2][2]) != 0

//         ) {
//             console.log("It's a draw")
//         }

//     }
//     // winLogic()
//     // return {gameboard}
// }
// console.log(gameFlow())

// create an object that will handle the display/DOM logic. 

//create display/DOM logic object
//create funct that shows contents of gameboard array to just page. 
//(for now, you can always just fill the gameboard array with "X"s and "O"s just to see what’s going on). 

//interact
//
const gameFlow = () => {
    const { gameboard } = Gameboard;

    //IF there is 'X' marker horizonally win
    // , vertically,
    //  diagonally


    // if (horizontalWin !== 'X' ){
    // click, go to player1 func, if there is 0 in gameboard entry argument, then put 'X'. 

    // }

    //  if horizontal wins X, then a 
    //at 3rd turn: put X marker, with console win
    function winDrawLogic(row, column, marker, cell) {
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
                gameboard[row][column] = marker;
                cell.textContent = marker;
                // container.appendChild(cells);

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

    } //winDrawLogic() closed bracket

    // winLogic()
    // return {gameboard}

    // console.log(gameFlow())
    return { winDrawLogic }
}//gameflow() closed bracket
// )();


const displayToPage = (() => {

    const renderContents = () => {
        // from gameboard array to webpage.

        //css grid make 3*3 
        // make div container and elements in dom
        //add console logic 'X', 'O' in it 


        const container = document.createElement("div");

        container.classList.add("container");
        // container.textContent = "doorbella";
        document.body.appendChild(container);

        const cell1 = document.createElement("div");
        const cell2 = document.createElement("div");
        const cell3 = document.createElement("div");
        const cell4 = document.createElement("div");
        const cell5 = document.createElement("div");
        const cell6 = document.createElement("div");
        const cell7 = document.createElement("div");
        const cell8 = document.createElement("div");
        const cell9 = document.createElement("div");

        cell1.classList.add("cell1");
        cell2.classList.add("cell2");
        cell3.classList.add("cell3");
        cell4.classList.add("cell4");
        cell5.classList.add("cell5");
        cell6.classList.add("cell6");
        cell7.classList.add("cell7");
        cell8.classList.add("cell8");
        cell9.classList.add("cell9");

        // cell1.textContent = 'cell1';
        // cell2.textContent = 'cell2';
        // cell3.textContent = 'cell3';
        // cell4.textContent = 'cell4';
        // cell5.textContent = 'cell5';
        // cell6.textContent = 'cell6';
        // cell7.textContent = 'cell7';
        // cell8.textContent = 'cell8';
        // cell9.textContent = 'cell9';

        //container k andr
        container.appendChild(cell1);
        container.appendChild(cell2);
        container.appendChild(cell3);
        container.appendChild(cell4);
        container.appendChild(cell5);
        container.appendChild(cell6);
        container.appendChild(cell7);
        container.appendChild(cell8);
        container.appendChild(cell9);

        const flow = gameFlow();
        const { winDrawLogic } = flow;

        function playerOneTurn() {

            console.log('Player 1 turn');
            winDrawLogic(0, 0, 'X', cell1)
            winDrawLogic(0, 1, 'X', cell2)
            winDrawLogic(1, 2, 'X', cell6)
            winDrawLogic(2, 1, 'X', cell8)
            winDrawLogic(2, 0, 'X', cell7)

        }

        function playerTwoTurn() {

            console.log('Player 2 turn');
            winDrawLogic(0, 2, 'O', cell3)
            winDrawLogic(1, 1, 'O', cell5)
            winDrawLogic(1, 0, 'O', cell4)
            winDrawLogic(2, 2, 'O', cell9)

        }

        playerOneTurn();
        playerTwoTurn();

    }



    // return { renderContents, gameFlow }

    return { renderContents }

})()

// displayToPage.renderContents();

console.log(displayToPage.renderContents())

//css grid make 3*3 
// make div container and elements in dom
//add console logic 'X', 'O' in it 

// const container = document.createElement("div");

// container.classList.add("container");
// // container.textContent = "doorbella";
// document.body.appendChild(container);

// const cell1 = document.createElement("div");
// const cell2 = document.createElement("div");
// const cell3 = document.createElement("div");
// const cell4 = document.createElement("div");
// const cell5 = document.createElement("div");
// const cell6 = document.createElement("div");
// const cell7 = document.createElement("div");
// const cell8 = document.createElement("div");
// const cell9 = document.createElement("div");

// cell1.classList.add("cell1");
// cell2.classList.add("cell2");
// cell3.classList.add("cell3");
// cell4.classList.add("cell4");
// cell5.classList.add("cell5");
// cell6.classList.add("cell6");
// cell7.classList.add("cell7");
// cell8.classList.add("cell8");
// cell9.classList.add("cell9");

// cell1.textContent = 'cell1';
// cell2.textContent = 'cell2';
// cell3.textContent = 'cell3';
// cell4.textContent = 'cell4';
// cell5.textContent = 'cell5';
// cell6.textContent = 'cell6';
// cell7.textContent = 'cell7';
// cell8.textContent = 'cell8';
// cell9.textContent = 'cell9';

// //container k andr
// container.appendChild(cell1);
// container.appendChild(cell2);
// container.appendChild(cell3);
// container.appendChild(cell4);
// container.appendChild(cell5);
// container.appendChild(cell6);
// container.appendChild(cell7);
// container.appendChild(cell8);
// container.appendChild(cell9);

