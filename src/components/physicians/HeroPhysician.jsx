import * as React from "react";
// import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Lottie from "lottie-react";
// import HeroPhysicianAnimation from "../../assets/lottie/HeroPhysicain.json";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function HeroPhysicain() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "75px",
            }}
        >
            <Box
                sx={{
                    background: "#112731BF",
                    backgroundImage: 'url("https://validtemplates.github.io/clinicom/assets/img/banner/4.jpg")',
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay",
                    width: "100%",
                    minHeight: "70vh",
                    display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "20%",
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h1"
                        sx={{
                            // fontSize: "4rem",
                            marginBottom: "35px",
                            color: "#ffffff",
                        }}
                    >
                        Our Doctors
                    </Typography>
                    <Typography
                        gutterBottom
                        // variant="h3"
                        sx={{
                            textAlign: "center",
                            fontSize: "2.5rem",
                            fontWeight: 500,
                            color: "white",
                            paddingLeft: "25px",
                            paddingRight: "10px",
                            lineHeight: "1.7",
                            margin: "0 50px 50px 70px",
                        }}
                    >
                        Making Health Care Better Together
                    </Typography>
                    <Box
                        sx={{
                            marginBottom: "20px",
                        }}
                    >
                        <div role="presentation">
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link
                                    underline="hover"
                                    sx={{display: "flex", alignItems: "center" , fontWeight:600}}
                                    color="white"
                                    href="/"
                                    
                                >
                                    <HomeIcon sx={{mr: 0.5}} fontSize="inherit" />
                                    Home
                                </Link>
                                <Link
                                    underline="hover"
                                    sx={{display: "flex", alignItems: "center" ,fontWeight:600}}
                                    color="white"
                                    href="/dashboard/Profile"
                                >
                                    <WhatshotIcon sx={{mr: 0.5}} fontSize="inherit" />
                                    Profile
                                </Link>
                                <Typography sx={{display: "flex", alignItems: "center" ,fontWeight:600}} color="#0cb8b6">
                                    <GrainIcon sx={{mr: 0.5}} fontSize="inherit" />
                                    Medical history
                                </Typography>
                            </Breadcrumbs>
                        </div>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
