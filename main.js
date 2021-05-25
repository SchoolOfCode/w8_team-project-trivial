// # Screen 5

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
// add above
