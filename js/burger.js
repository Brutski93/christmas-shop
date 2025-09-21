// burger
const burger = document.getElementById('burgerr');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const burgerMenu = document.getElementById('burger-menu');
const body = document.querySelector('body');

function switchBurgerIcon(event) {
  item1.classList.toggle('item1');
  item1.classList.toggle('item1-r');
  item2.classList.toggle('item2');
  item2.classList.toggle('item2-r');
}
function toggleBurgerMenu(event) {
  burgerMenu.classList.toggle('burger-menu-right');
}
function fixBody(event) {
  body.classList.toggle('body-fix');
}

function openBurger(event) {
  switchBurgerIcon(event);
  toggleBurgerMenu(event);
  fixBody(event);
}
burger.addEventListener('click', openBurger);
burgerMenu.addEventListener('click', openBurger);
window.addEventListener('resize', () => {
  if (!burgerMenu.classList.contains('burger-menu-right')) openBurger();
});