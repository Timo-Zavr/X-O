const in1 = document.querySelector("#a")
const in2 = document.querySelector("#b")
const in3 = document.querySelector("#c")
const in4 = document.querySelector("#d")
const in5 = document.querySelector("#e")
const in6 = document.querySelector("#f")
const in7 = document.querySelector("#g")
const in8 = document.querySelector("#h")
const in9 = document.querySelector("#i")
const winer = document.querySelector(".winer")
const start = document.querySelector(".start")
const S = document.querySelector(".S")

let X = false
let O = true

in1.addEventListener("click", (event) => {
    if (O === true && in1.textContent === "-"){
        in1.textContent = 'O'
        in1.style.color = "rgb(34, 68, 132)"
        X = true
        O = false
    } else if (X === true && in1.textContent === "-"){
        in1.textContent = 'X'
        in1.style.color = "rgb(132, 34, 57)"
        X = false
        O = true
    }
})
in2.addEventListener("click", (event) => {
    if (O === true && in2.textContent === "-"){
        in2.textContent = 'O'
        in2.style.color = "rgb(34, 68, 132)"
        X = true
        O = false
    } else if (X === true && in2.textContent === "-"){
        in2.textContent = 'X'
        in2.style.color = "rgb(132, 34, 57)"
        X = false
        O = true
    }
})
in3.addEventListener("click", (event) => {
    if (O === true && in3.textContent === "-"){
        in3.textContent = 'O'
        in3.style.color = "rgb(34, 68, 132)"
        X = true
        O = false
    } else if (X === true && in3.textContent === "-"){
        in3.textContent = 'X'
        in3.style.color = "rgb(132, 34, 57)"
        X = false
        O = true
    }
})
in4.addEventListener("click", (event) => {
    if (O === true && in4.textContent === "-"){
        in4.textContent = 'O'
        in4.style.color = "rgb(34, 68, 132)"
        X = true
        O = false
    } else if (X === true && in4.textContent === "-"){
        in4.textContent = 'X'
        in4.style.color = "rgb(132, 34, 57)"
        X = false
        O = true
    }
})
in5.addEventListener("click", (event) => {
    if (O === true && in5.textContent === "-"){
        in5.textContent = 'O'
        in5.style.color = "rgb(34, 68, 132)"
        X = true
        O = false
    } else if (X === true && in5.textContent === "-"){
        in5.textContent = 'X'
        in5.style.color = "rgb(132, 34, 57)"
        X = false
        O = true
    }
})
in6.addEventListener("click", (event) => {
    if (O === true && in6.textContent === "-"){
        in6.textContent = 'O'
        in6.style.color = "rgb(34, 68, 132)"
        X = true
        O = false
    } else if (X === true && in6.textContent === "-"){
        in6.textContent = 'X'
        in6.style.color = "rgb(132, 34, 57)"
        X = false
        O = true
    }
})
in7.addEventListener("click", (event) => {
    if (O === true && in7.textContent === "-"){
        in7.textContent = 'O'
        in7.style.color = "rgb(34, 68, 132)"
        X = true
        O = false
    } else if (X === true && in7.textContent === "-"){
        in7.textContent = 'X'
        in7.style.color = "rgb(132, 34, 57)"
        X = false
        O = true
    }
})
in8.addEventListener("click", (event) => {
    if (O === true && in8.textContent === "-"){
        in8.textContent = 'O'
        in8.style.color = "rgb(34, 68, 132)"
        X = true
        O = false
    } else if (X === true && in8.textContent === "-"){
        in8.textContent = 'X'
        in8.style.color = "rgb(132, 34, 57)"
        X = false
        O = true
    }
})
in9.addEventListener("click", (event) => {
    if (O === true && in9.textContent === "-"){
        in9.textContent = 'O'
        in9.style.color = "rgb(34, 68, 132)"
        X = true
        O = false
    } else if (X === true && in9.textContent === "-"){
        in9.textContent = 'X'
        in9.style.color = "rgb(132, 34, 57)"
        X = false
        O = true
    }
})

