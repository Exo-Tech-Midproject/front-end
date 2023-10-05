// import { Container, Typography, Box } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// import { Stack } from "@mui/system";
import React from "react";
import Title from "../components/Title";
import { section3Content } from "../utils/content";

const { title, subtitle1, subtitle2 } = section3Content;

const Section3 = () => {
  return (
    <Box sx={{ mt: { xs: 0, md: 10 } }}>
      <Container >
        <Container maxWidth="md">
          <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center", color: "#1F485B", py: 1 }}>
            {title}
          </Title>
          <Typography variant="body1" sx={{ textAlign: "center", color: "#1F485B", py: 1 }}>
            {subtitle1}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", color: "#1F485B", py: 1 }}>
            {subtitle2}
          </Typography>
        </Container>
      </Container>
    </Box>

  );
};

export default Section3;
