document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.content-section, .contact-card-fnath');
    const btnToggleForm = document.getElementById('btn-toggle-form');
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    // 1. Mise à jour de l'état actif au clic dans la sidebar
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 2. Scroll-Spy : met à jour automatiquement le menu de gauche selon la section visible
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                sidebarLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // 3. Ouverture / fermeture du formulaire au clic sur "Nous écrire"
    if (btnToggleForm && contactForm) {
        btnToggleForm.addEventListener('click', () => {
            const isHidden = contactForm.hasAttribute('hidden');
            if (isHidden) {
                contactForm.removeAttribute('hidden');
                btnToggleForm.textContent = 'Fermer le formulaire';
            } else {
                contactForm.setAttribute('hidden', '');
                btnToggleForm.textContent = 'Nous écrire';
            }
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formFeedback.textContent = 'Merci ! Votre message a bien été transmis à l’équipe Entreprises de la FNATH.';
            contactForm.reset();
        });
    }
});
          
       
