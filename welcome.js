const btn = document.getElementById("btn");
const content = document.getElementById("content");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

btn.addEventListener("click", () => {
  content.classList.remove("hidden");
  btn.style.display = "none";
  startConfetti();
});

function startConfetti() {
  for (let i = 0; i < 250; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      s: Math.random() * 4 + 2,
      c: `hsl(${Math.random() * 360}, 100%, 60%)`
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.c;
    ctx.fill();
    p.y += p.s;

    if (p.y > canvas.height) {
      p.y = -10;
    }
  });

  requestAnimationFrame(animate);
}
function playMusic() {
  const music = document.getElementById("birthdayMusic");
  music.play();
}
