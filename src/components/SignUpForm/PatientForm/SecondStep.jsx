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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { LoginContext } from '../../../ContextApi/Auth';
function SecondStep() {
  // const [age, setAge] = React.useState('');
  const { dispatch2, state2 } = React.useContext(LoginContext)
  console.log(state2)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch2({ type: 'UPDATE_SECOND_STEP2', payload: { [name]: value } });
  };
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // }
  return (
    <Box component="form" noValidate >
      <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
        <TextField
          name="username"
          required
          id="UserName"
          placeholder="User Name"
          autoFocus
          onChange={handleInputChange}
          value={state2.secondStepData.name}
        />


        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            // value={age}
            onChange={handleInputChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            name='race'
            value={state2.secondStepData.race}

          >
            {/* '', '', '', '', '', '', '' */}
            <MenuItem value="">
              <em>Race</em>
            </MenuItem>
            <MenuItem value="hispanic">Hispanic</MenuItem>
            <MenuItem value="non-hispanic">Non-Hispanic</MenuItem>
            <MenuItem value="asian">Asian</MenuItem>
            <MenuItem value="african-american">african-American</MenuItem>
            <MenuItem value="american-indian">American-Indian</MenuItem>
            <MenuItem value="white">White</MenuItem>
            <MenuItem value="native-hawaiian">Native-hawaiian</MenuItem>
          </Select>
          <FormHelperText>Without label</FormHelperText>
        </FormControl>


        <FormControl sx={{ color: "black" }}>
          <FormLabel sx={{ color: "black" }} id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            onChange={handleInputChange}
            value={state2.secondStepData.gender}
          >
            <FormControlLabel value="female" control={<Radio sx={{ color: "black" }} />} label="Female" />
            <FormControlLabel value="male" control={<Radio sx={{ color: "black" }} />} label="Male" />
          </RadioGroup>
        </FormControl>


      </Stack>

    </Box>
  )
}

export default SecondStep