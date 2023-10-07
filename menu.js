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

function fullscreen() {
    if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}