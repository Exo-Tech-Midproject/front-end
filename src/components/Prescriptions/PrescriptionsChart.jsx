// import { Box, Button, ButtonGroup } from '@mui/material';
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
import React, { useState } from 'react'
// import VitalLineChart from './VitalLineChart';
// import VitalComposedChart from './VitalComposedChart';
// import VitalBarChart from './VitalBarChart';
import PresPieChart from "./PresPieChart";
import { Typography } from "@mui/material";

export default function PrescriptionsChart({ prescription }) {
    // const [charType, setCharType] = useState('Composed')



    return (
        <Box
            display='flex'
            flexWrap='wrap'
            width='95%'
            height='600px'
            m='0 auto'
            marginTop='30px'
            marginBottom='30px'
            bgcolor={'white'}
            py={5}
            justifyContent='center'
            borderRadius='20px'

            boxShadow='0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
        >
            <Box width='100%'>
                <Typography fontWeight='700' color={'#1F485B'} variant="h2" textAlign='center'>Data Analysis</Typography>
            </Box>
            <Box display='flex'
                flexWrap='wrap'
                justifyContent='space-around'
                width='100%'
                height='500px'
                m='0 auto'>
                <PresPieChart data={prescription} />
            </Box>



        </Box>
    )
}
