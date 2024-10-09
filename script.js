window.addEventListener('load', function () {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // When the splash screen is clicked, hide it and show the main content
    splashScreen.addEventListener('click', function () {
        splashScreen.style.display = 'none';  // Hide the splash screen
        mainContent.classList.remove('hidden');  // Show the main content
    });
});