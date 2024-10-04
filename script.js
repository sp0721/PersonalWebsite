document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('theme-toggle');
    const root = document.documentElement;

    // Dark Mode Toggle
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            root.style.setProperty('--bg-color', '#121212');
            root.style.setProperty('--text-color', '#ffffff');
        } else {
            root.style.setProperty('--bg-color', '#ffffff');
            root.style.setProperty('--text-color', '#000000');
        }
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
