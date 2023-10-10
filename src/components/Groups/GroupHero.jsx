import * as React from "react";
import { useState, useEffect } from 'react';
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Lottie from "lottie-react";
import groupHeroAnimation from "../../assets/lottie/groupHero.json";

export default function GroupHero() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Use a setTimeout to delay the reveal effect after the component has mounted
      const revealTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 500); // Adjust the delay as needed
  
      return () => clearTimeout(revealTimeout);
    }, []);
  
    return (

        <Container
            width={"80%"}
            sx={{
                marginTop:"1%",
                display:'flex',
                justifyContent:"center",
                minHeight: "20vh",
                alignItems:"center"
            }}
        >
            <Container sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
            <Typography variant="h1" textTransform="capitalize" sx={{
                marginBottom:'3%',
                color:'#062942'
            }}>
                    Your Groups
                </Typography>
                <Typography
                    variant="h3"
                    textTransform="capitalize"
                    sx={{
                        color: '#1F485B',
                        textAlign: 'center',
                        transform: `translateX(${isVisible ? 0 : '-110%'})`, // Slide in from the left
                        transition: 'transform 1.5s ease', // Add a smooth transition effect to transform property
                        overflow: 'hidden',
                    }}
                >
                        For a Transformed Healthcare Experience
                        Where Your Wellness Takes Center Stage
    </Typography>
                </Container>
                <Lottie animationData={groupHeroAnimation} style={{width:"30%"}}/>
            
        </Container>
    )
}
