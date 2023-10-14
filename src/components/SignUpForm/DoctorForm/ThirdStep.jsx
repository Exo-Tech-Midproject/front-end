import * as React from 'react';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { motion } from "framer-motion"

function ThirdStep() {
  return (
    <motion.Box component="form" noValidate initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
    <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
      <TextField
        name="mobileNumber"
        required
        id="mobileNumber"
        type='mobileNumber'
        placeholder="Mobile Number"
        autoFocus
      />
      <TextField
        required
        id="nationalID"
        placeholder="National ID"
        name="nationalID"
        type='number'
        autoComplete="nationalID"
      />

      <TextField
        required
        name="department"
        placeholder="department"
        type="department"
        id="department"
        autoComplete="department"
      />
    </Stack>
  </motion.Box>
  )
}

export default ThirdStep