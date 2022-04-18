//GLOBAL VARIABLES
var list = [];

//QUERY SELECTORS
var saveButton = document.querySelector('.save-button');
var inputTitle = document.querySelector('#title');
var inputBody = document.querySelector('#body');
var cardGrid = document.querySelector('.card-section-grid');
var showStarredIdeas = document.querySelector('.show-starred-ideas-button');
var searchInput = document.querySelector('#search-input');

//EVENT LISTENERS
saveButton.addEventListener('click', processInput);
window.addEventListener('keyup', checkInput);
cardGrid.addEventListener('click', getEventId);
showStarredIdeas.addEventListener('click', filterStarredIdeas);
searchInput.addEventListener('keyup', searchIdeas);

//DATA FUNCTIONS
function getEventId(event) {
  if (event.target.name === "delete"){
    deleteCard(event.target.value);
  } else if (event.target.name === "favorite") {
    favoriteCard(event.target);
  }
}

function filterStarredIdeas() {
  if (showStarredIdeas.innerText === 'Show Starred Ideas') {
    displayCard(list.filter(idea => idea.star));
  } else {
    displayCard(list);
  }
  updateStarredButton();
}

function deleteCard(index) {
  list.splice(index, 1);
  if (showStarredIdeas.innerText === 'Show All Ideas') {
    displayCard(list.filter(idea => idea.star));
  } else {
    displayCard(list);
  }
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
    inputTitle.value = null;
    inputBody.value = null;
    displayCard(list);
  }
}

function searchIdeas() {
  displayCard(list.filter(idea => idea.title.includes(searchInput.value) || idea.body.includes(searchInput.value)));
}

//DOM FUNCTIONS
function updateStarredCard(target) {
  target.classList.toggle("favorite-active");
  if (showStarredIdeas.innerText === 'Show All Ideas') {
    displayCard(list.filter(idea => idea.star));
  }
}

function updateStarredButton() {
  if (showStarredIdeas.innerText === 'Show All Ideas') {
    showStarredIdeas.innerText = 'Show Starred Ideas';
  } else {
    showStarredIdeas.innerText = 'Show All Ideas';
  }
}

function checkInput() {
  if (inputTitle.value === "" || inputBody.value === "") {
    saveButton.classList.add('save-button-disabled');
    saveButton.disabled = true;
  } else if (inputTitle.value !== "" && inputBody.value !== "") {
    saveButton.classList.remove('save-button-disabled');
    saveButton.disabled = false;
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
      <div class="card-middle scrollbar-background">
        <h1>${cards[i].title}</h1>
        <p>${cards[i].body}</p>
      </div>
      <div>
      </div>
    </div>`;
  }
}
