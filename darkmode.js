const darkModeToggle = document.getElementById('dark-mode-toggle');


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = "☀️"; 
} else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.textContent = "🌙"; 
}


darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');


    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = "☀️"; 
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = "🌙"; 
    }
});