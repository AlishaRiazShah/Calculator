let displayValue = '';
let operator = '';
let firstValue = null;

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    firstValue = null;
    operator = '';
    document.getElementById('display').value = '';
}

function operate(op) {
    if (firstValue === null) {
        firstValue = parseFloat(displayValue);
        operator = op;
        displayValue = '';
    } else if (operator) {
        calculate();
        operator = op;
    }
}

function calculate() {
    if (operator && displayValue !== '') {
        let secondValue = parseFloat(displayValue);
        let result;
        switch (operator) {
            case '+':
                result = firstValue + secondValue;
                break;
            case '-':
                result = firstValue - secondValue;
                break;
            case '*':
                result = firstValue * secondValue;
                break;
            case '/':
                result = firstValue / secondValue;
                break;
        }
        displayValue = result.toString();
        firstValue = result;
        operator = '';
        document.getElementById('display').value = displayValue;
    }
}
