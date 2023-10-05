let currentOperator;
let currentOperand;
let previousOperand;
let displayNumber = "0";

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            console.log("Oops! Something went wrong.");
    };
};

function updateDisplayNumber(number) {
    if (number === "." && displayNumber.split("").includes(".")) {
        return;
    };

    if (number === "0" && displayNumber === "0") {
        return;
    };
    
    if (displayNumber === "0") {
        displayNumber = number;
    } else {
        displayNumber = displayNumber + number;
    };
};

function updateDisplay() {
    document.querySelector(".output").innerText = displayNumber;
};

function updateOperator(operator) {
    currentOperator = operator;
};

function updatePreviousOperand() {
    previousOperand = Number(displayNumber);
    displayNumber = "0";
};

// function updateCurrentOperand() {

// };






const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')

numberButtons.forEach(button => {
    button.addEventListener("click", event => {
        updateDisplayNumber(event.target.innerText);
        updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", event => {
        updateOperator(event.target.innerText);
        updatePreviousOperand();
    });
});