let css = document.querySelector("h3");
let color = document.querySelectorAll(".color");
let body = document.getElementById ("gradient");

let setGradient = () =>{
    body.style.background = `linear-gradient(to right, ${color[0].value}, ${color[1].value})`;
    css.textContent = `${body.style.background};`;
}

[...color].forEach(clr => clr.addEventListener("input", setGradient))