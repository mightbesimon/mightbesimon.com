import featured from 'data/featured.json';

function Featured(): JSX.Element {
	return (
		<div className='showcase featured flex wrap'>
			{featured.map(data => (
				<a key={data.title} className='flex column' href={data.url}>
					<div className='title'>
						<h3>{data.title}</h3>
						<div className='description'>{data.description}</div>
					</div>
					{data.badge && <img alt='badge' src={data.badge} />}
				</a>
			))}
		</div>
	);
}

export default Featured;
