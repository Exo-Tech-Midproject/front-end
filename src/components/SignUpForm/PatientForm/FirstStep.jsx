
import * as React from 'react';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { Stack } from '@mui/material';
function FirstStep() {
  return (
    <Box component="form" noValidate >
      <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
        <TextField
          name="FullName"
          required
          id="FullName"
          placeholder="Full Name"
        
        />
        <TextField
          required
          id="email"
          placeholder="Email Address"
          name="email"
         
        />

        <TextField
          required
          name="password"
          placeholder="Password"
          type="password"
          id="password"
        
        />
        <TextField
          required
          name="confirmpassword"
          placeholder="Confirm Password"
          type="password"
          id="confirmpassword"
         
        />
  
      </Stack>
    </Box>
  )
}

export default FirstStep