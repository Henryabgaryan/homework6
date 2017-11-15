var switching = false;


const stars = function (n, type) {
	if (n===0) {
		return "";
	}

	return type + stars(n-1, type); 
};

const spaces = function(n) {
	if (n===0) {
		return "";
	}

	return " " + spaces(n-1); 
};

const diamond = function(x,type){
  if(x %2 ===0){
    x=x+1;
  }
const StarsandSpaces = function(number,star,type,space){
	if(number===0){
		return "";
	}
	console.log(spaces(space)+stars(star,type));
	if (space !== 0 && switching === false) {
		StarsandSpaces(number-1,star+2,type,space-1);
	}
	else if (space === 0 || switching === true) {
	  switching = true;
		StarsandSpaces(number-1,star-2,type,space+1);
	}
};

	StarsandSpaces(x,1,type,(x-1)/2);
};


 const diamond2 = function(length,sgn){
  
   if(length % 2 === 0){
     length = length-1;
   }
  
 const sign = function(n,type){
   let x = '';
   for(let i = 0; i < n; i++){
     x = x + type;
   }
   return x;
 }
 let spaces = (length-1)/2;
 let stars = 1;
 for(let i = 1; i <= length; i++){
   console.log(sign(spaces, " ") + sign(stars,sgn));
 if(i <= length/2){
   spaces = spaces - 1;
   stars = stars + 2
 }
 else{
   spaces = spaces + 1;
   stars = stars-2
 }
 }
 };




const won = {
  winner: "none",
};

const board = [
    [' ', ' ', ' '], 	
    [' ', ' ', ' '], 
    [' ', ' ', ' ']  
];


const makeMove = function(board, location, isX) {
	var x = location[0];
	var y = location[1];
	var print = 'o';
	if(isX)
		print = 'x';
	if(board[x][y] === ' ') 
		board[x][y] = print;
	else return -1;
	return board;
};

const help = function() {
	return Math.floor(Math.random() * 2 + 0.5);
};	


const nextMove = function(board, isX) {
	var print = 'o';
	if(isX)
		print = 'x';
	return put(board, print);
};

	
const put = function(arr, value) {
	var	x = help();
	var y = help();
	
	if(arr[x][y] === ' ') 
		return [x,y];
	else { 
		if(!no_space(board))
			return put(arr, value);
		return [0,0];
	}
};

const findWinner = function(board) {
	const winLocComb = [
		[board[0][0], board[0][1], board[0][2]],
		[board[1][0], board[1][1], board[1][2]],
		[board[2][0], board[2][1], board[2][2]],
		
		[board[0][0], board[1][0], board[2][0]],
		[board[0][1], board[1][1], board[2][1]],
		[board[0][2], board[1][2], board[2][2]],
		
		[board[0][0], board[1][1], board[2][2]],
		[board[0][2], board[1][1], board[2][0]]
	];
	
	const winLoc = [
		[[0, 0], [0, 1], [0, 2]],
		[[1, 0], [1, 1], [1, 2]],
		[[2, 0], [2, 1], [2, 2]],
		
		[[0, 0], [1, 0], [2, 0]],
		[[0, 1], [1, 1], [2, 1]],
		[[0, 2], [1, 2], [2, 2]],
		
		[[0, 0], [1, 1], [2, 2]],
		[[0, 2], [1, 1], [2, 0]]
	];
	
	for (var i = 0; i < winLocComb.length; i++) {
		var winningCombination = winLocComb[i];
		if (winningCombination[0] === winningCombination[1] && winningCombination[1] === winningCombination[2]
			&& (winningCombination[0] === 'x'|| winningCombination[0] === 'o')) {
		  won.winner = winningCombination[0];
		  won.winLocComb = winLoc[i];
			return won;	
		}
	}
	return undefined;
};

	
const no_space = function(board) {
	for(var i = 0; i < board.length; i++) {
		for(var j = 0; j < board[i].length; j++) {
			if(board[i][j] === ' ') return false 
		}
	}
	return true;
};

