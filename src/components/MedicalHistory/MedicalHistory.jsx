import {Box, Container} from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useState, useEffect} from "react";
import HeroHistory from "./HeroHistory";
import AuthPhysician from '../Auths/AuthPhysician';
import MedicalSection from "./MedicalSection";
// import EventNoteIcon from '@mui/icons-material/EventNote';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
let DBRUL = process.env.REACT_APP_BASE_URL

export default function PatientHistory() {

    // const [medicalHistory , setMedicalHistory] = useState('')
    
    const [formData, setFormData] = useState({
        patientUN: "",
        physicianUN: "",
        historyPI: "",
        allergies: "",
        presentILL: "",
        familyHistory: "",
        socialHistory: "",
    });

    async function fetchHistory (){
        try{
            let token = cookie.load('auth')
            const payload = await jwtDecode(token)
            let history = await axios.get(`${DBRUL}/physician/${payload.username}/patients/${payload.username}/disease`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                })
            console.log(history.data)
            setFormData(history.data)
            console.log(history, 'from history function')
        }
        catch (error){
          console.log(error)
        }
      }


      useEffect(() => {
        fetchHistory()
    
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            formData.patientUN &&
            formData.physicianUN &&
            formData.historyPI &&
            formData.presentILL &&
            formData.allergies &&
            formData.familyHistory &&
            formData.socialHistory
        ) {
            const newHistory = {
                historyPI:formData.historyPI,
                presentILL:formData.presentILL,
                allergies:formData.allergies,
                familyHistory:formData.familyHistory,
                socialHistory:formData.socialHistory,
                patientUN:formData.patientUN,
                physicianUN:formData.physicianUN
            }
            let token = cookie.load('auth')
            const payload = await jwtDecode(token)
            let history = await axios.post(`${DBRUL}/physician/${payload.username}/patients/${payload.username}/disease`,newHistory,
            {
                headers: { Authorization: `Bearer ${token}` }
            })
        console.log("hhhhhhhhhhhhhhhhhhhhhhh",history.data)
        setFormData(history)
        } else {
            console.error("Please fill in all fields.");
        }
    };

    

return (
    <Box>
        <HeroHistory />
    
        
        <Container
            component="main"
            sx={{
                minHeight: "100vh",
                width: "80%",
                display: "flex",
                alignItems: "center",
                
            }}
        >
            <Box
                component="form"
                sx={{
                    marginTop: "5%",
                    marginBottom: "5%",
                    boxShadow: "0px 0px 1px 1px #888888",
                    bgcolor: "white",
                    border:"10px solid #00222E"
                }}
                onSubmit={handleSubmit}
            >
                <Box sx={{
                    bgcolor:"#00222E",
                    height:"120px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"
                }}>
                    <Box 
                    sx={{
                        height:"100%",
                        width:"60%",
                        display:"flex",
                        alignItems:"center",
                    justifyContent:"center",
                    borderTop:"none",
                    }}>
                        <EventNoteOutlinedIcon sx={{
                            width:"10%",
                            height:"40%",
                            color:"white",
                            fontSize:"large"
                        }}/>
                <Typography
                    component="h1"
                    variant="h2"
                    sx={{
                        color: "white",
                    }}
                >
                    Medical History
                </Typography>
                </Box>
                </Box>
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "1% 3% 3% 3%",
                    }}
                >
                    <Box component="form" noValidate sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Patient username"
                                    value={formData.patientUN}
                                    onChange={(e) => setFormData({...formData, patientUN: e.target.value})}
                                    sx={{
                                        bgcolor: "#ECF3F8",
                                        "& label": {
                                            color: "#00222E",
                                        },
                                    }}
                                />
                                
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="physicianUN"
                                    required
                                    fullWidth
                                    id="physicianUN"
                                    label="Physician username"
                                    value={formData.physicianUN}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            physicianUN: e.target.value,
                                        })
                                    }
                                    sx={{
                                        bgcolor: "#ECF3F8",
                                        "& label": {
                                            color: "#00222E",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="historyPI"
                                    required
                                    fullWidth
                                    id="historyPI"
                                    label="history PI"
                                    value={formData.historyPI}
                                    multiline
                                    onChange={(e) => setFormData({...formData, historyPI: e.target.value})}
                                    sx={{
                                        bgcolor: "#ECF3F8",
                                        "& label": {
                                            color: "#00222E",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="presentILL"
                                    required
                                    fullWidth
                                    id="presentILL"
                                    label="present ILL"
                                    value={formData.presentILL}
                                    multiline
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            presentILL: e.target.value,
                                        })
                                    }
                                    sx={{
                                        bgcolor: "#ECF3F8",
                                        "& label": {
                                            color: "#00222E",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="allergies"
                                    required
                                    fullWidth
                                    id="allergies"
                                    label="Allergies"
                                    value={formData.allergies}
                                    multiline
                                    onChange={(e) => setFormData({...formData, allergies: e.target.value})}
                                    rows={3} 
                                    sx={{
                                        bgcolor: "#ECF3F8",
                                        "& label": {
                                            color: "#00222E",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="familyHistory"
                                    required
                                    fullWidth
                                    id="familyHistory"
                                    label="Family History"
                                    value={formData.familyHistory}
                                    multiline
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            familyHistory: e.target.value,
                                        })
                                    }
                                    sx={{
                                        bgcolor: "#ECF3F8",
                                        "& label": {
                                            color: "#00222E",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="socialHistory"
                                    label="Social History"
                                    value={formData.socialHistory}
                                    multiline
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            socialHistory: e.target.value,
                                        })
                                    }
                                    sx={{
                                        bgcolor: "#ECF3F8",
                                        "& label": {
                                            color: "#00222E",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}></Grid>
                        </Grid>
                        <AuthPhysician>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // color='medical'
                            sx={{
                                mt: 3,
                                mb: 2,
                                fontSize: "2rem",
                                bgcolor: "#00222E",
                                "&:hover": {
                                    background: "#1F485B"
                                }
                            }}
                        >
                            submit
                        </Button>
                        </AuthPhysician>
                        <Grid container justifyContent="flex-end">
                            <Grid item></Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Container>
        <MedicalSection />
    </Box>
);
}
