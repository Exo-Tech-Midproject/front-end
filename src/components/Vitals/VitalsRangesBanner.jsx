import { Box, Typography } from '@mui/material'
import Lottie from 'lottie-react'
import React from 'react'
import heartAnimation from '../../assets/lottie/Animation - 1696083322490 (1).json'
import tempAnimation from '../../assets/lottie/thermoMeter.json'
import bpAnimation from '../../assets/lottie/bloodPreassure.json'
import oxygenctorAnimation from '../../assets/lottie/oximeter.json'
import glucoseAnimation from '../../assets/lottie/bloodSugar.json'
export default function VitalsRangesBanner() {
    return (
        <Box display='flex' justifyContent='center' width={'100%'}>
            <Box width={'16%'}>
                <Lottie animationData={heartAnimation} style={{ width: '100%', maxWidth: '140px' }} />
                <Typography fontSize={{ xs: '0.331rem', sm: '0.6rem', md: '0.9rem' }} fontWeight={700}>[ 60-100 ]</Typography>
            </Box>
            <Box width={'16%'}>
                <Lottie animationData={tempAnimation} style={{ width: '100%', maxWidth: '140px' }} />
                <Typography fontSize={{ xs: '0.331rem', sm: '0.6rem', md: '0.9rem' }} fontWeight={700}>[ 36-37.2 ]</Typography>
            </Box>
            <Box width={'16%'}>
                <Lottie animationData={oxygenctorAnimation} style={{ width: '100%', maxWidth: '140px' }} />
                <Typography fontSize={{ xs: '0.331rem', sm: '0.6rem', md: '0.9rem' }} fontWeight={700}>[ {`>`}95% ]</Typography>
            </Box>
            <Box width={'16%'}>
                <Lottie animationData={bpAnimation} style={{ width: '100%', maxWidth: '140px' }} />
                <Typography fontSize={{ xs: '0.331rem', sm: '0.6rem', md: '0.9rem' }} fontWeight={700}>[ 120/80 ]</Typography>
            </Box>
            <Box width={'16%'}>
                <Lottie animationData={glucoseAnimation} style={{ width: '100%', maxWidth: '140px' }} />
                <Typography fontSize={{ xs: '0.331rem', sm: '0.6rem', md: '0.9rem' }} fontWeight={700}>[ 70-100 ]</Typography>
            </Box>
        </Box>
    )
}
