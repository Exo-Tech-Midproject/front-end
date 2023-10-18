import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { LoginContext } from "../../../ContextApi/Auth";
import AuthPhysician from '../../Auths/AuthPhysician';
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import axios from 'axios';
import cookie from 'react-cookies';
import jwtDecode from 'jwt-decode';
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";



const DB_URL = process.env.REACT_APP_BASE_URL;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function AddMembers() {

  const { vistedGroup } = React.useContext(LoginContext)

  const [personName, setPersonName] = useState([]);
  const [open, setOpen] = useState(false);
  const [subscribers, setSubscribers] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

//   const theme = useTheme(); // Use the theme

const handleCloseSnackbar = () => {
  setOpenSnackbar(false);
};


  async function getSubscribers() {
    try {
      const token = cookie.load('auth');
      const payload = jwtDecode(token);
      const response = await axios.get(`${DB_URL}/physician/${payload.username}/patients/subscribers`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSubscribers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSubscribers();
    
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  async function handleAddMembers() {
    

    try {
      const token = cookie.load('auth');
      const payload = await jwtDecode(token);
      const groupName = vistedGroup;
      
      const members = await Promise.all(personName.map(async (element) => {

          const response = await axios.post(
            `${DB_URL}/physician/${payload.username}/patients/${element}/addtogroup/${groupName}`,
            {},
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          return response.data;

      }));  

      setOpen(false);
      setSuccessMessage("History added successfully");
      setOpenSnackbar(true);

        console.log('mmmmmmmmmm',members)

        setPersonName([])
      }
    catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <AuthPhysician>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          bgcolor: "#1F485B",
          borderRadius: "5px",
          margin: "2%",
          fontSize: "1.3rem",
          color: "white",
          width: "100%",
          "&:hover": {
            transform: "scale(1.1)",
            transition: "transform 0.5s ease",
            background: "#062942",
          },
        }}
      >
        + Add Members
      </Button>
      </AuthPhysician>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <DialogTitle
            sx={{
              fontSize: "2.2rem",
              bgcolor: "#1F485B",
              color: "white",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              fontWeight: "600",
            }}
          >
            Add Members
          </DialogTitle>
          <DialogContent
            sx={{
              width: "500px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DialogContentText
              sx={{
                color: "#1F485B",
                margin: "20px auto",
                fontWeight: "600",
              }}
            >
              Select your patient username
            </DialogContentText>
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label" sx={{ color: "#062942" }}>
                  Add
                </InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  fullWidth
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {subscribers.map((subscriber) => (
                    <MenuItem key={subscriber.username} value={subscriber.username}>
                      {subscriber.fullName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              color="medical"
              onClick={handleAddMembers}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              Add
            </Button>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                                <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{width: "100%"}}>
                                    {successMessage}
                                </MuiAlert>
                            </Snackbar>
            <Button
              color="error"
              onClick={handleClose}
              sx={{
                fontSize: "1.5rem",
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}
