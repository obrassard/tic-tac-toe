import { rafrachirGrille, modifierJoueurCourant, modifierEtatPartie } from './react/hooks/useGameBridge';

export type Joueur = 'X' | 'O';
export type GrilleJeu = Array<Joueur | null>;

export enum EtatPartie {
    EnCours,
    GagnantX,
    GagnantO,
    MatchNul
}

type Jeu = {
    grille: GrilleJeu;
    joueur: Joueur;
    etat: EtatPartie;
}

export function initialiserJeu(): Jeu {
    const grille = creerGrilleVide();
    const joueur = choisirJoueurInitial();
    const etat = EtatPartie.EnCours;
    const jeu = { grille, joueur, etat };
    return jeu;
}

function creerGrilleVide(): GrilleJeu {
    throw new Error('Not implemented');
}

function choisirJoueurInitial(): Joueur {
    throw new Error('Not implemented');
}

export function enregistrerCoup(grille: GrilleJeu, joueur: Joueur, position: number): void {
    throw new Error('Not implemented');
}

export function reinitialiserJeu(): void {
    throw new Error('Not implemented');
}

function verifierFinPartie(grille: GrilleJeu) : void {
    throw new Error('Not implemented');
}

function verifierMatchNul(grille: GrilleJeu) : boolean {
    throw new Error('Not implemented');
}

function verifierVictoire(grille: GrilleJeu): Joueur | null {
    const lignesGagnante = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    throw new Error('Not implemented');
}

