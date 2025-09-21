// slider

const slider = document.getElementsByClassName('slider-row')[0];
const leftButton = document.getElementById('slider-button-left');
const rightButton = document.getElementById('slider-button-right');

function isLeftUnable(event) {
  let size = +slider.style.left.slice(0, -2);
  if ((size < 1) && (size > -1)) {
    leftButton.classList.remove('active');
    leftButton.classList.add('inactive');
  } else {
    leftButton.classList.remove('inactive');
    leftButton.classList.add('active');
  }
}
function isRightUnable(event) {
  let sliderShift = +slider.style.left.slice(0, -2);
  let tempShift = slider.offsetWidth - slider.parentNode.offsetWidth;
  if (sliderShift < -(tempShift - 1)) {
    rightButton.classList.remove('active');
    rightButton.classList.add('inactive');
  } else {
    rightButton.classList.remove('inactive');
    rightButton.classList.add('active');
  }
}
function calcShift() {
  if (window.screen.width > 768) return (( slider.offsetWidth - slider.parentNode.offsetWidth) / 3);
  else return (( slider.offsetWidth - slider.parentNode.offsetWidth) / 6);
}
function moveSliderRight(event) {
  let shift = calcShift();
  if (leftButton.classList.contains('inactive')) return;
  slider.style.left = `${+slider.style.left.slice(0, -2) + shift}px`;
  isRightUnable();
  isLeftUnable();
}
function moveSliderLeft(event) {
  let shift = calcShift();
  if (rightButton.classList.contains('inactive')) return;
  slider.style.left = `${slider.style.left.slice(0, -2) - shift}px`;
  isRightUnable();
  isLeftUnable();
}

leftButton.addEventListener('click', moveSliderRight);
rightButton.addEventListener('click', moveSliderLeft);
window.addEventListener('resize', () => {
  slider.style.left = '0px';
  isLeftUnable();
  isRightUnable();
});

// timer
setTimer(); // set start

function getTimeLeft() {
  const dateFinal = new Date(Date.UTC(2025, 0, 1, 0));
  const datePresent = new Date();
  let a = Math.round((dateFinal.getTime() - datePresent.getTime()) / 1000);
  let Tdays = Math.floor(a / (60 * 60 * 24));
  let Thours = Math.floor((a - (Tdays * 60 * 60 * 24)) / 60 / 60);
  let Tmin = Math.floor((a - (Tdays * 60 * 60 * 24) - (Thours * 60 * 60)) / 60);
  let Tsec = a - (Tdays * 60 * 60 * 24) - (Thours * 60 * 60) - (Tmin * 60);
  return [Tdays, Thours, Tmin, Tsec];
}

function setTimer() {
  let timeLeft = getTimeLeft();
  document.getElementById('days').innerHTML = timeLeft[0];
  document.getElementById('hours').innerHTML = timeLeft[1];
  document.getElementById('min').innerHTML = timeLeft[2];
  document.getElementById('sec').innerHTML = timeLeft[3];
}

setInterval(setTimer, 1000);