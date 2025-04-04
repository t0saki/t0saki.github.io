document.addEventListener('DOMContentLoaded', function() {
    function switchToLang(lang) {
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

    // Check for stored language preference or detect browser language
    const storedLang = localStorage.getItem('preferredLanguage');
    if (!storedLang) {
        const browserLang = navigator.language || navigator.userLanguage;
        // Default to English if browser language is not Chinese
        const detectedLang = browserLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
        // Call switchToLang, but only store preference, don't redirect yet
        // Redirection should only happen if user explicitly clicks or if URL needs correction
        const currentPath = window.location.pathname;
        const needsRedirect = (detectedLang === 'zh' && !currentPath.startsWith('/zh/')) ||
                              (detectedLang === 'en' && currentPath.startsWith('/zh/'));

        if (needsRedirect) {
           switchToLang(detectedLang); // This will redirect and store
        } else {
           localStorage.setItem('preferredLanguage', detectedLang); // Just store preference
           // Optionally update the bold style on the links
           document.querySelectorAll('.lang-switcher a[data-lang]').forEach(a => {
              if (a.getAttribute('data-lang') === detectedLang) {
                a.style.fontWeight = 'bold';
              } else {
                a.style.fontWeight = 'normal';
              }
           });
        }
    } else {
        // Optional: Ensure the correct link is bold based on stored preference
        // This might already be handled by Jekyll/Liquid based on page.lang
        document.querySelectorAll('.lang-switcher a[data-lang]').forEach(a => {
           if (a.getAttribute('data-lang') === storedLang) {
             a.style.fontWeight = 'bold';
           } else {
             a.style.fontWeight = 'normal';
           }
        });
    }

    // theme
    let local_theme = localStorage.getItem("theme");

    // If no explicit theme set, check browser preference
    if (!local_theme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            local_theme = "dark";
        } else {
            // Default to light if no preference or if preference is light
            local_theme = "light";
        }
    } else {
    }

    // Apply the theme
    if (local_theme === "dark") {
        $("html").attr("data-theme", "dark");
        $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
    } else if (local_theme === "light") {
        $("html").removeAttr("data-theme");
        $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
    }
}); 