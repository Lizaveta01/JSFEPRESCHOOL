//импортирование перевода для страницы
const i18Obj = {
	'en': {
	  'skills': 'Skills',
	  'portfolio': 'Portfolio',
	  'video': 'Video',
	  'price': 'Price',
	  'contacts': 'Contacts',
	  'hero-title': 'Alexa Rise',
	  'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
	  'hire': 'Hire me',
	  'skill-title-1': 'Digital photography',
	  'skill-text-1': 'High-quality photos in the studio and on the nature',
	  'skill-title-2': 'Video shooting',
	  'skill-text-2': 'Capture your moments so that they always stay with you',
	  'skill-title-3': 'Rotouch',
	  'skill-text-3': 'I strive to make photography surpass reality',
	  'skill-title-4': 'Audio',
	  'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
	  'winter': 'Winter',
	  'spring': 'Spring',
	  'summer': 'Summer',
	  'autumn': 'Autumn',
	  'price-description-1-span-1': 'One location',
	  'price-description-1-span-2': '120 photos in color',
	  'price-description-1-span-3': '12 photos in retouch',
	  'price-description-1-span-4': 'Readiness 2-3 weeks',
	  'price-description-1-span-5': 'Make up, visage',
	  'price-description-2-span-1': 'One or two locations',
	  'price-description-2-span-2': '200 photos in color',
	  'price-description-2-span-3': '20 photos in retouch',
	  'price-description-2-span-4': 'Readiness 1-2 weeks',
	  'price-description-2-span-5': 'Make up, visage',
	  'price-description-3-span-1': 'Three locations or more',
	  'price-description-3-span-2': '300 photos in color',
	  'price-description-3-span-3': '50 photos in retouch',
	  'price-description-3-span-4': 'Readiness 1 week',
	  'price-description-3-span-5': 'Make up, visage, hairstyle',
	  'order': 'Order shooting',
	  'contact-me': 'Contact me',
	  'send-message': 'Send message'
	},
	'ru': {
	  'skills': 'Навыки',
	  'portfolio': 'Портфолио',
	  'video': 'Видео',
	  'price': 'Цены',
	  'contacts': 'Контакты',
	  'hero-title': 'Алекса Райс',
	  'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
	  'hire': 'Пригласить',
	  'skill-title-1': 'Фотография',
	  'skill-text-1': 'Высококачественные фото в студии и на природе',
	  'skill-title-2': 'Видеосъемка',
	  'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
	  'skill-title-3': 'Ретушь',
	  'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
	  'skill-title-4': 'Звук',
	  'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
	  'winter': 'Зима',
	  'spring': 'Весна',
	  'summer': 'Лето',
	  'autumn': 'Осень',
	  'price-description-1-span-1': 'Одна локация',
	  'price-description-1-span-2': '120 цветных фото',
	  'price-description-1-span-3': '12 отретушированных фото',
	  'price-description-1-span-4': 'Готовность через 2-3 недели',
	  'price-description-1-span-5': 'Макияж, визаж',
	  'price-description-2-span-1': 'Одна-две локации',
	  'price-description-2-span-2': '200 цветных фото',
	  'price-description-2-span-3': '20 отретушированных фото',
	  'price-description-2-span-4': 'Готовность через 1-2 недели',
	  'price-description-2-span-5': 'Макияж, визаж',
	  'price-description-3-span-1': 'Три локации и больше',
	  'price-description-3-span-2': '300 цветных фото',
	  'price-description-3-span-3': '50 отретушированных фото',
	  'price-description-3-span-4': 'Готовность через 1 неделю',
	  'price-description-3-span-5': 'Макияж, визаж, прическа',
	  'order': 'Заказать съемку',
	  'contact-me': 'Свяжитесь со мной',
	  'send-message': 'Отправить'
	}
  }


//реализация меню бургер
const hamburger = document.querySelector('.hamburger');
const header__nav = document.querySelector('.header__nav');

function toggleMenu() {
  hamburger.classList.toggle('open');
  header__nav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
header__nav.addEventListener('click', toggleMenu);


//для portfolio par3
const portfolioBtn = document.querySelectorAll('.bt__border');
const portfolioImages = document.querySelectorAll('.portfolio__image');
const portfolioBtns = document.querySelector('.button__items');


portfolioBtns.onclick = function () {
	console.log('клик!')
};

//смена картинок
function changeImage(event) {
		if (event.target.classList.contains('bt__border')) {
			console.log(event.target);
			portfolioImages.forEach((img, index) => {
				img.src = `assets/img/jpg/${event.target.dataset.season}/${index + 1}.jpg`
			});
		}
  }

 portfolioBtns.addEventListener('click', changeImage);

//активация кнопки при смене картинок
  function changeClassActive (event) {
	portfolioBtn.forEach((a) => {
		a.classList.remove('active');
	})

	if (event.target.classList.contains('bt__border')) {
		event.target.classList.add('active');
	}
}

portfolioBtns.addEventListener('click', changeClassActive);




// перевод страницы
const langEn = document.querySelector('.header__link__lang-en');
const langRu = document.querySelector('.header__link__lang-ru');
const lang = document.querySelector('.header__lang');
const i18 = document.querySelectorAll('[data-i18]');

console.log(langEn);
console.log(langRu);
console.log(i18);
//активация кнопок языка
function changeClassActiveLang (event) {
	if (event.target.classList.contains('header__link__lang-en')) {
	event.target.classList.add('active');
	langRu.classList.remove('active');
	console.log('eng lang')}
	if (event.target.classList.contains('header__link__lang-ru')) {
		event.target.classList.add('active');
		langEn.classList.remove('active');
	console.log('ru lang')}
}

lang.addEventListener('click', changeClassActiveLang);
//функция перевода страницы
function getTranslate(lang) { 
	i18.forEach((elem) => { 
			elem.textContent = i18Obj[lang][elem.dataset.i18];
		});
		console.log('done!');
	}
	
langEn.addEventListener('click', () => getTranslate('en'));
langRu.addEventListener('click', () =>  getTranslate('ru'));

//переключение тем
let switchMode = document.querySelector('.header__theme-logo');

switchMode.onclick = function () {
	let theme = document.getElementById('theme');

	if (theme.getAttribute('href') == 'style.css') {
		theme.href = 'light.css';
	} else{
		theme.href = 'style.css';
	}
};
