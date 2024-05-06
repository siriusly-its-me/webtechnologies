var db;

SQL.onRuntimeInitialized = function () {
    // Crée une nouvelle instance de base de données SQLite
    db = new SQL.Database();

    // Crée une table "users" si elle n'existe pas
    db.run("CREATE TABLE IF NOT EXISTS users (pseudo TEXT, email TEXT, password TEXT)");

    // Attachez l'événement `onsubmit` à votre formulaire après que `SQL` soit prêt
    document.getElementById("signUpForm").onsubmit = handleSignUp;
};

// Fonction pour gérer l'inscription
function handleSignUp(event) {
    // Empêche l'envoi du formulaire
    event.preventDefault();

    // Récupère les valeurs des champs du formulaire
    var pseudo = document.getElementById("pseudo").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Prépare la requête d'insertion
    var stmt = db.prepare("INSERT INTO users (pseudo, email, password) VALUES (?, ?, ?)");

    // Exécute la requête avec les valeurs récupérées du formulaire
    stmt.run([pseudo, email, password]);

    // Libère la requête
    stmt.free();

    // Affiche un message de succès ou redirige l'utilisateur
    alert("Inscription réussie !");
}
