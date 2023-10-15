import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import imageURL from '../../assets/images/History/HeroHistory.jpg'
import {Box, Container} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";

// const imageURL = "https://img.freepik.com/premium-photo/medical-history-with-stethoscope-clipboard-black-desk_512283-640.jpg?size=626&ext=jpg&uid=R33434868&ga=GA1.2.2039131302.1685617875&semt=ais";

export default function HeroHistory() {
  return (
    <Box>
      <Box sx={{
            paddingLeft:"15px",
            marginBottom:"20px",
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
                backgroundSize: "cover",
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
                    margin:"50px"

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
                    fontSize: "1.7rem",
                    color:"white",
                    paddingLeft:"10px",
                    paddingRight:"10px",
                    lineHeight: '1.7',
                    margin:"0 50px 50px 70px"
                }}
            >
                Empowering Health Consciousness: A Comprehensive Approach to Keeping a Watchful Eye on Your Well being
            </Typography>
            </Box>
            {/* <Box sx={{
                width:"30%"
            }}>
            </Box> */}
        </Container>
    </Box>
  )
}