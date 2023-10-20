
import * as React from 'react';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { Stack } from '@mui/material';
import { LoginContext } from '../../../ContextApi/Auth';
function FirstStep() {
  const { dispatch2, state2 } = React.useContext(LoginContext)
  console.log(state2)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch2({ type: 'UPDATE_FIRST_STEP2', payload: { [name]: value } });
  };
  return (
    <Box component="form" noValidate >
      <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
        <TextField
          name="fullName"
          required
          id="FullName"
          placeholder="Full Name"
          onChange={handleInputChange}
          value={state2.firstStepData.fullName}

        />
        <TextField
          required
          id="email"
          placeholder="Email Address"
          name="emailAddress"
          onChange={handleInputChange}
          value={state2.firstStepData.emailAddress}

        />

        <TextField
          required
          name="password"
          placeholder="Password"
          type="password"
          id="password"
          onChange={handleInputChange}
          value={state2.firstStepData.password}

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