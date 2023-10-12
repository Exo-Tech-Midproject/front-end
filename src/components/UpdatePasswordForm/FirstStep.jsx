
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Title from '../Title';
function FirstStep() {
  return (
    <Box component="form" noValidate >
        <Stack direction="column" spacing={1}>
          <Title>User Identification:</Title>
          <Typography variant='body2' sx={{fontSize:"15px"}}>
            Please enter your registered email address or username to reset your password.</Typography>
          <TextField
            name="Email"
            required
            id="Email"
            placeholder="Email"
            autoFocus
          />
        </Stack>
    </Box>
  )
}

export default FirstStep