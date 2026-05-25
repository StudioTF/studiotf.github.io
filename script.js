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

    // --- KONTAKTFORMULAR ---
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (name === '' || phone === '') {
            feedback.textContent = 'Bitte füllen Sie alle Pflichtfelder aus.';
            feedback.className = 'form-feedback error';
            return;
        }

        feedback.textContent = 'Ihre Nachricht wird gesendet...';
        feedback.className = 'form-feedback';

        setTimeout(() => {
            feedback.textContent = 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden.';
            feedback.className = 'form-feedback success';
            form.reset();
        }, 1200);
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
