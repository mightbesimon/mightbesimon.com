import './NoughtsCrosses.scss';
import { useState } from 'react';
import { range } from 'utils/extension/Functions';
import Nought from 'assets/NoughtsCrosses/nought.svg';
import Cross from 'assets/NoughtsCrosses/cross.svg';
import DimensionalButton from 'components/Buttons/DimensionalButton';
import ColourEnum from 'types/ColourEnums';

enum Mark
{
	Empty = '',
	Nought = 'noughts',
	Cross = 'crosses',
}

type Tile = {
	mark: Mark,
	cell: Cell,
	ring: number,
};

type Cell = {
	row: number,
	col: number,
};

function NoughtsCrosses(): JSX.Element
{
	const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
	const [D] = useState({ rows: 3, cols: 3 });

	const calcRing = (cell: Cell) => Math.min(
		cell.row + 1,
		cell.col + 1,
		D.rows - cell.row,
		D.cols - cell.col
	);

	const resetTiles = () => Array.from(
		{ length: D.rows }, (_, row) => Array.from(
			{ length: D.cols }, (_, col) =>
		{
			return {
				mark: Mark.Empty,
				cell: { row, col },
				ring: calcRing({ row, col }),
			};
		}
		)
	);

	const resetLines = () =>
	{
		const rowLines = range(D.rows).map(row => range(D.cols).map(col => { return { row, col }; }));
		const colLines = range(D.cols).map(col => range(D.rows).map(row => { return { row, col }; }));
		const diagonalLines = D.rows !== D.cols ? [] : [
			range(D.rows).map(rc => { return { row: rc, col: rc }; }),
			range(D.rows).map(rc => { return { row: rc, col: D.rows - rc - 1 }; }),
		];
		return rowLines.concat(colLines)
			.concat(diagonalLines);
	};

	const resetTileSize = () =>
	{
		const size = Math.min(4 * rem, window.innerWidth / D.rows);
		return { width: size, height: size };
	};

	const [tiles, setTiles] = useState<Tile[][]>(resetTiles());
	const [lines, setLines] = useState<Cell[][]>(resetLines());
	const [tileSize, setTileSize] = useState(resetTileSize());
	const [game] = useState({
		over: false,
		message: '',
		winner: Mark.Empty,
	});

	const setTile = (cell: Cell, mark: Mark) =>
	{
		let temp = [...tiles];
		temp[cell.row][cell.col] = {
			mark,
			cell,
			ring: calcRing(cell),
		};
		setTiles(temp);
	};

	const cross = (row: number, col: number) => () =>
	{
		if (game.over) return;
		if (tiles[row][col].mark !== Mark.Empty) return;

		setTile({ row, col }, Mark.Cross);
		check(Mark.Cross);
		if (!game.over) nought();
	};

	const nought = () =>
	{
		const tile = chooseInnerMostEmptyTile();
		setTile(tile.cell, Mark.Nought);
		check(Mark.Nought);
	};

	const check = (mark: Mark) =>
	{
		if (lines.some(line => line.every(
			cell => tiles[cell.row][cell.col].mark === mark
		)))
		{
			endGame(mark);
			return;
		}
		if (tiles.every(row => row.every(tile => tile.mark !== Mark.Empty)))
		{
			endGame(Mark.Empty);
		}
	};

	const deltaD = (delta: { rows: number, cols: number }) => () =>
	{
		D.rows += delta.rows;
		D.cols += delta.cols;
		setTileSize(resetTileSize());
		restart();
	};

	const endGame = (winner: Mark) =>
	{
		game.over = true;
		game.message = winner === Mark.Empty ? 'DRAW' : `${winner} WIN`;
	};

	const chooseInnerMostEmptyTile = () =>
	{
		const emptyTiles = tiles.flat().filter(x => x.mark === Mark.Empty);
		const innerMostRing = Math.max(...emptyTiles.map(x => x.ring));
		const innerMostTiles = emptyTiles.filter(x => x.ring === innerMostRing);
		return innerMostTiles[Math.floor(Math.random() * innerMostTiles.length)];
	};

	const restart = () =>
	{
		setTiles(resetTiles());
		setLines(resetLines());
		game.over = false;
	};

	const displayTile = ({ row, col }: Cell) =>
		tiles[row][col].mark === Mark.Nought ?
			<img alt='nought' src={Nought} /> :
			tiles[row][col].mark === Mark.Cross
				? <img alt='cross' src={Cross} />
				: <img alt='cross' src={Cross} className='empty' />;

	return (
		<div className='game flex column'>
			<table className='hashtag'>
				<tbody>
					{range(D.rows).map(row =>
						<tr key={row}>
							{range(D.cols).map(col =>
								<td key={col}
									onClick={cross(row, col)}
									style={tileSize}
								>
									{displayTile({ row, col })}
								</td>
							)}
						</tr>
					)}
				</tbody>
			</table>
			{game.over && (
				<div className='result'>
					<div className='title'>{game.message}</div>
					<div className='buttons flex'>
						<DimensionalButton
							className='minus'
							colour={ColourEnum.teal}
							onClick={deltaD({ rows: -1, cols: -1 })}
						>
							&ndash;
						</DimensionalButton>
						<DimensionalButton
							className='restart'
							colour={ColourEnum.light}
							onClick={restart}
						>
							restart
						</DimensionalButton>
						<DimensionalButton
							className='plus'
							colour={ColourEnum.orange}
							onClick={deltaD({ rows: +1, cols: +1 })}
						>
							+
						</DimensionalButton>
					</div>
				</div>
			)}
			{(D.rows * D.cols > 0) || (
				<p>what did you expect? <span className='stroke'>😭</span></p>
			)}
		</div>
	);
}

export default NoughtsCrosses;
