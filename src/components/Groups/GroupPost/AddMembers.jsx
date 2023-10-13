import * as React from "react";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {useState} from "react";
import Box from "@mui/material/Box";

export default function AddMembers() {
    const [open, setOpen] = useState(false);
    const [patientList, setPatientList] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePatientListChange = (event) => {
        setPatientList(event.target.value);
    };

    const handleAddPatients = async () => {
        const patients = patientList
        .split("\n")
        .map((line) => line.trim())
        .filter((patient) => patient !== "");

        try {
            // Make a POST request to your server with the list of patients
            const response = await fetch("/api/addMembersToGroups", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: "your_username", // Replace with your actual data
                    patients: patients, // Send the list of patients
                    groupName: "your_group_name", // Replace with your actual data
                }),
            });

            if (response.ok) {
                // Subscription successful, you can handle the success case here
                // You may also want to handle potential errors
                console.log("Patients added successfully");
            } else {
                // Handle errors, such as invalid patient usernames or server issues
                console.error("Failed to add patients");
            }
        } catch (error) {
            console.error("Error:", error);
        }

        // Close the dialog
        handleClose();
    };

    return (
        <Box>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{
                    bgcolor: "#062942",
                    borderRadius: "5px",
                    margin: "2%",
                    fontSize: "1.3rem",
                    color: "white",
                    width: "100%",
                    "&:hover": {
                        transform: "scale(1.1)",
                        transition: "transform 0.5s ease",
                        background: "#1F485B",
                    },
                }}
            >
                + Add Members
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        // justifyContent:"center",
                        alignItems: "center",
                    }}
                >
                    <DialogTitle
                        sx={{
                            fontSize: "2rem",
                        }}
                    >
                        Add Members
                    </DialogTitle>
                    <DialogContent
                        sx={{
                            width: "500px",
                            height: "100%",
                        }}
                    >
                        <DialogContentText
                            sx={{
                                color: "red",
                                margin: "10px auto",
                            }}
                        >
                            Enter a list of patient usernames (one per line)
                        </DialogContentText>
                        <TextareaAutosize
                            style={{width: "350px", margin: "10px", lineHeight: "2", fontSize: "1.2rem"}}
                            minRows={3}
                            maxRows={12}
                            placeholder="Patient usernames..."
                            value={patientList}
                            onChange={handlePatientListChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleAddPatients}>Add</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </Box>
    );
}
