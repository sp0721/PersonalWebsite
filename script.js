
document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.querySelector('.sendButton');

    sendButton.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#007bff';
        this.style.color = '#fff';
    });

    sendButton.addEventListener('mouseleave', function () {
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});
const fireworksContainer = document.createElement('div');
fireworksContainer.classList.add('fireworks-container');
document.body.appendChild(fireworksContainer);

function createFirework() {
  const firework = document.createElement('div');
  firework.classList.add('firework');
  fireworksContainer.appendChild(firework);

  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFA500', '#800080', '#FFFF00', '#00FFFF', '#FFC0CB', '#008000', '#800000']; // Add more colors if needed
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  firework.style.backgroundColor = randomColor;

  const size = Math.random() * 50 + 10;
  firework.style.width = `${size}px`;
  firework.style.height = `${size}px`;

  const xPos = Math.random() * window.innerWidth;
  const yPos = Math.random() * window.innerHeight;
  firework.style.left = `${xPos}px`;
  firework.style.top = `${yPos}px`;

  const animationDuration = Math.random() * 1.5 + 1;
  firework.style.animation = `explode ${animationDuration}s linear forwards`;

  firework.addEventListener('animationend', () => {
    firework.remove();
  });
}

setInterval(createFirework, 250); // Adjust the interval for more or fewer fireworks

window.addEventListener('resize', () => {
  fireworksContainer.style.width = `${window.innerWidth}px`;
  fireworksContainer.style.height = `${window.innerHeight}px`;
});

 // Theme switcher functionality
    const themeSwitcher = document.createElement('button');
    themeSwitcher.id = 'theme-switcher';
    themeSwitcher.innerText = 'Toggle Theme';
    document.body.insertBefore(themeSwitcher, document.body.firstChild);

    themeSwitcher.addEventListener('click', function () {
        document.body.classList.toggle('dark-theme');

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
