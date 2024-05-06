// Votre tableau de données
const tableauxData = [
    {
        titre: 'Avril 2024',
        imageUrl: './images/fond1.jpeg',
        lienVoir: './exemple.html',
        lienSupprimer: '#'
    },
    {
        titre: 'Mai 2024',
        imageUrl: './images/fond2.jpeg',
        lienVoir: './exemple.html',
        lienSupprimer: '#'
    }
    // Ajoutez d'autres tableaux ici...
];

// Fonction pour créer un élément tableau à partir des données
function createTableauElement(tableauData) {
    const tableauDiv = document.createElement('div');
    tableauDiv.className = 'col-md-4';
    
    const tableauContent = `
        <div class="tableau">
            <img class="img-fluid" src="${tableauData.imageUrl}" alt="${tableauData.titre}">
            <div class="overlay">
                <div class="text">
                    <h5>${tableauData.titre}</h5>
                    <button class="bouton">
                        <a href="${tableauData.lienVoir}" class="white_button">Voir</a>
                    </button>
                    <button class="bouton">
                        <a href="${tableauData.lienSupprimer}" class="white_button">Supprimer</a>
                    </button>
                </div>
            </div>
        </div>
    `;
    tableauDiv.innerHTML = tableauContent;
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
    displayTableaux();
});
