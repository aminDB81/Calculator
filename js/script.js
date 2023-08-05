const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChare = ["%", "*", "/", "+", "="];
const operators = ["%", "*", "/", "+", "-"];
let output = "";

const isOperator = (char) => {
    return operators.includes(char);
};

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        let result = eval(output.replace("%", "/100"));
        // Round the result to 5 decimal places
        output = result.toFixed(5).replace(/\.?0*$/, ''); // Remove trailing zeros
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        // Check if the last character is an operator
        const lastChar = output.length > 0 ? output.slice(-1) : null;
        if (isOperator(lastChar) && isOperator(btnValue)) {
            return; // Don't allow consecutive operators
        }

        if (output === "" && specialChare.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
});
