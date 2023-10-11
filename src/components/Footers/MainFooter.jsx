import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { footerContent } from "../../utils/content";

import Title from "../Title";

const {
  protocols,
  governance,
  support,
  developers,
  copyright,
} = footerContent;

const LinkSection = ({ title, links }) => (
  <Stack spacing={2.5}>
    <Title color="#1F485B">{title}</Title>

    {links.map(({ title }) => (
      <Typography
        key={title}
        variant="body2"
        color="#1F485B"
        sx={{
          cursor: "pointer",
          "&:hover": {
            color: "blue",
          },
        }}
      >
        {title}
      </Typography>
    ))}
  </Stack>
);

const Footer = () => {

  return (
    <Box sx={{ bgcolor: "white", color: "#1F485B" }}>
      <Divider color="#1F485B" sx={{ mb: 10 }} />

      <Container>
        <Grid container spacing={8} flexWrap="wrap-reverse">
          {/* Links */}
          <Grid item xs={12} md={6} lg={7} xl={8}>
            <Grid container spacing={2}>
              {/* Protocols */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...protocols} />
              </Grid>

              {/* Governance */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...governance} />
              </Grid>

              {/* Support */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...support} />
              </Grid>

              {/* Developers */}
              <Grid item xs={6} sm={3} md={6} lg={3}>
                <LinkSection {...developers} />
              </Grid>
            </Grid>
          </Grid>

          {/* Map */}
          <Grid item xs={12} md={12} lg={5} xl={4}>
            <Title>Our Location</Title>
            <Typography variant="body2" sx={{fontSize:"15px", py:1}}>Find us on the map and explore our location to plan your visit</Typography>
            <iframe
              title="This is a descriptive and unique title"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13539.779386182174!2d35.83035835791401!3d31.962392934231353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca17027399b3d%3A0x47daa3f5a2309002!2sAl%20Jandawil%2C%20Amman!5e0!3m2!1sen!2sjo!4v1696936029682!5m2!1sen!2sjo"
              width="400"
              height="200"
              style={{ border: "1px solid transparent",borderRadius: "30px",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">

            </iframe>
          </Grid>
        </Grid>

        <Divider color="#1F485B" sx={{ mt: 6, mb: 5 }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ pb: 6 }}
        >
          <Typography variant="body2" color="#1F485B">
            {copyright.left}
          </Typography>

          <Typography variant="body2" color="#1F485B">
            {copyright.center}
          </Typography>

          <Typography variant="body2" color="#1F485B">
            {copyright.right}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
