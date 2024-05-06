document.getElementById('addButton').addEventListener('click', function() {
    // Créez un nouveau champ d'entrée
    const newInput = document.createElement('input');
    newInput.type = 'text';
    // Définissez un nom pour le nouveau champ (vous pouvez utiliser un compteur pour les distinguer)
    newInput.name = `input${document.querySelectorAll('email').length + 1}`;
    newInput.placeholder = `Champ ${document.querySelectorAll('email').length + 1}`;
    
    // Ajoutez le nouveau champ au conteneur
    document.getElementById('email').appendChild(newInput);
});
