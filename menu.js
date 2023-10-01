var menuState = "closed";
const menuContainer = document.querySelector('.menu-container');
const menuShadow = document.querySelector('.menu-shadow');
const menuButton = document.querySelector('.menu-button');



function toggleMenu() {
    if (menuState === "closed") {
        menuState = "open";
        menuContainer.style.backgroundColor = 'white';
        menuContainer.classList.add("menu-offscreen");
        menuShadow.style.opacity = 0.5;
        menuShadow.style.pointerEvents = 'auto';
        menuButton.style.position = 'fixed';
    } else if (menuState === "open") {
        menuState = "closed";
        menuContainer.classList.remove("menu-offscreen");
        menuContainer.style.backgroundColor = 'transparent';
        menuShadow.style.opacity = 0;
        menuShadow.style.pointerEvents = 'none';
        menuButton.style.position = 'absolute';

    }
}
