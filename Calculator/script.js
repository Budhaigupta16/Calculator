function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    let display = document.getElementById('display').value;
    if (display === '' && operator !== '-') return; // Prevent starting with invalid operator
    if (['+', '-', '*', '/'].includes(display.slice(-1))) return; // Prevent double operators
    document.getElementById('display').value += operator;
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}