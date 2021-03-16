// cached elemoents
const menu = document.querySelector('.options');
const list = document.querySelector('.category-list');
const listActive = document.querySelector('.list-active');

// event listeners
menu.addEventListener('click', function() {
    list.classList.toggle('list-active');
});