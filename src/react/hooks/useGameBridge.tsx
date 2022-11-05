import { useEffect, useState } from "react";
import { BehaviorSubject, Subscription } from "rxjs";
import { EtatPartie, GrilleJeu, initialiserJeu, Joueur } from "../../game";

const { grille, joueur, etat } = initialiserJeu();

const grid$ = new BehaviorSubject<GrilleJeu>(grille);
const currentPlayer$ = new BehaviorSubject<Joueur>(joueur);
const gameState$ = new BehaviorSubject<EtatPartie>(etat);

export const rafrachirGrille = (grille: Array<Joueur | null>) => {
    grid$.next(grille);
}

export const modifierJoueurCourant = (joueur: Joueur) => {
    currentPlayer$.next(joueur);
}

export const modifierEtatPartie = (etat: EtatPartie) => {
    gameState$.next(etat);
}

export const useGameBridge = () => {
    const [grid, setGrid] = useState(grid$.value);
    const [currentPlayer, setCurrentPlayer] = useState(currentPlayer$.value);
    const [gameState, setGameState] = useState(gameState$.value);

    useEffect(() => {
        const subscription = new Subscription();
        subscription.add(grid$.subscribe(setGrid));
        subscription.add(currentPlayer$.subscribe(setCurrentPlayer));
        subscription.add(gameState$.subscribe(setGameState));
        return () => subscription.unsubscribe();
    }, []);

    return { grid, currentPlayer, gameState };
}