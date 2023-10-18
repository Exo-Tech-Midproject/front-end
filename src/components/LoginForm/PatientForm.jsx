import React, { useContext } from 'react'
import { Box, Container, TextField, Typography, Button, Link, Stack } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { LoginContext } from '../../ContextApi/Auth';
import { useNavigate } from 'react-router-dom';
function PatientForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const navigator = useNavigate()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { loginPatient } = useContext(LoginContext)
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = async (e) => {
        console.log()
        e.preventDefault()

        try {
            let logged = await loginPatient(username, password)
            console.log(logged)
            if (logged) {
                navigator('/dashboard/profile')
            } else {
                console.log('you are not authorized')
            }


        } catch (e) {
            console.log(e)

        }
    }
    return (
        <Box>
            <Container>
                <Stack direction="column" spacing={3} alignItems="center">
                    <TextField
                        id="input-with-icon-textfield"
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}

                        sx={{ color: "black", width: "300px" }}
                    />
                    <TextField
                        sx={{ width: "300px" }}
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button
                        onClick={handleSubmit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: "#1F485B" }}
                    >
                        Login
                    </Button>
                </Stack>

            </Container>
        </Box>
    )
}

export default PatientForm