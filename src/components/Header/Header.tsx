import './Header.scss';
import Simon from 'assets/simon.png';
import ImageLink from "components/ImageLink";

function Header() {
	return (
		<header className='flex wrap'>
			<ImageLink
				name='simon'
				icon={Simon}
				url='https://github.com/mightbesimon'
			/>
			<h1>SIMON</h1>
		</header>
	)
}

export default Header;
