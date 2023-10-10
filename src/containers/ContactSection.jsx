import React, { useState } from "react";
import { Container, Grid, Stack, Box, Typography, Button, Link } from "@mui/material";
import Title from "../components/Title";
import { Contactcontent } from "../utils/content";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from "../components/contactForm/ContactForm";
import BackHome from '../components/Buttons/BackHome'
const { top, Image } = Contactcontent;




const ContactSection = () => {


  return (
    <Box>
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <img style={{ width: "100%", height: "100%" }} src={Image} alt="" />
      </Box>
      <Container flexWrap="wrap" alignItems="center" sx={{ mt: { xs: 0, md: 5, lg: 10 } ,color:"white"}}>
        <Box
          sx={{
            bgcolor: "black",
            opacity: 0.5,
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
            height: "100%",

          }}
        ></Box>
        {/* TOP */}
        <Grid >
          
          <Box sx={{ position: "fixed", top: 20, left: 50  }}><BackHome /></Box>
          <Stack  direction="column" alignItems="center" spacing={2}>
        
            <Title variant={{ xs: "h4", md: "h3" }}>{top.title}</Title>

            <Typography variant="body2"  sx={{ textAlign: "center" }}>
              {top.body}
            </Typography>
          </Stack>
         
          
        </Grid>
        {/* BOTTOM */}
        <Grid
          container
          flexWrap="wrap"
          alignItems="center"
          sx={{ mt: { xs: 0, md: 5 }}}
        >
  
 
          {/* Left */}
          <Grid item xs={12} md={5} alignItems="center" >
            <Stack direction="column" alignItems="center" spacing={5}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <LocalPhoneIcon />
                <Stack direction="column" >
                  <Typography>Phone Number</Typography>
                  <Typography>+962 79 7777777</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2}>
                <EmailIcon />
                <Stack direction="column">
                  <Typography>Email</Typography>
                  <Typography>www@www.com</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          {/* Right */}
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>



  );
};

export default ContactSection;
