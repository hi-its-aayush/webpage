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

// Listen for the start button click
startBtn.addEventListener("click", startGame);
// Listen for restart
restartBtn.addEventListener("click", startGame);

function startGame() {
  nextNumber = 1;
  resultDisplay.textContent = "";
  
  // Hide setup elements
  buttonsRow.style.display = "none";
  startBtn.style.display = "none";
  introMessage.style.display = "none";
  
  // Show game elements
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
    
    // --- STYLING (Updated for Dark Mode) ---
    cell.style.padding = "1rem";
    cell.style.background = "#262626"; // Dark Grey
    cell.style.color = "#ffffff";      // White Text
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

function handleClick(num, cell) {
  if (num === nextNumber) {
    // Correct tap
    cell.style.background = "#059669"; // Green
    cell.style.color = "#ffffff";
    cell.style.pointerEvents = "none";
    nextNumber++;

    if (nextNumber > 16) endGame();
  } else {
    // Wrong tap
    cell.classList.add("shake");
    cell.style.background = "#dc2626"; // Red
    cell.style.color = "#ffffff";

    setTimeout(() => {
      cell.classList.remove("shake");
      cell.style.background = "#262626"; // Reset to Dark Grey
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
    "Nice work! You completed the challenge in " + finalTime + ".";
    
  resultDisplay.style.color = "#ededed"; // Ensure text is visible
  resultDisplay.style.marginBottom = "1rem";
  
  buttonsRow.style.display = "flex";
  // Keep the grid visible so they can see their work
}

// Quit Button Logic
quitBtn.addEventListener("click", () => {
  // Hide game area
  gridArea.style.display = "none";
  timerDisplay.style.display = "none";
  buttonsRow.style.display = "none";
  resultDisplay.textContent = "";
  
  // Show start screen again
  startBtn.style.display = "inline-block";
  introMessage.style.display = "block";
});
// --- CONTACT REVEAL LOGIC ---
function revealContactInfo() {
    // 1. Hide the Captcha
    document.getElementById('captcha-container').style.display = 'none';

    // 2. Define the details (Broken up to hide from basic scrapers)
    const emailUser = "aayushh";
    const emailDom = "outlook.com.au";
    const fullEmail = emailUser + "@" + emailDom;
    const phone = "0448 113 330";

    // 3. Inject the HTML (Exactly matching your old design)
    const contactDiv = document.getElementById('contact-info');
    contactDiv.innerHTML = `
        <p style="margin-bottom: 0.5rem;">
            Email: <a href="mailto:${fullEmail}"><strong>${fullEmail}</strong></a>
        </p>
        <p style="margin-bottom: 0.5rem;">
            Phone: <strong>${phone}</strong>
        </p>
        <p style="margin-bottom: 1.5rem;">
            LinkedIn: <a href="https://linkedin.com/in/aayushacharya" target="_blank">linkedin.com/in/aayushacharya</a>
        </p>
        <a href="cv.pdf" target="_blank" class="btn-cv">View CV</a>
    `;

    // 4. Show the section
    contactDiv.style.display = 'block';
}
