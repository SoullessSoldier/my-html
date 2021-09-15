'use strict';
const indicator = document.querySelector('.nav-indicator'),
    items = document.querySelectorAll('.nav-item');

const handleIndicator = (el) => {
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    let color = el.dataset.activeColor;
    indicator.style.backgroundColor = `${color}`;
    el.classList.add('is-active');
    el.style.color = color;
};

items.forEach((item, index) => {
    item.addEventListener('click', e => {
        handleIndicator(e.target);
    });
    //item.classList.contains('is-active')&&handleIndicator(item);
});
