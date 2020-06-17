(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    }
}());

// Burger handler

const headerNav = document.querySelector('.header__nav')


const burger = document.querySelector('.burger').addEventListener('click', () => headerNav.classList.add('header__nav_active'))

const burgerClose = document.querySelector('.header__nav-close').addEventListener('click', () => headerNav.classList.remove('header__nav_active'))