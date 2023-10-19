import * as React from 'react';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { motion } from "framer-motion"
import { formReducer, initialState } from '../../Reducers/SignUpDoctor';
import { LoginContext } from '../../../ContextApi/Auth';

function SecondStep() {
  const { dispatch, state } = React.useContext(LoginContext)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_SECOND_STEP', payload: { [name]: value } });
  };
  return (
    <motion.Box component="form" noValidate
      animate={{ x: 100 }}
      transition={{ type: "spring", stiffness: 100 }}>
      <Stack direction="column" spacing={2} sx={{ width: "100%" }} >
        <TextField
          name="username"
          required
          id="UserName"
          placeholder="User Name"
          onChange={handleInputChange}
          autoFocus
          value={state.secondStepData.username}
        />
        <TextField
          required
          id="licenseId"
          placeholder="License Id"
          onChange={handleInputChange}
          name="licenseId"
          autoComplete="licenseId"
          value={state.secondStepData.licenseId}
        />
        <TextField
          required
          name="birthDate"
          placeholder="Birthday"
          onChange={handleInputChange}
          type="Date"
          id="Birthday"
          autoComplete="Birthday"
          value={state.secondStepData.birthDate}
        />

        <FormControl sx={{ color: "black" }}>
          <FormLabel sx={{ color: "black" }} id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            onChange={handleInputChange}
            value={state.secondStepData.gender}
          >
            <FormControlLabel value="female" control={<Radio sx={{ color: "black" }} />} label="Female" />
            <FormControlLabel value="male" control={<Radio sx={{ color: "black" }} />} label="Male" />
          </RadioGroup>
        </FormControl>
      </Stack>

    </motion.Box>
  )
}

export default SecondStep