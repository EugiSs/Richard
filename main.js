let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu__row');
burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
})

// ===============================================
new Swiper('.slider__container', {
	loop: true,
	autoHeight: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: 'slider-bullets',
		bulletActiveClass: 'slider-bullets-active',
	},
	grabCursor: true,
	slideToClickedSlide: true,
})

// =============================================
function validateEmail(email) {
	let str =
		/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	return str.test(String(email).toLowerCase());
};

function validate(input) {
	if (validateEmail(input.value)) {
		return true;
	} else {
		input.classList.add('error');
		return false;
	}
};

let form = document.querySelector('.subscribe__form');
let input = form.querySelector('.input');
let placeholder = input.placeholder;

input.addEventListener('click', function () {
	input.placeholder = '';
});
input.addEventListener('blur', function () {
	if (this.value === '') {
		input.placeholder = placeholder;
	}
})
form.addEventListener('submit', function (event) {
	if (!validate(input)) {
		event.preventDefault()
		return false;
	} else {
		input.value = '';
		input.placeholder = placeholder;
	}
})