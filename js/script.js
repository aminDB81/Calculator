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

// dark mode
const body = document.querySelector("body");
const btn = document.querySelector(".btn");
const icon = document.querySelector(".btn_icon");
const calculator = document.querySelector(".container");
btn.addEventListener("click", () => {
    body.classList.toggle("darkmode");
    icon.classList.add("animated")

    if (body.classList.contains("darkmode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        calculator.style.backgroundColor = "#7f8c8d";
        
    }else{
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        calculator.style.backgroundColor = "#ffff";
    }
    setTimeout(()=>{
        icon.classList.remove("animated")
    },200)
});
