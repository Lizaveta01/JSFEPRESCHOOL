const hamburger = document.querySelector('.hamburger');
const header__nav = document.querySelector('.header__nav');

function toggleMenu() {
  hamburger.classList.toggle('open');
  header__nav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
header__nav.addEventListener('click', toggleMenu);




const portfolioBtn = document.querySelectorAll('.bt__border');
const portfolioImages = document.querySelectorAll('.portfolio__image');
const portfolioBtns = document.querySelector('.button__items');

console.log(portfolioBtn);
console.log(portfolioImages);
console.log(portfolioBtns);

portfolioBtns.onclick = function () {
	console.log('клик!')
};

function changeImage(event) {
		if (event.target.classList.contains('bt__border')) {
			console.log(event.target);
			portfolioImages.forEach((img, index) => {
				img.src = `assets/img/jpg/${event.target.dataset.season}/${index + 1}.jpg`
			});
		}
  }

 portfolioBtns.addEventListener('click', changeImage);


  function changeClassActive (event) {
	portfolioBtn.forEach((a) => {
		a.classList.remove('active');
	})

	if (event.target.classList.contains('bt__border')) {
		event.target.classList.add('active');
	}
}

portfolioBtns.addEventListener('click', changeClassActive);

