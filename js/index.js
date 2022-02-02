const audio = document.querySelector('audio');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
let isPlay = false;

function playAudio() {
  if (!isPlay) {
	audio.play();
	isPlay = true;
  } else {
	audio.pause();
	isPlay = false;
  }
}

playBtn.addEventListener('click', playAudio);

function toggleBtn() {
	playBtn.classList.toggle('pause-btn');
  }
  playBtn.addEventListener('click', toggleBtn);