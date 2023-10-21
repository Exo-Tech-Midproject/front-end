

import Navbar from '../components/Navbars/MainNavbar'
import Footer from '../components/Footers/MainFooter'
import { Box, Grid, Typography, Stack, Container,Divider,Button } from '@mui/material';
import Title from "../components/Title"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'; import Link from '@mui/material/Link';
import { AboutUsSectionContent } from "../utils/content";
import TeamCard from "../components/Cards/TeamCard";
import ImgList from '../components/ImgList/ImgList';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AboutProject from '../components/AboutProject/AboutProject';
const { ITEMS } = AboutUsSectionContent;

function AboutUs() {

  return (

    <Stack direction="column" height="100%">
      <Navbar />
      <Box sx={{
        mt: 8,
        height: "300px",
        background: "#163340",
        backgroundImage: 'url("https://images.pexels.com/photos/2887795/pexels-photo-2887795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}>
        <Container>
          <Stack py={5} alignItems="center" justifyContent="center">
            <Title
              variant={{ xs: "h3", sm: "h2", md: "h1" }}
              sx={{ letterSpacing: "0.02em", mb: 1, color: "white" }}
            >
              About Exo-tech Team
            </Title>
            <Typography
              variant="body2"
              sx={{ letterSpacing: "0.02em", mb: 1, color: "white", fontSize: "20px" }}
            >
              Our project team, consisting of diverse and dedicated individuals, is united by a common vision to revolutionize healthcare access through our innovative platform, Healthak. Each team member brings a unique set of skills and expertise to the table, ensuring a well-rounded approach to addressing the challenges in healthcare management.
            </Typography>


            <Breadcrumbs aria-label="breadcrumb">
              <Link
                href="/"
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }} color="white"><HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Home
              </Link>
              <Typography
                sx={{ display: 'flex', alignItems: 'center', textDecoration: "underline" }} color="#67ABCB">
                <PanoramaFishEyeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                About us
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Container>

      </Box>
      <Box sx={{ bgcolor: "white", width: "100%", height: "100%", py: 5 }}>
        <Container>
          <Grid container spacing={2}  >
            {ITEMS.map((item) => (
              <Grid item xs={12} md={3} key={item.title}>
                <TeamCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>

      </Box>
      <Box sx={{ bgcolor: "white", }}>
        <Container>
          <Stack direction="row" spacing={5}>
            <AboutProject />
          <ImgList />
          </Stack>

        </Container>
      </Box>
      <Box sx={{ width: "100%", height: "50vh",bgcolor:"white"}}>
      <Container sx={{ height: "100%" }} justifyContent="center" alignItems="center">
      <Stack  direction="row" sx={{ height: "100%" }} justifyContent="center" alignItems="center">
      <Container >
        <Title variant={{ xs: "h5", md: "h6" }} sx={{ color: "#1F485B", py: 1 }}>One Of the Famous Hospitals</Title>
        <Typography variant="body2" sx={{fontSize: "15px", color: "gray", pb: 1 }}>
              One of the famous hospitals known for its excellence in healthcare is the Mayo Clinic. Located in Rochester, Minnesota, the Mayo Clinic is renowned for its top-notch medical care, cutting-edge research, and patient-centered approach. It has a long-standing history of providing high-quality healthcare services across a wide range of medical specialties and is often recognized for its commitment to patient well-being. The Mayo Clinic has multiple campuses and facilities across the United States, making it a destination for patients seeking world-class medical treatment and expertise.</Typography>
              <Divider color="#1F485B" sx={{  mb: 2 }} />
              <Stack spacing={1} direction="row" alignItems="center"  sx={{width: "100%", }}>
              <AccountCircleOutlinedIcon sx={{ color: "black" }} />
              <Stack direction="column" spacing={0.4}>
                <Typography sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#1F485B"
                }}>Tasneem Hassasneh</Typography>
                <Typography sx={{
                  fontWeight: "600",
                  fontSize: "10px",
                  color: "#47484b",
                }}>@Software_Developer</Typography>
              </Stack>
            </Stack>
      </Container>
      <Container sx={{ width:700 , alignItems:"center", justifyContent:"center", textAlign:"center"}}>
        <Title variant={{ xs: "h5", md: "h6" }} sx={{color: "#1F485B", py: 1 }}>We're Are Here For You</Title>
        <Typography variant="body2" sx={{  fontSize: "15px", color: "gray", pb: 2 }}>We are here to provide you with expert guidance and information on all things related to medicine on our website. Whether you're seeking advice on a specific medical condition, looking for insights into the latest healthcare developments, or simply curious about general health and wellness, our platform is your trusted resource.</Typography>
      <Button  variant='contained' sx={{bgcolor:"#1F485B"}}>Contact Us</Button> 
      </Container>
      </Stack >
      </Container>
    </Box >
    <Divider color="#1F485B"  />
      <Footer />
    </Stack>

  )
}

export default AboutUs