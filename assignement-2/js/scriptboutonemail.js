document.getElementById('addEmailFieldButton').addEventListener('click', function() {
    // Récupère le conteneur où les champs d'email doivent être ajoutés
    var emailContainer = document.getElementById('emailContainer');
    
    // Crée un nouveau div pour contenir un champ d'email
    var newEmailDiv = document.createElement('div');
    newEmailDiv.className = 'groupe';
    
    // Crée un nouvel input pour l'email
    var newEmailInput = document.createElement('input');
    newEmailInput.type = 'text';
    newEmailInput.className = 'mettre';
    newEmailInput.name = `email${emailContainer.children.length + 1}`;
    newEmailInput.placeholder = 'adresse@mail.fr';
    newEmailInput.required = true;
    
    // Crée un label pour le nouvel input
    var newEmailLabel = document.createElement('label');
    newEmailLabel.innerHTML = 'Email du nouveau membre : ';
    newEmailLabel.htmlFor = newEmailInput.name;
    
    // Ajoute le label et l'input au div
    newEmailDiv.appendChild(newEmailLabel);
    newEmailDiv.appendChild(newEmailInput);
    
    // Ajoute le div au conteneur
    emailContainer.appendChild(newEmailDiv);
});
