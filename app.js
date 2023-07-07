const open = document.getElementById('open');
const close = document.getElementById('close');
const container  = document.getElementById('container');
const circle  = document.getElementById('circle');
const nav  = document.getElementById('nav');

open.addEventListener('click', () => {
    container.classList.add("show-rotation");
    circle.classList.add("show-rotation");
    nav.classList.add("show-rotation")
});

close.addEventListener('click', () => {
    container.classList.remove("show-rotation");
    circle.classList.remove("show-rotation");
    nav.classList.remove("show-rotation")
});