import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
// import CountUp from "react-countup";
import Title from "../components/Title";
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import { section2Content } from "../utils/content";

const { items } = section2Content;

const CustomCounter = ({
  title,
  subtitle,
}) => (
  <Stack spacing={{ xs: 1, md: 2 }} alignItems="center" >
    <Diversity1OutlinedIcon sx={{ color: "white" }} />
    <Title color="white" variant={{ xs: "h6", md: "h5" }} >
      {title}
    </Title>

    <Typography variant="body2" color="white" sx={{pb:1}}>
      {subtitle}
    </Typography>
  </Stack>
);

const Section2 = () => {
  return (
    <Container >
      <Box
        sx={(theme) => ({
          position: "relative",
          top:50,
          bgcolor: "#1F485B",
          borderRadius: "40px",
          [theme.breakpoints.up("sm")]: {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              border: "2px solid transparent",
              borderRadius: "40px",
              background: "linear-gradient(180deg,#1F485B,transparent) border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exlude",
            },
          },
        })}
      >
        <Grid container spacing={3} justifyContent="space-around">
          {items.map((item) => (
            <Grid item xs={12} md={3} key={item.subtitle}>
              <CustomCounter {...item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Section2;
