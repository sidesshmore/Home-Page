const hamburger = document.querySelector('.hamburger');

// hamburger.addEventListener('click', function () {
//     this.classList.toggle('isActive')
// });

const mobile_menu = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('isActive');
    mobile_menu.classList.toggle('is-active');
});