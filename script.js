function add(val1, val2) {
    return val1 + val2;
}

function subtract(val1, val2) {
    return val1 - val2;
}

function multiply(val1, val2) {
    return val1 * val2;
}

function divide(val1, val2) {
    return val1 / val2;
}

function operate(operator, val1, val2) {
    if (operator === '+') {
        return add(val1, val2);
    } else if (operator === "-") {
        return subtract(val1, val2);
    } else if (operator === '*') {
        return multiply(val1, val2);
    } else if (operator === '/') {
        return divide(val1, val2);
    } else if (operator === '%') {
        return multiply(val1 / 100, val2);
    }
}

function setOperator(string) {
    if (string === 'X') {
        operator = '*';
    } else if (string === '+') {
        operator = '+';
    } else if (string === '-') {
        operator = '-';
    } else if (string === '/') {
        operator = '/'
    } else if (string === '√') {
        operator = '√';
    } else if (string === '%') {
        operator = '%';
    }
}

let operator = '';
const val1 = 0;
const val2 = 0;

const nums = document.querySelectorAll('.btn.number');
const operations = document.querySelectorAll('.btn.operation');
// loop through the nodelist and create eventListener for each button
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', (event) =>{
        console.log(event.target.textContent);
    });
}
// do the same thing for the operations
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', (event) => {
        setOperator(event.target.textContent);
        console.log(operator);
    });
}