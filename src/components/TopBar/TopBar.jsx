// import { Avatar, Box, IconButton, Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import React from 'react'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { LoginContext } from "../../ContextApi/Auth";
import { Link } from "react-router-dom";
export default function TopBar({ openDrawer, open }) {
    const { user } = React.useContext(LoginContext)
    return (
        <Box display='flex' p={2} justifyContent={'space-between'}>
            <Box display='flex' justifyContent='center' alignItems={'center'}>
                <IconButton
                    aria-label="open drawer"
                    onClick={openDrawer}
                    sx={{ ...(open && { display: 'none' }), ":hover": { bgcolor: '#4B6477B0' }, color: "white" }}
                >
                    <SpaceDashboardOutlinedIcon />
                </IconButton>
                <Typography ml={'10px'} color={'white'}>DashBoard</Typography>
            </Box>
            <Box display='flex' justifyContent='center' alignItems={'center'} gap={1}>
                <IconButton component={Link} sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "white" }} to={'/dashboard/chat'}>
                    <QuestionAnswerOutlinedIcon fontSize="30px" />
                </IconButton>
                <IconButton component={Link} sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "white" }} to={'/QA'}>
                    <ContactSupportOutlinedIcon />
                </IconButton>
                <IconButton component={Link} sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "white" }} to={'/'}>
                    <HomeOutlinedIcon sx={{ fontSize: 32 }} />
                </IconButton>
                <Avatar alt="username" src={user.profileImg || "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp"} />

            </Box>


        </Box>
    )
}
