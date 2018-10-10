var burger = document.getElementById('burger');
var menu = document.getElementById('burger-menu');
var btnLeft = document.getElementById('left');
var btnRight = document.getElementById('right');
var polosa = document.getElementById('poloska');
var left = 0;

burger.addEventListener('click', function() {
   menu.classList.toggle('menu_active');
});

btnLeft.onclick = function() {
    left = left - 100;
    if(left < -1100) {
        left = 0;
    }
   polosa.style.left = left + '%';
};

btnRight.onclick = function() {
    left = left + 100;
    if(left > 0) {
        left = 0;
    }
    polosa.style.left = left + '%';
};