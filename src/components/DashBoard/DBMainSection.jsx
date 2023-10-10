import React from 'react';
import { styled } from '@mui/material/styles';

// import Profile from '../Profile/Profile';
import { Route, Routes } from 'react-router-dom';

import Appointment from '../../pages/appointment';


import PatientHistory from '../MedicalHistory/MedicalHistory'; 
import Groups from '../../pages/Groups';


// import Vitals from '../../pages/Vitals';
import Loading from '../Loading/Loading';
// import Chat from '../../pages/Chat';
const Profile = React.lazy(() => import('../Profile/Profile'));
const Vitals = React.lazy(() => import('../../pages/Vitals'));
const Prescriptions = React.lazy(() => import('../../pages/Prescriptions'));
const Chat = React.lazy(() => import('../../pages/Chat'));




const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        marginTop: '80px',
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }),
);

export default function DBMain({ open }) {
    return (
        <>
            <Main open={open}   >
                <Routes>


                    <Route path='/' element={<React.Suspense fallback={<Loading />}><Profile /></React.Suspense>} />
                    <Route path='/profile' element={<React.Suspense fallback={<Loading />}><Profile /></React.Suspense>} />
                    <Route path='/vitals' element={<React.Suspense fallback={<Loading />}><Vitals /></React.Suspense>} />
                    <Route path='/prescriptions' element={<React.Suspense fallback={<Loading />}><Prescriptions /></React.Suspense>} />

                      <Route path='/medical-history' element={<PatientHistory />} />
                        <Route path='/appointment' element={<Appointment />} />
                           <Route path='/groups' element={<Groups />} />
                             <Route path='/chat' element={<React.Suspense fallback={<Loading />}><Chat /></React.Suspense>} />


                </Routes>
            </Main>
        </>
    )
}