import * as React from 'react';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { motion } from "framer-motion"
import { LoginContext } from '../../../ContextApi/Auth';

function ThirdStep() {
  const { dispatch, state } = React.useContext(LoginContext)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_THIRD_STEP', payload: { [name]: value } });
  };
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
          onChange={handleInputChange}
          value={state.thirdStepData.mobileNumber}
        />
        <TextField
          required
          id="nationalID"
          placeholder="National ID"
          name="nationalID"
          type='number'
          autoComplete="nationalID"
          onChange={handleInputChange}
          value={state.thirdStepData.nationalID}
        />

        <TextField
          required
          name="department"
          placeholder="department"
          type="department"
          id="department"
          autoComplete="department"
          onChange={handleInputChange}
          value={state.thirdStepData.department}
        />
      </Stack>
    </motion.Box>
  )
}

export default ThirdStep