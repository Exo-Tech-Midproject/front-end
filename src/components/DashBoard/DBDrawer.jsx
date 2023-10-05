import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SideBarList from './SideBarList';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;


export default function DBDrawer({ open, handleDrawerClose, theme }) {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,

                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    bgcolor: '#1F485B',
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',
                    '-ms-overflow-style': 'none',
                    '&::-webkit-scrollbar': {
                        width: '0.5em',
                        display: 'none',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'transparent',
                    },
                },
                '& .MuiBackdrop-root': {
                    backdropFilter: 'blur(3px)',
                    backgroundColor: 'rgba(0, 7, 52, 0.2)'
                }

            }}

            variant='temporary'
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
        >

            <Divider />

            <IconButton sx={{ alignSelf: 'flex-end', color: 'white', ":hover": { bgcolor: '#4B6477B0' } }} onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>

            <Box paddingY={5} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} bgcolor='#1F485B'>
                <Avatar sx={{ width: '80px', height: '80px' }} src='https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp' />
                <Typography color={'white'} variant='h6'>Hasan Tommalieh</Typography>
            </Box>

            <SideBarList />

        </Drawer>
    )
}
