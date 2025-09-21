// generations functions
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
function generateNumKeyboard(whatParrent) {
  for (let i = 1; i < 11; i += 1) {
    const key = `${i}`.slice(-1);
    creatAndAppend(whatParrent, 'div', 'key', key);
  }
}
function generateletterKeyboard(whatParrent) {
  const data = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  for (let i = 0; i < 26; i += 1) {
    creatAndAppend(whatParrent, 'div', 'key', `${data[i]}`);
  }
}
function showCorrentKeyboard(whatLevel) {
  if (whatLevel === 'Easy') {
    keyboardNumbers.classList.remove('hidden');
    keyboardletters.classList.add('hidden');
    return;
  }
  if (whatLevel === 'Medium') {
    keyboardNumbers.classList.add('hidden');
    keyboardletters.classList.remove('hidden');
    return;
  }
  if (whatLevel === 'Hard') {
    keyboardNumbers.classList.remove('hidden');
    keyboardletters.classList.remove('hidden');
    return;
  }
  console.log(whatLevel);
}
// HTML base generation
const body = document.getElementById('body')
const main = creatAndAppend(body, 'main')
const menu = creatAndAppend(main, 'div', 'menu');
const easyLevel = creatAndAppend(menu, 'div', 'button level corrent-dif', 'Easy');
const mediumLevel = creatAndAppend(menu, 'div', 'button level non-corrent-dif', 'Medium');
const hardLevel = creatAndAppend(menu, 'div', 'button level non-corrent-dif', 'Hard');
const startGame = creatAndAppend(main, 'div', 'button start', 'Start');
const startNewGame = creatAndAppend(main, 'div', 'button start-new hidden', 'New Game');
const gameField = creatAndAppend(main, 'div', 'game-field');
const keyboards = creatAndAppend(main, 'div', 'keyboards');
const keyboardNumbers = creatAndAppend(keyboards, 'div', 'keyboard numbers');
generateNumKeyboard(keyboardNumbers);
const keyboardletters = creatAndAppend(keyboards, 'div', 'keyboard letters hidden');
generateletterKeyboard(keyboardletters);
const divRound = creatAndAppend(main, 'div', 'bottom-div rounds hidden', 'Round 1 / 5');
const divRepeat = creatAndAppend(main, 'div', 'bottom-div repeat repeat-able hidden', 'Repeat the sequence');
const divNext = creatAndAppend(main, 'div', 'bottom-div next hidden', 'Next');
const input = creatAndAppend(main, 'div', 'input hidden');
// events functions
function makeActive(div) {
  div.classList.add('corrent-dif');
  div.classList.remove('non-corrent-dif');
}
function makeInactive(div) {
  div.classList.remove('corrent-dif');
  div.classList.add('non-corrent-dif');
}
function shouseDifficult(event) {
  const gameStarted = startGame.className.split(' ');
  if (gameStarted.find(a => a === 'hidden')) return;
  const whatLevel = event.target.innerHTML;
  if (whatLevel === easyLevel.innerHTML) {
    makeActive(easyLevel);
    makeInactive(mediumLevel);
    makeInactive(hardLevel);
  }
  if (whatLevel === mediumLevel.innerHTML) {
    makeActive(mediumLevel);
    makeInactive(easyLevel);
    makeInactive(hardLevel);
  }
  if (whatLevel === hardLevel.innerHTML) {
    makeActive(hardLevel);
    makeInactive(mediumLevel);
    makeInactive(easyLevel);
  }
  showCorrentKeyboard(whatLevel);
}
// events
easyLevel.addEventListener('click', shouseDifficult);
mediumLevel.addEventListener('click', shouseDifficult);
hardLevel.addEventListener('click', shouseDifficult);

export { creatAndAppend }