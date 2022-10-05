// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const html = document.querySelector('html');
const headerList = document.querySelector('.menu__body');

document.addEventListener("click", function (e) {
	if (headerList.classList.contains('_active-menu') && !e.target.closest('.main-header__list')) {
		html.classList.toggle('menu-open')
		headerList.classList.toggle('_active-menu')
	} else if (e.target.closest('.menu__icon')) {
		html.classList.toggle('menu-open')
		headerList.classList.toggle('_active-menu')
	}
});

const sale = document.querySelector('.top-header__sale span');

let date = new Date(),
	targetDay = 1, // понедельник, начиная с вс=0
	targetDate = new Date(),
	delta = targetDay - date.getDay();
if (delta >= 0) { targetDate.setDate(date.getDate() + delta) }
else { targetDate.setDate(date.getDate() + 7 + delta) }

let targetNumber = targetDate.getDate();
let targetMonth = targetDate.getMonth();
switch (targetMonth) {
	case 0: targetMonth = '1'; break;
	case 1: targetMonth = '2'; break;
	case 2: targetMonth = '3'; break;
	case 3: targetMonth = '4'; break;
	case 4: targetMonth = '5'; break;
	case 5: targetMonth = '6'; break;
	case 6: targetMonth = '7'; break;
	case 7: targetMonth = '8'; break;
	case 8: targetMonth = '9'; break;
	case 9: targetMonth = '10'; break;
	case 10: targetMonth = '11'; break;
	case 11: targetMonth = '12'; break;
}
let targetYear = targetDate.getFullYear();
// alert(targetNumber + ' ' + targetMonth + ' ' + targetYear + ' года');
sale.innerHTML = targetNumber + '.' + targetMonth + '.' + targetYear;