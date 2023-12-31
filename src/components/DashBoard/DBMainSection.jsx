import React from 'react';
import { styled } from '@mui/material/styles';

// import Profile from '../Profile/Profile';
import { Route, Routes } from 'react-router-dom';



// import Vitals from '../../pages/Vitals';
import Loading from '../Loading/Loading';
import PhysicianControlPage from '../../pages/PhysicianControlPage';
// import Chat from '../../pages/Chat';
const Profile = React.lazy(() => import('../Profile/Profile'));
const Vitals = React.lazy(() => import('../../pages/Vitals'));
const Prescriptions = React.lazy(() => import('../../pages/Prescriptions'));
const Chat = React.lazy(() => import('../../pages/Chat'));
const Group = React.lazy(() => import('../../pages/Group'));
const Groups = React.lazy(() => import('../../pages/Groups'));
const Appointment = React.lazy(() => import('../../pages/appointment'));
const PatientHistory = React.lazy(() => import('../MedicalHistory/MedicalHistory'));
const Physician = React.lazy(() => import('../../pages/Physician'));
const Subscription = React.lazy(() => import('../../pages/subscription'));
const OneHistory = React.lazy(() => import('../../pages/History'));




const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        // marginTop: '80px',
        // padding: theme.spacing(3),
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

                    <Route path='/medical-history' element={<React.Suspense fallback={<Loading />}><PatientHistory /></React.Suspense>} />
                    <Route path='/appointment' element={<React.Suspense fallback={<Loading />}><Appointment /></React.Suspense>} />
                    <Route path='/groups' element={<React.Suspense fallback={<Loading />}><Groups /></React.Suspense>} />
                    <Route path='/chat' element={<React.Suspense fallback={<Loading />}><Chat /></React.Suspense>} />
                    <Route path='/group/:id' element={<React.Suspense fallback={<Loading />}><Group /></React.Suspense>} />
                    <Route path='/Physicians' element={<React.Suspense fallback={<Loading />}><Physician /></React.Suspense>} />
                    <Route path='/subscriptions' element={<React.Suspense fallback={<Loading />}><Subscription /></React.Suspense>} />
                    <Route path='/patient-control' element={<React.Suspense fallback={<Loading />}><PhysicianControlPage /></React.Suspense>} />
                    <Route path='/patient-control/vitals/:patientUN' element={<React.Suspense fallback={<Loading />}><Vitals /></React.Suspense>} />
                    <Route path='/patient-control/prescription/:patientUN' element={<React.Suspense fallback={<Loading />}><Prescriptions /></React.Suspense>} />
                    <Route path='/patient-control/medical-history/:patientUN' element={<React.Suspense fallback={<Loading />}><OneHistory /></React.Suspense>} />





                </Routes>
            </Main>
        </>
    )
}