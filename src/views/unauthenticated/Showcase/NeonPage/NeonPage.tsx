import './NeonPage.scss';
import { ReactComponent as LogoOff } from 'assets/BagOfCansStudio/logo-off.svg';
import SectionWrapper from "components/SectionWrapper/SectionWrapper";

function NeonPage() {
	return (
		<SectionWrapper view='NeonPage'>
			<div className='neon'>
				<p className='large'>NEON</p>
				<p>BAG <span>OF</span> CAN<span>S</span></p>
				<p>STUDIO</p>
			</div>
			<div className='BagOfCans flex column'>
				<LogoOff />
				<LogoOff className='two' />
				<LogoOff className='three' />
			</div>
		</SectionWrapper>
	);
}

export default NeonPage;
