var burger = document.getElementById('burger');
var menu = document.getElementById('burger-menu');
var btnLeft = document.getElementById('left');
var left = 0;

burger.addEventListener('click', function() {
   menu.classList.toggle('menu_active');
});

btnLeft.onclick = function() {
   var polosa = document.getElementById('poloska');
    left = left - 1500;
    if(left < -12000) {
        left = 0;
    }
   polosa.style.left = left + 'px';
};