// Button Switch
const header = document.querySelector('.header');
const Hamburger = document.querySelector('.nav__hamburger');
const Close = document.querySelector('.nav__close');
const navContent = document.querySelector(".nav__content-container");
const overlay = document.querySelector(".overlay");

Hamburger.addEventListener('click', function(){
    Hamburger.classList.add('close');
    Close.classList.remove('close');
    navContent.classList.remove('opacity-0');
    overlay.classList.remove('opacity-0');
})

Close.addEventListener('click', function(){
    Hamburger.classList.remove('close');
    Close.classList.add('close');
    navContent.classList.add('opacity-0');
    overlay.classList.add('opacity-0');
})
