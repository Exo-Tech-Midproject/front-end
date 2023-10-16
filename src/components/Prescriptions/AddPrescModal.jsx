import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { BsHeartPulseFill } from 'react-icons/bs';
import O2SatIcon from '../CustomIcons/O2Sat';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import { MdOutlineBloodtype } from 'react-icons/md';
import BloodPreassureIcon from '../CustomIcons/BloodPreassure'
import { LoginContext } from '../../ContextApi/Auth';
import cookie from 'react-cookies'
import axios from 'axios';
import jwtDecode from 'jwt-decode';
let DBRUL = process.env.REACT_APP_BASE_URL

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '90%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '80%', sm: '80%', md: '80%' },
    bgcolor: 'white',
    border: '2px solid #1F485B',
    borderRadius: '5px',
    boxShadow: 24,
    // px: 3,
    // py: 4

};

export default function AddPrescModal({ showModal, handleClosePrescModal, handleCreateCard }) {
    const { user } = React.useContext(LoginContext)
    const [drugsList, setDrugsList] = React.useState([])
    console.log(user)
    console.log(drugsList)
    const [formData, setFormData] = React.useState({

        drugname: '',
        dosage: '',
        duration: '',
        qty: '',
    });
    const [requestData, setRequestData] = React.useState({
        dateOfIssue: "",
        diagnosis: "",
        medicines: [...drugsList],
        signature: "",
        username: 'anas0'

    });

    console.log(formData)
    console.log(requestData)

    const handleCreatePrescription = async () => {
        try {

            let token = cookie.load('auth')
            const payload = await jwtDecode(token)
            let createdPres = await axios.post(`${DBRUL}/physician/${payload.username}/patients/${'anas'}/prescriptions`, requestData, {
                headers: { Authorization: `Bearer ${token}` }
            })
            console.log(createdPres)
            handleClosePrescModal()
            handleResetList()
        } catch (err) {
            console.log(err)
        }
    }
    const handleResetList = () => {
        setDrugsList([])
    }
    const handleAddToList = () => {
        if (formData.drugname !== '' && formData.dosage !== '' && formData.duration !== '' && formData.qty !== '')
            setDrugsList([...drugsList, formData])
        console.log('accessed')
        setFormData({
            drugname: '',
            dosage: '',
            duration: '',
            qty: '',
        })
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        // Use parseFloat to convert the value to a number, or provide a default value (e.g., 0)
        if (name === 'drugname') {
            let itValue = value
            setFormData({
                ...formData,
                [name]: itValue,
            });
        }
        if (name === 'dosage') {
            let itValue = value
            setFormData({
                ...formData,
                [name]: itValue,
            });
        }
        if (name === 'duration') {
            // let itValue = `${value} Days`
            let itValue = value
            setFormData({
                ...formData,
                [name]: itValue,
            });
        }
        if (name === 'qty') {
            // let itValue = `${value} Tabs`
            let itValue = value
            setFormData({
                ...formData,
                [name]: itValue,
            });
        }
        if (name === 'diagnosis') {
            // let itValue = `${value} Tabs`
            let itValue = value
            setRequestData({
                ...requestData,
                [name]: itValue,
            });
        }
        if (name === 'signature') {
            // let itValue = `${value} Tabs`
            let itValue = value
            setRequestData({
                ...requestData,
                [name]: itValue,
            });
        }
        if (name === 'dateOfIssue') {
            // let itValue = `${value} Tabs`
            let itValue = value
            setRequestData({
                ...requestData,
                [name]: itValue,
            });
        }
        if (name === 'dosage') {
            // let itValue = `${value} Tabs`
            let itValue = drugsList
            setRequestData({
                ...requestData,
                'medicines': itValue,
            });
        }
        // const numericValue = parseFloat(value) || 0;
    };
    React.useEffect(() => {
        setRequestData({
            ...requestData,
            'medicines': drugsList,
        })
    }, [drugsList])

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={showModal}
                onClose={handleClosePrescModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={showModal}>
                    <Box sx={style} display='flex' flexDirection='column' alignItems='center'  >

                        <Box width='100%' textAlign='center' bgcolor='#1F485B' py={2}><Typography fontWeight='700' color='white' variant='h4'>Add a prescription</Typography></Box>
                        <Box width='100%' display='flex' gap={2} justifyContent='space-around' flexWrap='wrap' borderTop=' 3px solid #1F485B' borderBottom=' 3px solid #1F485B' p={2} >
                            {/* <Box width='90%' display='flex' justifyContent='space-around' flexWrap='wrap' flexDirection={'column'} > */}
                            <Box width='100%' display='flex' alignItems='center' flexDirection='column'  >
                                <Typography color='#1F485B' textAlign='center' fontWeight='700'>Medical Info</Typography>
                                <Box width='70%' justifyItems='center' display='flex' justifyContent='center' py={2} gap={2} borderBottom='solid 2px #1F485B' alignItems='center' >
                                    <TextField inputProps={{ border: '3px' }} sx={{
                                        width: { xs: '100px', sm: '200px', m: '250px' }, bgcolor: "#11273110",

                                    }
                                    } value={requestData.diagnosis} name='diagnosis' onChange={handleChange} color='medical' InputLabelProps={{ sx: { color: '#1F485B' } }} label='Diagnosis' />
                                    <TextField sx={{ width: { xs: '100px', sm: '200px', m: '250px' }, bgcolor: "#11273110" }} type='date' name='dateOfIssue' value={requestData.dateOfIssue} onChange={handleChange} color='medical' InputLabelProps={{ sx: { color: '#1F485B' } }} />
                                    <TextField sx={{ width: { xs: '100px', sm: '200px', m: '250px' }, bgcolor: "#11273110" }} value={requestData.signature} name='signature' onChange={handleChange} color='medical' InputLabelProps={{ sx: { color: '#1F485B' } }} label='Signature' />
                                </Box>
                                {/* <Divider /> */}
                                <Box display='flex' flexDirection='column' justifyContent='space-around' gap={2} mt={2} >
                                    <Box width='100%'>
                                        <Typography color='#1F485B' textAlign='center' fontWeight='700'>Add Medications to the recipe</Typography>
                                    </Box>
                                    <Box display='flex' justifyContent='center' gap={2} flexWrap='wrap'>
                                        <TextField sx={{ width: { xs: '100px', sm: '200px', m: '250px' }, bgcolor: "#11273110" }} value={formData.drugname} name='drugname' onChange={handleChange} color='medical' InputLabelProps={{ sx: { color: '#1F485B' } }} label='Drug' />
                                        <TextField sx={{ width: { xs: '100px', sm: '200px', m: '250px' }, bgcolor: "#11273110" }} value={formData.duration} name='duration' onChange={handleChange} color='medical' InputLabelProps={{ sx: { color: '#1F485B' } }} label='Duration(Days)' />
                                        <TextField sx={{ width: { xs: '100px', sm: '200px', m: '250px' }, bgcolor: "#11273110" }} value={formData.dosage} name='dosage' onChange={handleChange} color='medical' InputLabelProps={{ sx: { color: '#1F485B' } }} label='Dose' />
                                        <TextField sx={{ width: { xs: '100px', sm: '200px', m: '250px' }, bgcolor: "#11273110" }} value={formData.qty} name='qty' onChange={handleChange} color='medical' InputLabelProps={{ sx: { color: '#1F485B' } }} label='Qty(Tabs)' />
                                    </Box>
                                </Box>
                            </Box>
                            {/* </Box> */}
                            <Box display='flex' gap={1} width='100%' justifyContent='center'>
                                <Button color='medical' variant='text' onClick={handleAddToList}>Add</Button>
                                <Button color='error' variant='text' onClick={handleResetList}>Reset</Button>
                            </Box>
                            {/* <Box display='flex' gap={1}>
                                <Button onClick={() => handleCreateCard(formData)} variant='contained' color='medical'>Create</Button>
                                <Button onClick={handleClosePrescModal} variant='outlined' color='warning'>Cancel</Button>
                            </Box> */}
                            <Box width='100%' display='flex' justifyContent='center'>
                                <Button color='medical' variant='contained' onClick={handleCreatePrescription}>Create Prescription</Button>
                            </Box>


                            <Box width='100%'>
                            </Box>
                        </Box>

                        <DrugTable drugsList={drugsList} />

                    </Box>
                </Fade>
            </Modal>
        </div >
    );
}

