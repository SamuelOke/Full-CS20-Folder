// Colour Array by Samuel Oke Industries (with help from Mr. V)

// Variables for HTML Elements
let containerEl = document.getElementById('container');
let inputEl = document.getElementById('color-in');

// Global Variable
let colors;

// Fetch content from colours.txt
fetch('colours.txt').then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    colors = stringData.split(/\r?\n/);
    displayColors(colors);
}

// Event Listener
inputEl.addEventListener('keyup', submitHandler);

function submitHandler(event) {
    // Display all colors on page
    let divStr = "";
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].includes(inputEl.value)) {
            divStr += `<div style="background: ${colors[i]}"></div>`;
        }
    }
    containerEl.innerHTML = divStr;
}

function displayColors(colors) {
    // Display all colors on page
    let divStr = "";
    for (let i = 0; i < colors.length; i++) {
            divStr += `<div style="background: ${colors[i]}"></div>`;
        }
    containerEl.innerHTML = divStr;
    }
    