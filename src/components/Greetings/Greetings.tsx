import './Greetings.scss';
import greetings from 'data/greetings.json';

function Greetings(): JSX.Element
{
	return <div className='greetings'>
		{greetings.map(greeting =>
			<div key={greeting.emoji}>
				<div className='stroke'>{greeting.emoji}</div>
				<span>{greeting.text}</span>
			</div>
		)}
	</div>;
}

export default Greetings;
