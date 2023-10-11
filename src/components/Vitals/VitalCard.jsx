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
// import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { Alert, AlertTitle, Backdrop, Button, IconButton, Modal, Tooltip } from '@mui/material';
import DeleteCardModal from './DeleteCardModal';
import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
let DBRUL = process.env.REACT_APP_BASE_URL






export default function VitalsCard({ dataObj, setVitals, vitals }) {

    const [toAnimate, setToAnimate] = useState(false)
    const [showModal, setShowModal] = useState(false)

    function handleShowDeleteModal() {
        setShowModal(true)
    }
    function handleCloseDeleteModal() {
        setShowModal(false)
    }
    // console.log(vitals,'from create function 2222')
    async function handleDeleteCard(id) {
        try {
            let token = cookie.load('auth')
            const payload = await jwtDecode(token)
            let userVitals = await axios.delete(`${DBRUL}/patient/${payload.username}/vitals/${id}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                })
            console.log(userVitals.data)
            setVitals(vitals.filter(element => element.id !== id))
            console.log(vitals, 'from delete function')

        } catch (err) {
            console.log(err)
        }
    }


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
                    <Typography className='text-card' color={'#1F485B'} variant='h5' margin='0 auto' textAlign='center'> Date {`${new Date(dataObj.createdAt).toDateString()}`}</Typography>
                    <Tooltip componentsProps={{ tooltip: { sx: { bgcolor: 'white', color: 'black', '& .MuiTooltip-arrow': { color: 'white' } } } }} title="Delete" placement='right' sx={{ '.MuiTooltip-tooltip': { backgroundColor: 'white' } }} arrow>
                        <IconButton onClick={handleShowDeleteModal} color='warning'> <HighlightOffOutlinedIcon /></IconButton>
                    </Tooltip>

                </Box>

                <Box width='100%' display='flex' gap={1}>
                    {dataObj.heartRate ? <HeartRateChip value={dataObj.heartRate} toAnimate={toAnimate} /> : null}
                    {dataObj.diastolicBP && dataObj.systolicBP ? <BloodPreassureChip value={dataObj.systolicBP} value2={dataObj.diastolicBP} toAnimate={toAnimate} /> : null}
                </Box>
                <Box width='100%' display='flex' gap={1}>
                    {dataObj.bloodGlucose ? <BloodGlucoseChip value={dataObj.bloodGlucose} toAnimate={toAnimate} /> : null}
                    {dataObj.temperature ? <TemperatureChip value={dataObj.temperature} toAnimate={toAnimate} /> : null}
                </Box>
                {dataObj.oxygenSat ? <OxygenChip value={dataObj.oxygenSat} toAnimate={toAnimate} /> : null}


                <DeleteCardModal showModal={showModal} handleCloseDeleteModal={handleCloseDeleteModal} handleDeleteCard={handleDeleteCard} cardId={dataObj.id} />
            </Box >

        </div>
    )
}
