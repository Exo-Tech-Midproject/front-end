import React from 'react'
import { Container, TextField, Typography, Button, Stack } from '@mui/material'

import Title from "../Title/index";

function ContactForm() {


  return (

    <Container sx={{
      py: 2, minHeight: 70, alignItems: "left", boxShadow: "1px 1px 5px #FFFFFF", bgcolor: "white",
    }}>

      <Stack direction="column" spacing={3} alignItems="center">

        <Title color="black" variant={{ xs: "h5", md: "h6" }}>Send Feedback</Title>

        <Typography variant="body2" color="black">
          Fill out our convenient online contact form below, and we'll respond to your message as soon as possible. Fields marked with an asterisk (*) are required.
        </Typography>
        <TextField fullWidth placeholder="Full Name" />
        <TextField fullWidth placeholder="Email" />
        <TextField fullWidth placeholder="Your Feedback" multiline maxRows={4} variant="outlined" />

        <Button fullWidth type="submit" variant="contained" sx={{ bgcolor: "blue" }} >Send</Button>

      </Stack>
    </Container>

  )
}

export default ContactForm