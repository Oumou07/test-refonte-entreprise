document.addEventListener('DOMContentLoaded', () => {
    // Gestion active des liens de la sidebar au clic
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Empêche le rechargement par défaut pour la démo
            e.preventDefault();
            
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    console.log("Espace Entreprise FNATH chargé avec succès !");
});
