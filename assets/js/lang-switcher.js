document.addEventListener('DOMContentLoaded', function() {
    function switchToLang(lang) {
        console.log('Switch to language:', lang);

        var currentPath = window.location.pathname;
        var newPath;

        // Handle switching to Chinese
        if (lang === 'zh' && !currentPath.startsWith('/zh/')) {
            // If at root '/', go to '/zh/', otherwise prepend '/zh'
            newPath = (currentPath === '/' || currentPath === '') ? '/zh/' : '/zh' + currentPath;
            window.location.href = newPath;
        }
        // Handle switching to English
        else if (lang === 'en' && currentPath.startsWith('/zh/')) {
            // Remove the '/zh/' prefix
            newPath = currentPath.replace('/zh/', '/');
            // Ensure the root path is handled correctly
            if (newPath === '') {
                newPath = '/';
            }
            window.location.href = newPath;
        }

        // Store preference regardless of redirection
        localStorage.setItem('preferredLanguage', lang);
    }

    // Attach event listeners to language links
    const langLinks = document.querySelectorAll('.lang-switcher a[data-lang]');
    langLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const lang = this.getAttribute('data-lang');
            switchToLang(lang);
        });
    });
}); 