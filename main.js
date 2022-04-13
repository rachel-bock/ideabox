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


// 2.1 When I click “Save”,
// - If I entered information in both the “Title” and “Body” input fields,
// - I should see a new Idea instance with the provided title and body appear in the ideas array
// - I should see a new idea card with the provided title and body appear on the DOM
