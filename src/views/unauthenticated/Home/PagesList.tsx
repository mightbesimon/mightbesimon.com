import { Link } from 'react-location';
import unauthenticatedContent from 'views/unauthenticated/UnauthenticatedContent';

function PagesList(): JSX.Element
{
	return (
		<div className='showcase pages flex wrap'>
			{
				unauthenticatedContent.filter(page => page.path && !page.hide)
					.map(page => (
						<Link key={page.path} to={page.path}>
							<div className='title'>
								<h3>mightbesimon.com{page.path}</h3>
							</div>
						</Link>
					))
			}
			<Link key='notfound' to='/notfound'>
				<div className='title'>
					<h3>page not found</h3>
				</div>
			</Link>
		</div>
	);
}

export default PagesList;