const game = function() {
	var x = true;
	while(won.winner === 'none'){
		var nextMoveLoc = nextMove(board, x);
		if((nextMoveLoc[0] === 0 && nextMoveLoc[1] === 0) && no_space(board)){
			won.winner = 'tie';
			return won;
		}
		var move = makeMove(board, nextMoveLoc, x);
		if(move === -1){
			alert('invalid move');
			return;
		}
		console.log(move);
		console.log(findWinner(board));
		x = (x) ? false : true;
	}
};


const line = function(startX, startY, moveToX, moveToY){
	context.moveTo(startX, startY);
	context.lineTo(moveToX, moveToY);
};

const drawField = function(){
	
	line(200,0,200,600);
	line(400,0,400,600);
	line(0,200,600,200);
	line(0,400,600,400);
};

var canvas =  document.getElementById('my_canvas');
var context =  canvas.getContext('2d');
drawField();
context.strokeStyle = "grey";
context.stroke();


var img = document.getElementById("x");
var imgO = document.getElementById("o");
var locAndCoordinates = [
		[[0,0], [50,50]],
		[[0,1], [250,50]],
		[[0,2], [450,50]],
		[[1,0], [50,250]],
		[[1,1], [250,250]],
		[[1,2], [450,250]],
		[[2,0], [50,450]],
		[[2,1], [250,450]],
		[[2,2], [450,450]],
	];

const determineBoards = function(xLocation,yLocation) {
	var loc = [];
	const  checkIfSmallerCoordinates = function(x, y) {
		return (xLocation < x) && (yLocation < y);
	};
	
	if(checkIfSmallerCoordinates(200, 200)) {
		loc = [0,0];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(img, 50,50, 100, 100)
	} else if(checkIfSmallerCoordinates(400, 200)) {
		loc = [0,1];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(img, 250,50, 100, 100);
	}else if(checkIfSmallerCoordinates(600, 200)) {
		loc = [0,2];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(img, 450,50, 100, 100);
	}else if(checkIfSmallerCoordinates(200, 400)) {
		loc = [1,0];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(img, 50,250, 100, 100);
	}else if(checkIfSmallerCoordinates(400, 400)) {
		loc = [1,1];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(img, 250,250, 100, 100)	
	}else if(checkIfSmallerCoordinates(600, 400)) {
		loc = [1,2];
			if(board[loc[0]][loc[1]] === ' ')
		context.drawImage(img, 450,250, 100, 100)
	}else if(checkIfSmallerCoordinates(200, 600)) {
		loc = [2,0];
			if(board[loc[0]][loc[1]] === ' ')
		context.drawImage(img, 50,450, 100, 100)
	}else if(checkIfSmallerCoordinates(400, 600)) {
		loc = [2,1];
			if(board[loc[0]][loc[1]] === ' ')
		context.drawImage(img, 250,450, 100, 100);
	}else if(checkIfSmallerCoordinates(600, 600)) {
		loc = [2,2];
		if(board[loc[0]][loc[1]] === ' ')
			context.drawImage(img, 450,450, 100, 100);
	}
	if(board[loc[0]][loc[1]] === ' ')
		board[loc[0]][loc[1]] = 'x';
	else return;
	var pcMove =  nextMove(board, false);
	
	for (var i = 0; i < locAndCoordinates.length; i++ ) {
		if(pcMove.toString() ===(locAndCoordinates[i][0]).toString()) {
			context.drawImage(imgO, locAndCoordinates[i][1][0],locAndCoordinates[i][1][1], 100, 100);
			break;
		} 
	}
	
	 makeMove(board,pcMove, false);
	 findWinner(board);
	 
	 if(won.winner !== 'none') {
		 location.reload();
		 
	 } else {
		 if(no_space(board)) {
			 
			 location.reload();
		 }	 
	 }
	 
};






















