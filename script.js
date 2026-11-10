document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la page de se recharger bêtement
    
    // Affiche un message de succès dynamique
    const msg = document.getElementById('formMessage');
    msg.textContent = "Merci ! Votre demande a bien été envoyée à l'équipe Partenaires de la FNATH.";
    
    // Vide le formulaire
    this.reset();
});
