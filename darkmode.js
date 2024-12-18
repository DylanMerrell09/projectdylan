const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check for the user's theme preference stored in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = "☀️"; // Switch to light mode icon
} else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.textContent = "🌙"; // Dark mode icon
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = "☀️"; // Switch to light mode icon
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = "🌙"; // Switch to dark mode icon
    }
});