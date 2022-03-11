window.onload = function () {
  const randomQuote = document.getElementById("randomQuote");
  const button = document.getElementById("buttonQuote");
  const adviceNumber = document.getElementById("adviceNumber");
  async function startFetchingQuote() {
    await fetch("https://api.adviceslip.com/advice")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        randomQuote.innerHTML = `"${data.slip.advice}"`;
        adviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
      });
  }
  button.onclick = startFetchingQuote;
};
