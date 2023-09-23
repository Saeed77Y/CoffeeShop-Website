//for changing theme
var elmnt = document.body;
var productnav = document.getElementById("productnav");

function ChangeTheme() {
    elmnt.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {productnav.className = "fa-regular fa-sun rightnav";}
    else {productnav.className = "fa-regular fa-moon rightnav";}
}

//for hiding and showing the navigation bar
var navbar = document.getElementById("nav");
var xmark = document.getElementById("xmark");

function ShowNavbar() {
    navbar.className = "navbar";
    xmark.className = "fa-solid fa-xmark x"
}
function CloseNavbar() {
    navbar.className = "hiddennavbar"
}

//for liking the products
var heart1 = document.getElementById("heart1");
var heart2 = document.getElementById("heart2");
var heart3 = document.getElementById("heart3");
var heart4 = document.getElementById("heart4");

function like1() {
    heart1.className = "fa-solid fa-heart card_circle2";
}
function like2() {
    heart2.className = "fa-solid fa-heart card_circle2";
}
function like3() {
    heart3.className = "fa-solid fa-heart card_circle2";
}
function like4() {
    heart4.className = "fa-solid fa-heart card_circle2";
}
