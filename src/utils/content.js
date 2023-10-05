// Section1
import MainVed from "../assets/images/section1/main-bg-ved.mp4";

// Section4
import EthImg from "../assets/images/section4/eth.webp";
import BscImg from "../assets/images/section4/bsc.webp";
import PolygonImg from "../assets/images/section4/polygon.webp";
import OptimismImg from "../assets/images/section4/optimism.webp";
import GnosisImg from "../assets/images/section4/gnosis.webp";
import AvalancheImg from "../assets/images/section4/avalanche.webp";
import ArbitrumImg from "../assets/images/section4/arbitrum.webp";
import FantomImg from "../assets/images/section4/fantom.webp";

// Section5
import sec5Ved from "../assets/images/section5/sec5Ved.mp4"
import image1 from "../assets/images/section5/image1.webp"
import image2 from "../assets/images/section5/image2.webp"
import image3 from "../assets/images/section5/image3.webp"
import image4 from "../assets/images/section5/image4.webp"

// Section6
import sec6img from "../assets/images/section6/sec-6-img.png"
import sec6imgBottom from "../assets/images/section6/sec-6-bottom.png"

//login section
import doctorLogin from "../assets/images/loginSection/doctorLogin.png"

//contact section
import contactbg from "../assets/images/contactSection/contact-bg.jpg"

// Footer
import BookIcon from "@mui/icons-material/Book";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import ChatIcon from "@mui/icons-material/Chat";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

// About page
import HeroImg from "../assets/images/Aboutus/aboutUsHero.jpg"
import PorImg from "../assets/images/Aboutus/pro-image.jpg"

export const Aboutus1 = {
  HeroImg
};

export const Aboutus2 = {
  title: "OUR STORY",
  subtitle: "Welcome to our virtual medical website! We are a passionate team of four individuals from diverse backgrounds in Jordan who came together through the LTUC Fullstack Developer Program. Our team members, Tasneem, Hasan, Anas, and Abdulla, each bring their unique skills and expertise to the table to make this project a reality. ",
};
export const Aboutus3 = {
  PorImg
};

export const section1Content = {
  MainVed,
  title: "Your well-being is our mission.",
  subtitle: "Let us be your partner on your healthcare journey."
};

export const section2Content = {
  items: [
    { title: "Peace of Mind", subtitle: "the quick fox jumps over the lazy dog" },
    { title: "Set For Life", subtitle: "the quick fox jumps over the lazy dog" },
    { title: "100% Satisfaction", subtitle: "the quick fox jumps over the lazy dog" },
  ],
};

export const section3Content = {
  title: "About us",
  subtitle1: "At Healthak, we are more than just a healthcare facility; we are a pillar of support and healing within our community. ",
  subtitle2: "Our dedicated team of highly skilled doctors, nurses, and healthcare professionals is driven by a shared mission: to provide the highest quality healthcare services with empathy and excellence. We believe that every patient deserves personalized care and attention, and we are committed to tailoring our treatments to meet individual needs.and healing within our community"
};

export const section4Content = {
  title: "Our Services",
  subtitle1: "How we can help",
  subtitle2: "Online care is growing and so is our list of services and conditions.",
  ITEMS: [
    { logo: EthImg, name: "Sinus, Cough & Allerg" },
    { logo: BscImg, name: "Eye & Ear" },
    { logo: PolygonImg, name: "Kids' Health" },
    { logo: OptimismImg, name: "Chronic & Preventive" },
    { logo: GnosisImg, name: "Appointment" },
    { logo: AvalancheImg, name: "Talk to your Doctors" },
    { logo: ArbitrumImg, name: "Asking Questions" },
    { logo: FantomImg, name: "Trust" },
  ],
};

export const section5Content = {
  sec5Ved,
  top: {
    title: "Why to use our website ",
    subtitle:
      "Our website is your gateway to a world of healthcare excellence and information.Get expert advice on managing your health conditions from our knowledgeable staff.",
  },
  bottom: {
    TABS: [
      {
        name: "Easy Access",
        image: image1,
        subtitle:
          "Our website is a centralized hub for all your healthcare needs. You can easily find information about our services, medical professionals, and facilities, making it convenient to explore your healthcare options.",
      },
      {
        name: "Appointment Booking",
        image: image2,
        subtitle:
          " Booking appointments with our medical specialists is a breeze through our website.Schedule an appointment with our healthcare professionals for a thorough consultation",
      },
      {
        name: "Medical Conditions",
        image: image3,
        subtitle: " Access valuable resources about various medical conditions,symptoms, and treatment options. Our educational content can help you make informed decisions about your health.",
      },
      {
        name: "Stay Informed",
        image: image4,
        subtitle: " Stay up-to-date with the latest news, medical advancements, and health tips through our blog and news section. Knowledge is power when it comes to your health.",
      },
    ],
  },
};

export const section6Content = {
  sec6img,
  top: {
    title: "Meet Our Dedicated Team of Doctors",
    subtitle:
      "At Healthak, we take great pride in our team of highly skilled and compassionate medical professionals. Our doctors are at the heart of our commitment to providing exceptional healthcare.",
    image: sec6img,
  },
  bottom: {
    Image: sec6imgBottom,
    title: "Real people",
    subtitle: "Always a human connection",
    body: " Board-certified nurse practitioners are at the heart of every visit. They create a custom treatment plan you can trust. And, they are available to answer any questions about your plan for free."
  },
};

export const logincontent = {
  title: "Login",
  Image: doctorLogin
};

export const signupcontent = {
  title: "Create Account",
  Image: doctorLogin
};

export const Contactcontent = {
  top: {
    title: "Contact us",
    body: "We value your feedback and are here to assist you. Please don't hesitate to reach out to us with any questions, comments, or concerns. You can get in touch with us through the following methods:"
  },
  Image: contactbg
};

export const footerContent = {
  protocols: {
    title: "Protocols",
    links: [
      { title: "Liquidity Protocol" },
      { title: "Aggregation Protocol" },
      { title: "Limit Order Protocol" },
    ],
  },
  governance: {
    title: "Governance",
    links: [
      { title: "HEALTHAK" },
      { title: "HEALTHAK2" },
      { title: "Forum" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { title: "Help center" },
      { title: "Press room" },
      { title: "Bug report", subtitle: "by Hacker one" },
      { title: "Contacts" },
    ],
  },
  developers: {
    title: "Developers",
    links: [
      { title: "Documentation" },
      { title: "GitHub" },
      { title: "Audit" },
      { title: "Bug bounty" },
    ],
  },
  subscribe: {
    title: "Contact Us",
    subtitle: "Get the latest news and updates",
  },
  socials: [
    { icon: BookIcon },
    { icon: RedditIcon },
    { icon: TwitterIcon },
    { icon: ChatIcon },
    { icon: TelegramIcon },
    { icon: GitHubIcon },
  ],
  copyright: {
    left: "© 2023 HEALTHAK, All Rights Reserved.",
    center: "HEALTHAK",
    right: "EXO-TEAM",
  },
};


