import { useClassNames } from '../hooks/useClassName';

interface GridCellProps {
    value: string | null;
    onClick: () => void;
}

export const GridCell = ({ value, onClick }: GridCellProps) => {
    return (
        <div onClick={onClick} className={
            useClassNames("text-center h-32 rounded-2xl cursor-pointer", {
                "bg-sky-200 hover:bg-sky-300": value == null,
                "bg-pink-200": value === 'X',
                "bg-amber-200": value === 'O',
        })}>
            <div className="flex items-center justify-center h-full">
                <span className="text-4xl font-bold text-white grid-cell">{value}</span>
            </div>
        </div>
    )
}