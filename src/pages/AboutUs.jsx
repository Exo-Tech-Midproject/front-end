import Footer from "../components/Footers/MainFooter"
import Navbar from "../components/Navbars/MainNavbar"
import Container1 from "../AboutUsContainers/Container1"
import Container2 from "../AboutUsContainers/Container2"
import Container3 from "../AboutUsContainers/Container3"
import Container4 from "../AboutUsContainers/Container4"
const AboutUs = () => {
	return (
		<div>
			{/* navbar */}
			<Navbar />
			{/* Container */}
			<Container1 />
			<Container2 />
			<Container3 />
			<Container4 />
			{/* footer */}
			<Footer />
		</div>
	)
}
export default AboutUs;
