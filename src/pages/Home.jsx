import Footer from "../components/Footers/MainFooter"
import Navbar from "../components/Navbars/MainNavbar"
import Section1 from "../containers/Section1"
import Section2 from "../containers/Section2"
import Section3 from "../containers/Section3"
import Section4 from "../containers/Section4"
import Section5 from "../containers/Section5"
import Section6 from "../containers/Section6"
import { motion } from "framer-motion"
export default function Home() {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        >
            {/* navbar */}
            <Navbar />
            {/* sections */}
            <Section1 />
            <Section2 />
            <Section3 />
            <Section5 />
            <Section4 />
            <Section6 />
            {/* footer */}
            <Footer />
        </motion.div>
    )
}
