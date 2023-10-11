import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Title from '../Title';
function SecondStep() {
  return (
    <Box component="form" noValidate >
    <Stack direction="column" spacing={1}>
      <Title>Verification Email:</Title>
      <Typography variant='body2' sx={{fontSize:"15px"}}>
      A password reset email has been sent to the email address associated with your account.</Typography>
      <TextField
        name="Verfication"
        required
        id="Verfication"
        placeholder="Verfication"
        autoFocus
      />
    </Stack>
</Box>
  )
}

export default SecondStep