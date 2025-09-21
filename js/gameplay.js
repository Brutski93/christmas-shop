// import { creatAndAppend } from "./main";
function creatAndAppend(whatParent, whatTag, whatClass = false, whatText = false) {
  const newItem = document.createElement(whatTag);
  if (whatClass) {
    whatClass = whatClass.split(' ');
    for (let i = 0; i < whatClass.length; i += 1) {
      newItem.classList.add(whatClass[i]);
    }
  }
  if (whatText) newItem.innerHTML = whatText;
  whatParent.appendChild(newItem);
  return newItem;
}
// global dada
let task = [];
let n = 0;
let inputIsAlowed = false;
const start = document.querySelector('.start');
const main = document.getElementsByTagName('main')[0];
const startNewGameButton = document.querySelector('.start-new');
let input = null;
let divRound;
let divRepeat;
let divNext = false;
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
function makeRoundsDiv() {
  if (document.querySelector('.rounds')) divRound.innerHTML = 'Round 1 / 5';
  if (!document.querySelector('.rounds')) divRound = creatAndAppend(main, 'div', 'bottom-div rounds', 'Round 1 / 5');
}
function makeRepeatDiv() {
  if (!document.querySelector('.repeat')) divRepeat = creatAndAppend(main, 'div', 'bottom-div repeat repeat-able', 'Repeat the sequence');
  divRepeat.addEventListener('click', repeatTaskandDisable);
}
function showNextHideRepeat() {
  input.innerHTML = 'Well done!';
  divRepeat.classList.add('hidden');
  if (!divNext) {
    divNext = creatAndAppend(main, 'div', 'bottom-div next', 'Next');
    divNext.addEventListener('click', continueGame);
  }
  if (divNext) divNext.classList.remove('hidden');
}
function makeInputDiv() {
  if (document.querySelector('.input')) {
    input.classList.remove('incorrect');
    input.innerHTML = '';
  }
  if (!document.querySelector('.input')) {
    input = creatAndAppend(main, 'div', 'input');
    setTimeout(() => input.innerHTML = '', 500);
  }
}
function looseGame(item, taskItem) {
  if (item !== `${taskItem}`) {
    inputIsAlowed = false;
    const isRepeatDisable = divRepeat.className.split(' ');
    if (isRepeatDisable.find(a => a === 'repeat-disable')) {
      startNewGameButton.classList.add('hidden');
      cleanGameField();
      showLooseWindow();
      divNext = false;
    }
    input.classList.add('incorrect');
  }
}
function checkInput(task) {
  if (input.innerHTML !== '' && inputIsAlowed === true) {
    let inputTemp = input.innerHTML;
    for (let i = 0; i < inputTemp.length; i++) {
      looseGame(inputTemp[i], task[i]);
    }
    if (inputTemp.length === task.length) {
      inputIsAlowed = false;
      if (inputTemp === `${task.join('')}`) {
        showNextHideRepeat();
      }
    }
  }
}
function makeInputFromScereen (event) {
  if (inputIsAlowed) {
    event.target.classList.add('key-highlight');
    input.innerHTML += event.target.innerHTML;
  }
  setTimeout(() => event.target.classList.remove('key-highlight'), 300);
  checkInput(task);
}
function makeInput(event) {
  let temp = '';
  if (inputIsAlowed) {
    temp = `${event.key}`.toUpperCase();
    if (temp.length > 1) return;
    let correntDifficult = setsForTasks[whatIsDifficultNow()].toUpperCase();
    if (correntDifficult.includes(temp)) {
      input.innerHTML += temp;
      showTask([temp]);
    }
  }
  checkInput(task);
}
function allowInput() {
  window.addEventListener('keydown', makeInput);
  const keys = document.querySelectorAll('.key');
  keys.forEach(a => a.addEventListener('click', makeInputFromScereen));
}
function cleanGameField() {
  for (let i = 0; i < 3; i++) {
    main.removeChild(main.lastChild);
  }
  if (n > 2) main.removeChild(main.lastChild);
}
// game functions
function makeRandomTask(n) {
  const arr = [];
  let correntDifficult = setsForTasks[whatIsDifficultNow()].toUpperCase();
  for (let i = 0; i < n; i++) {
    arr[i] = correntDifficult[randomInteger(0, correntDifficult.length - 1)];
  }
  return arr;
}
function toggleActive(item) {
  item.classList.toggle('key-highlight');
}
function showKey(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].innerHTML === `${num}`) {
      toggleActive(arr[i]);
      setTimeout(toggleActive, 500, arr[i]);
    }
  }
}
function showTask(arr = []) {
  const keys = document.querySelectorAll('.key');
  for (let i = 0; i < arr.length; i++) {
    setTimeout(showKey, i * 700, arr[i], keys);
  }
  setTimeout(() => inputIsAlowed = true, arr.length * 700);
}
function disableRepeat() {
  divRepeat.classList.remove('repeat-able');
  divRepeat.classList.add('repeat-disable');
}
function ableRepeat() {
  if (divNext) divNext.classList.add('hidden');
  divRepeat.classList.add('repeat-able');
  divRepeat.classList.remove('repeat-disable');
  divRepeat.classList.remove('hidden');
}
function repeatTaskandDisable(event) {
  input.innerHTML = '';
  input.classList.remove('incorrect');
  const isRepeatDisable = divRepeat.className.split(' ');
  if (isRepeatDisable.find(a => a === 'repeat-disable')) return;
  showTask(task);
  disableRepeat();
}
function whatIsDifficultNow() {
  const correntDifficult = document.querySelector('.corrent-dif');
  return correntDifficult.innerHTML;
}
function checkWin() {
  if (n < 11) return false;
  cleanGameField();
  showWinWindow();
  n = 2;
  startNewGameButton.classList.add('hidden');
  return true;
}
function showWinWindow() {
  creatAndAppend(main, 'div', 'winning', `Congratulations! You have complite ${whatIsDifficultNow()} level!`);
  setTimeout(() => {
    main.removeChild(main.lastChild);
    start.classList.remove('hidden');
  }, 3000);
}
function showLooseWindow() {
  creatAndAppend(main, 'div', 'winning', `Sorry, but You have fail ${whatIsDifficultNow()} level`);
  setTimeout(() => {
    main.removeChild(main.lastChild);
    start.classList.remove('hidden');
  }, 3000);
}
// main functions
function continueGame() {
  if (checkWin()) return;
  ableRepeat();
  makeInputDiv();
  n += 2;
  divRound.innerHTML = `Round ${n / 2} / 5`;
  task = makeRandomTask(n);
  // console.log(task);
  showTask(task);
  setTimeout(allowInput, n * 1000);
}
function startGame(event) {
  n = 0;
  divNext = false;
  inputIsAlowed = false;
  start.classList.add('hidden');
  makeRoundsDiv();
  makeRepeatDiv();
  startNewGameButton.classList.remove('hidden');
  continueGame();
}
function startNewGame(event) {
  startNewGameButton.classList.add('hidden');
  inputIsAlowed = false;
  start.classList.remove('hidden');
  cleanGameField();
}
//events
start.addEventListener('click', startGame);
startNewGameButton.addEventListener('click', startNewGame);
// console.log('error');
// window.addEventListener('keydown', makeInput2);