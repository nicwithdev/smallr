// cached elemoents
const menu = document.querySelector('.options');
const list = document.querySelector('.category-list');
const listActive = document.querySelector('.list-active');

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
console.log(nav)
console.log(burger)
console.log(menu)

// event listeners

burger.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('exit');
});

menu.addEventListener('click', function() {
    list.classList.toggle('list-active');
});

