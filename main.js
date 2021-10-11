const hamburgerMenu = document.querySelector(".hamburger-menu");
const standardMenu = document.querySelector(".header-right");
const standardMenuIcon = document.querySelector(".header-left");

const hamburgerMenuLink = document.querySelector(".header-right > a");
const hamburgerMenuClose = document.querySelector(".hamburger-menu > a");

hamburgerMenuLink.addEventListener("click", function () {
    hamburgerMenu.style.display = "block";
    standardMenu.style.display = "none";
    standardMenuIcon.style.display = "none";
});

hamburgerMenuClose.addEventListener("click", function () {
    hamburgerMenu.style.display = "none";
    standardMenu.style.display = "block";
    standardMenuIcon.style.display = "block";
});