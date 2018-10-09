var burger = document.getElementById('burger');
var menu = document.getElementById('burger-menu');

burger.addEventListener('click', function() {
   menu.classList.toggle('menu_active');
});