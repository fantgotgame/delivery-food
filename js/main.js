const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.button-close')
cartButton.addEventListener('click', function (event) {
    modal.classList.add("is-open");
} );
closeButton.addEventListener('click', function (enevt) {
    modal.classList.remove("is-open");
});

new WOW().init();