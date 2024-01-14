let display = document.getElementById('display');
let expression = '';

function appendNumber(number) {
    expression += number;
    updateDisplay();
}

function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        display.innerHTML = 'Error';
    }
}

function updateDisplay() {
    display.innerHTML = expression;
}

