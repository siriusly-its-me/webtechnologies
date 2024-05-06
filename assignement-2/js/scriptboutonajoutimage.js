document.addEventListener('DOMContentLoaded', function() {
    // Référence au bouton d'ajout d'image
    const addImageBtn = document.getElementById('addImageBtn');
    
    // Référence au modal
    const addImageModal = new bootstrap.Modal(document.getElementById('addImageModal'));

    // Bouton d'ajout d'image
    addImageBtn.addEventListener('click', function() {
        addImageModal.show();
    });

    // Référence aux éléments de formulaire
    const imageInput = document.getElementById('imageInput');
    const commentInput = document.getElementById('commentInput');
    const submitImageBtn = document.getElementById('submitImageBtn');
    
    // Fonction pour ajouter une image et un commentaire
submitImageBtn.addEventListener('click', async function() {
    // Récupérez le fichier image sélectionné
    const file = imageInput.files[0];
    
    // Assurez-vous que l'utilisateur a sélectionné un fichier et saisi un commentaire
    if (file && commentInput.value) {
        // Créez un URL de l'image sélectionnée
        const imageUrl = URL.createObjectURL(file);
        
        // Créez un élément div pour l'image et le commentaire
        const imageDiv = document.createElement('div');
        imageDiv.className = 'col-md-4';
        
        // Créez un élément img et span pour l'image et le commentaire
        const imgElement = document.createElement('img');
        imgElement.className = 'img-fluid';
        imgElement.src = imageUrl;
        imgElement.alt = file.name;

        const commentElement = document.createElement('span');
        commentElement.textContent = commentInput.value;
        
        // Ajoutez l'image et le commentaire à l'élément div
        imageDiv.appendChild(imgElement);
        imageDiv.appendChild(commentElement);
        
        // Ajoutez l'élément div à la section des images
        const imageContainer = document.querySelector('.board .row');
        imageContainer.appendChild(imageDiv);
        
        // Nettoyez l'URL après l'ajout de l'image pour éviter les fuites de mémoire
        imgElement.addEventListener('load', function() {
            URL.revokeObjectURL(imageUrl);
        });
        
        // Réinitialisez le formulaire
        imageInput.value = '';
        commentInput.value = '';
        
        // Fermez le modal
        addImageModal.hide();
        
        // Appelez la fonction pour enregistrer l'image localement
        const dataURL = imageUrl; 
        const fileName = file.name; 
        downloadImage(dataURL, fileName);
    } else {
        alert('Veuillez sélectionner une image et saisir un commentaire.');
    }
})});
