// ===== THEME TOGGLE =====
// Apply theme immediately on <html> to prevent flash of wrong theme.
// document.documentElement is always available even when script is in <head>.
(function () {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();

function initThemeToggle() {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        btn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }

    // Set correct icon on load
    const current = localStorage.getItem('theme') || 'dark';
    btn.textContent = current === 'dark' ? '☀️ Light' : '🌙 Dark';

    btn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
    });
}

// ===== HAMBURGER MENU =====
function initHamburger() {
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks  = document.getElementById('nav-links');
    const overlay   = document.getElementById('nav-overlay');

    if (!hamburger || !navLinks) return;

    function openMenu() {
        hamburger.classList.add('open');
        navLinks.classList.add('open');
        if (overlay) overlay.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.contains('open') ? closeMenu() : openMenu();
    });

    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close on nav link click (navigating to new page)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initHamburger();
});
