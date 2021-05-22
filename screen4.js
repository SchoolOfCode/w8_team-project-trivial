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
- FUNTION GET_QUESTION
    - FETCH 10 QUESTIONS FROM API
    - SET ARRAY AS QUESTIONS_ARRAY
    - LOOP THROUGH QUESTIONS_ARRAY INCRAMENTALLY BY 1
    - SELECT 1 QUESTION FROM THE ARRAY 
    - IF GENERATE_QUESTION_BUTTON IS CLICKED, 
    - DISPLAY Q1 IN H2  

    
*/
const questionDisplay = document.querySelector(".question-h2");
const requestUrlTriviaApi = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;
const generateQuestionButton = document.querySelector(
  ".generate-question-test"
);
let difficultySelection = "easy";
let categorySelection = "9";
let triviaQuestion = "";

async function getQuestion() {
  let response = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${categorySelection}&difficulty=${difficultySelection}&type=multiple`
  );
  let data = await response.json();
  let questionsArray = data.results;
  for (let i = 0; i < questionsArray.length; i++) {
    console.log(questionsArray[i].question);
  }
  console.log(questionsArray);
}
generateQuestionButton.addEventListener("click", getQuestion);
// getQuestion();
