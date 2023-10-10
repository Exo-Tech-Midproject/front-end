import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
  Link
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { footerContent } from "../../utils/content";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";
import { useEffect, useRef } from 'react';
import Lottie from "lottie-react";
import animation from "./animation_lnixerue.json"
const {
  subscribe,
  protocols,
  governance,
  support,
  developers,
  copyright,
  socials,
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
    <Box sx={{bgcolor:"white", color:"#1F485B"}}>
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

          {/* Subscribe */}
          <Grid item xs={12} md={12} lg={5} xl={4}>
          <Lottie  animationData={animation} style={{ width: '50%' }} />
          </Grid>
        </Grid>

        <Divider color="#1F485B" sx={{ mt: 6, mb: 5 }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ pb: 6}}
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
