// Main Code
document.getElementById('calculate').addEventListener('click', calcDivisibility)

function calcDivisibility() {
    let numTaxes = Number(document.getElementById('Num1').value);
    let numFriends = Number(document.getElementById('Num2').value);

    // Call function and Display Results
    document.getElementById('statement').innerHTML = 'If you asked your ' + numFriends + ' friends to help pay your ' + numTaxes + ' taxes, ' +isDivisible(numTaxes, numFriends) + '.';
}

function isDivisible(num1, num2) {
    if (num1 % num2 == 0) {
        return 'they would be able to split the taxes between themselves';
    } else {
        return 'they would not be able to split the taxes between themselves and commit tax fraud';
    }
}
