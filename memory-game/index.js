const cards = document.querySelectorAll('.memory-card');
const result = document.querySelector('.result');



let hasFlippedCard = false;
let firstCard, secondCard;
let lockBord = false;

function flipCard() {
	if (lockBord) return
	this.classList.add('flip');
	if (this === firstCard) return;

	if(!hasFlippedCard){
		//first click
		hasFlippedCard = true;
		firstCard = this;
	} else {
		//second click
		hasFlippedCard = false;
		secondCard = this;
		checkThematch()
	}

	function checkThematch(){
		// do matched?
		let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
		isMatch ? disableCards () : unflipCards()
	}
	
	function disableCards (){
		firstCard.removeEventListener('click', flipCard);
		secondCard.removeEventListener('click', flipCard);
	}

	function unflipCards(){
		lockBord = true;
		setTimeout(() => {
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
			lockBord = false;
		},1500);
	}	
}

(function shuffle() {
	cards.forEach(card => {
	  let ramdomPos = Math.floor(Math.random() * 12);
	  card.style.order = ramdomPos;
	});
  })();


cards.forEach(card => card.addEventListener('click', flipCard))