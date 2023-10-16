import React from 'react'
import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'



export default function MedicalSection() {
  return (
    <Box sx={{
        display:"flex",
        width:"90%",
        minHeight:"400px",
        margin:"20px auto",
        borderRadius: "5px",
        boxShadow:'0px 1px 2px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)',
    }}>
        <img src="https://images.freeimages.com/images/large-previews/1ce/medical-doctor-1236728.jpg?fmt=webp&w=350" 
        alt="section-img"
        style={{
            width:"350px"
        }} 
        />
        <Box 
        
        sx={{
            display:"flex",
            justifyContent:"space-evenly",
            flexDirection:"column",
            alignItems:"center",
            // paddingLeft: 3,
            // paddingRight: 3,

            bgcolor:"#1F485B"
        }}>
            <Typography color={"white"} sx={{
                fontSize:"3.5rem",
                margin:"0 20px 0 20px",
            }}>
            Health is Wealth
            </Typography>
            <Typography variant='h5' color={"white"} sx={{
                // padding:"30px auto",
                lineHeight: '1.5',
                textAlign: "start",
                margin:"0 20px 0 20px",
            }} >
            Early detection is a cornerstone of effective healthcare. Many health conditions, when identified in their initial stages, are not only more manageable but can sometimes be fully reversible. Routine check-ups and screenings can detect issues long before they become major problems.

Imagine the peace of mind that comes from knowing your blood pressure, cholesterol levels, and blood sugar are in a healthy range. Or consider the relief of catching a potential cancerous growth at an early, treatable stage. These are the outcomes that health monitoring can offer.
            </Typography>
        </Box>
    </Box>
)
}
