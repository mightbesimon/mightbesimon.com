import featured from 'data/featured.json';

function Featured(): JSX.Element
{
	return (
		<div className='showcase featured flex wrap'>
			{featured.map(data => (
				<a key={data.title} className='flex column' href={data.url}>
					<div className='title'>
						<h3>{data.title}</h3>
						<div className='description'>
							{data.description}
						</div>
					</div>
					<div className='badges flex'>
						{data.badges && data.badges.map(badge =>
							<img key={badge} alt='badge' src={badge} />
						)}
					</div>
				</a>
			))}
		</div>
	);
}

export default Featured;
