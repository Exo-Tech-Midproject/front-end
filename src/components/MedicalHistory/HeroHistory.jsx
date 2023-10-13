import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import {Box, Container} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";

const imageURL = "https://accessclinics.org/wp-content/uploads/2015/01/homeparallax.jpg";

export default function HeroHistory() {
  return (
    <div>
      <Box sx={{
            paddingLeft:"15px",
            marginBottom:"10px"
        }}>
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
          Medical history
        </Typography>
      </Breadcrumbs>
    </div>
    </Box>
        <Container
            sx={{
                backgroundImage: `url(${imageURL})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "50vh",
                width: "100%",
                bgcolor:'white',
                margin:"5px auto",
                borderRadius: "5px",
                display: "flex",
                // justifyContent: "start",
                alignItems: "center",
                color: "#00222E",
                boxShadow:'0px 1px 2px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)',
            }}
        >
            <Box sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center",

            }}>
            <Typography
                gutterBottom
                sx={{
                    fontSize: "4rem",
                    marginBottom:"40px",
                    color:"#ffffff"
                }}
            >
                Best Medical Care
            </Typography>
            <Typography
                gutterBottom
                sx={{
                    textAlign: 'center',
                    fontSize: "1.5rem",
                    
                }}
            >
                Empowering Health Consciousness: A Comprehensive Approach to Keeping a Watchful Eye on Your Well-being
            </Typography>
            </Box>
            <Box sx={{
                width:"30%"
            }}>
            </Box>
        </Container>
    </div>
  )
}