document.addEventListener('DOMContentLoaded', function() {
    // Référence à l'élément contenant le titre
    const titreText = document.querySelector('.titre-text');
    
    // Référence au champ de texte pour l'édition
    const editTitleInput = document.querySelector('.edit-title-input');
    
    // Fonction pour activer le mode d'édition
    function enableEditMode() {
        // Masquez le titre et affichez le champ de texte
        titreText.style.display = 'none';
        editTitleInput.style.display = 'block';
        
        // Remplissez le champ de texte avec le titre actuel
        editTitleInput.value = titreText.textContent;
        
        // Placez le focus sur le champ de texte pour faciliter l'édition
        editTitleInput.focus();
    }

    // Fonction pour désactiver le mode d'édition
    function disableEditMode() {
        // Sauvegardez le nouveau titre
        titreText.textContent = editTitleInput.value;
        
        // Masquez le champ de texte et affichez le titre
        editTitleInput.style.display = 'none';
        titreText.style.display = 'block';
    }

    // Écoutez l'événement de clic sur le titre pour entrer en mode d'édition
    titreText.addEventListener('click', function() {
        enableEditMode();
    });

    // Événement lorsque l'utilisateur presse Enter ou quitte le champ de texte
    editTitleInput.addEventListener('blur', disableEditMode);
    editTitleInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            disableEditMode();
        }
    });
});
