document.addEventListener('DOMContentLoaded', () => {

    // --- MOBILE NAV TOGGLE ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
    });

    // Schließt Nav bei Klick auf einen Link (Mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
        });
    });

    // --- SCROLL REVEAL (leichte Fade-in Animation) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .work-item, .pricing-card, .about-image-wrap, .about-text').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
