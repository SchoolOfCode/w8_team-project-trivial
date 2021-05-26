/*
Feature 3: Question Display
- Fetching 10 questions, and using a loop, loop through each question in 
the array, displaing 1 at a time
*/

/*
PSEUDO-CODE
- SELECT THE QUESTION H2 IN THE DOM 
- SET AS TRIVIA_QUESTION 
- CREATE BUTTON IN HTML
- SELECT BUTTON IN THE DOM 
- SET AS GENERATE_QUESTION_BUTTON
- FUNTION GET_QUESTIONS_ARRAY
    - FETCH 10 QUESTIONS FROM API
    - SET ARRAY AS QUESTIONS_ARRAY
    - RETURN QUESTIONS_ARRAY
FUNCTION GET_CURRENT_QUESTION
    - LOOP THROUGH QUESTIONS_ARRAY INCRAMENTALLY BY 1
    - SELECT 1 QUESTION FROM THE ARRAY 
    - IF GENERATE_QUESTION_BUTTON IS CLICKED, 
    - DISPLAY Q1 IN H2  
*/
/*
- SELECT CORRECT ANSWER IN THE DOM
- SELECT INCORRECT ANSWERS IN THE DOM
- FUNCTION DISPLAY_CORRECT_ANSWER
  - PASS IN QUESTIONS_ARRAY
  - USE DOT NOTATION TO FIND CORRECT_ANSWER IN QUESTIONS_ARRAY
  - CREATE A INCREMENT COUNT TO COUNT THROUGH THE ARRAY
  - DISPLAY CORRECT ANSWER IN CORRECT_ANSWER BUTTON
- FUNCTION DISPLAY INCORRECT_ANSWER
  - PASS IN QUESTIONS_ARRAY
  - USE DOT NOTATION TO FIND INCORRECT_ANSWERS_ARRAY IN QUESTIONS_ARRAY
  - 
  */

const questionDisplay = document.querySelector(".question-h2");
const requestUrlTriviaApi = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;
// const generateQuestionButton = document.querySelector(
//   ".generate-question-test"
// );
const displayCorrectAnswer = document.querySelector("#correct-answer");
const displayIncorrectAnswers = document.querySelectorAll(".incorrect-answer");
const progressBar = document.querySelector(".progress-bar");
const showGameProgress = document.querySelector(".show-game-progress");
let difficultySelection = "easy";
let categorySelection = "9";
let score = 0;
let count = 0;
let questionsArray = [];
let startAgain = document.querySelector(".start-again");
getQuestionsArray();
let questionCounter = 0;
const maximumQuestions = 10;

// if (questionCounter = maximumQuestions) {
//   let finishedGame = document.getElementById("myAnchor").href;
//   console.log(finishedGame)
let letsGo = document.querySelector(".letsgo-button");
letsGo.addEventListener("click", fetchQuestion);
letsGo.addEventListener("click", goToScreen4);
function goToScreen4() {
  screen3.classList.add("hide");
  screen4.classList.remove("hide");
  getCurrentQuestion(questionsArray);
}
function startGame(questionsArray) {
  questionsArray = [];
  getQuestionsArray();
  count = 0;
  score = 0;
  screen5.classList.add("hide");
  screen3.classList.remove("hide");
}

let allAnswers = document.querySelectorAll(".answer");
async function getQuestionsArray() {
  let response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${selection}&difficulty=${difficulty.toLowerCase()}&type=multiple`
  );
  let data = await response.json();
  questionsArray = data.results;
}
function goToScreen5() {
  screen4.classList.add("hide");
  screen5.classList.remove("hide");
}
function getCurrentQuestion(questionsArray) {
  console.log(questionsArray);
  if (count >= 10) {
    goToScreen5();
  }
  currentQuestion = questionsArray[count].question;
  questionDisplay.textContent = currentQuestion;
  let correctAnswer = questionsArray[count].correct_answer;
  displayCorrectAnswer.innerHTML = correctAnswer;
  let incorrectAnswersArray = questionsArray[count].incorrect_answers;
  for (let i = 0; i < incorrectAnswersArray.length; i++) {
    displayIncorrectAnswers[i].innerHTML = incorrectAnswersArray[i];
  }
  count++;
  console.log(count);

  questionCounter++;
  showGameProgress.style.width = `${
    (questionCounter / maximumQuestions) * 100
  }%`;
  showGameProgress.innerText = `${questionCounter}/${maximumQuestions}`;
  // IF MAXIMUM QUESTIONS REACHED LINK TO SCREEN 5

  shuffle();

  return count;
}

function shuffle() {
  let parent = document.getElementById("answers");
  let button = document.createDocumentFragment();
  while (parent.children.length) {
    button.appendChild(
      parent.children[Math.floor(Math.random() * parent.children.length)]
    );
  }
  parent.appendChild(button);
}
//handle answer response
/* 
  ADD ANSWER CLASS TO ALL ANSWERS
  SELECT ANSWERS
  LOOP THOUGH NODELIST
  ADD CLICK LISTENER TO ALL
  IF CLICKED ANSWER HAS ID OF "CORRECT-ANSWER"
   - INCREASE SCORE
  RETURN SCORE 
  */

function increaseScoreOnClick() {
  for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].onclick = () => {
      getCurrentQuestion(questionsArray);
      if (allAnswers[i].id === "correct-answer") {
        console.log("correct");
        score++;
        console.log(`score ` + score);
        correctAnswerSpan.innerHTML = score;
      }
    };
  }
}
increaseScoreOnClick();

// let totalScore = increaseScoreOnClick();
// console.log();
// generateQuestionButton.addEventListener("click", () =>
//   getCurrentQuestion(questionsArray)
// );

// startAgain.addEventListener("click", startGame);
