import * as React from 'react';
import { styled } from '@mui/material/styles';

import Profile from '../Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Vitals from '../../pages/Vitals';


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
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/vitals' element={<Vitals />} />
                </Routes>
            </Main>
        </>
    )
}