export function DrugTable({ recipe, drugsList }) {
    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: 0,
                // borderTop: '0.5px solid black',
                backgroundColor: 'transparent',
                // position: 'absolute',
                // bottom: '0',
                // maxHeight: { xs: '100px', md: '180px' },
                height: '100%',
                scrollbarWidth: 'none',
                '-ms-overflow-style': 'none',
                '&::-webkit-scrollbar': {
                    width: '0.5em',
                    display: 'none',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'transparent',
                },
            }}  >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ color: '#1F485B', fontWeight: '700', bgcolor: '#1F485B13' }} >
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700', fontSize: '12px', textAlign: 'center' }}>Medication </TableCell>
                        {/* <TableCell align="right">Calories</TableCell> */}
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700', fontSize: '12px', textAlign: 'center' }} align="right">Dose</TableCell>
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700', fontSize: '12px', textAlign: 'center' }} align="right">{`Duration(Day)`}</TableCell>
                        <TableCell sx={{ color: '#1F485B', fontWeight: '700', fontSize: '12px', textAlign: 'center' }} align="right">{`QTY(Tabs)`}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {drugsList?.map((recipe, index) => (
                        <TableRow
                            key={`${recipe.name}+${Math.random()}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: index % 2 === 0 ? 'white' : '#1F485B13', }}
                        >
                            <TableCell sx={{ color: '#1F485B', fontWeight: '700', fontSize: '12px', textAlign: 'center' }} component="th" scope="recipe">
                                {recipe.drugname}
                            </TableCell>
                            <TableCell sx={{ color: '#1F485BEA', fontWeight: '700', fontSize: '12px', textAlign: 'center' }} align="right">{recipe.dosage}</TableCell>
                            <TableCell sx={{ color: '#1F485BEA', fontWeight: '700', fontSize: '12px', textAlign: 'center' }} align="right">{recipe.duration}</TableCell>
                            <TableCell sx={{ color: '#1F485BEA', fontWeight: '700', fontSize: '12px', textAlign: 'center' }} align="right">{recipe.qty}</TableCell>
                            {/* <TableCell sx={{ color: '#1F485BAA', fontWeight: '100' }} align="right">{recipe.qty}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}