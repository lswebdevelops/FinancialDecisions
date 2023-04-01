const menu = document.querySelector('.menuBtn')
const ul = document.querySelector('ul')


menu.addEventListener('click', (element) =>{
    ul.classList.toggle('show-menu');
})