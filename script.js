document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const btnToggleForm = document.getElementById('btn-toggle-form');
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    // Mise à jour de l'état actif dans le menu latéral gauche et défilement fluide
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Ouverture / fermeture du formulaire au clic sur "Nous écrire"
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
