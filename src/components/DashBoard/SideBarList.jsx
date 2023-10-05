import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { ListData1, ListData2 } from './SideBarListData'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function SideBarList() {
    return (
        <>
            <List>
                <Typography variant='body2' mb={'12px'} pl={1.5} color={'white'}>Socials</Typography>
                <Divider />
                {
                    ListData1.map(element => (

                        <ListItem disablePadding>
                            <ListItemButton sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "white" }} >
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
                            <ListItemButton sx={{ ":hover": { bgcolor: '#4B6477B0' }, color: "white" }}>
                                <ListItemIcon >
                                    {element.icon}
                                </ListItemIcon>
                                <ListItemText primary={element.items} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }

            </List>
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
