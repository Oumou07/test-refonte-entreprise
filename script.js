document.addEventListener('DOMContentLoaded', () => {
    const viewTriggers = document.querySelectorAll('[data-view]');
    const scrollTriggers = document.querySelectorAll('[data-scroll]');
    const pageViews = document.querySelectorAll('.page-view');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');

    const btnToggleForm = document.getElementById('btn-toggle-form');
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    // Textes du bandeau supérieur adaptés à chaque page
    const heroContent = {
        home: {
            title: "Entreprises : Agir avec la FNATH",
            desc: "Aujourd'hui, le soutien des entreprises est essentiel pour développer nos actions de sensibilisation, d'accompagnement humain et de prévention des risques professionnels."
        },
        rse: {
            title: "Démarche RSE des entreprises",
            desc: "Faites de l'inclusion des personnes en situation de handicap et du maintien dans l'emploi un levier fort de votre responsabilité sociétale."
        },
        securite: {
            title: "Sécurité au travail & Prévention",
            desc: "Mobilisez vos équipes autour de la prévention des risques professionnels grâce aux témoignages et à l'expertise terrain de la FNATH."
        },
        mecenat: {
            title: "Mécénat : Soutenez la FNATH",
            desc: "Engagez votre entreprise aux côtés d'une association reconnue d'utilité publique et agissez concrètement pour les accidentés de la vie."
        }
    };

    // Fonction pour afficher une page dédiée (home, rse, securite, mecenat)
    function switchView(viewName, scrollTargetId = null) {
        pageViews.forEach(view => {
            if (view.id === `view-${viewName}`) {
                view.removeAttribute('hidden');
            } else {
                view.setAttribute('hidden', '');
            }
        });

        // Mise à jour du Hero
        if (heroContent[viewName]) {
            heroTitle.textContent = heroContent[viewName].title;
            heroDesc.textContent = heroContent[viewName].desc;
        }

        // Mise à jour de l'état actif dans le menu latéral gauche
        sidebarLinks.forEach(link => {
            const linkView = link.getAttribute('data-view');
            const linkScroll = link.getAttribute('data-scroll');
            if (scrollTargetId) {
                link.classList.toggle('active', linkScroll === scrollTargetId);
            } else {
                link.classList.toggle('active', linkView === viewName && !linkScroll);
            }
        });

        // Défilement vers le haut du contenu ou vers l'ancre demandée (Partenaires / Contact)
        if (scrollTargetId) {
            const targetEl = document.getElementById(scrollTargetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            document.querySelector('.container-layout').scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Écouteurs sur les liens de changement de page
    viewTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = trigger.getAttribute('data-view');
            const scrollTarget = trigger.getAttribute('data-scroll') || null;
            switchView(targetView, scrollTarget);
        });
    });

    // Écouteur spécifique pour "Contactez-nous" (reste sur la vue courante et descend vers le bloc contact)
    scrollTriggers.forEach(trigger => {
        if (!trigger.hasAttribute('data-view')) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const scrollTarget = trigger.getAttribute('data-scroll');
                sidebarLinks.forEach(l => l.classList.remove('active'));
                trigger.classList.add('active');
                const targetEl = document.getElementById(scrollTarget);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });

    // Formulaire "Nous écrire"
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
        
   
