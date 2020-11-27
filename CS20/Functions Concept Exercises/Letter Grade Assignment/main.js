// Main Code
document.getElementById('calculate').addEventListener('click', letterGrade)

function letterGrade() {
    let testScore = Number(document.getElementById('testscore').value);
    
    // Call Functions and Display Results
    document.getElementById('statement').innerHTML = 'A grade of ' + testScore + '% is a letter grade of ' + percentGrade(testScore) + '.';
}

function percentGrade(grade) {
    
    if (grade <= 49) { // 0 - 49% = F
        return 'F';
    } else if (grade <= 59) { // 50 - 59% = D 
        return 'D';
    } else if (grade <= 69) { // 60 - 69% = C
        return 'C';
    } else if (grade <= 79) { // 70 - 79% = B
        return 'B'
    } else if (grade <= 100) { // 80 - 100 = A
        return 'A'
    } else { // Anything above an A is an A+ for an exemplary student.
        return "A+"
    }
}