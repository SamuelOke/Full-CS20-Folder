// Global Variable
document.getElementById('calculate').addEventListener('click', sequenceCalculator);

// Call Function and Display Results
function sequenceCalculator() {
    let Num1 = Number(document.getElementById('Num1').value);
    let Num2 = Number(document.getElementById('Num2').value);
    let Num3 = Number(document.getElementById('Num3').value);

    document.getElementById('statement').innerHTML = 'If your start number is ' + Num1 + ' and your end number is ' + Num2 + ' and you skip the numbers between by ' + Num3 + ', the end result is ' + arithmeticSum(Num1, Num2, Num3) + '.';
}

function arithmeticSum(start, end, step) {
    let sum = 0;
    for (let n = start; n <= end; n += step) {
        sum += n;
    }

    return sum;

}