import React, { useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import recipePic from '../../assets/images/prescriptions/Recipe.svg'
import recipePicjpg from '../../assets/images/prescriptions/7944895.jpg'
import { Box, IconButton, Typography } from '@mui/material';
import DrugTable from './DrugsTable';
import DeletePrescriptionModal from './DeletePrescriptionModal';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
import AuthPhysician from '../Auths/AuthPhysician';
let DBRUL = process.env.REACT_APP_BASE_URL


export default function PrescriptionSingleCard({ slide, index, setPrescription, prescription }) {
    const [showModal, setShowModal] = useState(false)

    function handleShowDeleteModal() {
        setShowModal(true)
    }
    function handleCloseDeleteModal() {
        setShowModal(false)
    }
    async function handleDeleteCard(id) {
        try {
            let token = cookie.load('auth')
            // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imhhc2FuIiwiYWNjb3VudFR5cGUiOiJwaHlzaWNpYW4iLCJpYXQiOjE2OTcxNzUzMjN9.xGG53_pQA-c8Uq10dELXS6GMJ2VP9SmJKE-ykQ2KEGo'
            const payload = await jwtDecode(token)
            let userVitals = await axios.delete(`${DBRUL}/physician/${payload.username}/patients/${'anas'}/prescriptions/${id}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                })
            console.log(userVitals.data)
            setPrescription(prescription.filter(element => element.id !== id))
            // console.log(vitals, 'from delete function')
            handleCloseDeleteModal()
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div key={index} >
            <Box height='90%' display='flex' alignContent='center' justifyContent='center' py={3}>
                <Box
                    position='relative'
                    height='600px'
                    borderRadius={1}
                    width={'95%'}
                    maxWidth='420px'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    padding='1rem'
                    boxShadow='0px 2px 3px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
                    sx={{
                        backgroundImage: `url(${recipePicjpg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        '&:hover': {
                            transform: 'scale(1) translateY(-20px)',
                            transition: 'all 0.5s ease-in-out, background 0.6s linear, transform 0.4s linear 0.1s',
                            boxShadow: '0px 2px 5px 3px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
                        },
                    }}
                >
                    <AuthPhysician>
                        <IconButton onClick={handleShowDeleteModal} color='white' sx={{ position: 'absolute', top: '45px', right: '0px' }} >
                            <RemoveCircleOutlineOutlinedIcon sx={{ color: '#ed6c02' }} />
                        </IconButton>
                    </AuthPhysician>
                    <Typography color='white' position='absolute' top='20px' left='10px' variant="h5" component="div">
                        HEALTHAK
                    </Typography>
                    <Typography color='#FAFAFAEE' position='absolute' top='10px' right='10px' fontSize={10} fontWeight={100} component="div">
                        Address: {slide.PrescribedBy.address}<br />
                        Phone No.: {slide.PrescribedBy.mobileNumber}<br />
                        Email: {slide.PrescribedBy.emailAddress}<br />
                    </Typography>
                    <Typography textTransform='uppercase' color='#3E90B6' position='absolute' top='25%' variant="body2" fontWeight={700} component="div">
                        MD.{slide.PrescribedBy.fullName} <br />
                        <Typography textAlign='center' color='#1F485B' textTransform='uppercase' fontSize={10}>
                            {slide.PrescribedBy.department}
                        </Typography>
                        <Typography letterSpacing={1} textAlign='center' textTransform='initial' color='#1F485B' fontSize={8}>
                            ID.No. {slide.PrescribedBy.licenseId}
                        </Typography>
                    </Typography>
                    <Typography color='#1F485B' position='absolute' top='40%' left='30px' fontSize={10} fontWeight={100} component="div">
                        Patient's Name: {slide.Owner.fullName}
                    </Typography>
                    <Typography color='#1F485B' position='absolute' top='45%' left='30px' fontSize={10} fontWeight={100} component="div">
                        Date of birth: {slide.Owner.birthdate}
                    </Typography>
                    <Typography color='#1F485B' position='absolute' top='50%' left='30px' fontSize={10} fontWeight={100} component="div">
                        Diagnosis: {slide.diagnosis}
                    </Typography>
                    <Typography color='#1F485B' position='absolute' top='40%' right='30px' fontSize={10} fontWeight={100} component="div">
                        Age: {parseFloat(slide.dateOfIssue.substring(0, 4)) - parseFloat(slide.Owner.birthdate.substring(0, 4))}
                    </Typography>
                    <Typography color='#1F485B' position='absolute' top='45%' right='30px' fontSize={10} fontWeight={100} component="div">
                        Date: {slide.dateOfIssue}
                    </Typography>
                    <Typography color='#1F485B' position='absolute' top='50%' right='30px' fontSize={10} fontWeight={100} component="div">
                        Gender: {slide.Owner.gender}
                    </Typography>
                    <Typography color='#1F485B' position='absolute' top='35%' right='30px' fontSize={10} fontWeight={100} component="div">
                        Insurance: {slide.Owner.insurance}
                    </Typography>
                    <Typography color='#1F485B' position='absolute' top='60%' right='30px' fontSize={10} fontWeight={100} component="div">
                        Signiture: {slide.signature}

                    </Typography>

                    <Typography sx={{ textDecoration: 'underline' }} position='absolute' top='57%' left='10px' variant='h3'>Rx:</Typography>
                    {console.log(slide, 'here please')}
                    <DrugTable recipe={slide.medicines} />
                </Box>
            </Box>
            <DeletePrescriptionModal showModal={showModal} handleCloseDeleteModal={handleCloseDeleteModal} handleDeleteCard={handleDeleteCard} prescId={slide.id} />
        </div>
    )
}
