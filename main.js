//GLOBAL VARIABLES
var list = [];

//QUERY SELECTORS
var saveButton = document.querySelector('.save-button');
var inputTitle = document.querySelector('#title');
var inputBody = document.querySelector('#body');

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

}
