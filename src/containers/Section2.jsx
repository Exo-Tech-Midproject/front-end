import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import Title from "../components/Title";
import { section2Content } from "../utils/content";
import Counter from "../components/Counter/Counter";
const { items } = section2Content;
// const NumberEasing = require('che-react-number-easing');
const CustomCounter = ({
  before = "",
  after = "",
  counter,
  subtitle,
  decimals = false,
  // maxNum
}) => (
  <Stack spacing={{ xs: 1, md: 2 }} alignItems="center">

    <Title variant={{ xs: "h4", md: "h2" }} sx={{ fontWeight: 300 }}>
      <Counter minimum={0} maximum={counter} />
    </Title>


    <Typography variant="body2" color="white">
      {subtitle}
    </Typography>
  </Stack>
);

const Section2 = () => {
  return (
    <Container sx={{}}>
      <Box
        sx={(theme) => ({
          color: "white",
          position: "relative",
          py: 2,
          bgcolor: "#296079",
          borderRadius: "50px",
          [theme.breakpoints.up("sm")]: {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              border: "2px solid transparent",
              borderRadius: "50px",
              background: "linear-gradient(180deg,#296079,transparent) border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exlude",
            },
          },
        })}
      >
        <Grid container spacing={3} justifyContent="space-between">
          {items.map((item) => (
            <Grid item xs={6} md={3} key={item.subtitle}>
              <CustomCounter {...item} />
            </Grid>
          ))}
        </Grid>

      </Box>
    </Container>
  );
};

export default Section2;
