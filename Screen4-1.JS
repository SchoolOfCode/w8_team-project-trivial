async function fetchQuestion() {
    return fetch(
      https://opentdb.com/api.php?amount=10&category=${selection}&difficulty=${difficulty.toLowerCase()}&type=multiple
    ).then(function (response) {
      return response.json();
    });
  }
  
  const questionDisplay = document.querySelector(".question-h2");
  const displayCorrectAnswer = document.querySelector("#correct-answer");
  const displayIncorrectAnswers = document.querySelectorAll(".incorrect-answer");
  const progressBar = document.querySelector(".progress-bar");
  const showGameProgress = document.querySelector(".show-game-progress");
  let allAnswers = document.querySelectorAll(".answer");
  
  let letsGo = document.querySelector(".letsgo-button");
  letsGo.addEventListener("click", startGame);
  
  let count = 0;
  let score = 0;
  
  async function startGame() {
    let questions = await fetchQuestion(); // Fetch Questions
    console.log(questions);
    console.log(questions.results);
    questions = questions.results;
  
    screen3.classList.add("hide");
    screen4.classList.remove("hide");
  
    if (count < 10) {
      let question = questions[count];
      let currentQuestion = question.question;
      questionDisplay.textContent = currentQuestion;
  
      let incorrectAnswersArray = question.incorrect_answers;
      for (let i = 0; i < incorrectAnswersArray.length; i++) {
        displayIncorrectAnswers[i].innerHTML = incorrectAnswersArray[i];
      }
      increaseScoreOnClick();
    }
  }
  
  function increaseScoreOnClick() {
      for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].onclick = () => {
          if (allAnswers[i].id === "correct-answer") {
            console.log("correct");
            score++;
            console.log(score  + score);
          }
          count ++;
        };
      }
      return score;
    } 