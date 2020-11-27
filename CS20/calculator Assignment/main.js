// Average Calculator Remastered by Samuel Oke Industries

// HTML Elements
let calcButtonEl = document.getElementById('Button');
let Test1 = document.getElementById('Test1');
let Test2 = document.getElementById('Test2');
let Test3 = document.getElementById('Test3');
let Test4 = document.getElementById('Test4');
let outputEl = document.getElementById('Finish');

// Event Listener
calcButtonEl.addEventListener('click', calcAverage);

// Event Function
function calcAverage() {
    // Input
    let firstScore = +Test1.value;
    let secondScore = +Test2.value;
    let thirdScore = +Test3.value;
    let fourthScore = +Test4.value;

    // Process & Output
    outputEl.innerHTML = averageFormula(firstScore, secondScore, thirdScore, fourthScore);
}

function averageFormula(x1, x2, x3, x4) {
    let average = (x1 + x2 + x3 + x4) / 4;
    return average;
}