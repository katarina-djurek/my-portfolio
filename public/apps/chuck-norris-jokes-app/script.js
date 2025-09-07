const jokeContainerEl = document.querySelector(".joke-container");

async function fetchJoke() {
  const chuckNorrisApiUrl = "https://api.chucknorris.io/jokes/random";
  const response = await fetch(chuckNorrisApiUrl);
  const data = await response.json();
  const randomJoke = data.value;

  return randomJoke;
}

async function showJoke() {
  const joke = await fetchJoke();
  jokeContainerEl.textContent = joke;
}

showJoke();

const newJokeButtonEl = document.querySelector(".new-joke-button");
newJokeButtonEl.addEventListener("click", showJoke);
