import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Grid } from "@mui/material";
import Title from "../Title";
import Link from '@mui/material/Link';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Sec9Image1 from "../../assets/images/qaSection/seq1.webp";
import Sec9Image2 from "../../assets/images/qaSection/seq2.webp";
import Sec9Image3 from "../../assets/images/qaSection/seq3.webp";
import Sec9Image4 from "../../assets/images/qaSection/seq4.webp";
import Sec9Image5 from "../../assets/images/qaSection/seq5.webp";
import Sec9Image6 from "../../assets/images/qaSection/seq6.webp";
import Sec9Image7 from "../../assets/images/qaSection/seq7.webp";
import Sec9Image8 from "../../assets/images/qaSection/seq8.webp";
import Sec9Image9 from "../../assets/images/qaSection/seq9.webp";
import Sec9Image10 from "../../assets/images/qaSection/seq10.webp";
import Sec9Image11 from "../../assets/images/qaSection/seq11.webp";
import Sec9Image12 from "../../assets/images/qaSection/seq12.webp";
import cookie from 'react-cookies'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    link: "/QA",
    label: "Internal Medicine",
    sublabel:
      "Is a medical specialty that primarily focuses on the diagnosis, treatment, and care of adults and their complex medical issues. Physicians who specialize in internal medicine are called internists or internal medicine doctors",
    imgPath: Sec9Image1,
  },
  {
    link: "/QA",
    label: "Family Medicine",
    sublabel:
      "Is a medical specialty that focuses on providing comprehensive and continuous healthcare for individuals of all ages, from infants to the elderly. Family medicine practitioners, commonly known as family physicians or family doctors, are trained to offer a wide range of medical services and are often the primary care providers for patients and their families",
    imgPath: Sec9Image2,
  },
  {
    link: "/QA",
    label: "Rheumatology",
    sublabel:
      "Is a medical specialty that focuses on the diagnosis and treatment of disorders related to the musculoskeletal system and autoimmune diseases. Rheumatologists are medical doctors who are specially trained to manage conditions that affect the joints, soft tissues, and autoimmune responses",
    imgPath: Sec9Image3,
  },
  {
    link: "/QA",
    label: "Gynaecology",
    sublabel:
      "Is a medical specialty that focuses on the health and well-being of the female reproductive system, which includes the uterus, ovaries, fallopian tubes, and the breasts. Gynecologists are medical doctors who specialize in the diagnosis, treatment, and care of a wide range of women's health issues",
    imgPath: Sec9Image4,
  },
  {
    link: "/QA",
    label: "Dermatology",
    sublabel:
      "Is a medical specialty that focuses on the diagnosis and treatment of disorders and conditions related to the skin, hair, nails, and mucous membranes. Dermatologists are medical doctors who specialize in providing medical, surgical, and cosmetic care for a wide range of skin-related issues",
    imgPath: Sec9Image5,
  },
  {
    link: "/QA",
    label: "Pediatrics",
    sublabel:
      "Is a medical specialty that focuses on the health and well-being of infants, children, and adolescents, from birth up to the age of 18. Pediatricians are medical doctors who specialize in the care of children and provide comprehensive healthcare services for their physical, mental, and emotional development",
    imgPath: Sec9Image6,
  },
  {
    link: "/QA",
    label: "Psychiatry",
    sublabel:
      "Is a medical specialty that focuses on the diagnosis, treatment, and prevention of mental and emotional disorders. Psychiatrists are medical doctors who specialize in the assessment and management of various mental health conditions, including mood disorders, anxiety disorders, psychotic disorders, and more",
    imgPath: Sec9Image7,
  },
  {
    link: "/QA",
    label: "Cardiology",
    sublabel:
      "Is the medical specialty that focuses on the diagnosis, treatment, and prevention of diseases and conditions related to the heart and blood vessels. Cardiologists are medical doctors who specialize in cardiovascular medicine and are experts in managing a wide range of heart-related issues",
    imgPath: Sec9Image8,
  },
  {
    link: "/QA",
    label: "Neurology",
    sublabel:
      "Is a medical specialty that focuses on the diagnosis, treatment, and management of disorders related to the nervous system, which includes the brain, spinal cord, peripheral nerves, and muscles. Neurologists are medical doctors who specialize in assessing and caring for patients with a wide range of neurological conditions. ",
    imgPath: Sec9Image9,
  },
  {
    link: "/QA",
    label: "Endocrine",
    sublabel:
      "Is a medical specialty that focuses on the endocrine system, which is responsible for producing and regulating hormones. Hormones are chemical messengers that play a crucial role in regulating various bodily functions, including metabolism, growth and development, sexual function, and the body's response to stress.",
    imgPath: Sec9Image10,
  },
  {
    link: "/QA",
    label: "Oncology",
    sublabel:
      "Is a medical specialty that focuses on the diagnosis, treatment, and prevention of cancer. Oncologists are medical doctors who specialize in the care of individuals with cancer and are involved in various aspects of cancer management.",
    imgPath: Sec9Image11,
  },
  {
    link: "/QA",
    label: "Urology",
    sublabel:
      "Is a medical specialty that focuses on the diagnosis and treatment of disorders and conditions related to the urinary tract and male reproductive system. Urologists are medical doctors who specialize in providing care for both male and female patients, addressing a wide range of urological issues. ",
    imgPath: Sec9Image12,
  },
];

