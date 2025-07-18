import './NotFound.scss';
import SectionWrapper from 'components/SectionWrapper/SectionWrapper';

function NotFound()
{
	return (
		<SectionWrapper view='NotFound' title='404' neon game>
			<h1>PAGE NOT FOUND <span className='stroke'>😩</span></h1>
		</SectionWrapper>
	);
}

export default NotFound;
