import { range } from 'utils/extension/Functions';
import './Flags.scss';

export function GermanFlag(): JSX.Element
{
	return (
		<div className='german flag'>
			<div />
			<div />
			<div />
		</div>
	);
}

export function FrenchFlag(): JSX.Element
{
	return (
		<div className='french flag'>
			<div />
			<div />
			<div />
		</div>
	);
}

export function ItalianFlag(): JSX.Element
{
	return (
		<div className='italian flag'>
			<div />
			<div />
			<div />
		</div>
	);
}

export function IrishFlag(): JSX.Element
{
	return (
		<div className='irish flag'>
			<div />
			<div />
			<div />
		</div>
	);
}

export function USFlag(): JSX.Element
{
	return (
		<div className='us flag'>
			<div>
				<div />
				<div>
					{range(7).map(x => <div key={x} />)}
				</div>
			</div>
			<div>
				{range(6).map(x => <div key={x} />)}
			</div>
		</div>
	);
}
