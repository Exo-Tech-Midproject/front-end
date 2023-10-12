import React, { useState } from "react";
import { Container, Grid, Stack, Box, Typography, Button } from "@mui/material";
import Title from "../components/Title";
import { logincontent } from "../utils/content";
import DoctorForm from "../components/LoginForm/DoctorForm";
import PatientForm from "../components/LoginForm/PatientForm";
import BackHome from '../components/Buttons/BackHome'
import CustomLink1 from '../components/Buttons/CustomLink1';
import UpdatePasswordForm from "../components/UpdatePasswordForm/UpdatePasswordForm";
const { title, Image } = logincontent;

function ForgotPassordSection() {
  const CustomButton = ({ children, onClick, active }) => (
    <Button
      variant="outlined"
      sx={{
        borderRadius: 4,
        borderColor: "black",
        height: 58,
        px: 2,
        backgroundColor: active ? "#F1EFEF" : "transparent",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
  return (
 
    <Container sx={{ mt: { xs: 0, md: 5, lg: 10 }, }}>
    <Grid
      container
      flexWrap="wrap"
      sx={{
        mt: { xs: 0, md: 5 },
        height: "80vh",
        borderRadius: "30px",
        bgcolor: "#1A4A60",
        boxShadow: "1px 1px 5px #FFFFFF",
      }}
    >
      {/* Left */}
      <Grid item xs={6} md={4}>
        <Box
          sx={{
            
            height: "100%",
            borderRadius: "30px",
          }}
        >
          <Stack alignItems="center" p={5} spacing={4} >
            <BackHome />
            <Typography color="white" variant="body1">
              Forgot Your Password
            </Typography>
            <img alt="doctorLogin" src={Image} style={{ width: "100%" }} />
            <Typography variant="body2" sx={{  color: "#F1EFEF" }}>
            Join us today and take the first step towards a healthier, happier you.
            </Typography>
          </Stack>
        </Box>
      </Grid>

      {/* Right */}
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "30px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack spacing={5} alignItems="center" p={2}>
            <Title color="black" variant={{ xs: "h4", md: "h5" }}>
              Update Your Password
            </Title>
           <UpdatePasswordForm />
            <Stack direction="column" spacing={2} alignItems="center">
      <CustomLink1 href="/Login">
        Login
      </CustomLink1>
      <Stack direction="row" spacing={1}>
        <Typography variant="body2" color="#B4B4B3">
          Don't have an account?
        </Typography>
        <CustomLink1 href="/Signup">Sign Up</CustomLink1>
      </Stack>
    </Stack>       
          </Stack>
        </Box>
      </Grid>
    </Grid>
  </Container>
  )
}

export default ForgotPassordSection