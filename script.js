const startBtn = document.getElementById("grid-start");
const restartBtn = document.getElementById("grid-restart");
const quitBtn = document.getElementById("grid-quit");
const gridArea = document.getElementById("grid-area");
const timerDisplay = document.getElementById("grid-timer");
const resultDisplay = document.getElementById("grid-result");
const introMessage = document.getElementById("grid-intro");
const buttonsRow = document.getElementById("grid-buttons");

let nextNumber = 1;
let startTime;
let timerInterval;

function startGame() {
  nextNumber = 1;
  resultDisplay.textContent = "";
  buttonsRow.style.display = "none";
  gridArea.style.display = "grid";
  timerDisplay.style.display = "block";
  startBtn.style.display = "none";
  introMessage.style.display = "none";

  timerDisplay.textContent = "Time: 0.00s";
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 10);

  const numbers = Array.from({ length: 16 }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5);

  gridArea.innerHTML = "";

  numbers.forEach(num => {
    const cell = document.createElement("div");
    cell.textContent = num;
    cell.style.padding = "1rem";
    cell.style.background = "#f3f4f6";
    cell.style.borderRadius = "10px";
    cell.style.fontSize = "1.2rem";
    cell.style.fontWeight = "600";
    cell.style.cursor = "pointer";
    cell.style.userSelect = "none";
    cell.style.transition = "background 0.2s, transform 0.2s";

    cell.addEventListener("click", () => handleClick(num, cell));

    gridArea.appendChild(cell);
  });
}

function handleClick(num, cell) {
  if (num === nextNumber) {
    cell.style.background = "#d1fae5";
    cell.style.color = "#065f46";
    cell.style.pointerEvents = "none";
    nextNumber++;

    if (nextNumber > 16) endGame();
  } else {
    cell.classList.add("shake");
    cell.style.background = "#fee2e2";
    cell.style.color = "#991b1b";

    setTimeout(() => {
      cell.classList.remove("shake");
      cell.style.background = "#f3f4f6";
      cell.style.color = "black";
    }, 300);
  }
}

function updateTimer() {
  const elapsed = (Date.now() - startTime) / 1000;
  timerDisplay.textContent = "Time: " + elapsed.toFixed(2) + "s";
}

function endGame() {
  clearInterval(timerInterval);

  const finalTime = timerDisplay.textContent.replace("Time: ", "");

  resultDisplay.textContent =
    "Nice work! You completed the challenge in " + finalTime + ". Want to try beating your score?";

  buttonsRow.style.display = "flex";
}

quitBtn.addEventListener("click", () => {
  gridArea.style.display = "none";
 
