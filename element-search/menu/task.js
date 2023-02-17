const menuItem = document.querySelectorAll('.menu__item');
const menuLink = document.querySelectorAll('.menu__link');
const menuSub = [...document.querySelectorAll('.menu_sub')];

function displayMenu (e) {
if (e.target.nextElementSibling) {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle("menu_active");
}
  }

function removeActive(e) {
 if (e.target.closest('.menu__item')) {
   return;	
 }
  menuSub.forEach(el => el.classList.remove('menu_active'));
}


menuLink.forEach(el => el.onclick = displayMenu);
document.addEventListener('click', removeActive);
