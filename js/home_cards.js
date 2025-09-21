// cards
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
// make random
function makeRandom() {
  let a = [];
  a[0] = Math.floor(Math.random() * 36);
  a[1] = Math.floor(Math.random() * 36);
  while (a[1] === a[0]) {
      a[1] = Math.floor(Math.random() * 36);
  }
  a[2] = Math.floor(Math.random() * 36);
  while ((a[2] === a[1]) && (a[2] === a[0])) {
      a[2] = Math.floor(Math.random() * 36);
  }
  a[3] = Math.floor(Math.random() * 36);
  while ((a[3] === a[0]) && (a[3] === a[1]) && (a[3] === a[2])) {
      a[2] = Math.floor(Math.random() * 36);
  }
  return a;
}
let nums = makeRandom();
// create cards
for (let i = 0; i < 4; i++) {
  let card = document.createElement('div');
  card.classList.add('bestgifts-card', 'black-hover');
  cardholder.appendChild(card);
  card.innerHTML = makeImg(nums[i]); // add img
  let cardText = makeCardTextDiv(nums[i]); // make div with text
  card.appendChild(cardText);
}