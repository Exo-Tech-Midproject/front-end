// import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from 'react'
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';

export default function PrescriptionCard({ presCard }) {
    console.log(presCard, '23123123123')
    let token = cookie.load('auth')
    let payload = token ? jwtDecode(token) : ''
    return (
        <Card sx={{ paddingRight: '8px', bgcolor: '#F2F5F9', color: '#296079', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', boxShadow: "rgba(159, 162, 191, 0.18) 0px 9px 16px, rgba(159, 162, 191, 0.32) 0px 2px 2px" }}  >
            <CardContent>
                <MedicationOutlinedIcon />
                <Typography>Issued at: {presCard.dateOfIssue}</Typography>
                <Typography>Diagnosis:{presCard.diagnosis}</Typography>
                <Typography> {payload?.accountType === 'patient' ? 'By: Dr. ' + presCard.PrescribedBy?.fullName : 'To: ' + presCard.Owner?.fullName}</Typography>
            </CardContent>
            <CardMedia

                image={payload?.accountType === 'patient' ? presCard.PrescribedBy?.profileImg || 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' : presCard.Owner?.profileImg || 'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg'}
                alt='doctor image'
                sx={{ width: "100px", height: '100px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}
                component='img'

            />
        </Card>
    )
}
