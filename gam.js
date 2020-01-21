var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function(){
	messageDisplay.textContent = "";
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// display the number of color to the h1
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	// change colors of square
	for(var j = 0; j < squares.length ; j++){
		// add initial colors to squares
		squares[j].style.backgroundColor = colors[j];}
})

for(var i = 0; i < squares.length ; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares 
	squares[i].addEventListener("click", function(){
		// grab the color of the clicked box
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again!!!"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;

		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(Color){
	// loop through all sqaures
	for(i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = Color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an arrray
	var array = [];
	// add num random colors to array
	for(i = 0; i < num; i++){
		array.push(randomColor())
	}
	// return that array
	return array
}

function randomColor(){
	// pick a red, green, and blue from 0 to 255
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}