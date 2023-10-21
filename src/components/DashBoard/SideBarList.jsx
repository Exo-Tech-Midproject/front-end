// import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React, { useContext } from 'react'
import { ListData1, ListData2, ListData3, ListData4 } from './SideBarListData'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from "../../ContextApi/Auth";
import cookie from 'react-cookies'
import jwtDecode from "jwt-decode";
import AuthPatient from "../Auths/AuthPatient";
import AuthPhysician from "../Auths/AuthPhysician";


export default function SideBarList() {
    const { logout, user } = useContext(LoginContext)
    let token = cookie.load('auth')
    let payload
    if (token) {
        payload = jwtDecode(token)
    }
    const redirection = useNavigate()
    const handleLogout = () => {
        logout()
        redirection('/')
    }
    return (
        <>
            <AuthPatient>
                <List>
                    <Typography variant='body2' mb={'12px'} pl={1.5} color={'white'}>Socials</Typography>
                    <Divider />
                    {
                        ListData1.map(element => (

                            <ListItem key={element.items} disablePadding>
                                <ListItemButton component={Link} to={`${element.path}`} sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "white" }} >
                                    <ListItemIcon>
                                        {element.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={element.items} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }

                </List >
                <List>
                    <Typography variant='body2' mb={'12px'} pl={1.5} color={'white'}>Medical</Typography>
                    <Divider />
                    {
                        ListData2.map(element => (
                            <ListItem disablePadding>
                                <ListItemButton component={Link} to={`${element.path}`} sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "white" }}>
                                    <ListItemIcon >
                                        {element.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={element.items} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }

                </List >
            </AuthPatient>
            <AuthPhysician>
                <List>
                    <Typography variant='body2' mb={'12px'} pl={1.5} color={'white'}>Socials</Typography>
                    <Divider />
                    {
                        ListData4.map(element => (

                            <ListItem key={element.items} disablePadding>
                                <ListItemButton component={Link} to={`${element.path}`} sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "white" }} >
                                    <ListItemIcon>
                                        {element.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={element.items} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }

                </List >
                <List>
                    <Typography variant='body2' mb={'12px'} pl={1.5} color={'white'}>Medical</Typography>
                    <Divider />
                    {
                        ListData3.map(element => (
                            <ListItem disablePadding>
                                <ListItemButton component={Link} to={`${element.path}`} sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "white" }}>
                                    <ListItemIcon >
                                        {element.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={element.items} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }

                </List >
            </AuthPhysician>
            <Divider />
            <List>


                {

                    <ListItem disablePadding>
                        <ListItemButton sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "	#b23b3b" }} onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutOutlinedIcon sx={{ color: '	#b23b3b' }} />
                            </ListItemIcon>
                            <ListItemText primary='Logout' />
                        </ListItemButton>
                    </ListItem>
                }

            </List>
        </>
    )
}
