 document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('.sendButton');

    sendButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#007bff';
        this.style.color = '#fff';
    });

    sendButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});
