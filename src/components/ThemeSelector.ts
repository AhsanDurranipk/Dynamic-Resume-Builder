export class ThemeSelector {
    static init() {
        const themeToggle = document.getElementById('theme-toggle') as HTMLButtonElement;
        const body = document.body;

        // Check if the saved theme exists in localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme);
        } else {
            body.classList.add('light-theme');  // Default theme
        }

        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('light-theme')) {
                body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark-theme');
            } else {
                body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light-theme');
            }
        });
    }
}
