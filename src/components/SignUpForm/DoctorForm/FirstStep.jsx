
import * as React from 'react';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { motion } from "framer-motion"
import { Stack } from '@mui/material';
function FirstStep() {

  return (
    <motion.Box component="form" noValidate   animate={{ x: 100 }}
    transition={{ type: "spring", stiffness: 100 }}>
      <Stack direction="column" spacing={2} >
        <TextField
          name="FullName"
          required
          id="FullName"
          placeholder="Full Name"
          autoFocus
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
    </motion.Box>
  )
}

export default FirstStep