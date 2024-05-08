document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.querySelector('.sendButton');

    // Enhanced hover effect using CSS transitions instead of JavaScript style changes
    sendButton.addEventListener('mouseenter', function () {
        this.classList.add('hovered');  // Add a class that defines the hover state
    });

    sendButton.addEventListener('mouseleave', function () {
        this.classList.remove('hovered');  // Remove the class on mouse leave
    });

    // Add a smooth scroll to navigation links
    document.querySelectorAll('.navigation a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    initFireworks();
});

// Encapsulate fireworks functionality for better structure
function initFireworks() {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.classList.add('fireworks-container');
    document.body.appendChild(fireworksContainer);

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        fireworksContainer.appendChild(firework);

        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFA500', '#800080', '#FFFF00', '#00FFFF', '#FFC0CB', '#008000', '#800000'];
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
}

window.addEventListener('resize', () => {
    const fireworksContainer = document.querySelector('.fireworks-container');
    fireworksContainer.style.width = `${window.innerWidth}px`;
    fireworksContainer.style.height = `${window.innerHeight}px`;
});

// Disable the context menu to prevent right-click on the site
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
