import { Container, Grid, Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Title from "../components/Title";
import { section3Content } from "../utils/content";

const { title ,subtitle1,subtitle2, ITEMS } = section3Content;

const Section3 = () => {
  return (
    <Box sx={{bgcolor:"white",py:10 }}>
        <Container >
      <Container maxWidth="md">
        <Title variant={{ xs: "h4", md: "h5" }} sx={{ textAlign: "center" , color:"#1F485B", py:1}}>
          {title}
        </Title>
        <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center" , color:"#1F485B", py:1}}>
          {subtitle1}
        </Title>
        <Title variant={{ xs: "h5", md: "h6" }} sx={{ textAlign: "center" , color:"#1F485B", py:1}}>
          {subtitle2}
        </Title>
      </Container>

      <Grid container spacing={5} sx={{ mt: 4 }} justifyContent="center">
        {ITEMS.map(({ name, logo }) => (
          <Grid item xs={4} md={3} lg={2.4} key={name}>
            <Stack alignItems="center">
              <img
              alt=""
                src={logo}
                style={{ height: "80px", objectFit: "contain" }}
              />

              <Typography variant="body2" color="#1F485B">
                {name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  
  );
};

export default Section3;
