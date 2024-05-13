// Votre tableau de données
const tableauxData = [
    {
        titre: 'Avril 2024',
        imageUrl: '../ressources/images/fond1.jpeg',
        lienVoir: './exemple.html',
        lienSupprimer: '#'
    },
    {
        titre: 'Mai 2024',
        imageUrl: '../ressources/images/fond2.jpeg',
        lienVoir: './exemple.html',
        lienSupprimer: '#'
    },
    {
        titre: 'Avril 2024',
        imageUrl: '../ressources/images/fond1.jpeg',
        lienVoir: './exemple.html',
        lienSupprimer: '#'
    },
    {
        titre: 'Mai 2024',
        imageUrl: '../ressources/images/fond2.jpeg',
        lienVoir: './exemple.html',
        lienSupprimer: '#'
    },
    {
        titre: 'Avril 2024',
        imageUrl: '../ressources/images/fond1.jpeg',
        lienVoir: './exemple.html',
        lienSupprimer: '#'
    },
    {
        titre: 'Mai 2024',
        imageUrl: '../ressources/images/fond2.jpeg',
        lienVoir: './exemple.html',
        lienSupprimer: '#'
    }
    // Ajoutez d'autres tableaux ici...
];
function createTableauElement(tableauData) {
    // Crée un élément div pour le tableau
    const tableauDiv = document.createElement('div');
    tableauDiv.className = 'col-md-4';

    // Crée le contenu de l'élément tableau
    const tableauContent = `
        <div class="tableau">
            <img class="img-fluid" src="${tableauData.imageUrl}" alt="${tableauData.titre}">
            <div class="overlay">
                <div class="text">
                    <h5>${tableauData.titre}</h5>
                    <button class="bouton">
                        <a href="${tableauData.lienVoir}" class="white_button">Voir</a>
                    </button>
                    <button class="bouton supprime-bouton">
                        <a href="#" class="white_button">Supprimer</a>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    tableauDiv.innerHTML = tableauContent;
    
    // Ajoute un écouteur d'événement au bouton de suppression
    const supprimeBouton = tableauDiv.querySelector('.supprime-bouton');
    supprimeBouton.addEventListener('click', function(event) {
        // Empêche le comportement par défaut du lien
        event.preventDefault();
        // Supprime le tableau de la page
        tableauDiv.remove();
    });

    return tableauDiv;
}


// Fonction pour afficher tous les tableaux
function displayTableaux() {
    const container = document.querySelector('.tableaux .container .row');
    tableauxData.forEach(tableauData => {
        const tableauElement = createTableauElement(tableauData);
        container.appendChild(tableauElement);
    });
}

// Exécute la fonction displayTableaux lorsque le document est prêt
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script chargé');
console.log('Appel de displayTableaux()');
displayTableaux();
});
