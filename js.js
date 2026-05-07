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
//player 1 wins 

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
	


	function gameFlow(){
		const {gameboard} = Gameboard;
		
		function playerOneTurn(addYourMarker){
			
				console.log('Player 1 turn');
				winDrawLogic(0,0, 'X')
				winDrawLogic(0,1, 'X')
				winDrawLogic(1,2, 'X')
				winDrawLogic(2,1, 'X')
				winDrawLogic(2,0, 'X')
				
		}

		function playerTwoTurn(addYourMarker){
			
				console.log('Player 2 turn');
				winDrawLogic(0,2, 'O')
				winDrawLogic(1,1, 'O')
				winDrawLogic(1,0, 'O')
				winDrawLogic(2,2, 'O')
				
		}

		playerOneTurn(); 
		playerTwoTurn(); 
		// console.log(gameboard)

		// function playerTwoTurn(){
		// 	if (gameboard[0][1] === 0) {
		// 		console.log('Player 2 turn');
		// 		gameboard[0][1] = 'O';
		// 	}
		// 	else{
		// 		return;
		// 	}
		// }
		
		// playerTwoTurn();
		// console.log(gameboard)

// function playerOneAgainTurn(){
// 			if (gameboard[0][2] === 0) {
// 				console.log('player 1 again turn');
// 				gameboard[0][2] = 'X';
// 			}
// 			else{
// 				return;
// 			}
// 		}
		
// 		playerOneAgainTurn();
// 		console.log(gameboard)

	//IF there is 'X' marker horizonally win
	// , vertically,
	//  diagonally
	

	// if (horizontalWin !== 'X' ){
// click, go to player1 func, if there is 0 in gameboard entry argument, then put 'X'. 

// }
 
//  if horizontal wins X, then a 
//at 3rd turn: put X marker, with console win
	function winDrawLogic(row,column, marker) {
			//horizontal
		if (
	
			gameboard[0][0] == marker  && gameboard[0][1] == marker && gameboard[0][2] == marker ||
			
			gameboard[1][0]  == marker && gameboard[1][1]== marker && gameboard[1][2] == marker ||
			
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
					gameboard[0][0] == marker  && gameboard[0][1] == marker && gameboard[0][2] == marker ||
				
					gameboard[1][0]  == marker && gameboard[1][1]== marker && gameboard[1][2] == marker ||

					gameboard[2][0] == marker && gameboard[2][1] == marker && gameboard[2][2] == marker		  ||	      
					
					gameboard[0][0] == marker && gameboard[1][0] == marker && gameboard[2][0] == marker		  ||

					gameboard[0][1] == marker && gameboard[1][1] == marker && gameboard[2][1] == marker ||
			
					gameboard[0][2] == marker && gameboard[1][2] == marker && gameboard[2][2] == marker ||
// //diagonal
					gameboard[0][0] == marker && gameboard[1][1] == marker && gameboard[2][2] == marker ||
						
					gameboard[0][2] == marker && gameboard[1][1] == marker && gameboard[2][0] == marker
			  )	{
					console.log('win')
				}
			}

			//If all entries used then draw.
		//if all entries not equal to 0 then log tie but one time.

		if (
				(gameboard[0][0] && gameboard[0][1] && gameboard[0][2]  &&
			
			gameboard[1][0] && gameboard[1][1] && gameboard[1][2]  &&
			
			gameboard[2][0] && gameboard[2][1] && gameboard[2][2]) != 0
			
			) {
				console.log("It's a draw")
			}

		}
		// winLogic()
// return {gameboard}
	}
console.log(gameFlow())
	// console.log(gameFlow())

	// const plant1 = 2;
	// const plant2 = 4;
	// if (!plant1) {
	// 	console.log(plant1)
	// }

// // ...........

// 	function gameController(){

//   const {gameboard} = Gameboard();

// //   console.log(gameboard); 

// const players = [
// 			{
// 				name: playerOneName,
// 				token: 1
// 			},
// 			{
// 				name: playerTwoName,
// 				token: 2
// 			}
// 		];
	
// 		let activePlayer = players[0];
	
// 		const switchPlayerTurn = () => {
// 			activePlayer = activePlayer === players[0] ? players[1] : players[0];
// 		};
// 		const getActivePlayer = () => activePlayer;

// //goal is in array of each array, modify elements depend on if and else
// // [
// // [0,0,0],
// // [0,0,0],
// // [0,0,0]
// // ]

// function addMarkersToBoard (){
	
// 	gameboard.map((row,index) => {
// 	if (row[0] === 0) {
// 		 row[0] = 'X'
// 	}
//   })

// return {gameboard}
// 	}
// 	console.log(addMarkersToBoard());
// }
// gameController()


// const calculator = (() => {
// 	let lastResult;
  
