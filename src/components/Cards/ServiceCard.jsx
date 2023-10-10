import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../Title";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ServiceCard = ({ title, subtitle, image }) => {
  return (
    // <Stack
    //   sx={{
    //     height: "100%",
    //     position: "relative",
    //     p: 4,
    //     borderRadius: "30px",
    //     "&::before": {
    //       content: '""',
    //       position: "absolute",
    //       inset: 0,
    //       borderRadius: "30px",
    //       border: "1px solid",
    //       background: "linear-gradient(120deg,#5f5f61,transparent) border-box",
    //       WebkitMask:
    //         "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
    //       WebkitMaskComposite: "xor",
    //       maskComposite: "exlude",
    //     },
    //   }}
    // >
    //   <Stack sx={{ height: "100%" }} spacing={1}>
    //     <Title variant="body1">{title}</Title>

    //     <Typography variant="body2" color="#7D7C7C">
    //       {subtitle}
    //     </Typography>

    //     <img
    //     alt=""
    //       src={image}
    //       style={{
    //         height: "100px",
    //         width: "100%",
    //         objectFit: "contain",
    //       }}
    //     />

    //     <OutlinedButton arrow fit>
    //       Learn more
    //     </OutlinedButton>
    //   </Stack>
    // </Stack>
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      p: "50px",
      fontFamily: "Roboto, sans-serif",
    }}>
      
      <Box sx={{
        width: "24rem",
        height: "25rem",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        color: "white",
        boxShadow: "0 10px 30px 5px rgba(0, 0, 0, 0.2)",
        "&:hover":{transition: 'all 0.5s ease-in-out, background 0.6s linear, transform 0.4s linear 0.1s',
        boxShadow: '0px 2px 5px 3px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        '& .text-card': {
          inset: "auto auto 220px 30px",
          
        },
        '& .hidden-text': {
          opacity: 1,
          transition: "opacity .5s .1s ease-in-out",
        },}
        
      }}>
        
        <img
          alt=""
          src={image}
          style={{
            position: "absolute",
            objectFit: "cover",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
           
          }}
        />
    
  
        <Box >
          <Title variant={{xs:"h5", md:"h3"}} className="text-card" sx={{
            bgColor:"red",
            position: "absolute",
            inset: "auto auto 30px 30px",
            m: "0",
            transition: "inset .3s .175s ease-in-out",
            fontFamily: "Roboto, sans-serif",
     
          }}>
            {title}
          </Title>
          <Typography className="hidden-text" sx={{
            position: "absolute",
            opacity: 0,
            transition: "opacity .3s ease-out",
            inset: "auto auto 80px 30px",   
          }}>
            {subtitle}
          </Typography>
          
          <Link className="hidden-text" sx={{
            position: "absolute",
            opacity: 0,
            transition: "opacity .3s ease-out",
            inset: "auto auto 40px 30px",
            color: "inherit",
            textDecoration: "none",
            "&:hover": {
              color: "blue",
            }
          }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{}}>
            Find out more
            <ArrowForwardIosIcon />
            </Stack>
           
          </Link>
          
       
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceCard;
