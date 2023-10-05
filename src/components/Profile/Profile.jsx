// import { Box, Grid, } from '@mui/material'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from 'react'
import ProfileHeadSection from './ProfileHeadSection';
import SidePageSection from './SidePageSection';
import InfoSection from './InfoSection';
import PrescriptionsSection from './PrescriptionsSection';

export default function Profile() {
    return (
        <Grid container bgcolor={'#f2f5f9'} rowGap={4} >


            <Grid item xs={12} md={8} paddingLeft={4} paddingTop={4} >
                <ProfileHeadSection />
            </Grid >

            <Grid item xs={12} md={4} pl={4} pt={4}>
                <SidePageSection />
            </Grid>

            <Grid item xs={12} sm={12} md={8} paddingLeft={4} paddingTop={4} >
                <Box display='flex' flexDirection='column' flexWrap='wrap' gap={2}>
                    <InfoSection />
                    {/* <InfoSection /> */}
                </Box>
            </Grid >

            <Grid item xs={12} md={4} pl={4} pt={4}  >
                {/* <SidePageSection /> */}
                {/* <SidePageSection /> */}
                <PrescriptionsSection />
            </Grid>


        </Grid >
    )
}