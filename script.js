const in1 = document.querySelector("#a")
const in2 = document.querySelector("#b")
const in3 = document.querySelector("#c")
const in4 = document.querySelector("#d")
const in5 = document.querySelector("#e")
const in6 = document.querySelector("#f")
const in7 = document.querySelector("#g")
const in8 = document.querySelector("#h")
const in9 = document.querySelector("#i")

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
    }
})
in2.addEventListener("click", (event) => {
    if (O === true){
        in2.textContent = 'O'
        X = true
        O = false
    } else if (X === true){
        in2.textContent = 'X'
        X = false
        O = true
    }
})
in3.addEventListener("click", (event) => {
    if (O === true){
        in3.textContent = 'O'
        X = true
        O = false
    } else if (X === true){
        in3.textContent = 'X'
        X = false
        O = true
    }
})
in4.addEventListener("click", (event) => {
    if (O === true){
        in4.textContent = 'O'
        X = true
        O = false
    } else if (X === true){
        in4.textContent = 'X'
        X = false
        O = true
    }
})
in5.addEventListener("click", (event) => {
    if (O === true){
        in5.textContent = 'O'
        X = true
        O = false
    } else if (X === true){
        in5.textContent = 'X'
        X = false
        O = true
    }
})
in6.addEventListener("click", (event) => {
    if (O === true){
        in6.textContent = 'O'
        X = true
        O = false
    } else if (X === true){
        in6.textContent = 'X'
        X = false
        O = true
    }
})
in7.addEventListener("click", (event) => {
    if (O === true){
        in7.textContent = 'O'
        X = true
        O = false
    } else if (X === true){
        in7.textContent = 'X'
        X = false
        O = true
    }
})
in8.addEventListener("click", (event) => {
    if (O === true){
        in8.textContent = 'O'
        X = true
        O = false
    } else if (X === true){
        in8.textContent = 'X'
        X = false
        O = true
    }
})
in9.addEventListener("click", (event) => {
    if (O === true){
        in9.textContent = 'O'
        X = true
        O = false
    } else if (X === true){
        in9.textContent = 'X'
        X = false
        O = true
    }
})