import React from 'react'
// import { Box, Container, TextField, Typography, Button, Stack } from '@mui/material'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

function DoctorForm() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box>
            <Container>
                <Stack direction="column" spacing={3} alignItems="center">
                    <Typography variant="body2" sx={{ color: "#B4B4B3", textAlign: "center" }}>- Login as a Doctor -</Typography>
                    <TextField
                        id="input-with-icon-textfield"
                        size="small"
                        placeholder="Email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                        sx={{ color: "black", width: "300px" }}
                    />
                    <TextField
                        sx={{ width: "300px" }}
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        size="small"
                        placeholder="Password"
                        variant="standard"
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
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: "#1F485B" }}
                    >Login</Button>
                
                </Stack>
            </Container>
        </Box>
    )
}

export default DoctorForm