'use strict'

const navbarEmail = document.querySelector('.navbar__email');
const menuDesktop = document.querySelector('.menu-desktop');
const navbarIconMenu = document.querySelector('.navbar__icon-menu')
const menuMobile = document.querySelector('.menu-mobile');
const navbarCart = document.querySelector('.navbar__cart');
const asideCart = document.querySelector('.cart');

navbarEmail.addEventListener('click',toggleMenuDesktop);
navbarIconMenu.addEventListener('click',toggleMenuMobile);
navbarCart.addEventListener('click',toggleShoppingCart);

function toggleMenuDesktop() {
    const asideCartClose = asideCart.classList.contains('inactive');

    if (!asideCartClose) {
        asideCart.classList.add('inactive');
    };

    menuDesktop.classList.toggle('inactive');
};

function toggleMenuMobile() {
    const asideCartClose = asideCart.classList.contains('inactive');

    if (!asideCartClose) {
        asideCart.classList.add('inactive');
    };

    menuMobile.classList.toggle('inactive');
};

function toggleShoppingCart() {
    const menuMobileClose = menuMobile.classList.contains('inactive');
    const menuDesktopClose = menuDesktop.classList.contains('inactive');

    if (!menuMobileClose || !menuDesktopClose) {
        menuMobile.classList.add('inactive');
        menuDesktop.classList.add('inactive');
    };

    asideCart.classList.toggle('inactive');
};