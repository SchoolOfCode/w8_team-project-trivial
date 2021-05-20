/*  TRIVIA API */
// const requestUrlTriviaApi = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;
// async function fetchQuestion() {
//   let response = await fetch(
//     "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
//   );
//   let data = await response.json();
//   console.log(data);
// }
// fetchQuestion();

/* POTENTIAL PAIN POINTS
    GETTING THE ANSWERS RANDOMISED
    ACCESSING INCORRECT ANSWERS
    
 */

/* MEME API */

const API_KEY = "4Y7M7LY0VDS6";
let body = document.querySelector("body");
let searchTerm = "excited";
const requestUrlGifApi = `https://g.tenor.com/v1/search?q=${searchTerm}&key=${API_KEY}&limit=1`;
// const requestUrlGifApi = `https://g.tenor.com/v1/search?q=excited&key=$4Y7M7LY0VDS6&limit=1`;

async function fetchGif() {
  let response = await fetch(
    `https://g.tenor.com/v1/search?q=${searchTerm}&key=${API_KEY}&limit=1`
  );
  let data = await response.json();
  let gifUrl = data.results[0].media[0].mediumgif.url;
  let img = document.createElement("img");
  img.setAttribute("src", gifUrl);
  let gifdiv = document.createElement("div");
  //   gif.innerHTML = data.results[0].media[0].mediumgif.url;
  gifdiv.appendChild(img);
  body.appendChild(gifdiv);

  console.log(data.results[0].media[0].mediumgif.url);
}
fetchGif();
