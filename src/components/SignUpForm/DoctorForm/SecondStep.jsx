import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
function SecondStep() {
  return (
    <Box component="form" noValidate >
    <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
      <TextField
        name="UserName"
        required
        id="UserName"
        placeholder="User Name"
        autoFocus
      />
      <TextField
        required
        id="licenseId"
        placeholder="License Id"
        name="licenseId"
        autoComplete="licenseId"
      />

<FormControl sx={{color:"black"}}>
      <FormLabel sx={{color:"black"}} id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio sx={{color:"black"}} />} label="Female" />
        <FormControlLabel  value="male" control={<Radio sx={{color:"black"}}/>} label="Male" />
      </RadioGroup>
    </FormControl>

      <TextField
        required
        name="Birthday"
        placeholder="Birthday"
        type="Date"
        id="Birthday"
        autoComplete="Birthday"
      />
    </Stack>

  </Box>
  )
}

export default SecondStep