let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function clearDisplay() {
    display.textContent = '';
    currentInput = '';
    operator = '';
    firstOperand = null;
}

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        calculate();
    }
    operator = op;
    currentInput = '';
}
function appendNumber(number) { 
    if (currentInput.length >= 14) { display.textContent = 'Error: Max 14 digits'; return; } 
    currentInput += number; display.textContent = currentInput; }

function calculate() {
    if (firstOperand === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                display.textContent = 'Error: Division by zero';
                return;
            }
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    if (result > Number.MAX_SAFE_INTEGER) {
        display.textContent = 'Error: Number too large';
        return;
    }
    display.textContent = result;
    firstOperand = result;
    currentInput = '';
    operator = '';
}
