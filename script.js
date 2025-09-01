
document.addEventListener('DOMContentLoaded', () => {

    // Gate Page Logic
    const passwordPrompt = document.getElementById('password-prompt');
    const passwordInput = document.getElementById('password-input');

    if (passwordPrompt) {
        passwordPrompt.addEventListener('click', () => {
            passwordInput.classList.remove('hidden');
            passwordInput.focus();
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                if (passwordInput.value === 'pourmeup') {
                    window.location.href = 'main.html';
                } else {
                    alert('Incorrect password');
                    passwordInput.value = '';
                }
            }
        });
    }

    // Main Page Logic
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const tab = button.dataset.tab;
            tabContents.forEach(content => {
                if (content.id === tab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Archive Page Logic
    const archiveImages = [
        'DSC00003.JPG',
        'DSC00007.JPG',
        'DSC00141.JPG',
        'DSC00149.JPG'
    ];

    const mediaGrid = document.querySelector('.media-grid');

    if (mediaGrid) {
        archiveImages.forEach(imageName => {
            const img = document.createElement('img');
            img.src = `assets/archive_assets/${imageName}`;
            img.alt = imageName;
            mediaGrid.appendChild(img);
        });
    }
});
