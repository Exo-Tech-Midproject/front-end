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
import { LoginContext } from '../../../ContextApi/Auth';
function ThirdStep() {
  const { dispatch2, state2 } = React.useContext(LoginContext)
  console.log(state2)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch2({ type: 'UPDATE_THIRD_STEP2', payload: { [name]: value } });
  };
  return (
    <Box component="form" noValidate >
      <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
        <TextField
          name="mobileNumber"
          required
          id="mobileNumber"
          type='mobileNumber'
          placeholder="Mobile Number"
          autoFocus
          onChange={handleInputChange}
          value={state2.thirdStepData.mobileNumber}
        />
        <TextField
          required
          name="birthdate"
          placeholder="Birthday"
          type="Date"
          id="Birthday"
          autoComplete="Birthday"
          onChange={handleInputChange}
          value={state2.thirdStepData.birthday}
        />

        <FormControl sx={{ color: "black" }}>
          <FormLabel sx={{ color: "black" }} id="demo-row-radio-buttons-group-label">Marital Status</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="maritalStatus"
            onChange={handleInputChange}
            value={state2.thirdStepData.maritalStatus}
          >
            <FormControlLabel value="single" control={<Radio sx={{ color: "black" }} />} label="single" />
            <FormControlLabel value="married" control={<Radio sx={{ color: "black" }} />} label="married" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  )
}

export default ThirdStep