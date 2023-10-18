import React from 'react'
import Title from '../components/Title';
import Navbar from '../components/Navbars/MainNavbar'
import Typography from '@mui/material/Typography';
import ServiceCard from "../components/Cards/ServiceCard";
import Footer from '../components/Footers/MainFooter'
import { Box,  Stack } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'; 
import Link from '@mui/material/Link';


function QACategoriesSection() {

  return (

    <Stack direction="column" >
      <Navbar />
      <Box sx={{
        mt: 8,
        height: "250px",
        background: "#112731",
        backgroundImage: 'url("https://images.pexels.com/photos/3652097/pexels-photo-3652097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
      >
        <Stack sx={{ height: "100%" }} alignItems="center" justifyContent="center">
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1, color: "white" }}
          >
            Categories
          </Title>

          <Breadcrumbs aria-label="breadcrumb">
            <Link
              href="/"
              underline="hover"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              color="white"

            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Typography
              sx={{ display: 'flex', alignItems: 'center', textDecoration: "underline" }}
              color="#67ABCB"
            >
              <PanoramaFishEyeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Category
            </Typography>
          </Breadcrumbs>

        </Stack>
      </Box>
      <Box>
        <Stack sx={{ height: "100%", py: 3, bgcolor: "#EBF2FE" }} alignItems="center" justifyContent="center" direction="row">
          <ServiceCard />
        </Stack>

      </Box>

      <Footer />
    </Stack>



  )
}

export default QACategoriesSection