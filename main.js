//GLOBAL VARIABLES
var list = [];

//QUERY SELECTORS
var saveButton = document.querySelector('.save-button');
var inputTitle = document.querySelector('#title');
var inputBody = document.querySelector('#body');
var cardGrid = document.querySelector('.card-section-grid');

//EVENT LISTENERS
saveButton.addEventListener('click', processInput);

//DATA FUNCTIONS
function processInput() {
  var newIdea = new Idea(inputTitle.value, inputBody.value);
  list.push(newIdea);
  displayCard();
}

//DOM FUNCTIONS
function displayCard() {
  cardGrid.innerHTML = "";
  for (var i = 0; i < list.length; i++) {
    cardGrid.innerHTML += `<div class="card">
      <div class="card-top">
        <button class="favorite"></button>
        <button class="delete"></button>
      </div>
      <div class="card-middle">
        <h1>${list[i].title}</h1>
        <p>${list[i].body}</p>
      </div>
      <div class="card-bottom">
        <button class="comment"></button>
        <p>Comment</p>
      </div>
    </div>`;
  }
}
