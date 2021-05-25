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
const displayCorrectAnswer = document.querySelector("#correct-answer");
let displayIncorrectAnswers = document.querySelectorAll(".incorrect-answer");
let answersNodeList = document.querySelectorAll(".answers");
let difficultySelection = "easy";
let categorySelection = "9";
let count = 0;
let questionsArray = [];
// let startAgain = document.querySelector(".start-again");
getQuestionsArray();
// getCorrectAnswer();
// function startGame(questionsArray) {
// questionsArray = [];
//   getQuestionsArray();
//   count = 0;
// }
async function getQuestionsArray() {
  let response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${categorySelection}&difficulty=${difficultySelection}&type=multiple`
  );
  let data = await response.json();
  questionsArray = data.results;
}

function getCurrentQuestion(questionsArray) {
  currentQuestion = questionsArray[count].question;
  questionDisplay.textContent = currentQuestion;
  let correctAnswer = questionsArray[count].correct_answer;
  displayCorrectAnswer.innerHTML = correctAnswer;
  let incorrectAnswersArray = questionsArray[count].incorrect_answers;
  let incorrectAnswer = questionsArray[count].incorrect_answers;
  for (let i = 0; i < incorrectAnswersArray.length; i++) {
    displayIncorrectAnswers[i].innerHTML = incorrectAnswersArray[i];
  }
  const shuffleArray = (answersNodeList) => {
    for (let i = answersNodeList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = answersNodeList[i];
      answersNodeList[i] = answersNodeList[j];
      answersNodeList[j] = temp;
    }
    console.log(answersNodeList);
  };

  // console.log(displayIncorrectAnswers);
  console.log(incorrectAnswersArray);
  console.log(questionsArray);
  console.log(shuffleArray());

  count++;
}

generateQuestionButton.addEventListener("click", () =>
  getCurrentQuestion(questionsArray)
);

// startAgain.addEventListener("click", startGame);