import Footer from "../components/Footers/MainFooter"
import Navbar from "../components/Navbars/MainNavbar"
import Section1 from "../containers/Section1"
import Section2 from "../containers/Section2"
import Section3 from "../containers/Section3"
import Section4 from "../containers/Section4"
import Section5 from "../containers/Section5"
import Section6 from "../containers/Section6"

export default function Home() {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            {/* sections */}
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            {/* footer */}
            <Footer />
        </div>
    )
}
