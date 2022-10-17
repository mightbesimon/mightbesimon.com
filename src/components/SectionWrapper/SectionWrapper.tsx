import './SectionWrapper.scss'
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import NoughtsCrosses from 'components/NoughtsCrosses/NoughtsCrosses';
import SimonSvg from 'components/SimonSvg/SimonSvg';
import ToolBar from 'components/ToolBar/ToolBar';
import ThemeButton from 'components/ToolBar/ThemeButton';

type SectionWrapperProps = {
	children: JSX.Element | JSX.Element[],
	view?: string,
	title?: string,
	neon?: boolean,
	game?: boolean,
}

function SectionWrapper({ children, view, title, neon, game }: SectionWrapperProps) {
	return (
		<>
			{title && <Header title={title} image={SimonSvg()} neon={neon} />}
			<section className={view ? `${view} flex column` : 'flex column'}>
				{children}
			</section>
			{game && <NoughtsCrosses />}
			<Footer />

			<ToolBar>
				<ThemeButton />
			</ToolBar>
		</>
	)
}

export default SectionWrapper;
