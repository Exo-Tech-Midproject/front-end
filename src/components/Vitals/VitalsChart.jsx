// import { Box, Button, ButtonGroup } from '@mui/material';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React, { useState } from 'react'
import VitalLineChart from './VitalLineChart';
import VitalComposedChart from './VitalComposedChart';
import VitalBarChart from './VitalBarChart';

export default function VitalsChart({ dataArr }) {
    const [charType, setCharType] = useState('Composed')


    
    return (
        <Box
            display='flex'
            flexWrap='wrap'
            width='100%'
            height='600px'
            marginTop='30px'
            marginBottom='30px'
            bgcolor={'white'}
            py={10}
            justifyContent='center'
            borderRadius='20px'
            boxShadow='0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
        >
            {charType === 'Composed' && <VitalComposedChart data={dataArr} />}
            {charType === 'Line' && <VitalLineChart data={dataArr} />}
            {charType === 'Bar' && <VitalBarChart data={dataArr} />}
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
