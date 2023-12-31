// import { Box, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


// import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import Lottie from "lottie-react";
import ThermostatAnimation from "../../assets/lottie/thermoMeter.json";


export default function TemperatureChip({ parameter, value, toAnimate }) {
    return (


        <Box width={'50%'} gap={1} bgcolor='#F2F5F9' display='flex' flexWrap='wrap' justifyContent='space-between' alignItems='center' p={2} borderRadius='15px' boxShadow='0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' >
            <Box>
                {/* <ThermostatOutlinedIcon sx={{ fontSize: '30px', color: '#1F485B' }} /> */}
                <Lottie loop={toAnimate} animationData={ThermostatAnimation} style={{ width: '70px' }} />
                <Typography variant='subtitle2' textTransform='capitalize'>Temperature</Typography>
            </Box>
            <Typography variant='h6' fontWeight='700' color={value <= 37.1 && value >= 36 ? 'green' : 'red'} >{value}°C</Typography>
        </Box>



    )
}


