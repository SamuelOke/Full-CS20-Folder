// Stock Market Chart for Samuel Oke Industries (Array Visualizer)

// HTML Variables
let containerEl = document.getElementById('container');
let stockBar = document.getElementById('stockbar');
let worstStock = document.getElementById('worststockww');

// Global Variable
let myData = [];
for (let n = 1; n <= 50; n++) {
    myData.push(Math.random() * 600)
}

// Display Data
drawArray();

function drawArray() {
    let outputStr = "";
    for (let i = 0; i < myData.length; i++) {
        outputStr += `<div style="height: ${myData[i]}px"></div>`;
    }
    containerEl.innerHTML = outputStr;
}

// Key Event Stuff
document.addEventListener('keydown', keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 38) {
        // Up Arrow - Add 600 to the index 0
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 0, Math.random() * 600);
    } else if (event.keyCode === 40) {
        // Down Arrow - remove element from middle
        let middleIndex = Math.floor(myData.length / 2);
        myData.splice(middleIndex, 1,);
    } 

    // if (event.keyCode === 38) {
    //     // Up Arrow - Push value to the end of the array
    //     myData.push(Math.random() * 600);
    // } else if (event.keyCode === 40) {
    //     // Down Arrow - Remove value from the end of the array
    //     let poppedValue = myData.pop();
    //     myData.pop();
    // }


    // Redraw the array
    drawArray();
    stockBar.innerHTML = Math.max(...myData);
    worstStock.innerHTML = Math.min(...myData);
}