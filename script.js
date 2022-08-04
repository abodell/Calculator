function add(val1, val2) {
    let ans = val1 + val2;
    ans = (Math.round(ans * 100) / 100);
    return ans;
}

function subtract(val1, val2) {
    let ans = val1  - val2;
    ans = (Math.round(ans * 100) / 100);
    return ans;
}

function multiply(val1, val2) {
    let ans = val1 * val2;
    ans = (Math.round(ans * 100) / 100);
    return ans;
}

function divide(val1, val2) {
    let ans = val1 / val2;
    ans = (Math.round(ans * 100) / 100)
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
    decimalCount = 0;
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
    operationHit = true;
    decimalCount = 0;
}

let operator = '';
let val1 = '';
let val2 = '';
let operationHit = false;
let decimalCount = 0;

const nums = document.querySelectorAll('.btn.number');
const operations = document.querySelectorAll('.btn.operation');
const screen = document.querySelector('.screen');
const equals = document.querySelector('.btn.equals');
const clear = document.querySelector('.btn.clear');
const changeSign = document.querySelector('.btn.sign');
const decimal = document.querySelector('.btn.decimal');
const delButton = document.querySelector('.btn.delete');
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
    screen.textContent = operate(operator, Number(val1), Number(val2));
    val1 = screen.textContent;
    val2 = '';
});

decimal.addEventListener('click', () => {
    if (!operationHit && decimalCount < 1) {
        val1 += '.';
        screen.textContent = val1;
    } else if (operationHit && decimalCount < 1) {
        val2 += '.';
        screen.textContent = val2;
    }
    decimalCount++;
});

clear.addEventListener('click', () => {
    screen.textContent = '0';
    val1 = '';
    val2 = '';
    operationHit = false;
});

delButton.addEventListener('click', () => {
    screen.textContent = screen.textContent.slice(0, -1);
    if (!operationHit) {
        val1 = screen.textContent;
    } else {
        val2 = screen.textContent;
    }
});

changeSign.addEventListener('click', () => {
    let num = Number(screen.textContent);
    num *= -1;
    screen.textContent = num.toString();
    val1 = "-" + val1;
});

window.addEventListener('keydown', keyboardHandler);

function keyboardHandler(event) {
    if (event.key >= 0 && event.key <= 9) {
        if (!operationHit) {
            val1 += event.key;
            screen.textContent = val1;
        } else {
            val2 += event.key;
            screen.textContent = val2;
        }
    }
    if (event.key == 'X' || event.key == "/" || event.key == '+' || event.key == '-') {
        setOperation(event.key);
    }

    if (event.key == 'Enter' || event.key == '=') {
        screen.textContent = operate(operator, Number(val1), Number(val2));
        val1 = screen.textContent;
        val2 = '';
    }

    if (event.key == 'Backspace') {
        screen.textContent = screen.textContent.slice(0, -1);
        if (!operationHit) {
            val1 = screen.textContent;
        } else {
            val2 = screen.textContent;
        }
    }

    if (event.key == '.') {
        if (!operationHit && decimalCount < 1) {
            val1 += '.';
            screen.textContent = val1;
        } else if (operationHit && decimalCount < 1) {
            val2 += '.';
            screen.textContent = val2;
        }
        decimalCount++;
    }

    if (event.key == 'Escape') {
        screen.textContent = '0';
        val1 = '';
        val2 = '';
        operationHit = false;
    }
}