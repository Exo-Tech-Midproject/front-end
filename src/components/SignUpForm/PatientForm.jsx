import React from 'react'
import { Box, Container, TextField, Typography, Button, Stack } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';


function PatientForm() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box>
            <Container>
                <Stack direction="column" spacing={2} alignItems="center">
                    <Typography variant="body2" sx={{ color: "#B4B4B3", textAlign: "center" }}>- Signup as a Patient -</Typography>
                    <Stack direction="column" spacing={4}>
                        <TextField
                            id="input-with-icon-textfield"
                            size="small"
                            placeholder='Full Name'
                            variant="standard"
                            sx={{ color: "black", width: "300px", height: "10px" }}
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            size="small"
                            placeholder='Email'
                            variant="standard"
                            sx={{ color: "black", width: "300px", height: "10px" }}
                        />
                        <TextField
                            sx={{ color: "black", width: "300px", height: "10px" }}
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            size="small"
                            placeholder="Password"
                            variant="standard"
                            InputProps={{

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
                        <TextField
                            sx={{ color: "black", width: "300px", height: "10px" }}
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            size="small"
                            placeholder="Confirm Password"
                            variant="standard"
                            InputProps={{
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
                        >
                            Signup
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default PatientForm