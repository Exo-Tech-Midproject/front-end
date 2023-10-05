import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import DBMain from './DBMainSection';
import DBDrawer from './DBDrawer';
import DBAppBar from './DBAppBar';
import Footer from '../Footers/MainFooter';

export default function DashBoard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box bgcolor='#f2f5f9' >

            <DBAppBar handleDrawerOpen={handleDrawerOpen} open={open} />

            <DBDrawer theme={theme} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} open={open} />

            <DBMain open={open} />

            <Footer />
        </Box >
    );
}