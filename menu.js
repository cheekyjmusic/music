var menuState = "closed";
const menuContainer = document.querySelector('.menu-container');
const menuShadow = document.querySelector('.menu-shadow');
const menuButton = document.querySelector('.menu-button');
const menuButtonImg = document.querySelector('.menu-button-img');

function toggleMenu() {
    if (menuState === "closed") {
        menuState = "open";
        menuContainer.style.backgroundColor = 'white';
        menuContainer.classList.add("menu-offscreen");
        menuShadow.style.opacity = 0.5;
        menuShadow.style.pointerEvents = 'auto';
        menuButton.style.position = 'fixed';
        menuButtonImg.style.filter = 'invert(0%)';
    } else if (menuState === "open") {
        menuState = "closed";
        menuContainer.classList.remove("menu-offscreen");
        menuContainer.style.backgroundColor = 'transparent';
        menuShadow.style.opacity = 0;
        menuShadow.style.pointerEvents = 'none';
        menuButton.style.position = 'absolute';
        menuButtonImg.style.filter = 'invert(100%)';

    }
}
