document.addEventListener('DOMContentLoaded', () => {
'use strict';

/* Инициализация и настройка slick для слайдера */

$(document).ready(function (){
    $('.slider__wrapper').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    });
});

/* Инициализация и настройка slick для каталога */

$(document).ready(function (){
    $('.product').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});

const searchButton = document.querySelector('.wrapper__block__search')
const loginButton = document.querySelector('.wrapper__block__login')
const loginImage = document.querySelector('.login__image')
const searchInput = document.querySelector('.wrapper__block__item')
const container = document.querySelector('.wrapper__block')
const modalContainer = document.querySelector('.wrapper__modal')
const modalButton = document.querySelector('.modal__button')
const modalInput = document.querySelectorAll('.modal__input')

const show = (item) => {
    item.classList.add('show')
    item.classList.remove('hide')
}

const hide = (item) => {
    item.classList.add('hide')
    item.classList.remove('show')
}

const doSearch = (e) => {
    if (e.code === "Enter" && searchInput.value !== "") {
        searchInput.value = '';
        hide(searchInput);
        show(searchButton);
    }
}

searchButton.addEventListener('click', (e) => {
        if(e.target === searchButton) {
            show(searchInput);
            hide(searchButton);
        }
    });

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && searchInput.classList.contains('show')) {
        searchInput.value = '';
        hide(searchInput);
        show(searchButton);
    }
})

container.addEventListener('keydown', (e) => {
    doSearch(e);
});

loginButton.addEventListener('click', (e) => {
   if (e.target === loginButton) {
       show(modalContainer);
   }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modalContainer.classList.contains('show')) {
        hide(modalContainer);
        modalInput.forEach((item) => {
            item.value = '';
        })
    }
});

modalButton.addEventListener('click', (e) => {
   if (e.target === modalButton) {
       modalInput.forEach((item) => {
           if (item.value !== '') {
               hide(modalContainer);
           }
       });
   }
});

});
