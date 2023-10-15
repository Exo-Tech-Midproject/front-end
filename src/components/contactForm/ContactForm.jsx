import React from 'react'
import { Container, TextField, Typography,  Stack ,IconButton,} from '@mui/material'
import Title from "../Title/index";
import OutlinedButton from "../Buttons/OutlinedButton";
import { footerContent } from "../../utils/content";
const {

  socials,
} = footerContent;
function ContactForm() {
  
  
  return (
   
    <Container sx={{py:2, minHeight: 70 , alignItems:"left",boxShadow: "1px 1px 5px #FFFFFF",  bgcolor:"white", 
    }}>
        <Stack direction="column" spacing={3} alignItems="center">

        <Title color="black" variant={{ xs: "h5", md: "h6" }}>Send Feedback</Title>

        <Typography variant="body2"  color="black">
            Fill out our convenient online contact form below, and we'll respond to your message as soon as possible. Fields marked with an asterisk (*) are required.
        </Typography>
        <TextField fullWidth  placeholder="Full Name"  />
        <TextField fullWidth  placeholder="Email"  />
        <TextField fullWidth  placeholder="Your Feedback" multiline maxRows={4} variant="outlined"/>
      
            <Stack width="100%">
              <OutlinedButton fullWidth sx={{my:3}}>
                Send     
            </OutlinedButton>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                {socials.map((item, i) => (
                  <IconButton sx={{color:"#1F485B"}} key={i}>
                    <item.icon />
                  </IconButton>
                ))}
              </Stack>
            </Stack>

        </Stack>
    </Container>

  )
}

export default ContactForm