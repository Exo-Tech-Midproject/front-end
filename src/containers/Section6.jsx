
import React from "react";
import { Container, Grid, Stack, Box, Typography,  } from "@mui/material";
import Title from "../components/Title";
import { Contactcontent } from "../utils/content";

import ContactForm from "../components/contactForm/ContactForm";
const { top,  } = Contactcontent;


const Section6 = () => {
  return (
    <Box sx={{
    background: '#112731B0',
    py:2,
    backgroundImage: 'url("https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'overlay'}}>
    <Container flexWrap="wrap" alignItems="center">

    
      {/* BOTTOM */}
      <Grid
        container
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        
      >
        {/* Right */}
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  </Box>

  );
};

export default Section6;
