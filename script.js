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
    operatorHit = true;
    console.log(operatorHit);
}

let operator = '';
let val1 = '';
let val2 = '';
let operatorHit = false;

const nums = document.querySelectorAll('.btn.number');
const operations = document.querySelectorAll('.btn.operation');
const screen = document.querySelector('.screen');
// loop through the nodelist and create eventListener for each button
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', (event) =>{
        if (!operatorHit) {
            val1 += event.target.textContent;
            screen.textContent = val1;
        } else {
            val2 += event.target.textContent;
            screen.textContent = val2;
        }
    });
}
// do the same thing for the operations
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', (event) => {
        setOperator(event.target.textContent);
        console.log(operator);
    });
}