const ServiceCard = ({ title, subtitle, image }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  let token = cookie.load('auth')
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "70%", height: "70vh", position: 'relative', bgcolor: "white" }}>
      <AutoPlaySwipeableViews
        sx={{ height: "60vh", }}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Container>
            <Stack direction="row">
              <Box key={step.label} sx={{ width: "50%", height: "60vh", py: 2, }}>
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{
                    borderRadius: "5%",
                    width: '100%',
                    height: '55vh',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Box sx={{ width: "50%", height: "60vh", bgcolor: "blak", py: 2 }}>
                <Stack direction="column" p={5} sx={{
                  height: '100%',
                }}>
                  <Typography sx={{ color: "#24546A" }} variant="h5" gutterBottom>
                    {step.label}
                  </Typography>
                  <Divider color="#1F485B" sx={{ my: 1 }} />
                  <Typography variant="body1" sx={{ letterSpacing: "0.02em" }}>
                    {step.sublabel}
                  </Typography>

                  {token && (<Link href={step.link} sx={{ position: "fixed", top: 350, width: "400px" }}>

                    <Button variant="contained" color="medical">
                      Find out more
                    </Button></Link>)}
                  {!token && (<Link href={'/login'} sx={{ position: "fixed", top: 350, width: "400px" }}>

                    <Button variant="contained" color="medical">
                      Login for more details
                    </Button></Link>)}
                </Stack>



              </Box>
            </Stack>
          </Container>



          //         <Box
          //           key={step.label}
          //           sx={{
          //             display: 'flex',
          //             alignItems: 'center',
          //             justifyContent: 'center',
          //             overflow: 'hidden',
          //             position: 'relative',
          //           }}
          //         >
          // <img
          //             src={step.imgPath}
          //             alt={step.label}
          //             style={{
          //               width: '50%',
          //               height: '100%',
          //               objectFit: 'cover',
          //             }}
          //           />

          //           <Box >
          //             <Stack direction="column" p={5} sx={{
          //               height: '100%',}}>
          //             <Typography variant="h5" gutterBottom>
          //               {step.label}
          //             </Typography>
          //             <Divider color="#1F485B" sx={{ my:3 }} />
          //             <Typography variant="body1">
          //               {step.sublabel}
          //             </Typography>
          //             <Link href={step.link}>
          //               <Button variant="contained" color="medical" sx={{ mt: 2 }} >
          //                 Find out more
          //               </Button></Link>
          //             </Stack>
          //           </Box>
          //         </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{ bgcolor: "white" }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >

            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}

          </Button>
        }
      />
    </Box>
  );
}

//    <Box 
//   sx={{ 
//     position: "relative",
//     display: "flex",
//     flexDirection: "column",
//     width: "20rem", /* You can adjust the width as needed */
//     borderRadius: "1rem",
//     backgroundColor: "#fff",
//     backgroundClip: "border-box",
//     color: "#718096",
//     boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"}}>
// <Box sx={{
//      position: "relative",
//      margin: "0.5rem",
//      mt: "-6rem",
//      height: "10rem", /* Adjust the height as needed */
//      overflow: "hidden",
//      borderRadius: "1rem",
//      backgroundColor: "#6B7280",
//      backgroundClip: "border-box",
//      color: "#fff",
//      boxShadow: "0 2px 6px 0 rgba(59, 130, 246, 0.4)",
//      backgroundImage: "linear-gradient(to right, #3B82F6, #2563EB)"
//    }
//   }}></Box>


//   <Box class="p-6">
//     <Title class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//      Tailwind card
//     </Title>
//     <Typography class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula. 
//     </Typography>
//   </Box>
//   <Box class="p-6 pt-0">
//     <Button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
//       Read More
//     </Button>
//   </Box>
// </Box >

// <Box sx={{
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   p: "50px",
//   fontFamily: "Roboto, sans-serif",
// }}>

//   <Box sx={{
//     width: "24rem",
//     height: "25rem",
//     borderRadius: "10px",
//     overflow: "hidden",
//     cursor: "pointer",
//     position: "relative",
//     color: "white",
//     boxShadow: "0 10px 30px 5px rgba(0, 0, 0, 0.2)",
//     "&:hover":{transition: 'all 0.5s ease-in-out, background 0.6s linear, transform 0.4s linear 0.1s',
//     boxShadow: '0px 2px 5px 3px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
//     '& .text-card': {
//       inset: "auto auto 220px 30px",

//     },
//     '& .hidden-text': {
//       opacity: 1,
//       transition: "opacity .5s .1s ease-in-out",
//     },}

//   }}>

//     <img
//       alt=""
//       src={image}
//       style={{
//         position: "absolute",
//         objectFit: "cover",
//         width: "100%",
//         height: "100%",
//         top: 0,
//         left: 0,

//       }}
//     />


//     <Box >
//       <Title variant={{xs:"h5", md:"h3"}} className="text-card" sx={{
//         bgColor:"red",
//         position: "absolute",
//         inset: "auto auto 30px 30px",
//         m: "0",
//         transition: "inset .3s .175s ease-in-out",
//         fontFamily: "Roboto, sans-serif",

//       }}>
//         {title}
//       </Title>
//       <Typography className="hidden-text" sx={{
//         position: "absolute",
//         opacity: 0,
//         transition: "opacity .3s ease-out",
//         inset: "auto auto 80px 30px",   
//       }}>
//         {subtitle}
//       </Typography>

//       <Link href="/QA" className="hidden-text" sx={{
//         position: "absolute",
//         opacity: 0,
//         transition: "opacity .3s ease-out",
//         inset: "auto auto 40px 30px",
//         color: "inherit",
//         textDecoration: "none",
//         "&:hover": {
//           color: "blue",
//         }
//       }}>
//         <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
//         Find out more
//         <ArrowForwardIosIcon />
//         </Stack>

//       </Link>


//     </Box>
//   </Box>
// </Box>


export default ServiceCard;
