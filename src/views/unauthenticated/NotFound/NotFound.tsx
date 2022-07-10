import './NotFound.scss'
import Header from "components/Header/Header"
import NoughtsCrosses from "components/NoughtsCrosses/NoughtsCrosses"
import Footer from "components/Footer/Footer"

function NotFound() {
	return (
		<>
			<Header />
			<h2>PAGE NOT FOUND ☹️</h2>
			<NoughtsCrosses />
			<Footer />
		</>
	)
}

export default NotFound
