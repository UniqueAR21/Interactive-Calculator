let string = "";
let buttons = document.querySelectorAll(".button");
let history = []; // To store recent calculations

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        document.querySelector("input").value = string;
        history.push(string); // Add the result to the history
        updateHistory();
      } catch {
        document.querySelector("input").value = "Error";
      }
    } else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

function updateHistory() {
  let historyElement = document.querySelector("#history");
  if (!historyElement) {
    historyElement = document.createElement("div");
    historyElement.id = "history";
    document.body.appendChild(historyElement);
  }
  historyElement.innerHTML = "";
  history
    .slice(-5)
    .reverse()
    .forEach((calculation) => {
      let p = document.createElement("p");
      p.innerText = calculation;
      historyElement.appendChild(p);
    });
}
