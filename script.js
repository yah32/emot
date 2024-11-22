const emoji = document.getElementById("emoji");
const playArea = document.getElementById("play-area");
const startBtn = document.getElementById("start-btn");
const scoreDisplay = document.getElementById("score");

let score = 0;
let gameInterval;
let gameRunning = false;

// Fungsi untuk memulai permainan
function startGame() {
  if (gameRunning) return;

  score = 0;
  scoreDisplay.textContent = score;
  gameRunning = true;

  startBtn.textContent = "Game Running...";
  startBtn.disabled = true;

  gameInterval = setInterval(() => {
    moveEmoji();
  }, 400);

  setTimeout(endGame, 30000); // Permainan berakhir setelah 30 detik
}

// Fungsi untuk memindahkan emoji secara acak
function moveEmoji() {
  const playAreaRect = playArea.getBoundingClientRect();
  const emojiSize = 40; // Ukuran emoji (font-size di CSS)

  const x = Math.random() * (playAreaRect.width - emojiSize);
  const y = Math.random() * (playAreaRect.height - emojiSize);

  emoji.style.left = `${x}px`;
  emoji.style.top = `${y}px`;
  emoji.style.display = "block";
}

// Fungsi untuk menangkap emoji
function catchEmoji() {
  score++;
  scoreDisplay.textContent = score;
  emoji.style.display = "none";
}

// Fungsi untuk mengakhiri permainan
function endGame() {
  clearInterval(gameInterval);
  gameRunning = false;

  emoji.style.display = "none";
  startBtn.textContent = "Start Game";
  startBtn.disabled = false;

  alert(`Game Over! Your score is: ${score}`);
}

// Event listeners
emoji.addEventListener("click", catchEmoji);
startBtn.addEventListener("click", startGame);
