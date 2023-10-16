import React from 'react'

import Navbar from '../components/Navbars/MainNavbar'
import Footer from '../components/Footers/MainFooter'
import { Container, Box, Grid, Typography, Stack } from '@mui/material';
import Title from "../components/Title"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'; import Link from '@mui/material/Link';
import Lottie from "lottie-react";
import notFound from "../assets/lottie/notfound.json";


function NotFoundDashB() {

    return (

        <Stack direction="column" >
            <Box sx={{
                mt: 8,
                height: "400px",
                background: "#112731",
                backgroundImage: 'url("https://images.pexels.com/photos/4058362/pexels-photo-4058362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
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
                        Error Page
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
                            404
                        </Typography>
                    </Breadcrumbs>

                </Stack>
            </Box>
            <Box>
                <Stack sx={{ height: "100%", py: 3, bgcolor: "white" }} alignItems="center" justifyContent="center" direction="row">
                    <Lottie animationData={notFound} />
                    <Stack sx={{ height: "100%" }} alignItems="center" justifyContent="center" direction="column">

                        <Title
                            variant={{ xs: "h3", sm: "h2", md: "h1" }}
                            sx={{ letterSpacing: "0.02em", mb: 1, color: "#1F485B" }}
                        >
                            404
                        </Title>
                        <Title
                            variant={{ xs: "h3", sm: "h2", md: "h1" }}
                            sx={{ letterSpacing: "0.02em", mb: 1, color: "#1F485B" }}
                        >
                            Page Not Found
                        </Title>
                    </Stack>
                </Stack>

            </Box>
        </Stack>

    )
}

export default NotFoundDashB