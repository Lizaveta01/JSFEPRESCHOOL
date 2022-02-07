const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const nextBtn = document.querySelector('.next-btn');
const lastBtn = document.querySelector('.last-btn');
const imageTreck = document.getElementById('poster');
const imageBack = document.getElementById('background');
const nameSong = document.querySelector('.info-song__title');
const nameArtist = document.querySelector('.info-song__subtitle');
const progressContainer = document.querySelector('.progress__container');
const progress = document.querySelector('.progress');

const nowTime = document.querySelector('.current-time');
const durationTime = document.querySelector('.duration-time');

let isPlay = false;
let playNum = 0;
const playList = ['demons', 'september'];
const listSong = ['Demons', 'September'];
const listArtist =['Imagine Dragons', 'Earth wind fire'];



function switcherTreck(playNum) {
	audio.src = `audio-player/assets/song/${playList[playNum]}.mp3`;
	isPlay = false;
	switcherImage();
	playAudio();	
	switcherText()
}

function switcherText() {
	console.log('работает2!');
	nameSong.textContent = listSong[playNum];
	nameArtist.textContent = listArtist[playNum];
}

function switcherImage() {
	console.log('работает!');
	imageTreck.src = `audio-player/assets/img/jpg/${playList[playNum]}.jpg`;
	imageBack.src = `audio-player/assets/img/jpg/${playList[playNum]}.jpg`;
}


function playNext() {
	if (playNum >= playList.length -1) {
		playNum = 0;
	} else {
		playNum++
	}
	switcherTreck(playNum);	
	console.log(playNum);
}
nextBtn.addEventListener('click', playNext);


function playPrev() {
	if (playNum > 0) {
		playNum--
	} else {
		playNum = playList.length - 1;
	}	
	switcherTreck(playNum);
}
lastBtn.addEventListener('click', playPrev);

function playAudio() {
  if (!isPlay) {
	audio.play();
	isPlay = true;
	playBtn.classList.add('pause-btn');
	imageTreck.style = 'transform: scale(1.15)'

  } else {
	audio.pause();
	isPlay = false;
	playBtn.classList.remove('pause-btn');
	imageTreck.style = 'transform: scale(1)'
  }
}

playBtn.addEventListener('click', playAudio);


//плеер
function updateProgress(e) {
	const {duration, currentTime} = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
	console.log('работает3!')
	nowTime.textContent = getTimeCodeFromNum(currentTime);
	durationTime.textContent = getTimeCodeFromNum(duration);
	console.log(duration)
	console.log(currentTime)
}

audio.addEventListener('timeupdate', updateProgress);

//перемотка
function setProgress (e){
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audio.duration;
	audio.currentTime = (clickX / width) * duration;
}
progressContainer.addEventListener('click', setProgress);

//автовоспроизведение следующей песни
audio.addEventListener('ended', playNext);

//перевод времени
function getTimeCodeFromNum(time) {
		let minutes = Math.floor( time / 60 )
		let timeForSeconds = time - ( minutes * 60 ) // seconds without counted minutes 
		let seconds = Math.floor( timeForSeconds )
		let secondsReadable = seconds > 9 ? seconds : `0${seconds}` // To change 2:2 into 2:02
		return `${minutes}:${secondsReadable}`
	 }
	

