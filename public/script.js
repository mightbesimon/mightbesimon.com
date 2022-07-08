/*
 *	github.com/mightbesimon | Auckland, NZ
 */

const EMPTY  = 'empty';
const NOUGHT = 'noughts';
const CROSS  = 'crosses';
const DRAW   = 'draw';

const SEED = 271;
const THREE = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const game = {
	over: false,
};

const getBoard = () => {
	return [...document.querySelectorAll('td')]
		.map(x => {
			return {
				mark: x.children[0].className,
				element: x,
			}
		});
};

const cross = (element) => {
	console.log(element)
	element.onclick = null;
	element.children[0].className = CROSS;
	element.children[0].innerHTML = '<img src="cross.svg" alt=""/>';

	check(CROSS);
	nought();
};

const nought = () => {
	if (game.over) return;

	const empties = getBoard().filter(x => x.mark === EMPTY);
	const element = empties[271 % empties.length].element;

	element.onclick = null;
	element.children[0].className = NOUGHT;
	element.children[0].innerHTML = '<img src="nought.svg" alt=""/>';

	check(NOUGHT);
};

const check = (mark) => {
	const board = getBoard();
	if (THREE.some(x => x.every(idx => board[idx].mark === mark))) {
		gameOver(mark);
	}
	else
	if (board.every(x => x.mark !== EMPTY)) {
		gameOver(DRAW)
	}
};

const gameOver = (winner) => {
	game.over = true;

	const result = document.querySelector('div.result');
	const tiles = [...document.querySelectorAll('td')];

	result.children[0].innerText = winner === DRAW ? 'draw' : `${winner} win`;
	result.style.display = 'block';
	tiles.forEach(td => {
		td.onclick = null;
		td.children[0].className = DRAW;
	});
};

const restart = () => {
	game.over = false;

	[...document.querySelectorAll('td')].forEach(td => {
		td.addEventListener('click', event => cross(event.currentTarget));
		td.children[0].className = EMPTY;
		td.children[0].innerHTML = '';
	});
	document.querySelector('div.result').style.display = 'none';
};
