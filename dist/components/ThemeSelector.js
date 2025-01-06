"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeSelector = void 0;
var ThemeSelector = /** @class */ (function () {
    function ThemeSelector() {
    }
    ThemeSelector.init = function () {
        var themeToggle = document.getElementById('theme-toggle');
        var body = document.body;
        // Check if the saved theme exists in localStorage
        var savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.classList.add(savedTheme);
        }
        else {
            body.classList.add('light-theme'); // Default theme
        }
        themeToggle.addEventListener('click', function () {
            if (body.classList.contains('light-theme')) {
                body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark-theme');
            }
            else {
                body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light-theme');
            }
        });
    };
    return ThemeSelector;
}());
exports.ThemeSelector = ThemeSelector;
