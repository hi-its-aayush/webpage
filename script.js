// Get the elements
const startBtn = document.getElementById("grid-start");
const restartBtn = document.getElementById("grid-restart");
const quitBtn = document.getElementById("grid-quit");
const abortBtn = document.getElementById("grid-abort"); // NEW
const gridArea = document.getElementById("grid-area");
const timerDisplay = document.getElementById("grid-timer");
const resultDisplay = document.getElementById("grid-result");
const introMessage = document.getElementById("grid-intro");
const buttonsRow = document.getElementById("grid-buttons");

let nextNumber = 1;
let startTime;
let timerInterval;

// Listeners
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

// START GAME
function startGame() {
  nextNumber = 1;
  resultDisplay.textContent = "";
  
  // Hide Start stuff
  buttonsRow.style.display = "none";     // Hide Play Again/Quit
  startBtn.style.display = "none";       // Hide "Let's Play"
  introMessage.style.display = "none";
  
  // Show Game stuff
  abortBtn.style.display = "inline-block"; // SHOW "Give Up"
  gridArea.style.display = "grid";
  timerDisplay.style.display = "block";

  timerDisplay.textContent = "Time: 0.00s";
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 10);

  // Generate numbers 1-16
  const numbers = Array.from({ length: 16 }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5);

  gridArea.innerHTML = "";

  numbers.forEach(num => {
    const cell = document.createElement("div");
    cell.textContent = num;
    
    // --- STYLING ---
    cell.style.padding = "1rem";
    cell.style.background = "#262626"; 
    cell.style.color = "#ffffff";      
    cell.style.borderRadius = "8px";
    cell.style.fontSize = "1.2rem";
    cell.style.fontWeight = "600";
    cell.style.cursor = "pointer";
    cell.style.userSelect = "none";
    cell.style.textAlign = "center";
    cell.style.transition = "background 0.2s, transform 0.1s";

    cell.addEventListener("click", () => handleClick(num, cell));

    gridArea.appendChild(cell);
  });
}

// HANDLE TAPS
function handleClick(num, cell) {
  if (num === nextNumber) {
    // Correct
    cell.style.background = "#059669"; 
    cell.style.color = "#ffffff";
    cell.style.pointerEvents = "none";
    nextNumber++;

    if (nextNumber > 16) endGame();
  } else {
    // Wrong
    cell.classList.add("shake");
    cell.style.background = "#dc2626"; 
    cell.style.color = "#ffffff";

    setTimeout(() => {
      cell.classList.remove("shake");
      cell.style.background = "#262626"; 
    }, 300);
  }
}

function updateTimer() {
  const elapsed = (Date.now() - startTime) / 1000;
  timerDisplay.textContent = "Time: " + elapsed.toFixed(2) + "s";
}

// END GAME (WIN)
function endGame() {
  clearInterval(timerInterval);
  const finalTime = timerDisplay.textContent.replace("Time: ", "");
  
  resultDisplay.textContent = "Nice work! You completed the challenge in " + finalTime + ".";
  resultDisplay.style.color = "#ededed"; 
  resultDisplay.style.marginBottom = "1rem";
  
  abortBtn.style.display = "none";     // Hide "Give Up"
  buttonsRow.style.display = "flex";   // Show Play Again / Quit
}

// ABORT (GIVE UP) LOGIC
abortBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    gridArea.innerHTML = ""; // Clear numbers
    
    resultDisplay.innerText = "Game Aborted";
    resultDisplay.style.color = "#ef4444";
    resultDisplay.style.marginBottom = "1rem";
    
    abortBtn.style.display = "none";     // Hide "Give Up"
    buttonsRow.style.display = "flex";   // Show Play Again / Quit
});

// QUIT BUTTON LOGIC
quitBtn.addEventListener("click", () => {
  // Hide game area
  gridArea.style.display = "none";
  timerDisplay.style.display = "none";
  buttonsRow.style.display = "none";
  abortBtn.style.display = "none"; // Ensure this is hidden
  
  resultDisplay.textContent = "";
  
  // Show start screen again
  startBtn.style.display = "inline-block";
  introMessage.style.display = "block";
});

// --- AUTO-INJECT CONTACT INFO (Stops basic bots) ---
document.addEventListener("DOMContentLoaded", function() {
    const part1 = "aayushh";
    const part2 = "outlook.com.au";
    const email = part1 + "@" + part2;
    const phone = "0448 113 330";

    const content = `
        <p style="margin-bottom: 0.5rem;">
            Email: <a href="mailto:${email}"><strong>${email}</strong></a>
        </p>
        <p style="margin-bottom: 0.5rem;">
            Phone: <strong>${phone}</strong>
        </p>
        <p style="margin-bottom: 1.5rem;">
            LinkedIn: <a href="https://linkedin.com/in/aayushacharya" target="_blank">linkedin.com/in/aayushacharya</a>
        </p>
        <a href="cv.pdf" target="_blank" class="btn-cv">View CV</a>
    `;

    const container = document.getElementById('contact-container');
    if (container) {
        container.innerHTML = content;
    }
});
