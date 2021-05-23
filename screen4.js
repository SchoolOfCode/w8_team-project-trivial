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
const generateQuestionButton = document.querySelector(
  ".generate-question-test"
);
let difficultySelection = "easy";
let categorySelection = "9";
let startAgain = document.querySelector(".start-again");
let count = 0;

function startGame(questionsArray) {
  questionsArray = [];
  getQuestionsArray();
  count = 0;
}
async function getQuestionsArray() {
  let response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${categorySelection}&difficulty=${difficultySelection}&type=multiple`
  );
  let data = await response.json();
  questionsArray = data.results;
}

function getCurrentQuestion(questionsArray) {
  currentQuestion = questionsArray[count].question;
  count++;
  questionDisplay.textContent = currentQuestion;
  console.log(currentQuestion);
  console.log(questionsArray);
  console.log(count);
}

generateQuestionButton.addEventListener("click", () =>
  getCurrentQuestion(questionsArray)
);

startAgain.addEventListener("click", startGame);
