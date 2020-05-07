const player = document.getElementById('video');
const play = document.getElementById('btn-play');
const stop = document.getElementById('btn-stop');
const progress = document.getElementById('progress');
const timeStampCurrent = document.getElementById('currentTime');
const movieChange = document.getElementById('change');

displayTotalVideoTime();
function displayTotalVideoTime() {
  console.log(player);
  console.log(player.duration);

  const mins = player.duration ? Math.floor(player.duration / 60) : '00';
  const seconds = player.duration ? Math.floor(player.duration % 60) : '00';
  player.currentTime = 0;
  document.getElementById('total').innerText = `${mins}:${seconds}`;
}
function switchTheMode() {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

function changeIconAndPlay() {
  if (player.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"/>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"/>';
  }
}

function stopVideo() {
  player.currentTime = 0;
  player.pause();
}

function updateBarProgress() {
  progress.value = (player.currentTime / player.duration) * 100;
  const mins = Math.floor(player.currentTime / 60);
  const seconds = Math.floor(player.currentTime % 60);

  if (seconds < 10) {
    timeStampCurrent.innerText = `0${mins}:0${seconds}`;
  } else if (mins < 1) {
    timeStampCurrent.innerText = `0${mins}:${seconds}`;
  } else {
    timeStampCurrent.innerText = `${mins}:${seconds}`;
  }
}
function updateVideoProgress() {
  player.currentTime = (+progress.value / 100) * player.duration;
}

function toggleMovie() {
  console.log(player.getAttribute('src'));
  if (player.getAttribute('src') === 'video/BatmanPrison.mp4') {
    player.setAttribute('src', 'video/Thor.mp4');
    player.setAttribute('poster', 'img/Thor.png');
  } else {
    player.setAttribute('src', 'video/BatmanPrison.mp4');
    player.setAttribute('poster', 'img/Batman.png');
  }
}

player.addEventListener('click', switchTheMode);
player.addEventListener('play', changeIconAndPlay);
player.addEventListener('pause', changeIconAndPlay);
player.addEventListener('timeupdate', updateBarProgress);
play.addEventListener('click', switchTheMode);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', updateVideoProgress);
movieChange.addEventListener('click', toggleMovie);
