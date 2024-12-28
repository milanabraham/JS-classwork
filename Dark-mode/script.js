
const toggle = document.getElementById('theme-toggle');

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
    }
});


