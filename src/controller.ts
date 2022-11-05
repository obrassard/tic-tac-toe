import { rafrachirGrille, modifierJoueurCourant, modifierEtatPartie } from './hooks/useGameBridge';

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
    const grille = [
        null, null, null,
        null, null, null,
        null, null, null
    ];
    return grille;
}

var joueurInitial = 'X';
function choisirJoueurInitial(): Joueur {
    if (joueurInitial === 'X') {
        joueurInitial = 'O';
        return 'O';
    } else {
        joueurInitial = 'X';
        return 'X';
    }
}

export function enregistrerCoup(grille: GrilleJeu, joueur: Joueur, position: number): void {
    if (position < 0 || position >= grille.length) {
        throw new Error('Position invalide');
    } 

    if (grille[position] !== null) {
        console.log('Position déjà prise');
    } else {
        grille[position] = joueur;
        const prochainJoueur = obtenirProchainJoueur(joueur);
        rafrachirGrille(grille);
        modifierJoueurCourant(prochainJoueur);
        verifierFinPartie(grille);
    }
}

function obtenirProchainJoueur(joueur: Joueur) : Joueur {
    if (joueur === 'X') {
        return 'O';
    } else {
        return 'X';
    }
}

export function reinitialiserJeu(): void {
    const jeu = initialiserJeu();
    rafrachirGrille(jeu.grille);
    modifierJoueurCourant(jeu.joueur);
    modifierEtatPartie(EtatPartie.EnCours);
}

function verifierFinPartie(grille: GrilleJeu) : void {
    const gagnant = verifierVictoire(grille);
    const matchNul = verifierMatchNul(grille);

    if (gagnant != null) {
        if (gagnant === 'X') {
            modifierEtatPartie(EtatPartie.GagnantX);
        } else {
            modifierEtatPartie(EtatPartie.GagnantO);
        }
    } else if (matchNul) {
        modifierEtatPartie(EtatPartie.MatchNul);
    }
}

function verifierMatchNul(grille: GrilleJeu) : boolean {
    return grille.every((valeur) => valeur !== null);
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

    for (let i = 0; i < lignesGagnante.length; i++) {
        const [a, b, c] = lignesGagnante[i];
        if (grille[a] && grille[a] === grille[b] && grille[a] === grille[c]) {
            return grille[a];
        }
    }

    return null;
}

