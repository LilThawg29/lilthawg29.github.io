// Table of Contents Scroll Sync
document.addEventListener('DOMContentLoaded', () => {
    const tocLinks = document.querySelectorAll('.toc-details a');

    // Improved section identification
    const sections = Array.from(tocLinks).map(link => {
        try {
            const url = new URL(link.href);
            const id = url.hash.substring(1);
            return document.getElementById(id);
        } catch (e) {
            return null;
        }
    }).filter(section => section !== null);

    if (sections.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -70% 0px', // Adjust to catch headers reliably
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tocLinks.forEach(link => link.classList.remove('active'));

                const id = entry.target.getAttribute('id');
                // Use attribute selector to find the exact link matching the hash
                const activeLink = document.querySelector(`.toc-details a[href$="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
