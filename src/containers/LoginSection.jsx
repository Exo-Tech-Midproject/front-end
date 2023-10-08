import React, { useState } from "react";
// import { Container, Grid, Stack, Box, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Title from "../components/Title";
import { logincontent } from "../utils/content";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DoctorForm from "../components/LoginForm/DoctorForm";
import PatientForm from "../components/LoginForm/PatientForm";
import BackHome from '../components/Buttons/BackHome'
import CustomLink1 from '../components/Buttons/CustomLink1';
const { title, Image } = logincontent;


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


const LoginSection = () => {
  const [activeForm, setActiveForm] = useState("doctor");

  return (
    <Container sx={{ mt: { xs: 0, md: 5, lg: 10 }, width: "60%" }}>
      <Grid
        container
        flexWrap="wrap-reverse"
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
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              px: 2,
              height: "100%",
              borderRadius: "30px",
            }}
          >
            <Stack sx={{ maxWidth: 400 }}>
              <BackHome />
              <Typography color="white" variant="body1" sx={{ py: 1 }}>
                Login to your account
              </Typography>
              <img alt="doctorLogin" src={Image} style={{ width: "100%" }} />
              <Typography variant="body2" sx={{ py: 1, color: "#F1EFEF" }}>
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
            <Stack spacing={5} alignItems="center" sx={{ maxWidth: 400 }}>
              <Title color="black" variant={{ xs: "h4", md: "h5", py: 1 }}>
                {title}
              </Title>
              <Stack direction="row" spacing={5} alignItems="center" sx={{ height: "40px" }}>
                <CustomButton onClick={() => setActiveForm("doctor")} active={activeForm === "doctor"} sx={{ border: "1px solid #B4B4B3", width: "150px" }}>
                  <Typography sx={{ color: "black", fontSize: "15px", py: 1 }}>Login as a doctor</Typography>
                </CustomButton>
                <CustomButton onClick={() => setActiveForm("patient")} active={activeForm === "patient"} sx={{ border: "1px solid #B4B4B3", width: "150px" }}>
                  <Typography sx={{ color: "black", fontSize: "15px", py: 1 }}>Login as a patient</Typography>
                </CustomButton>
              </Stack>
              {activeForm === "doctor" ? <DoctorForm /> : <PatientForm />}
              <Stack direction="column" spacing={2} alignItems="center">
                        <CustomLink1 href="/ForgotPassword">
                            Forgot password?
                        </CustomLink1>
                        <Stack direction="row" spacing={1}>
                            <Typography variant="body2" color="#B4B4B3">Don't have an account?</Typography>
                            <CustomLink1 href="/Signup">Sign Up</CustomLink1>
                        </Stack>

                    </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginSection;