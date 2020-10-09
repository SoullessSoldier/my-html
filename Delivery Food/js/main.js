const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

/*cartButton.addEventListener('click',  (event)=>{
    modal.classList.add('is-open');
});
*/
cartButton.addEventListener('click',toggleModal);
/*
close.addEventListener('click', (event)=>{
    modal.classList.remove('is-open');
});
*/
close.addEventListener('click',toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
}

new WOW().init();