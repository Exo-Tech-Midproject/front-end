
import { Box, Breadcrumbs, Link, Stack, Typography } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'
// Link
import HomeIcon from '@mui/icons-material/Home';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { motion } from 'framer-motion';
// import Link from '@mui/material/Link';

export default function HeroSection() {
  return (
    <Box sx={{
      mt: 8,
      height: "400px",
      background: "#112731BF",
      backgroundImage: 'url("https://images3.alphacoders.com/695/695586.jpg")',
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      objectFit: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'overlay'
    }}
    >
      <Stack sx={{ height: "100%" }} alignItems="center" justifyContent="center">
        <Typography
          variant='h1'
          component={motion.h1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          sx={{ letterSpacing: "0.02em", mb: 1, color: "white" }}
        >
          Patient Control
        </Typography>

        <Breadcrumbs aria-label="breadcrumb">
          <Link
            href="/"
            underline="hover"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
            color="white"

          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Typography
          
            sx={{ display: 'flex', alignItems: 'center', textDecoration: "underline" }}
            color="#67ABCB"
          >
            <PanoramaFishEyeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Patient-Control
          </Typography>
        </Breadcrumbs>

      </Stack>
    </Box>
  )
}
