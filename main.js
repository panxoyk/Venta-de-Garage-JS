'use strict'

const navbarEmail = document.querySelector('.navbar__email');
const menuDesktop = document.querySelector('.menu-desktop');
const navbarIconMenu = document.querySelector('.navbar__icon-menu')
const menuMobile = document.querySelector('.menu-mobile');

navbarEmail.addEventListener('click',toggleMenuDesktop);
navbarIconMenu.addEventListener('click',toggleMenuMobile);

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive');
};

function toggleMenuMobile() {
    menuMobile.classList.toggle('inactive');
};