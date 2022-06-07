const images = document.querySelector('.images');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');
const imgs = document.querySelectorAll('.carousel__item');

const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.menu')

btn.addEventListener('click', () => {
    const attribute = btn.getAttribute('aria-expanded');
    if (attribute === 'false') {
        btn.setAttribute('aria-expanded', true);
        nav.setAttribute('data-visible', true);
    } else if (attribute === 'true') {
        btn.setAttribute('aria-expanded', false);
        nav.setAttribute('data-visible', false);

    }
})


let current = 0;

let interval = setInterval(run, 5000);


function run() {
    current++;
    changeImage();
};

const changeImage = () => {
    if (current > imgs.length - 1) {
        current = 0;
    } else if (current < 0) {
        current = imgs.length - 1;
    };

    images.style.transform = `translateX(${-current * 350}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000)
}
nextBtn.addEventListener('click', () => {
    current++;
    changeImage();
    resetInterval();
})
prevBtn.addEventListener('click', () => {
    current--;
    changeImage();
    resetInterval();
})