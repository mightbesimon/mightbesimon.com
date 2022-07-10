import './NoughtsCrosses.scss';
import { useState } from 'react';
import { range } from 'utils/extensions/Functions';
import Nought from 'assets/nought.svg';
import Cross from 'assets/cross.svg';

export enum Mark {
	Empty = '',
	Nought = 'noughts',
	Cross = 'crosses',
};

type Tile = {
	mark: Mark,
	cell: Cell,
	ring: number,
};

type Cell = {
	row: number,
	col: number,
}

function NoughtsCrosses(): JSX.Element {
	const [D] = useState({ rows: 3, cols: 3 });

	const calcRing = (cell: Cell) => {
		return Math.min(
			cell.row + 1,
			cell.col + 1,
			D.rows - cell.row,
			D.cols - cell.col
		);
	};

	const resetTiles = () => {
		return Array.from(
			{ length: D.rows }, (_, row) => Array.from(
				{ length: D.cols }, (_, col) => {
					return {
						mark: Mark.Empty,
						cell: { row, col },
						ring: calcRing({ row, col }),
					}
				}
			)
		)
	};

	const resetLines = () => {
		const rowLines = range(D.rows).map(row => range(D.cols).map(col => { return { row, col } }));
		const colLines = range(D.cols).map(col => range(D.rows).map(row => { return { row, col } }));
		const diagonalLines = D.rows !== D.cols ? [] : [
			range(D.rows).map(rc => { return { row: rc, col: rc } }),
			range(D.rows).map(rc => { return { row: rc, col: D.rows - rc - 1 } })
		];
		return rowLines.concat(colLines)
			.concat(diagonalLines);
	};

	const [tiles, setTiles] = useState<Tile[][]>(resetTiles());
	const [lines, setLines] = useState<Cell[][]>(resetLines());
	const [game] = useState({
		over: false,
		message: '',
		winner: Mark.Empty,
	});

	const setTile = (cell: Cell, mark: Mark) => {
		let temp = [...tiles];
		temp[cell.row][cell.col] = {
			mark,
			cell,
			ring: calcRing(cell),
		};
		setTiles(temp);
	};

	const cross = (row: number, col: number) => () => {
		if (game.over) return;
		if (tiles[row][col].mark !== Mark.Empty) return;

		setTile({ row, col }, Mark.Cross);
		check(Mark.Cross);
		if (!game.over) nought();
	};

	const nought = () => {
		const tile = chooseInnerMostEmptyTile();
		setTile(tile.cell, Mark.Nought);
		check(Mark.Nought);
	};

	const check = (mark: Mark) => {
		if (lines.some(line => line.every(
			cell => tiles[cell.row][cell.col].mark === mark
		))) {
			endGame(mark);
			return;
		}
		if (tiles.every(row => row.every(tile => tile.mark !== Mark.Empty))) {
			endGame(Mark.Empty);
		}
	};

	const endGame = (winner: Mark) => {
		game.over = true;
		game.message = winner === Mark.Empty ? 'draw' : `${winner} win`;
	};

	const chooseInnerMostEmptyTile = () => {
		const emptyTiles = tiles.flat().filter(x => x.mark === Mark.Empty);
		const innerMostRing = Math.max(...emptyTiles.map(x => x.ring));
		const innerMostTiles = emptyTiles.filter(x => x.ring === innerMostRing);
		return innerMostTiles[Math.floor(Math.random() * innerMostTiles.length)];
	};

	const restart = () => {
		setTiles(resetTiles());
		setLines(resetLines());
		game.over = false;
	};

	return (
		<div className='game flex column'>
			<table className='hashtag'>
				<tbody>
					{
						range(D.rows).map(row =>
							<tr key={row}>
								{
									range(D.cols).map(col =>
										<td key={col}
											onClick={cross(row, col)}
										>
											<div>
												{
													tiles[row][col].mark === Mark.Nought ?
														<img alt='' src={Nought} /> :
														tiles[row][col].mark === Mark.Cross ?
															<img alt='' src={Cross} /> : null
												}
											</div>
										</td>
									)
								}
							</tr>
						)
					}
				</tbody>
			</table>
			{
				game.over && (
					<div className='result'>
						<div className='title'>{game.message}</div>
						<div className='buttons flex'>
							<div className='minus' onClick={() => { D.rows--; D.cols--; restart(); }}>&ndash;</div>
							<div className='restart' onClick={restart}>restart</div>
							<div className='plus' onClick={() => { D.rows++; D.cols++; restart(); }}>+</div>
						</div>
					</div>
				)
			}
			{
				(D.rows * D.cols > 0) || (
					<p className='center'>you got too curious and now the game is gone ☹️</p>
				)
			}
		</div>
	)
}

export default NoughtsCrosses;
