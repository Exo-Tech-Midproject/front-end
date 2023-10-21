import React, { useState , useEffect } from 'react'
import SubscribeButton from './SubscribeButton';
import Rating from '@mui/material/Rating';
import {  Box, Stack, Typography } from '@mui/material';
import axios from 'axios';
import cookie from 'react-cookies'
// import jwtDecode from 'jwt-decode';
let DBRUL = process.env.REACT_APP_BASE_URL


export default function BodyPhysician() {

  const[allDoctors,setAllDoctors] = useState([])

  console.log('all doctors for sub button',allDoctors )



  async function fetchDoctors() {
    try {
      let token = cookie.load('auth')
      // const payload = await jwtDecode(token)
      let allDoctors = await axios.get(`${DBRUL}/allphysicians`,
        {
          headers: { Authorization: `Bearer ${token}` }
        })
        setAllDoctors(allDoctors.data)
      console.log('all doctors',allDoctors.data)

      return allDoctors.data
    }
    catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchDoctors()

  }, [])

  return (
      <Box sx={{
        minHeight:"70vh",
        margin:"100px 5% 50px 5%",
        display:"flex",
        flexDirection:"row",
        flexWrap: 'wrap',
        justifyContent:"space-between"
      }}>
        {allDoctors.map((card) => (
          <Box sx={{
            bgcolor:"#ffffff",
            boxShadow:" 0 0 10px rgba(0, 0, 0, 0.1)",
            display:"flex",
            borderRadius:"5px",
            marginBottom:"30px",
          }}>

            <Stack sx={{
              width:350,
              height:450,
              padding:"50px 30px",
              display:"flex",
              
            }}>
              <Box sx={{
                backgroundImage:`url('https://validtemplates.github.io/clinicom/assets/img/doctors/2.jpg')`,
                // backgroundImage:`url(${card.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "170px",
                height: "170px",
                borderRadius: '50%',
                margin: "auto",
              }}>
              </Box>
              <SubscribeButton
              physicianUN={card.username}/>
              <Box sx={{
                padding:"35px 0 0 0",
                display:"flex",
                alignItems:"center",
                flexDirection:"column"
              }}>
                <Typography  sx={{
                  marginBottom:"15px",
                  fontSize: "2rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}>
                {card.fullName}
                </Typography>
                <Typography variant='h5' sx={{
                  color:"#1F485B"
                }}>
                {card.department}
                </Typography>
                <Box>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{
                  marginTop:"15px"
                }} />
                </Box>
              </Box>
            </Stack>
          </Box>
          
          
    ))}
    
      </Box>
  )
}
