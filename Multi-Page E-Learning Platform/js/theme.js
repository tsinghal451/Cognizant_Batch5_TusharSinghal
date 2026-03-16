// ===== THEME TOGGLE =====
(function () {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
})();

function initThemeToggle() {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;

    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }

    // Set correct icon on load
    const current = localStorage.getItem('theme') || 'dark';
    btn.textContent = current === 'dark' ? '☀️ Light' : '🌙 Dark';

    btn.addEventListener('click', () => {
        const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
    });
}

document.addEventListener('DOMContentLoaded', initThemeToggle);
