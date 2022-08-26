'use strict'

const navbarEmail = document.querySelector('.navbar__email');
const menuDesktop = document.querySelector('.menu-desktop');
const navbarIconMenu = document.querySelector('.navbar__icon-menu')
const menuMobile = document.querySelector('.menu-mobile');
const navbarCart = document.querySelector('.navbar__cart');
const asideCart = document.querySelector('.cart');
const sectionProducts = document.querySelector('.products-container');
const asideProduct = document.querySelector('.product');
const buttonProductClose = document.querySelector('.product__close');

navbarEmail.addEventListener('click',toggleMenuDesktop);
navbarIconMenu.addEventListener('click',toggleMenuMobile);
navbarCart.addEventListener('click',toggleAsideCart);
buttonProductClose.addEventListener('click',closeAsideProduct);

function toggleMenuDesktop() {
    const asideCartClose = asideCart.classList.contains('inactive');
    const asideProductClose = asideProduct.classList.contains('inactive');

    if (!asideCartClose || !asideProductClose) {
        asideCart.classList.add('inactive');
        asideProduct.classList.add('inactive');
    };

    menuDesktop.classList.toggle('inactive');
};

function toggleMenuMobile() {
    const asideCartClose = asideCart.classList.contains('inactive');
    const asideProductClose = asideProduct.classList.contains('inactive');

    if (!asideCartClose || !asideProductClose) {
        asideCart.classList.add('inactive');
        asideProduct.classList.add('inactive');
    };

    menuMobile.classList.toggle('inactive');
};

function toggleAsideCart() {
    const menuMobileClose = menuMobile.classList.contains('inactive');
    const menuDesktopClose = menuDesktop.classList.contains('inactive');
    const asideProductClose = asideProduct.classList.contains('inactive');

    if (!menuMobileClose || !menuDesktopClose || !asideProductClose) {
        menuMobile.classList.add('inactive');
        menuDesktop.classList.add('inactive');
        asideProduct.classList.add('inactive');
    };

    asideCart.classList.toggle('inactive');
};

function closeAsideProduct() {
    asideProduct.classList.add('inactive')
};

function renderProducts(array) {
    for (const product of array) {
        const productHTML = document.createElement('DIV');
        productHTML.classList.add('products');

        const productImage = document.createElement('IMG');
        productImage.setAttribute('src',product.image);
        productImage.setAttribute('alt',`image ${product.name}`);
        productImage.addEventListener('click',openAsideProduct);
        productImage.classList.add('pointer');

        const productCard = document.createElement('DIV');
        productCard.classList.add('products__info');

        const productDiv = document.createElement('DIV');

        const productPrice = document.createElement('P');
        productPrice.innerText = `$${product.price},00`;

        const productName = document.createElement('P');
        productName.innerText = product.name;

        const productFigure = document.createElement('FIGURE');

        const productIcon = document.createElement('IMG');
        productIcon.setAttribute('src','./icons/bt_add_to_cart.svg');
        productIcon.setAttribute('alt','icon add to cart');

        productFigure.appendChild(productIcon);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productName);

        productCard.appendChild(productDiv);
        productCard.appendChild(productFigure);

        productHTML.appendChild(productImage);
        productHTML.appendChild(productCard);

        sectionProducts.appendChild(productHTML);
    };
};

function openAsideProduct() {
    const menuMobileClose = menuMobile.classList.contains('inactive');
    const menuDesktopClose = menuDesktop.classList.contains('inactive');
    const asideCartClose = asideCart.classList.contains('inactive');

    if (!menuMobileClose || !menuDesktopClose || !asideCartClose) {
        menuMobile.classList.add('inactive');
        menuDesktop.classList.add('inactive');
        asideCart.classList.add('inactive');
    };

    asideProduct.classList.remove('inactive');
};

const listProducts = [];
for (let i = 0;i < 10;i++) {
    listProducts.push({
        name: 'Mountain bike',
        price: 120,
        image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });

    listProducts.push({
        name: 'Sofa',
        price: 80,
        image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
}

renderProducts(listProducts);


