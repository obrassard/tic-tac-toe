import { GridCell } from "./Cell";

interface GridProps {
    cells: Array<string | null>;
    onCellClick(index: number): void;
}

export const Grid = ({ cells, onCellClick }: GridProps) => {
    return (
        <section className="grid grid-cols-3 gap-4 max-w-md m-auto">
            {cells.map((cell, index) => (
                <GridCell key={index} value={cell} onClick={() => onCellClick(index)} />
            ))}
        </section>
    )
}