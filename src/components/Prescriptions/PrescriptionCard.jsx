import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
// import recipePic from '../../assets/images/prescriptions/Recipe.svg'
import recipePicjpg from '../../assets/images/prescriptions/7944895.jpg'
import { Box, Typography } from '@mui/material';
import DrugTable from './DrugsTable';
export default function PrescriptionCard() {
    const slides = [
        {
            backgroundImage: `url(${recipePicjpg})`,
            // content: 'Content Over Image 1',
        },
        {
            backgroundImage: `url(${recipePicjpg})`,
            // content: 'Content Over Image 2',
        },
        {
            backgroundImage: `url(${recipePicjpg})`,
            // content: 'Content Over Image 2',
        },
        {
            backgroundImage: `url(${recipePicjpg})`,
            // content: 'Content Over Image 2',
        },
        {
            backgroundImage: `url(${recipePicjpg})`,
            // content: 'Content Over Image 2',
        },
        {
            backgroundImage: `url(${recipePicjpg})`,
            // content: 'Content Over Image 2',
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // adaptiveHeight: true,
        lazyLoad: true,
        responsive: [
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: true
            //     }
            // },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 924,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]
    };
    return (
        <>

            <Slider {...settings} >
                {slides.map((slide, index) => (
                    <div key={index}>
                        <Box height='90%' display='flex' alignContent='center' justifyContent='center'  py={3}>
                            <Box
                                position='relative'
                                height='600px'
                                borderRadius={1}
                                width={'95%'}
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                                padding='1rem'
                                boxShadow='0px 2px 3px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
                                sx={{
                                    backgroundImage: slide.backgroundImage,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    '&:hover': {
                                        transform: 'scale(1) translateY(-20px)',
                                        transition: 'all 0.5s ease-in-out, background 0.6s linear, transform 0.4s linear 0.1s',
                                        boxShadow: '0px 2px 5px 3px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                                    },
                                }}
                            >
                                <Typography color='white' position='absolute' top='20px' left='10px' variant="h5" component="div">
                                    HEALTHAK
                                </Typography>
                                <Typography color='#FAFAFAEE' position='absolute' top='10px' right='10px' fontSize={10} fontWeight={100} component="div">
                                    Address: Amman, 7th circle<br />
                                    Phone No.: 07866881100<br />
                                    Email: haznto@gmail.com<br />
                                </Typography>
                                <Typography textTransform='uppercase' color='#3E90B6' position='absolute' top='25%' variant="body2" fontWeight={700} component="div">
                                    MD.Hasan Tommalieh <br />
                                    <Typography textAlign='center' color='#1F485B' textTransform='uppercase' fontSize={10}>
                                        Neurology
                                    </Typography>
                                    <Typography letterSpacing={1} textAlign='center' textTransform='initial' color='#1F485B' fontSize={8}>
                                        ID.No. 999999
                                    </Typography>
                                </Typography>
                                <Typography color='#1F485B' position='absolute' top='40%' left='30px' fontSize={10} fontWeight={100} component="div">
                                    Patient's Name: Anas Nemrawi
                                </Typography>
                                <Typography color='#1F485B' position='absolute' top='45%' left='30px' fontSize={10} fontWeight={100} component="div">
                                    Date of birth: 01-04-2000
                                </Typography>
                                <Typography color='#1F485B' position='absolute' top='50%' left='30px' fontSize={10} fontWeight={100} component="div">
                                    Diagnosis: Normal Headache
                                </Typography>
                                <Typography color='#1F485B' position='absolute' top='40%' right='30px' fontSize={10} fontWeight={100} component="div">
                                    Age: 23
                                </Typography>
                                <Typography color='#1F485B' position='absolute' top='45%' right='30px' fontSize={10} fontWeight={100} component="div">
                                    Date: 08-10-2023
                                </Typography>
                                <Typography color='#1F485B' position='absolute' top='50%' right='30px' fontSize={10} fontWeight={100} component="div">
                                    Gender: Male
                                </Typography>
                                <Typography color='#1F485B' position='absolute' top='35%' right='30px' fontSize={10} fontWeight={100} component="div">
                                    Social number: 2000487428
                                </Typography>
                                <Typography color='#1F485B' position='absolute' top='60%' right='30px' fontSize={10} fontWeight={100} component="div">
                                    Signiture: HasanToma

                                </Typography>

                                <Typography sx={{ textDecoration: 'underline' }} position='absolute' top='57%' left='10px' variant='h3'>Rx:</Typography>
                                <DrugTable />
                            </Box>
                        </Box>
                    </div>
                ))}
            </Slider>
        </>
    )
}
