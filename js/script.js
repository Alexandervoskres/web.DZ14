let html = document.querySelector("html");
let lightButton = document.querySelector(".theme-button-light");
let darkButton = document.querySelector(".theme-button-dark");
let withserif = document.querySelector(".font-button-sans-serif");
let withoutserif = document.querySelector(".font-button-serif");
let sbutton = document.querySelector(".font-size-button-s");
let mbutton = document.querySelector(".font-size-button-m");
let lbutton = document.querySelector(".font-size-button-l");

function LightTheme(){
    darkButton.classList.remove("active");
    lightButton.classList.add("active");
    html.setAttribute("data-theme-name", "light");
}

function DarkTheme(){
    lightButton.classList.remove("active");
    darkButton.classList.add("active");
    html.setAttribute("data-theme-name", "dark");
}

function WithSerifs(){
    withserif.classList.remove("active");
    withoutserif.classList.add("active");
    html.setAttribute("data-theme-font", "serif");
}
function WithoutSerifs(){
    withoutserif.classList.remove("active");
    withserif.classList.add("active");
    html.setAttribute("data-theme-font", "sans-serif");
}
function SizeS(){
    mbutton.classList.remove("active");
    lbutton.classList.remove("active");
    sbutton.classList.add("active");
    html.setAttribute("data-theme-font-size", "small");
}
function SizeM(){
    sbutton.classList.remove("active");
    lbutton.classList.remove("active");
    mbutton.classList.add("active");
    html.setAttribute("data-theme-font-size", "medium");
}
function SizeL(){
    sbutton.classList.remove("active");
    mbutton.classList.remove("active");
    lbutton.classList.add("active");
    html.setAttribute("data-theme-font-size", "large");
}