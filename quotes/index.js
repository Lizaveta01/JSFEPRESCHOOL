window.onload = getData;
const jokeBtn = document.getElementById('jokeBtn');
const jokeText = document.getElementById('jokeText');
const belBtn =  document.querySelector('.belarusian');
const ruBtn =  document.querySelector('.russian');
const langBtn = document.querySelector('.language');
const img = document.querySelector('.poster');

let url = 'bel.json';

jokeBtn.onclick = function rotateImg () {
	img.classList.toggle('rotate');
};

langBtn.addEventListener('click', changeLang);

function changeLang (event){
	if (event.target.classList.contains('russian')){
		event.target.classList.add('active');
		belBtn.classList.remove('active');
		url = 'ru.json';
		console.log('включил руский!');}

	if (event.target.classList.contains('belarusian')){
		event.target.classList.add('active');
		ruBtn.classList.remove('active');
		url = 'bel.json';
		console.log('включил беларусский!');
		}
}

//Выриант 2
jokeBtn.addEventListener('click', getData);

async function getData () {
	console.log('clicked the button');
	const res = await fetch(url);
	const data = await res.json();


	const keys = Object.keys(data);
	const randIndex = Math.floor(Math.random() * keys.length);
	const randKey = keys[randIndex];
	const dat = data[randKey];

	jokeText.innerHTML = dat.text;
}

//Вариант 1
// jokeBtn.addEventListener('click', () => {
// 	console.log('clicked the button');
// 	const url = 'https://api.icndb.com/jokes/random/';
// 	fetch(url)
// 		.then(response => {
// 			return response.json()
// 		}).then(data =>{
// 			console.log(data.value.joke);
// 			jokeText.innerHTML = data.value.joke;
// 		})

// })