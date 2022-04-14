//GLOBAL VARIABLES
var list = [];

//QUERY SELECTORS
var saveButton = document.querySelector('.save-button');
var inputTitle = document.querySelector('#title');
var inputBody = document.querySelector('#body');
var cardGrid = document.querySelector('.card-section-grid');
var showStarredIdeas = document.querySelector('.show-starred-ideas-button');


//EVENT LISTENERS
saveButton.addEventListener('click', processInput);
window.addEventListener('keypress', checkInput);
cardGrid.addEventListener('click', getEventId);
showStarredIdeas.addEventListener('click', filterStarredIdeas);

//DATA FUNCTIONS
function getEventId(event) {
  if (event.target.name === "delete"){
    deleteCard(event.target.value);
  } else if (event.target.name === "favorite") {
    favoriteCard(event.target);
  }
}

function filterStarredIdeas() {
  displayCard(list.filter(idea => idea.star));
}

function deleteCard(index) {
  list.splice(index, 1);
  displayCard(list);
}

function favoriteCard(target) {
  list[target.value].updateIdea();
  updateStarredCard(target);
}

function processInput() {
  checkInput();
  if (saveButton.classList.contains('save-button-disabled')) {
    return;
  } else {
    var newIdea = new Idea(inputTitle.value, inputBody.value);
    list.push(newIdea);
    displayCard(list);
  }
}

//DOM FUNCTIONS
function updateStarredCard(target) {
  target.classList.toggle("favorite-active");
}

function checkInput(){
  if (inputTitle.value === "" || inputBody.value === "") {
    saveButton.classList.add('save-button-disabled');
  } else if (inputTitle.value !== "" && inputBody.value !== "") {
    saveButton.classList.remove('save-button-disabled');
  }
}

function determineClass(element) {
  if (element.star) {
    return 'class="favorite favorite-active"';
  } else {
    return 'class="favorite"';
  }
}

function displayCard(cards) {
  cardGrid.innerHTML = "";
  for (var i = 0; i < cards.length; i++) {
    cardGrid.innerHTML += `<div id="${i}" class="card">
      <div class="card-top">
        <button ${determineClass(cards[i])} name="favorite" value="${i}"></button>
        <button class="delete" name="delete" value="${i}"></button>
      </div>
      <div class="card-middle">
        <h1>${cards[i].title}</h1>
        <p>${cards[i].body}</p>
      </div>
      <div class="card-bottom">
        <button class="comment"></button>
        <p>Comment</p>
      </div>
    </div>`;
  }
}
