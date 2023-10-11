import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Title from '../Title';
function ThirdStep() {
  return (
    <Box component="form" noValidate >
        <Stack direction="column" spacing={1}>
          <Title>Update Password</Title>
          <Typography variant='body2' sx={{fontSize:"15px"}}>
            Please enter your new Password.</Typography>
          <TextField
            name="Password"
            required
            id="Password"
            placeholder="Password"
            autoFocus
          />
          <TextField
            name="Confirm Password"
            required
            id="Confirm Password"
            placeholder="Confirm Password"
            autoFocus
          />
        </Stack>
    </Box>
  )
}

export default ThirdStep