// 	const add = (a, b) => {
// 	  lastResult = a + b;
// 	  return lastResult;
// 	};
// 	const subtract = (a, b) => {
// 	  lastResult = a - b;
// 	  return lastResult;
// 	};
// 	const multiply = (a, b) => {
// 	  lastResult = a * b;
// 	  return lastResult;
// 	};
// 	const divide = (a, b) => {
// 	  lastResult = a / b;
// 	  return lastResult;
// 	};
// 	const getLastResult = () => lastResult;
  
// 	return { add, subtract, multiply, divide, getLastResult };
//   })();
  
//   console.log(calculator.add(3, 5)); // 8
//   console.log(calculator.subtract(6, 2)); // 4
//   console.log(calculator.getLastResult()); // 4
//   console.log(calculator.multiply(14, 5534)); // 77476
  


// function createUser(name) {
// 	const discordName = "@" + name;
  
// 	let reputation = 0;
// 	let kutta =1;
// 	const getReputation = () => reputation;
// 	const giveReputation = () => { reputation++; };
  
// 	return { name, discordName, getReputation, giveReputation };
//   }
  
//   const josh = createUser("josh");
//   josh.giveReputation();
//   josh.giveReputation();
  
//   // logs { discordName: "@josh", reputation: 2 }
//   console.log({
// 	discordName: josh.discordName,
// 	reputation: josh.getReputation()
//   });
  

//   function createPlayer(name, level) {

// 	const { getReputation, giveReputation } = createUser(name);
  
// 	const increaseLevel = () => { level++; };

// 	return { name, getReputation, giveReputation, increaseLevel };

//   }
// console.log(createPlayer('lola', 0));
  


// ...............

// const Gameboard = {
// 	gameboard: []
// };

// const boardSize = 10;
// const board = [];

// for (let i = 0; i != boardSize; i++) {
// 	board.push([]);
// 	for (let j = 0; j != boardSize; j++) {
// 		board[i].push(0);
//        console.log(board);
// 	}
// }

// console.log(board);
// ...............

// #1
/*
** The Gameboard represents the state of the board
** Each square holds a Cell (defined later)
** and we expose a dropToken method to be able to add Cells to squares
*/

// function Gameboard() {
// 	const rows = 2;
// 	const columns = 3;
// 	const board = [];

// 	// Create a 2d array that will represent the state of the game board
// 	// For this 2d array, row 0 will represent the top row and
// 	// column 0 will represent the left-most column.
// 	// This nested-loop technique is a simple and common way to create a 2d array.
// 	for (let i = 0; i < rows; i++) {
// 		board[i] = [];
// 		for (let j = 0; j < columns; j++) {
// 			board[i].push(Cell());
// 		}
// 	}

// 	// This will be the method of getting the entire board that our
// 	// UI will eventually need to render it.
// 	const getBoard = () => board;

// 	// In order to drop a token, we need to find what the lowest point of the
// 	// selected column is, *then* change that cell's value to the player number
// 	const dropToken = (column, player) => {
// 		// Our board's outermost array represents the row,
// 		// so we need to loop through the rows, starting at row 0,
// 		// find all the rows that don't have a token, then take the
// 		// last one, which will represent the bottom-most empty cell
// 		const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);

// 		// If no cells make it through the filter, 
// 		// the move is invalid. Stop execution.
// 		if (!availableCells.length) return;

// 		// Otherwise, I have a valid cell, the last one in the filtered array
// 		const lowestRow = availableCells.length - 1;
// 		board[lowestRow][column].addToken(player);
// 	};

// 	// This method will be used to print our board to the console.
// 	// It is helpful to see what the board looks like after each turn as we play,
// 	// but we won't need it after we build our UI
// 	const printBoard = () => {
// 		const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
// 		console.log(boardWithCellValues);
// 	};

// 	// Here, we provide an interface for the rest of our
// 	// application to interact with the board
// 	return { getBoard, dropToken, printBoard };
// }

// /*
// ** A Cell represents one "square" on the board and can have one of
// ** 0: no token is in the square,
// ** 1: Player One's token,
// ** 2: Player 2's token
// */

// function Cell() {
// 	let value = 0;

// 	// Accept a player's token to change the value of the cell
// 	const addToken = (player) => {
// 		value = player;
// 	};

// 	// How we will retrieve the current value of this cell through closure
// 	const getValue = () => value;

// 	return {
// 		addToken,
// 		getValue
// 	};
// }

// /* 
// ** The GameController will be responsible for controlling the 
// ** flow and state of the game's turns, as well as whether
// ** anybody has won the game
// */
// function GameController(
// 	playerOneName = "Player One",
// 	playerTwoName = "Player Two"
// ) {
// 	const board = Gameboard();

// 	const players = [
// 		{
// 			name: playerOneName,
// 			token: 1
// 		},
// 		{
// 			name: playerTwoName,
// 			token: 2
// 		}
// 	];

// 	let activePlayer = players[0];

// 	const switchPlayerTurn = () => {
// 		activePlayer = activePlayer === players[0] ? players[1] : players[0];
// 	};
// 	const getActivePlayer = () => activePlayer;

