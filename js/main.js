const form = document.querySelector('.mail__form');
const input = document.querySelector('.mail__input');

input.addEventListener('focus', function() {
    form.classList.add('mail__form--active');
})

input.addEventListener('blur', function() {
    form.classList.remove('mail__form--active');
})