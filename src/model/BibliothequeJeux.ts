import type { Jeu } from "./Jeu";

export interface BibliothequeJeux {
    BibliothequeID: number; // Primary key
    UtilisateurID: number; // Foreign key referencing Utilisateurs
    JeuID: number; // Foreign key referencing Jeux
    Jeu: Jeu;
    HeuresJeu: number; // Default is 0
    EstInstalle: boolean; // Default is false
}