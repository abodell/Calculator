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
    } else {
        return divide(val1, val2);
    }
}