document.addEventListener("click", (event) => {
    if(in1.textContent === "O" && in2.textContent === "O" && in3.textContent === "O"
        || in4.textContent === "O" && in5.textContent === "O" && in6.textContent === "O"
        || in7.textContent === "O" && in8.textContent === "O" && in9.textContent === "O"
        || in1.textContent === "O" && in4.textContent === "O" && in7.textContent === "O"
        || in2.textContent === "O" && in5.textContent === "O" && in8.textContent === "O"
        || in3.textContent === "O" && in6.textContent === "O" && in9.textContent === "O"
        || in1.textContent === "O" && in5.textContent === "O" && in9.textContent === "O"
        || in3.textContent === "O" && in5.textContent === "O" && in7.textContent === "O"){
        winer.textContent = "O win"
        winer.style.display = "block"
        start.style.display = "block"
        X = false
        O = false
    }
    if(in1.textContent === "X" && in2.textContent === "X" && in3.textContent === "X"
        || in4.textContent === "X" && in5.textContent === "X" && in6.textContent === "X"
        || in7.textContent === "X" && in8.textContent === "X" && in9.textContent === "X"
        || in1.textContent === "X" && in4.textContent === "X" && in7.textContent === "X"
        || in2.textContent === "X" && in5.textContent === "X" && in8.textContent === "X"
        || in3.textContent === "X" && in6.textContent === "X" && in9.textContent === "X"
        || in1.textContent === "X" && in5.textContent === "X" && in9.textContent === "X"
        || in3.textContent === "X" && in5.textContent === "X" && in7.textContent === "X"){
        winer.textContent = "X win"
        winer.style.display = "block"
        start.style.display = "block"
        X = false
        O = false
    } 
    if (   in1.textContent === "O" && in2.textContent === "O" && in3.textContent === "X"
        && in4.textContent === "X" && in5.textContent === "X" && in6.textContent === "O"
        && in7.textContent === "O" && in8.textContent === "O" && in9.textContent === "X"
        || in1.textContent === "X" && in2.textContent === "O" && in3.textContent === "O"
        && in4.textContent === "O" && in5.textContent === "X" && in6.textContent === "X"
        && in7.textContent === "X" && in8.textContent === "O" && in9.textContent === "O"

        || in1.textContent === "X" && in2.textContent === "O" && in3.textContent === "X"
        && in4.textContent === "O" && in5.textContent === "X" && in6.textContent === "O"
        && in7.textContent === "O" && in8.textContent === "X" && in9.textContent === "O"
        || in1.textContent === "O" && in2.textContent === "X" && in3.textContent === "O"
        && in4.textContent === "O" && in5.textContent === "X" && in6.textContent === "O"
        && in7.textContent === "X" && in8.textContent === "O" && in9.textContent === "X"

        || in1.textContent === "O" && in2.textContent === "X" && in3.textContent === "O"
        && in4.textContent === "X" && in5.textContent === "X" && in6.textContent === "O"
        && in7.textContent === "O" && in8.textContent === "O" && in9.textContent === "X"
        || in1.textContent === "O" && in2.textContent === "O" && in3.textContent === "X"
        && in4.textContent === "X" && in5.textContent === "X" && in6.textContent === "O"
        && in7.textContent === "O" && in8.textContent === "X" && in9.textContent === "O"
        || in1.textContent === "O" && in2.textContent === "X" && in3.textContent === "O"
        && in4.textContent === "O" && in5.textContent === "X" && in6.textContent === "X"
        && in7.textContent === "X" && in8.textContent === "O" && in9.textContent === "O"
        || in1.textContent === "X" && in2.textContent === "O" && in3.textContent === "O"
        && in4.textContent === "O" && in5.textContent === "X" && in6.textContent === "X"
        && in7.textContent === "O" && in8.textContent === "X" && in9.textContent === "O"

        || in1.textContent === "X" && in2.textContent === "O" && in3.textContent === "X"
        && in4.textContent === "O" && in5.textContent === "O" && in6.textContent === "X"
        && in7.textContent === "X" && in8.textContent === "X" && in9.textContent === "O"
        || in1.textContent === "X" && in2.textContent === "X" && in3.textContent === "O"
        && in4.textContent === "O" && in5.textContent === "O" && in6.textContent === "X"
        && in7.textContent === "X" && in8.textContent === "O" && in9.textContent === "X"
        || in1.textContent === "X" && in2.textContent === "O" && in3.textContent === "X"
        && in4.textContent === "X" && in5.textContent === "O" && in6.textContent === "O"
        && in7.textContent === "O" && in8.textContent === "X" && in9.textContent === "X"
        || in1.textContent === "O" && in2.textContent === "X" && in3.textContent === "X"
        && in4.textContent === "X" && in5.textContent === "O" && in6.textContent === "O"
        && in7.textContent === "X" && in8.textContent === "O" && in9.textContent === "X"
        ){
        winer.textContent = "Draw"
        winer.style.display = "block"
        start.style.display = "block"
        X = false
        O = false
    }
})
start.addEventListener("click", (event) => {
    in1.textContent = "-"
    in2.textContent = "-"
    in3.textContent = "-"
    in4.textContent = "-"
    in5.textContent = "-"
    in6.textContent = "-"
    in7.textContent = "-"
    in8.textContent = "-"
    in9.textContent = "-"
    in1.style.color = "rgb(25, 49, 33)"
    in2.style.color = "rgb(25, 49, 33)"
    in3.style.color = "rgb(25, 49, 33)"
    in4.style.color = "rgb(25, 49, 33)"
    in5.style.color = "rgb(25, 49, 33)"
    in6.style.color = "rgb(25, 49, 33)"
    in7.style.color = "rgb(25, 49, 33)"
    in8.style.color = "rgb(25, 49, 33)"
    in9.style.color = "rgb(25, 49, 33)"
    start.style.display = "none"
    winer.style.display = "none"
    X = true
    O = true
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'f' || event.key === 'а') {
        fs()
    }
})
function fs(){
    if (!document.fullscreenElement){
        document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen){
        document.exitFullscreen()
    }
}
S.addEventListener('click', (event) => {
    if (!document.fullscreenElement){
        document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen){
        document.exitFullscreen()
    }
});