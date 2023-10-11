import { Container, Grid, Stack, Typography, Box } from "@mui/material";

import Title from "../components/Title";
import { section5Content } from "../utils/content";


const { top, bottom } = section5Content;

const Section5 = () => {
  return (
    <Box sx={{ bgcolor: "#1F485B",py:10 }}>
      <Container sx={{ mt: { xs: 0, md: 5, lg: 0 }, color: "#1F485B" }}>
        {/* TOP */}
        <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
          {/* Left */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2} sx={{ maxWidth: 480 }}>
              <Title variant={{ xs: "h3", md: "h2" }} color="white">{top.title}</Title>

              <Typography variant="body2" color="white" sx={{ pb: 2, fontSize:"15px" }}>
                {top.subtitle}
              </Typography>
            </Stack>
          </Grid>
          {/* Right */}

          <Grid item xs={12} md={6}>
            <img
            alt=""
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
            alt=""
              src={bottom.Image}
              style={{
                width: "100%", height: "100%",
                borderRadius: "30px",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            />
          </Grid>

          {/* Right */}
          <Grid item xs={12} md={6} sx={{py:3,display:"flex", alignItems:"center", justifyContent:"center"}}>
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

export default Section5;
