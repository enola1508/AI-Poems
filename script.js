function Joke(response) {
  console.log(response.data.answer);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "55d0773214c902t3o6b7fbba33343ac2";
  let context =
    "Your are a poet AI Assistant that tells short and sweet poem. The poem must be provided in HTML format. Example: <p>this is a joke</p>";
  let prompt = "Generate a short, sweet and unique poem for indian people in their native language hindi. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");

  jokeElement.innerHTML = "Generating a poem for you..... please wait";

  console.log("called api");
  axios.get(apiUrl).then(Joke);
}

let generatorButton = document.querySelector("button");
generatorButton.addEventListener("click", generateJoke);
