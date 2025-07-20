import './SectionWrapper.scss';
import { AuthButton } from 'components/Buttons/Buttons';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import NoughtsCrosses from 'components/NoughtsCrosses/NoughtsCrosses';
import SimonSvg from 'components/SimonSvg/SimonSvg';
import ScrollTop from 'components/ToolBar/ScrollTop';
import ThemeToggle from 'components/ToolBar/ThemeToggle';
import ToolBar from 'components/ToolBar/ToolBar';

type SectionWrapperProps = {
	children: JSX.Element | JSX.Element[],
	view?: string,
	title?: string,
	height?: string,
	auth?: boolean,
	neon?: boolean,
	game?: boolean,
};

function SectionWrapper({ children, view, title, height,
	auth, neon, game,
}: SectionWrapperProps)
{
	return (
		<>
			{title && <Header title={title} image={SimonSvg()} neon={neon} height={height} />}
			{auth && <AuthButton />}
			<section className={'flex column ' + view}>
				{children}
			</section>
			{game && <NoughtsCrosses />}
			<Footer />

			<ToolBar>
				<ScrollTop />
				<ThemeToggle />
			</ToolBar>
		</>
	);
}

export default SectionWrapper;
