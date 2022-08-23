'use strict'

const navbarEmail = document.querySelector('.navbar__email');
const menuDesktop = document.querySelector('.menu-desktop');

navbarEmail.addEventListener('click',toggleMenuDesktop);

function toggleMenuDesktop() {
    menuDesktop.classList.toggle('inactive');
}