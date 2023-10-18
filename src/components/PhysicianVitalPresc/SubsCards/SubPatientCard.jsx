import React, { useContext } from 'react';
import './SubPatientCard.css'
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { LoginContext } from '../../../ContextApi/Auth';
import defaultPfp from '../../../assets/images/defaultImges/we-are-not-the-same.jpg'
import defaultCover from '../../../assets/images/defaultImges/pharmacy.PNG'
import { motion } from 'framer-motion';
const SubPatientCard = ({ userInfo }) => {
    return (
        <motion.figure
            transition={{ duration: 0.85 }}
            initial={{ x: -500, opacity: 0, }}
            animate={{ opacity: 1, x: 0, }}
            whileHover={{ scale: 1.05 }}
            className="snip1336">
            <img src={userInfo.coverImg || defaultCover} alt={userInfo.fullName} />
            <figcaption>
                <img src={userInfo.profileImg || defaultPfp} alt={userInfo.fullName} className="profile" />
                <Typography transition={{ deplay: 0.3, duration: 0.7 }} animate={{ opacity: 1, y: 0, }} initial={{ y: 500, opacity: 0, }} component={motion.h2} variant='h4'>
                    {userInfo.fullName}
                    <span>{userInfo.gender}</span>
                </Typography>
                {/* <p>{text}</p> */}
                <Box display='flex' justifyContent='flex-end'>
                    <Button component={Link} to={`/dashboard/doctor-control/prescription/${userInfo.username}`} variant='text' color={'snowWhite'}>Prescriptions</Button>
                    <Button component={Link} to={`/dashboard/doctor-control/vitals/${userInfo.username}`} variant='text' color={'snowWhite'} >Vitals</Button>
                </Box>
                {/* <Link to={`/prescriptions/${userInfo.username}`} className="follow">
                    Prescriptions
                </Link>
                <Link to={`/vitals/${userInfo.username}`} className="info">
                    Vitals
                </Link> */}
            </figcaption>
        </motion.figure>
    );
};



export default SubPatientCard;