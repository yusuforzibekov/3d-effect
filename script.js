window.addEventListener('load', e => {
    document.querySelector('.loader').style.opacity = '0';
    document.querySelector('.loader').style.pointerEvents = 'none';
})

// Variables 
const container = document.querySelector('.container');
const card = document.querySelector('.card');
// Items
const circle = document.querySelector('.circle');
const image = document.querySelector('.images img');
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const size = document.querySelector('.size');
const btn = document.querySelector('.btn');

// Mouse 3D Effect Function
container.addEventListener('mousemove', e => {
    const x = (window.innerWidth / 2 - e.pageX) / 20;
    const y = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

    image.style.transform = 'translateZ(100px) rotate(30deg)';
    circle.style.transform = 'translateZ(25px) scale(0.7)';
    title.style.transform = 'translateZ(50px)';
    subtitle.style.transform = 'translateZ(30px)';
    size.style.transform = 'translateZ(40px)';
    btn.style.transform = 'translateZ(70px)';
});

container.addEventListener('mouseleave', e => {
    card.style.transition = '0.5s';
    card.style.transform = `rotateY(0) rotateX(0)`;

    image.style.transform = 'translateZ(0) rotate(0)';
    circle.style.transform = 'translateZ(0) scale(1)';
    title.style.transform = 'translateZ(0)';
    subtitle.style.transform = 'translateZ(0)';
    size.style.transform = 'translateZ(0)';
    btn.style.transform = 'translateZ(0)';

});