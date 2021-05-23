//Pseudo code
//
//# SCREEN 2

// - select input form the dom
//
// Feature 1: Name input
// - select input from the dom
// - set as user input
// - if userInput is = to numbers 'please only use characters' (display error message)
// - valdation- character = CAPS first letter
// - if user has selected character and filled input value allow them to move to the next screen onclick
// -
// - if userInput is = to numbers  (display error message)'please only use characters'
// - capitalise first letter of input (validation)
// - use .focus method to automatically place cursor input field

// Feature 2: Character Selection Icons
// - Add 6 buttons
// - limit the button selection to 1: if another button is selected, the first automatically unselected

// Feature 3: Confirmation Button
// - if both user input and 1 category button is selected, allow user to continue user journey
// - if user input is missing, display an error message
// - if user has selected two buttons, display error message "choose 1 charcter"*
// - once user input is correct, store character selection and name in 2 seperate variables
// - attach href link to the confirm button, send user to screen 4
//

/*  TRIVIA API */
//added variables for difficulty and cathegory
let difficultySelection = "easy";
let categorySelection = "1";

const requestUrlTriviaApi = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;
async function fetchQuestion() {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
  );
  let data = await response.json();
  console.log(data);
}
fetchQuestion();

let userName = "";
let confirmButton = document.querySelector(".confirm-button");
confirmButton.addEventListener("click", confirm);

let avatars = document.querySelector(".character-selection");
let avatarImage = "";

function getAvatar() {
  let av = document.getElementsByName("avatar");
  for (i = 0; i < av.length; i++) {
    if (av[i].checked) {
      avatarImage = av[i].value;
      console.log(avatarImage);
    }
  }
}

function confirm() {
  let input = document.querySelector("#name-input").value;
  userName = input.charAt(0).toUpperCase() + input.slice(1);
  console.log(userName);
  getAvatar();
}

//Writing a Function for Feature 2: Character Selection Icons
