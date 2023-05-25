const searchBtn = document.getElementById("search-btn");
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const results = document.querySelector(".results");
const audio = document.querySelector("audio");

searchBtn.addEventListener("click", () => {
  let inpWord = document.getElementById("inpWord").value;
  fetch(`${url}${inpWord}`)
    .then((res) => {
      res.json().then((data) => {
        console.log(data);
        results.innerHTML = `<div class="result-word">
    <h3 id="result-word">${inpWord}</h3>
    <button id="sound" onclick="playSound()">
     <i class="fa fa-volume-up"></i>
    </button>
   </div>
   <p id="phonetic">${data[0].meanings[0].partOfSpeech} ${
          data[0].phonetic || ""
        }</p>
   <p id="meaning">${data[0].meanings[0].definitions[0].definition}</p>
  </div>`;
        audio.setAttribute("src", `${data[0].phonetics[0].audio}`);
        console.log(audio);
      });
    })
    .catch((results.innerHTML = "Couldn't Find word"));
});

function playSound() {
  audio.play();
}
