// import { Box, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
// import { BsHeartPulseFill } from 'react-icons/bs';
import Lottie from "lottie-react";
import heartLottieAnimation from "../../assets/lottie/Animation - 1696083322490 (1).json";
// import dotHeartAnimation from '../../assets/lottie/dotlottie/Animation - 1696083322490.lottie'

export default function HeartRateChip({ parameter, value, toAnimate }) {
    return (


        <Box width={'50%'} gap={1} bgcolor='#F2F5F9' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='center' p={2} borderRadius='15px' boxShadow='0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' >
            <Box>
                {/* <BsHeartPulseFill fontSize='30px' color='#1F485B' /> */}
                {/* <DotLottiePlayer
                    src={dotHeartAnimation}
                    autoplay
                    // loop
                    hover={toAnimate?}
                    style={{ width: '70px' }}
                > */}
                {/* <Controls /> */}
                {/* </DotLottiePlayer> */}
                <Lottie loop={toAnimate} animationData={heartLottieAnimation} style={{ width: '70px' }} />
                <Typography variant='subtitle2' textTransform='capitalize'>Heart Rate</Typography>
            </Box>
            <Typography variant='h6' fontWeight='700' color='green' >{value} BPM</Typography>
        </Box>



    )
}

