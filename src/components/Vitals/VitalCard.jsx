import React, { useState } from 'react'
// import { Box, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeartRateChip from './HeartRateChip'
import BloodGlucoseChip from './BloodGlucoseChip'
import TemperatureChip from './TemperatureChip'
import BloodPreassureChip from './BloodPreassureChip'
import OxygenChip from './OxygenChip'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';



export default function VitalsCard() {
    let obj = {
        "heartRate": 88,
        "oxygenSat": 97,
        "bloodGlucose": 70,
        "temperature": 36.9,
        "systolicBP": 120,
        "diastolicBP": 80
    }

    const [toAnimate, setToAnimate] = useState(false)

    return (
        <div
            onMouseEnter={() => setToAnimate(true)}
            onMouseLeave={() => setToAnimate(false)}
        >
            <Box
                borderRadius='7px'

                bgcolor='white'
                // bgcolor='#1F485B'
                margin='0 auto'
                display='flex'
                flexWrap='wrap'
                gap={1.5}
                padding={2}
                // boxShadow="rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px"
                boxShadow='0px 2px 3px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
                alignItems='center'
                sx={{
                    '&:hover': {
                        // border: '1px solid #1F485B11', // Change the border color and thickness as needed
                        // padding: 2.5, // Expand the border by adjusting the padding
                        borderRadius: '20px',
                        // transform: 'scale(1) rotateY(360deg)',
                        transform: 'scale(1) translateY(-20px)',
                        // transform: 'scale(0.5) rotateY(360deg)',
                        // transform: `rotateY(360deg)`,
                        transition: 'all 0.5s ease-in-out, background 0.6s linear, transform 0.4s linear 0.1s',
                        boxShadow: '0px 2px 5px 3px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                        background: '#1F485B', // Change the gradient colors as needed
                        '& .icon-card, & .text-card': {
                            transition: 'all 0.3s ease-in-out',
                            color: 'white',
                        },
                    },
                    // transform: 'scale(0.95) ',
                    transition: 'all 0.5s ease-in-out', // Add a smooth transition effect
                }}

            >
                <Box
                    display='flex'
                    margin=' 0 auto'
                    gap={1}
                    alignItems='center'
                    className="sub-box"
                >
                    <CalendarMonthOutlinedIcon sx={{ color: '#1F485B' }} color='white' className='icon-card' />
                    <Typography className='text-card' color={'#1F485B'} variant='h5' margin='0 auto' textAlign='center'> Date 2023-09-30</Typography>

                </Box>

                <Box width='100%' display='flex' gap={1}>
                    {obj.heartRate ? <HeartRateChip value={obj.heartRate} toAnimate={toAnimate} /> : null}
                    {obj.diastolicBP && obj.systolicBP ? <BloodPreassureChip value={obj.systolicBP} value2={obj.diastolicBP} toAnimate={toAnimate} /> : null}
                </Box>
                <Box width='100%' display='flex' gap={1}>
                    {obj.bloodGlucose ? <BloodGlucoseChip value={obj.bloodGlucose} toAnimate={toAnimate} /> : null}
                    {obj.temperature ? <TemperatureChip value={obj.temperature} toAnimate={toAnimate} /> : null}
                </Box>
                {obj.oxygenSat ? <OxygenChip value={obj.oxygenSat} toAnimate={toAnimate} /> : null}



            </Box >
        </div>
    )
}
