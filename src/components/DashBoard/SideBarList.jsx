// import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from 'react'
import { ListData1, ListData2 } from './SideBarListData'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

export default function SideBarList() {
    return (
        <>
            <List>
                <Typography variant='body2' mb={'12px'} pl={1.5} color={'white'}>Socials</Typography>
                <Divider />
                {
                    ListData1.map(element => (

                        <ListItem disablePadding>
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
            <Divider />
            <List>


                {

                    <ListItem disablePadding>
                        <ListItemButton sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "	#b23b3b" }}>
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
