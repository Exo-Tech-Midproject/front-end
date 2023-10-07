import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import TopBar from '../TopBar/TopBar';
const drawerWidth = 240;


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    // transition: theme.transitions.create({
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    // }),
    ...(open && {
        width: `calc(100% - ${drawerWidth - 2}px)`,
        // marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function DBAppBar({ open, handleDrawerOpen }) {
    return (
        <AppBar open={open} sx={{ bgcolor: '#1F485B', justifyContent: 'space-between' }} >
            <TopBar openDrawer={handleDrawerOpen} open={open} />
        </AppBar>
    )
}
