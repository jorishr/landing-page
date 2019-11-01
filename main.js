const menu = document.getElementById('toggle-menu');
const nav  = document.getElementById('nav-menu');
const exit = document.getElementById('exit-menu');

menu.addEventListener('click', (e) => {
    nav.classList.toggle('hide-mobile');
    e.preventDefault;
})

exit.addEventListener('click', (e) => {
    nav.classList.add('hide-mobile');
    e.preventDefault;
})