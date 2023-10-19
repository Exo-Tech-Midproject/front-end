
import * as React from 'react';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { motion } from "framer-motion"
import { Stack } from '@mui/material';
import { formReducer, initialState } from '../../Reducers/SignUpDoctor';
import { LoginContext } from '../../../ContextApi/Auth';
function FirstStep() {
  const { dispatch, state } = React.useContext(LoginContext)
  // const [state, dispatch] = React.useReducer(formReducer, initialState);
  // console.log(state)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIRST_STEP', payload: { [name]: value } });
  };
  return (
    <motion.Box component="form" noValidate animate={{ x: 100 }}
      transition={{ type: "spring", stiffness: 100 }}>
      <Stack direction="column" spacing={2} >
        <TextField
          name="fullName"
          required
          id="FullName"
          placeholder="Full Name"
          onChange={handleInputChange}
          autoFocus
          value={state.firstStepData.fullName}
        />
        <TextField
          required
          id="email"
          placeholder="Email Address"
          name="emailAddress"
          onChange={handleInputChange}
          value={state.firstStepData.emailAddress}
        />

        <TextField
          required
          name="password"
          placeholder="Password"
          type="password"
          id="password"
          onChange={handleInputChange}
          value={state.firstStepData.password}
        />
        <TextField
          required
          name="confirmpassword"
          placeholder="Confirm Password"
          type="password"
          id="confirmpassword"
        // onChange={handleInputChange}

        />

      </Stack>
    </motion.Box>
  )
}

export default FirstStep