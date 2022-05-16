function add(val1, val2) {
    let ans = val1 + val2;
    val1 = val2;
    val2 = '';
    return ans;
}

function subtract(val1, val2) {
    let ans = val1  - val2;
    val1 = val2;
    val2 = '';
    return ans;
}

function multiply(val1, val2) {
    let ans = val1 * val2;
    val1 = val2;
    val2 = '';
    return ans;
}

function divide(val1, val2) {
    let ans = val1 / val2;
    val1 = val2;
    val2 = '';
    return ans;
}

// run the correct function and then move val2 to val1 and set val2 to zero
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

function setOperation(string) {
    if (string === 'X') {
        operator = '*';
    } else if (string === '+') {
        operator = '+';
    } else if (string === '-') {
        operator = '-';
    } else if (string === '/') {
        operator = '/'
    } else if (string === '%') {
        operator = '%';
    }

    if (operationHit) {
        operationHit = false;
    } else {
        operationHit = true;
    }
}

let operator = '';
let val1 = '';
let val2 = '';
let operationHit = false;

const nums = document.querySelectorAll('.btn.number');
const operations = document.querySelectorAll('.btn.operation');
const screen = document.querySelector('.screen');
const equals = document.querySelector('.btn.equals');
const operators = document.querySelectorAll('.btn.operator')
// loop through the nodelist and create eventListener for each button
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', (event) =>{
        if (!operationHit) {
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
        setOperation(event.target.textContent);
    });
}

equals.addEventListener('click', () => {
    screen.textContent = operate(operator, parseInt(val1), parseInt(val2));
});