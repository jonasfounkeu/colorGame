let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let colorPicked = pickColor();
let colorDisplay = document.getElementById("color");
let messageDisplay = document.querySelector("#message");
colorDisplay.textContent = colorPicked;
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function () {
    easyBtn.classList.toggle("selected");
    hardBtn.classList.remove("selected");
    // numSquares to be 3
    numSquares = 3;
    // generate 3 random colors
    colors = generateRandomColors(numSquares);
    // select a color randomly
    colorPicked = pickColor();
    // change colorDisplay
    colorDisplay.textContent = colorPicked;
    // change the first 3 squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.toggle("selected");
    easyBtn.classList.remove("selected");
    // numSquares to be 6
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    // select a color randomly  
    colorPicked = pickColor();
    // change colorDisplay
    colorDisplay.textContent = colorPicked;
    // change the first 3 squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function () {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new color from an array
    colorPicked = pickColor();
    // change colorDisplay to match colorPicked
    colorDisplay.textContent = colorPicked;
    // change colors of square
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
});
for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function () {
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        // compare color to colorPicked
        if (clickedColor === colorPicked) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });

}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    let arr = [];
    // repeat num times
    for (let i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a red from 0 to 255
    let r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    let g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}