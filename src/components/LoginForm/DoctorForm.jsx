import React, { useContext, useState } from 'react'
import { Box, Container, TextField, Typography, Button, Link, Stack } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { LoginContext } from '../../ContextApi/Auth';
import { useNavigate } from 'react-router-dom';
import LoginModalDoc from './LoginModalDoc';

function DoctorForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [showModal, setShowModal] = useState(false)
    const [msg, setMsg] = useState({})
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const { loginPhysician } = useContext(LoginContext)
    const navigator = useNavigate()

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = async (e) => {
        console.log()
        e.preventDefault()

        try {
            let logged = await loginPhysician(username, password)
            console.log(logged)
            if (logged) {
                setMsg({
                    message: 'Successful Login',
                    type: 'success',
                    head: 'Success',
                    submsg: 'You are now logged in, redirecting you to the dashboard'
                })
                setShowModal(true)
                setTimeout(async () => {
                    await navigator('/dashboard/profile')
                    setShowModal(false)
                }, 1500)
            } else {
                console.log('you are not authorized')
                setMsg({
                    message: 'Wrong password or username',
                    type: 'error',
                    head: 'Failed to login',
                    submsg: 'Make sure you are entering a correct password and username'
                })
                setShowModal(true)
            }


        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Box>
            <Container>
                <Stack direction="column" spacing={3} alignItems="center" component={'form'}>
                    <TextField
                        id="input-with-icon-textfield"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
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
                    >Login</Button>

                </Stack>
            </Container>
            <LoginModalDoc showModal={showModal} setShowModal={setShowModal} doneMsg={msg} />
        </Box>
    )
}

export default DoctorForm