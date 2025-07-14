import './Greetings.scss';
import greetings from 'data/greetings.json';
function Greetings(): JSX.Element
{
	return <div className='greetings flex column'>
		{greetings.map(greeting =>
			<div className='flex' key={greeting.language}>
				<div className='stroke'>{greeting.flag}</div>
				<div>
					{greeting.greeting.map(text =>
						<div key={text}>{text}</div>)
					}
				</div>
			</div>
		)}
	</div>;
}

export default Greetings;
