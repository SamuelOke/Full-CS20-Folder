// Slope Calculator by Samuel Oke Industries

// HTML Elements
let calcButtonEl = document.getElementById('button');
let firstXInEl = document.getElementById('x1');
let secondXInEl = document.getElementById('x2');
let firstYInEl = document.getElementById('y1');
let secondYInEl = document.getElementById('y2');
let outputEl = document.getElementById('Answer');

// Event listener
calcButtonEl.addEventListener('click', calcSlope);

// Event Function
function calcSlope() {
    // Input
    let firstX = +firstXInEl.value;
    let secondX = +secondXInEl.value;
    let firstY = +firstYInEl.value;
    let secondY = +secondYInEl.value;

    // Process & Output
    outputEl.innerHTML = slopeFormula(firstX, secondX, firstY, secondY);
}

function slopeFormula (x1, x2, y1, y2) {
    let slope = (y2 - y1) / (x2 - x1);
    return slope;
}