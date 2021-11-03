async function fetchQuestion() {
  return fetch(
    `https://opentdb.com/api.php?amount=10&category=${selection}&difficulty=${difficulty.toLowerCase()}&type=multiple`
  ).then(function (response) {
    return response.json();
  });
}

const questionDisplay = document.querySelector(".question-h2");
const displayCorrectAnswer = document.querySelector("#correct-answer");
const displayIncorrectAnswers = document.querySelectorAll(".incorrect-answer");
const progressBar = document.querySelector(".progress-bar");
const gifdiv = document.querySelector(".gif");
const showGameProgress = document.querySelector(".show-game-progress");
let correctAnswerSpan = document.querySelector(".correct-answer-display");
let playAgainButton = document.querySelector(".play-again");
let allAnswers = document.querySelectorAll(".answer");
let count = 0;
let score = 0;
let questions = [];

let letsGo = document.querySelector(".letsgo-button");
letsGo.addEventListener("click", setupGame);

async function setupGame() {
  count = 0;
  score = 0;
  questions = [];
  questions = await fetchQuestion();
  console.log(questions);
  console.log(questions.results);
  questions = questions.results;

  screen3.classList.add("hide");
  screen4.classList.remove("hide");
  startGame();
}

function startGame() {
  if (count < 10) {
    console.log(count);
    let question = questions[count];
    let currentQuestion = question.question;
    questionDisplay.textContent = currentQuestion;
    let correctAnswer = questions[count].correct_answer;
    displayCorrectAnswer.innerHTML = correctAnswer;

    let incorrectAnswersArray = question.incorrect_answers;
    for (let i = 0; i < incorrectAnswersArray.length; i++) {
      displayIncorrectAnswers[i].innerHTML = incorrectAnswersArray[i];
    }
    shuffle();
    showGameProgress.style.width = `${((count + 1) / 10) * 100}%`;
    showGameProgress.innerText = `${count + 1}/${10}`;
    increaseScoreOnClick();
  } else {
    screen4.classList.add("hide");
    screen5.classList.remove("hide");
    readScore(score);
    fetchGif();
  }
}

function increaseScoreOnClick() {
  console.log("HERE");
  for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].onclick = () => {
      if (allAnswers[i].id === "correct-answer") {
        console.log("correct");
        score++;
        console.log(`score ` + score);
      }
      count++;
      startGame();
    };
  }
  return score;
}
let searchTerm = "";
function readScore(score) {
  if (score == 0) {
    searchTerm = "bad";
  } else if (score >= 1 && score <= 3) {
    searchTerm = "try_again";
  } else if (score > 3 && score <= 6) {
    searchTerm = "not_bad";
  } else if (score > 6 && score <= 9) {
    searchTerm = "excited";
  } else if (score == 10) {
    searchTerm = "unstopable";
  }
  correctAnswerSpan.innerHTML = score;
}

async function fetchGif() {
  const API_KEY = "4Y7M7LY0VDS6";
  let response = await fetch(
    `https://g.tenor.com/v1/search?q=${searchTerm}&key=${API_KEY}&limit=1`
  );
  let data = await response.json();
  let gifUrl = data.results[0].media[0].mediumgif.url;
  gifdiv.innerHTML = "";
  let img = document.createElement("img");
  img.setAttribute("src", gifUrl);
  gifdiv.appendChild(img);
  playAgainButton.parentNode.insertBefore(gifdiv, playAgainButton);
  console.log(data.results[0].media[0].mediumgif.url);
}

playAgainButton.addEventListener("click", goToScreen1);
function goToScreen1() {
  screen5.classList.add("hide");
  screen3.classList.remove("hide");
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
