const in1 = document.querySelector("#1");
const in2 = document.querySelector("#2");
const in3 = document.querySelector("#3");
const in4 = document.querySelector("#4");
const in5 = document.querySelector("#5");
const in6 = document.querySelector("#6");
const in7 = document.querySelector("#7");
const in8 = document.querySelector("#8");
const in9 = document.querySelector("#9");

let X = false
let O = true

in1.addEventListener("click", (event) => {
    if (O === true){
        in1.textContent = 'O'
        X = true
        O = false
    } else if (X === true){
        in1.textContent = 'X'
        X = false
        O = true
    } else{
        in1.textContent = '_'
    }
})