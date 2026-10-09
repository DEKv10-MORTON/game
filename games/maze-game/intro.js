// Function to initialize the Intro Screen
function initGameIntro() {
    const introHtml = `
        <div id="game-intro" class="game-intro">
            <div class="brand-logo-container">
                <span class="brand-text">MOR-TON STUDI</span>
                <span class="the-hero-o">O</span>
            </div>
        </div>
    `;
    
    // Inject into body
    document.body.insertAdjacentHTML('afterbegin', introHtml);
    
    // Fade out after 4 seconds
    setTimeout(() => {
        const introScreen = document.getElementById('game-intro');
        if (introScreen) {
            introScreen.classList.add('fade-out');
            // Remove from DOM after fade animation finishes
            setTimeout(() => {
                introScreen.remove();
            }, 800);
        }
    }, 4000);
}

// Run on page load
window.addEventListener('DOMContentLoaded', initGameIntro);