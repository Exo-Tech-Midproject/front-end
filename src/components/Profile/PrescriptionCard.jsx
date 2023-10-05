// import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from 'react'
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
export default function PrescriptionCard() {
    return (
        <Card sx={{ bgcolor: '#F2F5F9', color: '#296079', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', boxShadow: "rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px" }}  >
            <CardContent>
                <MedicationOutlinedIcon />
                <Typography>Issued at: 2023-09-38</Typography>
                <Typography>Diagnosis:</Typography>
                <Typography>By: Dr. Ahmad</Typography>
            </CardContent>
            <CardMedia

                image='https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg'
                alt='doctor image'
                sx={{ width: "120px", height: '120px', borderRadius: '50%' }}
                component='img'

            />
        </Card>
    )
}
