import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { BsHeartPulseFill } from 'react-icons/bs';
import O2SatIcon from '../CustomIcons/O2Sat';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import { MdOutlineBloodtype } from 'react-icons/md';
import BloodPreassureIcon from '../CustomIcons/BloodPreassure'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'white',
    border: '2px solid #1F485B',
    borderRadius: '3px',
    boxShadow: 24,
    p: 4,

};

export default function AddVitalsModal({ showCreateModal, handleCloseCreateModal, handleCreateCard }) {

    const [formData, setFormData] = React.useState({
        heartRate: 0,
        oxygenSat: 0,
        bloodGlucose: 0,
        temperature: 0,
        systolicBP: 0,
        diastolicBP: 0,
    });
    console.log(formData)

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Use parseFloat to convert the value to a number, or provide a default value (e.g., 0)
        const numericValue = parseFloat(value) || 0;

        setFormData({
            ...formData,
            [name]: numericValue,
        });
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={showCreateModal}
                onClose={handleCloseCreateModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={showCreateModal}>
                    <Box sx={style} display='flex' flexDirection='column' alignItems='center' gap={4}>
                        <Box><Typography color='#1F485B' variant='h4'>Add a new vital</Typography></Box>
                        <Box display='flex' flexWrap={'wrap'} justifyContent='space-around' height={'250px'}>
                            <TextField
                                sx={{ width: '47%', padding: '0' }}
                                InputProps={{
                                    endAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end">BPM</InputAdornment>,
                                    startAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end"><BsHeartPulseFill fontSize='25px' color='#1F485B' /></InputAdornment>,
                                }}
                                InputLabelProps={{ sx: { color: '#1F485B' } }}
                                type="number"
                                color='medical'
                                id="outlined-basic"
                                label="Heart Rate"
                                onChange={handleChange}
                                name='heartRate'
                                variant="outlined" />
                            <TextField
                                sx={{ width: '47%', padding: '0' }}
                                InputProps={{
                                    endAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end">%</InputAdornment>,
                                    startAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end"><O2SatIcon fontSize='30px' color='#1F485B' /></InputAdornment>,
                                }}
                                InputLabelProps={{ sx: { color: '#1F485B' } }}
                                type="number"
                                color='medical'
                                id="outlined-basic"
                                label="Oxygen Saturation"
                                onChange={handleChange}
                                name='oxygenSat'
                                variant="outlined" />
                            <TextField
                                sx={{ width: '47%', padding: '0' }}
                                InputProps={{
                                    endAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end">mg/dL</InputAdornment>,
                                    startAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end"><MdOutlineBloodtype fontSize='30px' color='#1F485B' /></InputAdornment>
                                }}
                                InputLabelProps={{ sx: { color: '#1F485B' } }}
                                type="number"
                                color='medical'
                                id="outlined-basic"
                                label="Blood Glucose"
                                onChange={handleChange}
                                name='bloodGlucose'
                                variant="outlined" />
                            <TextField
                                sx={{ width: '47%', padding: '0' }}
                                InputProps={{
                                    endAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end">°C</InputAdornment>,
                                    startAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end"><ThermostatOutlinedIcon sx={{ fontSize: '30px', color: '#1F485B' }} /></InputAdornment>
                                }}
                                InputLabelProps={{ sx: { color: '#1F485B' } }}
                                type="number"
                                color='medical'
                                id="outlined-basic"
                                label="Temperature"
                                onChange={handleChange}
                                name='temperature'
                                variant="outlined" />

                            <TextField
                                sx={{ width: '47%', padding: '0' }}
                                InputProps={{
                                    endAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end">mmHg</InputAdornment>,
                                    startAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end"><BloodPreassureIcon fontSize='30px' color='#1F485B' /></InputAdornment>,
                                }}
                                InputLabelProps={{ sx: { color: '#1F485B' } }}
                                type="number"
                                color='medical'
                                id="outlined-basic"
                                label="Systolic Blood Preassure"
                                onChange={handleChange}
                                name='systolicBP'
                                variant="outlined" />
                            <TextField
                                sx={{ width: '47%', padding: '0' }}
                                InputProps={{
                                    endAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end">mmHg</InputAdornment>,
                                    startAdornment: <InputAdornment sx={{
                                        '& .MuiTypography-root': {
                                            color: '#1F485B',
                                        },
                                    }} position="end"><BloodPreassureIcon fontSize='30px' color='#1F485B' /></InputAdornment>,
                                }}
                                InputLabelProps={{ sx: { color: '#1F485B' } }}
                                type="number"
                                color='medical'
                                id="outlined-basic"
                                label="Diastolic Blood Preassure"
                                onChange={handleChange}
                                name='diastolicBP'
                                variant="outlined" />
                        </Box>
                        <Box display='flex' gap={1}>
                            <Button onClick={()=> handleCreateCard(formData)} variant='contained' color='medical'>Create</Button>
                            <Button onClick={handleCloseCreateModal} variant='outlined' color='warning'>Cancel</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div >
    );
}