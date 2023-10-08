// import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import Title from "../components/Title";
import { section6Content } from "../utils/content";


const { top, bottom } = section6Content;

const Section6 = () => {
  return (
    <Box sx={{ bgcolor: "#1F485B", height: "140vh" }}>
      <Container sx={{ mt: { xs: 0, md: 5, lg: 10 }, color: "#1F485B" }}>
        {/* TOP */}
        <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
          {/* Left */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2} sx={{ maxWidth: 480 }}>
              <Title variant={{ xs: "h3", md: "h2" }} color="white">{top.title}</Title>

              <Typography variant="body2" color="white" sx={{ pb: 2 }}>
                {top.subtitle}
              </Typography>
            </Stack>
          </Grid>
          {/* Right */}

          <Grid item xs={12} md={6}>
            <img
              alt="doctor-pic"
              src={top.image}
              style={{ width: "100%", objectFit: "contain", height: "100%" }}
            />
          </Grid>

          {/*Bottom */}
        </Grid>
        <Grid
          container
          spacing={0}
          flexWrap="wrap-reverse"
          sx={{ mt: { xs: 0, md: 5 }, bgcolor: "white", borderRadius: "30px" }}
        >
          {/* Left */}
          <Grid item xs={12} md={6}>
            <img
              alt="img-section6"
              src={bottom.Image}
              style={{
                width: "100%", height: "100%",
                borderRadius: "30px",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            />
          </Grid>

          {/* Right */}
          <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Stack spacing={2} sx={{ maxWidth: 400 }}>
              <Title variant={{ xs: "h4", md: "h5" }}>{bottom.title}</Title>
              <Title variant={{ xs: "h3", md: "h2" }}>{bottom.subtitle}</Title>
              <Typography variant="body1">{bottom.body}</Typography>
            </Stack>
          </Grid>
        </Grid>



      </Container>
    </Box>

  );
};

export default Section6;