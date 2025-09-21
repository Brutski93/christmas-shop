// import dataGifts
import { dataGifts } from "./dataGifts.js";
// fucking stars
let starSVG = '<svg width="16" height="16" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2942 14.8224L16.4727 14.3481L18.674 13.7583L18.3102 12.4006L14.7512 13.3542L13.0725 12.385C13.0957 12.26 13.1084 12.1315 13.1084 12C13.1084 11.8684 13.0957 11.7398 13.0725 11.6149L14.7512 10.6457L18.3102 11.5994L18.674 10.2416L16.4727 9.65177L17.2942 9.17747L20.8194 8.96588L21.3385 6.03095L18.5373 5.01305L16.5914 7.96016L15.7699 8.43446L16.3598 6.23317L15.002 5.86939L14.0484 9.42842L12.3688 10.3982C12.1741 10.2315 11.949 10.0997 11.7028 10.0124V8.0742L14.3082 5.46879L13.3143 4.47488L11.7028 6.08633V5.13772L13.2773 1.98876L11 0L8.72272 1.98886L10.2972 5.13782V6.08642L8.68571 4.47497L7.69179 5.46889L10.2972 8.0743V10.0125C10.051 10.0998 9.8259 10.2316 9.63122 10.3983L7.95155 9.42852L6.99793 5.86949L5.6402 6.23326L6.23004 8.43456L5.40855 7.96025L3.46271 5.01314L0.661499 6.03104L1.18059 8.96597L4.70579 9.17757L5.52728 9.65187L3.32599 10.2417L3.68981 11.5994L7.24884 10.6458L8.92747 11.615C8.90433 11.74 8.89158 11.8685 8.89158 12C8.89158 12.1316 8.90428 12.2602 8.92747 12.3851L7.24884 13.3543L3.68981 12.4006L3.32599 13.7584L5.52728 14.3482L4.70579 14.8225L1.18059 15.034L0.661499 17.969L3.46276 18.9869L5.4086 16.0397L6.23014 15.5654L5.64029 17.7667L6.99803 18.1306L7.95165 14.5715L9.63131 13.6018C9.82599 13.7684 10.0511 13.9003 10.2972 13.9875V15.9258L7.69189 18.5311L8.6858 19.525L10.2973 17.9135V18.8621L8.72282 22.0111L11.0001 24L13.2774 22.0111L11.7029 18.8621V17.9135L13.3144 19.525L14.3083 18.5311L11.703 15.9258V13.9875C11.9491 13.9003 12.1742 13.7684 12.3689 13.6018L14.0486 14.5715L15.0022 18.1306L16.3599 17.7667L15.7701 15.5654L16.5916 16.0397L18.5375 18.9869L21.3387 17.969L20.8196 15.034L17.2942 14.8224Z" fill="#FF4646"/></svg>'
let starSVGwhite = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1959 9.88162L11.6482 9.56542L13.1158 9.17219L12.8732 8.26704L10.5005 8.90278L9.38146 8.25667C9.39689 8.17336 9.40538 8.08765 9.40538 7.99997C9.40538 7.91229 9.39692 7.82655 9.38146 7.74327L10.5005 7.09716L12.8732 7.7329L13.1158 6.82775L11.6482 6.43452L12.1959 6.11831L14.546 5.97725L14.8921 4.02063L13.0246 3.34203L11.7274 5.30677L11.1797 5.62297L11.5729 4.15545L10.6678 3.91293L10.032 6.28561L8.91226 6.93211C8.78247 6.82103 8.63242 6.73313 8.4683 6.67494V5.3828L10.2052 3.64586L9.5426 2.98325L8.46827 4.05755V3.42515L9.51792 1.32584L7.99976 0L6.48157 1.3259L7.53122 3.42521V4.05761L6.45689 2.98332L5.79429 3.64592L7.53119 5.38286V6.675C7.36708 6.73319 7.21702 6.82109 7.08724 6.93217L5.96746 6.28568L5.33171 3.91299L4.42656 4.15551L4.81979 5.62304L4.27213 5.30684L2.9749 3.34209L1.10742 4.02069L1.45349 5.97731L3.80362 6.11838L4.35128 6.43458L2.88375 6.82781L3.1263 7.73296L5.49898 7.09722L6.61807 7.74333C6.60264 7.82664 6.59414 7.91235 6.59414 8.00003C6.59414 8.08771 6.60261 8.17345 6.61807 8.25673L5.49898 8.90285L3.1263 8.2671L2.88375 9.17226L4.35128 9.56548L3.80362 9.88169L1.45349 10.0227L1.10742 11.9793L2.97493 12.6579L4.27216 10.6932L4.81985 10.377L4.42662 11.8445L5.33177 12.087L5.96752 9.71435L7.0873 9.06786C7.21708 9.17894 7.36714 9.26684 7.53125 9.32503V10.6172L5.79435 12.3541L6.45696 13.0167L7.53129 11.9424V12.5748L6.48163 14.6741L7.99983 16L9.51802 14.6741L8.46837 12.5748V11.9424L9.5427 13.0167L10.2053 12.3541L8.4684 10.6172V9.32503C8.63251 9.26684 8.78257 9.17894 8.91235 9.06786L10.0321 9.71435L10.6679 12.087L11.573 11.8445L11.1798 10.377L11.7275 10.6932L13.0247 12.6579L14.8922 11.9793L14.5462 10.0227L12.1959 9.88162Z" fill="#FF4646" fill-opacity="0.1"/></svg>';
// modal div
const modalDiv = document.getElementById('modal');
// target functions
function fullFunction(e) {
  let newCard = creatNewCard(this);
  let cardNum = addDiscription(newCard); // get cardnumber and add discription
  addSuperpowers(newCard, cardNum);
  addCloseButton(newCard);
  modalDiv.appendChild(newCard);
  modalDiv.classList.remove('hiden');
  body.classList.add('body-fix'); // fix body
  modalDiv.addEventListener( 'click', (event) => {
    if (event.target.classList.contains('modal-div')) closeModal();
  });
}
// create new card function
function creatNewCard(parent) {
  let newCard = document.createElement('div');
  newCard.classList.add('bestgifts-card-modal');
  newCard.innerHTML = parent.innerHTML;
  newCard.lastChild.firstChild.classList.add('uppercase');
  newCard.lastChild.lastChild.classList.add('uppercase');
  return newCard;
}
// add discription to new card function
function addDiscription(newCard) {
  // create discription
  let discription = document.createElement('p');
  discription.classList.add('modal-didiscription', 'paragraph');
  let temp = getDiscription(newCard.lastChild.lastChild.innerHTML); // get text to discriptipn and card number
  discription.innerHTML = temp[0]; // add text to discriptipn
  // add discription
  newCard.lastChild.appendChild(discription);
  return temp[1]; //return number of card in array
}
// get discrintion for new card
function getDiscription(text) {
  for (let i = 0; i < dataGifts.length; i++) {
    if (dataGifts[i]['name'] == text) return [dataGifts[i]['description'], i];
  }
  return 'no text data. u make error';
}
// make close div function
function addCloseButton(newCard) {
  let close = document.createElement('div');
  close.classList.add('modal-close');
  let close1 = document.createElement('div');
  close1.classList.add('burger-item', 'item1-r');
  let close2 = document.createElement('div');
  close2.classList.add('burger-item', 'item2-r');
  close.appendChild(close1);
  close.appendChild(close2);
  close.addEventListener('click', closeModal);
  newCard.appendChild(close);
}
// close modal div
function closeModal() {
  modalDiv.classList.add('hiden');
  modalDiv.innerHTML = '';
  body.classList.remove('body-fix');
}
// make superpowers div function
function addSuperpowers(newCard, cardNum) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('superpowers-full');
  let title = document.createElement('p');
  title.classList.add('header4');
  title.innerHTML = 'Adds superpowers to:';
  newDiv.appendChild(title);
  newDiv.appendChild(makeSuperpowersSet(cardNum));
  newCard.lastChild.appendChild(newDiv);
}
// function for create set of superpowers div
function makeSuperpowersSet(cardNum) {
  let divFull = document.createElement('div');
  divFull.classList.add('superpowers-grid');
  divFull.appendChild(makeSuperpowerRow(cardNum, 'Live'));
  divFull.appendChild(makeSuperpowerRow(cardNum, 'Create'));
  divFull.appendChild(makeSuperpowerRow(cardNum, 'Love'));
  divFull.appendChild(makeSuperpowerRow(cardNum, 'Dream'));
  return divFull;
}
// makeSuperpowerRow function superpowers-row-item1
function makeSuperpowerRow(cardNum, text) {
  let row = document.createElement('div');
  row.classList.add('superpowers-row');
  // make item1
  let item1 = document.createElement('div');
  item1.classList.add('superpowers-row-item1', 'paragraph');
  item1.innerHTML = text;
  //make item2
  let item2 = document.createElement('div');
  item2.classList.add('superpowers-row-item2', 'paragraph');
  item2.innerHTML = dataGifts[cardNum]['superpowers'][`${text.toLowerCase()}`];
  let numOfStars = item2.innerHTML.slice(1, 2);
  // make item3
  let item3 = document.createElement('div');
  item3.classList.add('superpowers-row-item3');
  item3.innerHTML = starSVG.repeat(numOfStars) + starSVGwhite.repeat(5 - numOfStars);
  // add items to row
  row.appendChild(item1);
  row.appendChild(item2);
  row.appendChild(item3);
  return row;
}
// add listner to cards
let allCards;
setTimeout(() => {
  allCards = document.querySelectorAll('.bestgifts-card');
  allCards.forEach(card => card.addEventListener('click', fullFunction));
}, 100);