import React from 'react'
import { Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";
import groupAnimation from "../../assets/lottie/group.json";
import Container from "@mui/material/Container";
import PostContent from './GroupPost/PostContent';
import PostHeader from './GroupPost/PostHeader';

export default function Group() {
  return (
    <div>
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
          href="/dashboard/groups"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          My Groups
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="#4070f4"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Group
        </Typography>
      </Breadcrumbs>
    </div>
    <Container
            sx={{
                minHeight: "20vh",
                marginTop:"2%",
                width: "100%",
                bgcolor:'white',
                borderRadius: "3px",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#00222E",
                boxShadow:'0px 1px 2px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)',
            }}
        >
          <Lottie animationData={groupAnimation} style={{width:"35%"}}/>
            <Container sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
            <Typography variant="h2" textTransform="capitalize" sx={{
                marginBottom:'3%',
                color:'#062942'
            }}>
                    Healing Caring Leading
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
                        Transforming Lives Through Comprehensive Medical Care
    </Typography>
                </Container>
            
        </Container>
        </Box>
    <Box
      minHeight='80vh' 
      display='flex'
      maxWidth={'90%'}
      margin={"auto"}
      sx={
        {
          bgcolor:"white",
          boxShadow: 'inset 0px 2px 3px 0px rgba(0,0,0,0.4), inset 0px 1px 3px 0px rgba(0,0,0,0.12)',
          borderRadius: "5px",
          flexDirection:"column"
        }
      }>
        <PostHeader />
        <Box>
      <PostContent />
      </Box>

    </Box>
  </div>
  )
}
