import {Box, Container} from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useState, useEffect} from "react";
import HeroHistory from "./HeroHistory";


export default function PatientHistory() {
    
    const [formData, setFormData] = useState({
        patientUN: "",
        physicianUN: "",
        historyPI: "",
        allergies: "",
        presentILL: "",
        familyHistory: "",
        socialHistory: "",
    });

    const handleAllergiesChange = (e) => {
        setFormData({...formData, allergies: e.target.value});
    };

    useEffect(() => {
        console.log("Form data saved:", formData);
    }, [formData]);

    const handleSubmit = (e) => {
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
            // All fields are filled
            // You can handle the submission logic here
            console.log("Form submitted with data:", formData);
        } else {
            // Some fields are missing
            // Handle the error state or display an error message
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
                    border: "0.5px solid #1F485B",
                    boxShadow: "0px 0px 1px 1px #888888",
                    borderRadius: "15px",
                    bgcolor: "white",
                }}
                onSubmit={handleSubmit}
            >
                <Typography
                    component="h1"
                    variant="h2"
                    sx={{
                        margin: "3%",
                        color: "#00222E",
                    }}
                >
                    Medical History
                </Typography>
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        margin: "3%",
                    }}
                >
                    <Box component="form" noValidate sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="patientUN"
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
                                    onChange={handleAllergiesChange}
                                    multiline // Enable multiline input
                                    rows={3} // Set the number of visible rows
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                fontSize: "2rem",
                                bgcolor: "#00222E",
                            }}
                        >
                            submit
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item></Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
);
}
