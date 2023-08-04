const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChare =["%","*","-","/","+","="];
let output = "";


const calculate = (btnValue) => {
    
}
// console.log(display,button);
// Add event listener to button 
buttons.forEach( button => {
button.addEventListener("click" , (e) => calculate(e.target.dataset.value))});