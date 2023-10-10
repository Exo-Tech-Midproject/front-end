import { Container, Grid, Stack, Box, Typography, Button, Link } from "@mui/material";
import React, { useState } from "react";
import Title from "../components/Title";
import { signupcontent } from "../utils/content";
import DoctorForm from "../components/SignUpForm/DoctorForm/DoctorForm";
import PatientForm from "../components/SignUpForm/PatientForm/PatientForm";
import BackHome from "../components/Buttons/BackHome"
import CustomLink1 from "../components/Buttons/CustomLink1"
const { title, Image } = signupcontent;
const CustomButton = ({ children, onClick, active }) => (
  <Button
    variant="outlined"
    sx={{
      borderRadius:2,
      border: "1px solid #B4B4B3",
      width: "150px" ,
      borderColor: "white",
      height: 58,
      px: 2,
      boxShadow: "1px 1px 3px #FFFFFF",
      backgroundColor: active ? "#088395" : "transparent",
      color:  "white",
    }}

    onClick={onClick}
  >
    {children}
  </Button>
);

const SignupSection = () => {
  const [activeForm, setActiveForm] = useState("doctor");
  return (
    <Container >
      <Grid
        container
        flexWrap="wrap"
        sx={{
          mt: { xs: 0, md: 5 }, borderRadius: "30px", bgcolor: "#1A4A60", boxShadow: "1px 1px 5px #FFFFFF"
        }}
      >
        {/* Left */}
        <Grid item xs={6} md={4}>
          <Box sx={{
            height: "100%",
            borderRadius: "30px",
          }}>
            <Stack alignItems="center" p={5} spacing={4}>
            <BackHome />
              <Typography color="white" variant="body1">Getting Started With Healthak</Typography>
              <img alt="doctorLogin" src={Image} style={{ width: "100%" }} />
              <Stack direction="row" spacing={5} alignItems="center" sx={{ height: "40px" }}>
                <CustomButton onClick={() => setActiveForm("doctor")} active={activeForm === "doctor"}>
                  <Typography sx={{ fontSize: "15px", }}>Signup as a doctor</Typography>
                </CustomButton>
                <CustomButton onClick={() => setActiveForm("patient")} active={activeForm === "patient"}>
                  <Typography sx={{  fontSize: "15px", }}>Signup as a patient</Typography>
                </CustomButton>
              </Stack>
              <Typography variant="body2" sx={{  color: "#F1EFEF" }}>Start your journey to better health by signing up today.</Typography>
            </Stack>
          </Box>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={8}>
          <Box sx={{
            height:"100%",
            bgcolor: "white",
            borderRadius: "30px",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            
            <Stack  alignItems="center" p={2}>

              <Title color="black" variant={{ xs: "h4", md: "h5",  }}>{title}</Title>
              {activeForm === "doctor" ? <DoctorForm /> : <PatientForm />}
              <Stack direction="row" spacing={1}>
                  <Typography variant="body2" color="#B4B4B3">Alraedy have an account?</Typography>
                  <CustomLink1 href="/Login">Login</CustomLink1>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignupSection;
