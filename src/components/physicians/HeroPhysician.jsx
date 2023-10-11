import * as React from "react";
import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import HeroPhysicianAnimation from "../../assets/lottie/HeroPhysicain.json";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function HeroPhysicain () {
  return (
       <>
        <Box
            sx={{
                margin: "2%",
                marginTop:'0'
            }}
        >
        <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
        <Link
            underline="hover"
            sx={{ display: 'flex',
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
          Physicians
        </Typography>
      </Breadcrumbs>
    </div>
        </Box>
        
        <Container
            sx={{
                // marginTop:"",
                display:'flex',
                justifyContent:"center",
                minHeight: "25vh",
                alignItems:"center",
                width:"100%",
                bgcolor:'white',
                borderRadius:"10px",
                
            }}
        >
            <Container sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
            <Typography variant="h1" textTransform="capitalize" sx={{
                marginBottom:'3%',
                color:'#062942'
            }}>
                    Our Physicians
                </Typography>
                <Typography
                    variant="h3"
                    textTransform="capitalize"
                    sx={{
                        color: '#1F485B',
                        textAlign: 'center',
                        // transform: `translateX(${isVisible ? 0 : '-110%'})`,
                        // transition: 'transform 1.5s ease',
                        // overflow: 'hidden',
                    }}
                >
                    Meet Our Team of Dedicated Physicians, Each with a Unique Story, but All Sharing the Same Goal - Your Well-Being
    </Typography>
                </Container>
                <Lottie animationData={HeroPhysicianAnimation} style={{width:"35%" }}/>
            
        </Container>
        </>
  )
}
