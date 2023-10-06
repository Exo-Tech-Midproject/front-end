// import { Box, Button, ButtonGroup } from '@mui/material';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React, { useState } from 'react'
import VitalLineChart from './VitalLineChart';
import VitalComposedChart from './VitalComposedChart';
import VitalBarChart from './VitalBarChart';

export default function VitalsChart({ data }) {
    const [charType, setCharType] = useState('Composed')


    let obj = [{
        "heartRate": 88,
        "oxygenSat": 97,
        "bloodGlucose": 120,
        "temperature": 36.9,
        "systolicBP": 120,
        "diastolicBP": 80
    },
    {
        "heartRate": 120,
        "oxygenSat": 87,
        "bloodGlucose": 270,
        "temperature": 37.9,
        "systolicBP": 131,
        "diastolicBP": 100
    }, {
        "heartRate": 93,
        "oxygenSat": 79,
        "bloodGlucose": 120,
        "temperature": 39.9,
        "systolicBP": 127,
        "diastolicBP": 90
    }, {
        "heartRate": 155,
        "oxygenSat": 77,
        "bloodGlucose": 350,
        "temperature": 38.9,
        "systolicBP": 140,
        "diastolicBP": 110
    }, {
        "heartRate": 123,
        "oxygenSat": 87,
        "bloodGlucose": 130,
        "temperature": 37.9,
        "systolicBP": 190,
        "diastolicBP": 120
    }, {
        "heartRate": 57,
        "oxygenSat": 92,
        "bloodGlucose": 230,
        "temperature": 36.9,
        "systolicBP": 110,
        "diastolicBP": 70
    }]
    return (
        <Box
            display='flex'
            flexWrap='wrap'
            width='100%'
            height='600px'
            marginTop='30px'
            bgcolor={'white'}
            py={10}
            justifyContent='center'
            borderRadius='20px'
            boxShadow='0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
        >
            {charType === 'Composed' && <VitalComposedChart data={obj} />}
            {charType === 'Line' && <VitalLineChart data={obj} />}
            {charType === 'Bar' && <VitalBarChart data={obj} />}
            {/* <VitalLineChart data={obj} /> */}

            <Box display='flex' justifyContent='center' width='100%'>
                <ButtonGroup variant='outlined' size='large' color='medical' sx={{ width: '80%' }}  >
                    <Button onClick={() => setCharType('Bar')} sx={{ width: '33%', }}>Bar</Button>
                    <Button onClick={() => setCharType('Line')} sx={{ width: '33%', }}>Line</Button>
                    <Button onClick={() => setCharType('Composed')} sx={{ width: '33%', }}>Composed</Button>
                </ButtonGroup>
            </Box>
        </Box>
    )
}
