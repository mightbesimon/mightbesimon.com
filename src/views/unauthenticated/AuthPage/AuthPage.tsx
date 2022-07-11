import SimonSvg from 'components/SimonSvg/SimonSvg';
import Footer from 'components/Footer/Footer';

function AuthPage() {
	return (
		<>
			<header className='flex wrap'>
				<SimonSvg />
				<h1>WHO ARE YOU?</h1>
			</header>
			<section>
				<p style={{ padding: '1rem', textAlign: 'center' }}>you know this is a website about Simon, right?</p>
			</section>
			<Footer />
		</>
	)
}

export default AuthPage;
