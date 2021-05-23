// # Screen 5

// Feature 1: Score Display
// - Calls the stored variable and displays it in the middle upper screen

// Feature 2: Name and Character
// - Calls the stored chracter and Name variables and displays it next to score displau
// - resent function when the user plays a new game

// Feature 3: GIF Display
// - if the user score is above 8-10, cue excited mood variable, if between 5-8 cue good job variable, if 3-5 lame job variable, 3-0 RUBBISH variable,
// - fetch and disaply GIF according to variable

// Feature 4: Play Again
// - create button that links to screen 3
// - reset all selections

// Feature 5: Shareable Buttons * fancy future feature

let score = 4;
const API_KEY = "4Y7M7LY0VDS6";
let playAgainButton = document.querySelector(".play-again");
let searchTerm = "trivia";

//A simple function that translates score into a search term for API to use
function readScore(score) {
  if (score == 0) {
    searchTerm = "bad";
  } else if (score > 0 && score <= 3) {
    searchTerm = "try_again";
  } else if (score > 3 && score <= 6) {
    searchTerm = "not_bad";
  } else if (score > 6 && score <= 9) {
    searchTerm = "excited";
  } else if (score == 10) {
    searchTerm = "unstopable";
  }
}
readScore(score);

const requestUrlGifApi = `https://g.tenor.com/v1/search?q=${searchTerm}&key=${API_KEY}&limit=1`;

async function fetchGif() {
  let response = await fetch(
    `https://g.tenor.com/v1/search?q=${searchTerm}&key=${API_KEY}&limit=1`
  );
  let data = await response.json();
  let gifUrl = data.results[0].media[0].mediumgif.url;
  let img = document.createElement("img");
  img.setAttribute("src", gifUrl);
  let gifdiv = document.createElement("div");
  gifdiv.appendChild(img);
  playAgainButton.parentNode.insertBefore(gifdiv, playAgainButton);

  console.log(data.results[0].media[0].mediumgif.url);
}
fetchGif();
//notes about gif API:
//-sometimes returns different gifs, but still related to search term.
//-gifs can have different sizes
//
//should we have a styled div for the gif already in html?
//sould we set its height or width?
