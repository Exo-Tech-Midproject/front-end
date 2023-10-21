import * as React from "react";
import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import groupHeroAnimation from "../../assets/lottie/groupHero.json";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export default function GroupHero() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use a setTimeout to delay the reveal effect after the component has mounted
    const revealTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 600); // Adjust the delay as needed

    return () => clearTimeout(revealTimeout);
  }, []);

  return (
    <Box sx={{
      paddingX: "36px"
    }}>
      <Box>
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
              color="#062942"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="#062942"
              href="/dashboard/Profile"
            >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Profile
            </Link>
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              color="#4070f4"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Groups
            </Typography>
          </Breadcrumbs>
        </div>
      </Box>

      <Box
        // width={"80%"}
        sx={{
          // marginTop:"2%",
          display: 'flex',
          justifyContent: "center",
          minHeight: "40vh",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography variant="h1" textTransform="capitalize" sx={{
            marginBottom: '3%',
            color: '#062942'
          }}>
            Get Better Health
          </Typography>
          <Typography
            variant="h3"
            textTransform="capitalize"
            sx={{
              color: '#1F485B',
              textAlign: 'center',
              transform: `translateX(${isVisible ? 0 : '-110%'})`,
              transition: 'transform 1.5s ease',
              overflow: 'hidden',
            }}
          >
            For a Transformed Healthcare Experience
            Where Your Wellness Takes Center Stage
          </Typography>
        </Container>
        <Lottie animationData={groupHeroAnimation} style={{ width: "60%" }} />

      </Box>
    </ Box>
  )
}
