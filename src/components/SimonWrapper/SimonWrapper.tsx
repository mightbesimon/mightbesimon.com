import './SimonWrapper.scss';
import Header from "components/Header/Header"
import NoughtsCrosses from "components/NoughtsCrosses/NoughtsCrosses"
import Footer from "components/Footer/Footer"

type SimonWrapperProps = {
	children: JSX.Element | JSX.Element[],
}

function SimonWrapper({ children }: SimonWrapperProps) {
	return (
		<>
			<Header />
			<section className='flex column'>
				{children}
			</section>
			<NoughtsCrosses />
			<Footer />
		</>
	)
}

export default SimonWrapper
