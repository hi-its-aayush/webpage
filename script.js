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
    `;

    const container = document.getElementById('contact-container');
    if (container) {
        container.innerHTML = content;
    }
});
// --- TECH MEMORY GAME LOGIC ---

const memoryBoard = document.getElementById('memory-board');
const memMovesDisplay = document.getElementById('mem-moves');
const memScoreDisplay = document.getElementById('mem-score');
const memRestartBtn = document.getElementById('mem-restart');

// The Icons (FontAwesome classes)
const icons = [
    'fa-wifi', 'fa-database', 'fa-server', 'fa-bug', 
    'fa-microchip', 'fa-terminal', 'fa-lock', 'fa-cloud'
];

let cards = [];
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let matches = 0;

// Initialize Game
function initMemoryGame() {
    memoryBoard.innerHTML = '';
    moves = 0;
    matches = 0;
    memMovesDisplay.innerText = moves;
    memScoreDisplay.innerText = matches;
    
    // Create pairs (8 icons * 2 = 16 cards)
    let deck = [...icons, ...icons];
    // Shuffle
    deck.sort(() => 0.5 - Math.random());

    // Build HTML
    deck.forEach(iconClass => {
        const card = document.createElement('div');
        card.classList.add('mem-card');
        card.dataset.icon = iconClass;

        card.innerHTML = `
            <div class="mem-front"><i class="fas fa-question"></i></div>
            <div class="mem-back"><i class="fas ${iconClass}"></i></div>
        `;
        
        card.addEventListener('click', flipCard);
        memoryBoard.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // First click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    // Second click
    secondCard = this;
    incrementMoves();
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    matches++;
    memScoreDisplay.innerText = matches;
    
    if(matches === 8) {
        setTimeout(() => alert("System Restored! RAM Verified."), 500);
    }

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function incrementMoves() {
    moves++;
    memMovesDisplay.innerText = moves;
}

// Start on load
document.addEventListener('DOMContentLoaded', initMemoryGame);

// Restart Button
if(memRestartBtn) {
    memRestartBtn.addEventListener('click', initMemoryGame);
}
// --- TYPEWRITER EFFECT ---
document.addEventListener("DOMContentLoaded", function() {
    const text = ">_ Hi, I'm Aayush."; 
    const element = document.getElementById("typewriter-text");
    const cursor = document.querySelector(".cursor");
    
    if (!element || !cursor) return;
    
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); 
        } else {
            // Typing finished: Add class to stop blinking
            cursor.classList.add("typing-done");
        }
    }
    
    setTimeout(type, 500);
});