// 	const printNewRound = () => {
// 		board.printBoard();
// 		console.log(`${getActivePlayer().name}'s turn.`);
// 	};

// 	const playRound = (column) => {
// 		// Drop a token for the current player
// 		console.log(
// 			`Dropping ${getActivePlayer().name}'s token into column ${column}...`
// 		);
// 		board.dropToken(column, getActivePlayer().token);

// 		/*  This is where we would check for a winner and handle that logic,
// 			such as a win message. */

// 		// Switch player turn
// 		switchPlayerTurn();
// 		printNewRound();
// 	};

// 	// Initial play game message
// 	printNewRound();

// 	// For the console version, we will only use playRound, but we will need
// 	// getActivePlayer for the UI version, so I'm revealing it now
// 	return {
// 		getActivePlayer
// 	};
// }

// const game = GameController();
//   console.log(game);

// 2nd replit here

// function Gameboard() {
// 	const rows = 6;
// 	const columns = 7;
// 	const board = [];

// 	for (let i = 0; i < rows; i++) {
// 		board[i] = [];
// 		for (let j = 0; j < columns; j++) {
// 			board[i].push(Cell());
// 		}
// 	}

// 	const getBoard = () => board;

// 	const dropToken = (column, player) => {
// 		const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);
// 		const availableCellst = board.filter((row) => row[column].getValue() === 0);

// 		console.log(availableCellst);
// 		console.log(availableCells);
// 		console.log(availableCells.length);

// 		if (!availableCells.length) return;

// 		const lowestRow = availableCells.length - 1;
// 		console.log(lowestRow);
// 		board[lowestRow][column].addToken(player);
// 	};

// 	const printBoard = () => {
// 		const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
// 		console.log(boardWithCellValues);
// 	};

// 	return { getBoard, dropToken, printBoard };
// }

// function Cell() {
// 	let value = 0;

// 	const addToken = (player) => {
// 		value = player;
// 	};

// 	const getValue = () => value;

// 	return {
// 		addToken,
// 		getValue
// 	};
// }

// function GameController(
// 	playerOneName = "Player One",
// 	playerTwoName = "Player Two"
// ) {
// 	const board = Gameboard();

// 	const players = [
// 		{
// 			name: playerOneName,
// 			token: 1
// 		},
// 		{
// 			name: playerTwoName,
// 			token: 2
// 		}
// 	];

// 	let activePlayer = players[0];

// 	const switchPlayerTurn = () => {
// 		activePlayer = activePlayer === players[0] ? players[1] : players[0];
// 	};
// 	const getActivePlayer = () => activePlayer;

// 	const printNewRound = () => {
// 		board.printBoard();
// 		console.log(`${getActivePlayer().name}'s turn.`);
// 	};

// 	const playRound = (column) => {
// 		console.log(
// 			`Dropping ${getActivePlayer().name}'s token into column ${column}...`
// 		);
// 		board.dropToken(column, getActivePlayer().token);

// 		/*  This is where we would check for a winner and handle that logic,
// 			such as a win message. */

// 		switchPlayerTurn();
// 		printNewRound();
// 	};

// 	printNewRound();

// 	return {
// 		playRound,
// 		getActivePlayer,
// 		getBoard: board.getBoard
// 	};
// }

// console.log(GameController()
// );
// function ScreenController() {
// 	const game = GameController();
// 	const playerTurnDiv = document.querySelector('.turn');
// 	const boardDiv = document.querySelector('.board');

// 	const updateScreen = () => {
// 		// clear the board
// 		boardDiv.textContent = "";

// 		// get the newest version of the board and player turn
// 		const board = game.getBoard();
// 		const activePlayer = game.getActivePlayer();

// 		// Display player's turn
// 		playerTurnDiv.textContent = `${activePlayer.name}'s turn...`

// 		// Render board squares
// 		board.forEach(row => {
// 			row.forEach((cell, index) => {
// 				// Anything clickable should be a button!!
// 				const cellButton = document.createElement("button");
// 				cellButton.classList.add("cell");
// 				// Create a data attribute to identify the column
// 				// This makes it easier to pass into our `playRound` function 
// 				cellButton.dataset.column = index
// 				cellButton.textContent = cell.getValue();
// 				boardDiv.appendChild(cellButton);
// 			})
// 		})
// 	}

// 	// Add event listener for the board
// 	function clickHandlerBoard(e) {
// 		const selectedColumn = e.target.dataset.column;
// 		// Make sure I've clicked a column and not the gaps in between
// 		if (!selectedColumn) return;

// 		game.playRound(selectedColumn);
// 		updateScreen();
// 	}
// 	boardDiv.addEventListener("click", clickHandlerBoard);

// 	// Initial render
// 	updateScreen();

// 	// We don't need to return anything from this module because everything is encapsulated inside this screen controller.
// }

// ScreenController()