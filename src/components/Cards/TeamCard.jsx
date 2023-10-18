import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../Title";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const ServiceCard = ({ title, subtitle }) => {
  return (

    <Container >
      <Box sx={{
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
        padding: "20px",
        maxWidth: "320px",
        transition: "all 0.5s",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        "&:hover":{ boxShadow: "0 0 40px rgba(0, 0, 0, 0.8)",}
      }}>
        <Box >
          <AccountCircleOutlinedIcon />
        </Box>
        <Box c>
          <Title variant="h4" sx={{ color:"black"}}>{title}</Title>
          <Typography variant="body2" sx={{fontSize:"15px", color:"gray"}}>@{subtitle}</Typography>
        </Box>
        <Box  sx={{
             fontSize: "24px",
             backgroundColor: "white",
             color: "#fff",
             padding: "10px",
             borderRadius: "50%",
             transition: "all 0.5s",
             "&:hover":{
              transform: "scale(1.1)",
             }
          }}>
          <Stack alignItems="center" justifyContent="center" direction="row" spacing={3}>
            <Link><FacebookRoundedIcon sx={{ color: "#1F485B" }} /></Link>
            <Link><GitHubIcon sx={{ color: "#1F485B" }} /></Link>
            <Link><TwitterIcon sx={{ color: "#1F485B" }} /></Link>
          </Stack>
        </Box>
      </Box>
    </Container>

    //   <Container className="flex-container">

    //   <Box sx={{
    //     borderRadius: "20px",
    //     overflow: "hidden",
    //     position: "relative",
    //     textAlign: "center",
    //     padding: "20px",
    //     maxWidth: "320px",
    //     transition: "all 0.5s",
    //     boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
    //   }}>
    //     <Box className="icon-container">
    //       <Box className="icon">
    //         <AccountCircleOutlinedIcon />
    //       </Box>
    //       <Box className="icon">
    //         {title}
    //       </Box>
    //       <Box  sx={{
    //          fontSize: "24px",
    //          backgroundColor: "#555",
    //          color: "#fff",
    //          padding: "10px",
    //          borderRadius: "10%",
    //          transition: "all 0.5s",
    //          "&:hover":{
    //           transform: "scale(1.1)",
    //          }
    //       }} className="icon">
    //       <Stack direction="row" > 
    //        <Link><FacebookRoundedIcon  sx={{color:"#1F485B"}}/></Link>
    //        <Link><GitHubIcon  sx={{color:"#1F485B"}}/></Link>
    //        <Link><TwitterIcon  sx={{color:"#1F485B"}}/></Link>
    //        </Stack>
    //       </Box>
    //     </Box>
    //     {/* Other content for the card */}
    //   </Box>
    // </Container>

    // <Box sx={{
    //   position: "relative",
    //   width: "20rem", /* You can adjust the width as needed */
    //   borderRadius: "1rem",
    //   backgroundColor: "#FFFCFA",
    //   backgroundClip: "border-box",
    //   color: "#718096",
    //   boxShadow: "0 6px 8px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    // }}>
    //   <Box sx={{
    //     position: "relative",
    //     m: "0.5rem",
    //     height: "10rem", /* Adjust the height as needed */
    //     overflow: "hidden",
    //     borderRadius: "1rem",
    //    bgcolor:"white",
    //     color: "#fff",
    //     boxShadow: "0 4px 8px 0 rgba(59, 130, 246, 0.4)",
    //   }}>

    //   </Box >
    //   <Box px={5} alignItems="center" justifyContent="center">
    //     <Title sx={{
    //       display: "block",
    //       fontFamily: "sans-serif",
    //       fontFize: "1.25rem",
    //       fontWeight: 600,
    //       lineHeight: "1.6",
    //       letterSpacing: "normal",
    //       color: "#374151",
    //     }}>
    //       {title}
    //     </Title>
    //     <Typography sx={{
    //       display: "block",
    //       fontFamily: "sans-serif",
    //       fontSize: "1rem",
    //       fontWeight: "300",
    //       lineHeight: "1.5",
    //       color: "inherit",
    //     }}>
    //       {subtitle}
    //     </Typography>
    //   </Box>
    //   <Box alignItems="center" justifyContent="center" sx={{px:10, py:2}}>
    //     <Stack direction="row" spacing={2} alignItems="center" justifyContent="center"> 
    //     <Link><FacebookRoundedIcon  sx={{color:"#1F485B"}}/></Link>
    //     <Link><GitHubIcon  sx={{color:"#1F485B"}}/></Link>
    //     <Link><TwitterIcon  sx={{color:"#1F485B"}}/></Link>
    //     </Stack>
    //   </Box>
    // </Box>

  );
};

export default ServiceCard;
