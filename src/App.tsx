import { useCallback } from "react"
import { enregistrerCoup, EtatPartie, reinitialiserJeu } from "./controller"
import { Grid } from "./Grid"
import { useGameBridge } from './hooks/useGameBridge';

function App() {

  const { grid, currentPlayer, gameState } = useGameBridge();

  const handleClick = useCallback((index: number) => {
    if (gameState !== EtatPartie.EnCours) { return; }
    const gridClone = [...grid];
    enregistrerCoup(gridClone, currentPlayer, index);
  }, [grid, currentPlayer, gameState]);

  const resetGame = useCallback(() => {
    reinitialiserJeu();
  }, []);

  return (
    <section className="h-full bg-slate-100 rounded-2xl flex flex-col justify-center">
      <header className="p-4 text-center">
        <h1 className="text-4xl">Tic Tac Toe</h1>
        <div className="mt-6 text-xl">
          {gameState === EtatPartie.EnCours && <p className="text-indigo-500">C'est au tour de {currentPlayer}</p>}
          {gameState === EtatPartie.GagnantO && <p className="text-emerald-400">Le joueur O à gagné !</p>}
          {gameState === EtatPartie.GagnantX && <p className="text-emerald-400">Le joueur X à gagné !</p>}
          {gameState === EtatPartie.MatchNul && <p className="text-rose-500">Match nul !</p>}
        </div>
      </header>
      <main className="p-4 mt-8">
        <Grid cells={grid} onCellClick={handleClick} />
      </main>
      <div className="flex justify-center mt-8">
        <button type="button" className="m-auto py-2 px-6 rounded-full text-white bg-red-400 hover:bg-red-500" onClick={resetGame}>
          Réinitialiser le jeu
        </button>
      </div>
    </section>
  )
}

export default App
