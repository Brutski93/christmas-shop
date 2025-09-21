// - - - - - - - - - toUP button
const upButton = document.getElementsByClassName('up-button')[0];

window.addEventListener('scroll', function() {
  if (pageYOffset >= 300) upButton.classList.remove('up-button-hiden');
  else upButton.classList.add('up-button-hiden');
});
// - - - - - - - - - cards
// import
import { dataGifts } from "./dataGifts.js";
// variables
const cardholder = document.getElementById('cardholder'); // берём блок с карточками
// img tags full
const imgTagFW = `<img class="bestgifts-card-img" src="img/gift-for-work.png" alt="Christmas ball toy">`;
const imgTagFHe = `<img class="bestgifts-card-img" src="img/gift-for-health.png" alt="Christmas ball toy">`;
const imgTagFHa = `<img class="bestgifts-card-img" src="img/gift-for-harmony.png" alt="Christmas ball toy">`;

// create div bestgifts-card-bottom
function makeCardTextDiv(i) {
  let div = document.createElement('div');
  div.classList.add('bestgifts-card-bottom');
  //create paragraphs
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  p1.classList.add('header4', `${chouseColor(i)}`, 'bestgifts-card-title');
  p1.innerText = `${dataGifts[i].category}`;
  p2.classList.add('header3');
  p2.innerText = `${dataGifts[i].name}`;
  // add p in div
  div.appendChild(p1);
  div.appendChild(p2);
  return div;
}
// what img link?
function makeImg(i) {
  switch (dataGifts[i].category) {
    case 'For Work': return imgTagFW;
    case 'For Health': return imgTagFHe;
    case "For Harmony": return imgTagFHa;
  }
}
// what color of title?
function chouseColor(i) {
  switch (dataGifts[i].category) {
    case 'For Work': return 'blue';
    case 'For Health': return 'green';
    case "For Harmony": return 'pink';
  }
}
// create cards
let index = [];
for (let i = 0; i < 12; i++) {
  index.push(i, i + 12, i + 24);
}
for (let i = 0; i < 36; i++) {
  let card = document.createElement('div');
  card.classList.add('bestgifts-card', 'black-hover');
  cardholder.appendChild(card);
  card.innerHTML = makeImg(index[i]); // add img
  let cardText = makeCardTextDiv(index[i]); // make div with text
  card.appendChild(cardText);
}
// - - - - - - - - - - - - - - - - - - tabs - - - - - - - - - - - - - - - - - - tabs - - - - - - - - - - - - - - - - - -
// get all cards
let allCards;
setTimeout(() => {
  allCards = document.querySelectorAll('.bestgifts-card');
}, 100);
// hide work cards
function hideWorkCards(event) {
  let blueCards = document.querySelectorAll('.blue');
  blueCards.forEach(key =>{
    key.parentNode.parentNode.classList.add('hiden')
  });
}
// hide health cards
function hideHealthCards(event) {
  let greenCards = document.querySelectorAll('.green');
  greenCards.forEach(key =>{
    key.parentNode.parentNode.classList.add('hiden')
  });
}
// hide harmony cards
function hideHarmonyCards(event) {
  let pinkCards = document.querySelectorAll('.pink');
  pinkCards.forEach(key =>{
    key.parentNode.parentNode.classList.add('hiden')
  });
}
// switch active tab
function switchActive(e) {
  if (e.target.classList.contains('item-inactive')) {
    for (let i = 0; i < 4; i++) {
      tabs[i].classList.remove('item-active');
      tabs[i].classList.add('item-inactive');
    }
    e.target.classList.remove('item-inactive');
    e.target.classList.add('item-active');
  }
}
// set tags buttons
const tabs = document.querySelectorAll('.gifts-tabs-item');
for (let i = 0; i < 4; i++) {
  tabs[i].addEventListener('click', switchActive);
}
const tabAll = document.getElementById('tab-all');
const tabWork = document.getElementById('tab-work');
const tabHealth = document.getElementById('tab-health');
const tabHarmony = document.getElementById('tab-harmony');

tabAll.addEventListener('click', showAll);
tabWork.addEventListener('click', showWork);
tabHealth.addEventListener('click', showHealth);
tabHarmony.addEventListener('click', showHarmony);

//main function
function showAll(event) {
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].classList.remove('hiden');
  }
}
function showWork() {
  showAll();
  hideHealthCards();
  hideHarmonyCards();
}
function showHealth() {
  showAll();
  hideWorkCards();
  hideHarmonyCards();
}
function showHarmony() {
  showAll();
  hideWorkCards();
  hideHealthCards();
}