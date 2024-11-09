/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

function calculate(operation) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        default:
            result = 0;
    }

    document.getElementById('result').textContent = 'Result: ' + result;
}

function clearInputs() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').textContent = 'Result: 0';
}