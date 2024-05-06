// Inclure la bibliothèque sqlite3
const sqlite3 = require('sqlite3').verbose();

// Créer ou ouvrir une base de données SQLite
const db = new sqlite3.Database('database.db');

// Créer les tables
db.serialize(() => {
    // Table Utilisateurs
    db.run(`
        CREATE TABLE IF NOT EXISTS Utilisateurs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pseudo TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL
        )
    `);

    // Table Tableaux
    db.run(`
        CREATE TABLE IF NOT EXISTS Tableaux (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            creator INTEGER NOT NULL,
            collaborators TEXT,
            content INTEGER,
            images INTEGER,
            geoData TEXT,
            FOREIGN KEY(creator) REFERENCES Utilisateurs(id)
        )
    `);

    // Table Commentaires
    db.run(`
        CREATE TABLE IF NOT EXISTS Commentaires (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT NOT NULL,
            board_id INTEGER NOT NULL,
            FOREIGN KEY(board_id) REFERENCES Tableaux(id)
        )
    `);

    // Table Images
    db.run(`
        CREATE TABLE IF NOT EXISTS Images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT NOT NULL,
            board_id INTEGER NOT NULL,
            FOREIGN KEY(board_id) REFERENCES Tableaux(id)
        )
    `);

    console.log('Toutes les tables ont été créées avec succès.');
});

// Fermer la base de données à la fin du script
db.close();
