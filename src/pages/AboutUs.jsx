

import Navbar from '../components/Navbars/MainNavbar'
import Footer from '../components/Footers/MainFooter'
import { Box, Grid, Typography, Stack, Container } from '@mui/material';
import Title from "../components/Title"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'; import Link from '@mui/material/Link';
import { AboutUsSectionContent } from "../utils/content";
import TeamCard from "../components/Cards/TeamCard";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const { ITEMS } = AboutUsSectionContent;

function AboutUs() {

  return (

    <Stack direction="column" >
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

            <Container maxWidth="md">

              <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center", color: "#1F485B", py: 1 }}>
                HEALTHAK
              </Title>
              <Title variant={{ xs: "h5", md: "h6" }} sx={{ textAlign: "center", color: "#1F485B", py: 1 }}>
                About the Project
              </Title>
              <Typography variant="body2" sx={{ textAlign: "center", fontSize: "15px", color: "gray", py: 1 }}>
                Healthak is a portable Pharmacy/Clinic web application that aims to provide medical services, patient profiles, disease control, physician dashboards, patient groups, appointment scheduling, and communication channels. The application's focus is on providing seamless communication between patients and physicians, personalized patient health tracking, and educational resources for patients. Physicians can monitor their patients' health, receive alerts, and engage in real-time consultations.
              </Typography>
              <Title variant={{ xs: "h5", md: "h6" }} sx={{ textAlign: "center", color: "#1F485B", py: 1 }}>
                Emergancy Care
              </Title>
              <Stack direction="row" spacing={4} alignItems="center" justifyContent="center">
                <Stack direction="column" spacing={2}> <Typography
                  sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
                  <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
                  Primary Care
                </Typography>
                  <Typography
                    sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
                    <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
                    Medicine
                  </Typography>
                  </Stack>
                <Stack direction="column" spacing={2}>
                  <Typography
                    sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
                    <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
                    Orthopedic
                  </Typography>
                  <Typography
                    sx={{ display: 'flex', alignItems: 'center', color: "gray", py: 1 }}>
                    <CheckCircleIcon sx={{ mr: 0.5, color: "green" }} fontSize="inherit" />
                    Cardiology
                  </Typography>
                </Stack>
              </Stack>
            </Container>
            <ImageList
              sx={{ width: 800, height: 450 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>

        </Container>
      </Box>
      {/* <Footer /> */}
    </Stack>

  )
}

export default AboutUs
const itemData = [
  {
    img: 'https://images.pexels.com/photos/12585207/pexels-photo-12585207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/4047070/pexels-photo-4047070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Burger',
  },
  {
    img: 'https://images.pexels.com/photos/3652103/pexels-photo-3652103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Camera',
  },
  {
    img: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/7526052/pexels-photo-7526052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/7856721/pexels-photo-7856721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/8376163/pexels-photo-8376163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Basketball',
  },
  {

    img: 'https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Fern',
  },
  {
    img: 'https://images.pexels.com/photos/3873137/pexels-photo-3873137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.pexels.com/photos/8940479/pexels-photo-8940479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.pexels.com/photos/7722797/pexels-photo-7722797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Sea star',
  },
  {
    img: 'https://images.pexels.com/photos/3825573/pexels-photo-3825573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Bike',
    cols: 2,
  },
];