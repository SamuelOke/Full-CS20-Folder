// Main Code
document.getElementById('calculate').addEventListener('click', ticketStatement)

function ticketStatement() {
    let yourSpeed = Number(document.getElementById('speed').value);
    let theLimit = Number(document.getElementById('limit').value);

    // Call Function and Display Results
    document.getElementById('statement').innerHTML = 'Because you were caught doing ' + yourSpeed + 'km/h in a ' + theLimit + 'km/h zone, the court has decided to give you ' + determineTicket(yourSpeed, theLimit) + '.';
}

function determineTicket(speed, limit) {
    if (speed > limit + 20) {
        return 'a Big Ticket';
    } else if (speed > limit) {
        return 'a Small Ticket';
    } else {
        return 'no Ticket';
    }
}