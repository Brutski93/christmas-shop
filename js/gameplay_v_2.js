import { creatAndAppend } from "./main.js";
// main data
let task = [];
let n = 0;
const start = document.querySelector('.start');
const main = document.getElementsByTagName('main')[0];
const startNewGameButton = document.querySelector('.start-new');
const divRound = document.querySelector('.rounds');
const divRepeat = document.querySelector('.repeat');
const divNext = document.querySelector('.next');
const input = document.querySelector('.input');
const keys = document.querySelectorAll('.key');
const setsForTasks = {
  'Easy': '0123456789',
  'Medium': 'qwertyuiopasdfghjklzxcvbnm',
  'Hard': '0123456789qwertyuiopasdfghjklzxcvbnm'
}
// generation functions
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function hideDiv(...arr) {
  for (let div in arr) arr[div].classList.add('hidden');
}
function showDiv(...arr) {
  for (let div in arr) arr[div].classList.remove('hidden');
}
function cleanGameField() {
  hideDiv(divRound, divNext, divRepeat, input, startNewGameButton);
}
function whatIsDifficultNow() {
  const correntDifficult = document.querySelector('.corrent-dif');
  return correntDifficult.innerHTML;
}
function showWinWindow() {
  creatAndAppend(main, 'div', 'winning', `Congratulations! You have complite ${whatIsDifficultNow()} level!`);
  setTimeout(() => {
    main.removeChild(main.lastChild);
    start.classList.remove('hidden');
  }, 3000);
}
function makeInputDiv() {
  input.classList.remove('incorrect');
  input.innerHTML = '';
}
// game function
function blockInput() {
  window.removeEventListener('keydown', makeInput);
  keys.forEach(a => a.removeEventListener('click', makeInputFromScereen));
}
function allowInput() {
  window.addEventListener('keydown', makeInput);
  const keys = document.querySelectorAll('.key');
  keys.forEach(a => a.addEventListener('click', makeInputFromScereen));
}
function checkWin() {
  if (n < 10) return;
  cleanGameField();
  showWinWindow();
  n = 2;
}
function ableRepeat() {
  divNext.classList.add('hidden');
  divRepeat.classList.add('repeat-able');
  divRepeat.classList.remove('repeat-disable');
  divRepeat.classList.remove('hidden');
}
function makeRandomTask(n) {
  const arr = [];
  let correntDifficult = setsForTasks[whatIsDifficultNow()].toUpperCase();
  for (let i = 0; i < n; i++) {
    arr[i] = correntDifficult[randomInteger(0, correntDifficult.length - 1)];
  }
  return arr;
}
function showTask(arr = task) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(showKey, i * 700, arr[i], keys);
  }
  setTimeout(allowInput, arr.length * 600);
}
function showKey(str, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].innerHTML === str) {
      toggleActive(arr[i]);
      setTimeout(toggleActive, 500, arr[i]);
    }
  }
}
function toggleActive(item) {
  item.classList.toggle('key-highlight');
}
function makeInput(event) {
  let temp = '';
  temp = `${event.key}`.toUpperCase();
  if (temp.length > 1) return;
  let correntDifficult = setsForTasks[whatIsDifficultNow()].toUpperCase();
  if (correntDifficult.includes(temp)) {
    input.innerHTML += temp;
    showKey(temp, keys);
  }
  checkInput(task);
}
function makeInputFromScereen (event) {
  event.target.classList.add('key-highlight');
  input.innerHTML += event.target.innerHTML;
  setTimeout(() => event.target.classList.remove('key-highlight'), 300);
  checkInput(task);
}
function disableRepeat() {
  divRepeat.classList.remove('repeat-able');
  divRepeat.classList.add('repeat-disable');
}
function repeatTaskandDisable(event) {
  input.innerHTML = '';
  input.classList.remove('incorrect');
  const isRepeatDisable = divRepeat.className.split(' ');
  if (isRepeatDisable.find(a => a === 'repeat-disable')) return;
  showTask(task);
  disableRepeat();
}
function looseGame(item, taskItem) {
  if (item !== `${taskItem}`) {
    const isRepeatDisable = divRepeat.className.split(' ');
    if (isRepeatDisable.find(a => a === 'repeat-disable')) {
      cleanGameField();
      showLooseWindow();
    }
    input.classList.add('incorrect');
    blockInput();
  }
}
function showLooseWindow() {
  creatAndAppend(main, 'div', 'winning', `Sorry, but You have fail ${whatIsDifficultNow()} level`);
  setTimeout(() => {
    main.removeChild(main.lastChild);
    start.classList.remove('hidden');
  }, 3000);
}
function comliteRound() {
  blockInput();
  input.innerHTML = 'Well done!';
  divRepeat.classList.add('hidden');
  divNext.classList.remove('hidden');
  checkWin();
}
function checkInput(task) {
  if (input.innerHTML !== '') {
    let inputTemp = input.innerHTML;
    for (let i = 0; i < inputTemp.length; i++) {
      looseGame(inputTemp[i], task[i]);
    }
    if (inputTemp.length === task.length) {
      if (inputTemp === `${task.join('')}`) {
        comliteRound();
      }
    }
  }
}
// main functions
function continueGame() {
  n += 2;
  ableRepeat();
  makeInputDiv();
  divRound.innerHTML = `Round ${n / 2} / 5`;
  task = makeRandomTask(n);
  console.log(`Dif: ${whatIsDifficultNow()}`, divRound.innerHTML, `task: ${task.join(' ')}`);
  showTask(task);
}
function startGame(event) {
  n = 0;
  hideDiv(start);
  showDiv(input, divRound, divRepeat, startNewGameButton);
  continueGame();
}
function startNewGame(event) {
  start.classList.remove('hidden');
  cleanGameField();
}
//events
start.addEventListener('click', startGame);
startNewGameButton.addEventListener('click', startNewGame);
divNext.addEventListener('click', continueGame);
divRepeat.addEventListener('click', repeatTaskandDisable);