import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {useState} from "react";
import Box from "@mui/material/Box";
// import AuthPhysician from '../../Auths/AuthPhysician';
import {useTheme} from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

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

const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}

export default function AddMembers() {

    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            {/* <AuthPhysician> */}
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
            {/* </AuthPhysician> */}
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
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center"
                        }}
                    >
                        <DialogContentText
                            sx={{
                                color: "#1F485B",
                                margin: "20px auto",
                                fontWeight: "600",
                            }}
                        >
                            Select your patient usernames
                        </DialogContentText>
                        <div>
                            <FormControl sx={{m: 1, width: 300}}>
                            <InputLabel id="demo-multiple-chip-label" 
                                sx={{
                                    color: "#062942",
                                    "& label": {
                                        color: "#00222E",
                                    },
                                }}
                            >
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
                                        <Box sx={{display: "flex", flexWrap: "wrap", gap: 0.5}}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            color="medical"
                            // onClick={handleAddPatients}
                            sx={{
                                fontSize: "1.5rem",
                            }}
                        >
                            Add
                        </Button>
                        <Button
                            color="error"
                            onClick={handleClose}
                            sx={{
                                fontSize: "1.5rem",
                            }}
                        >
                            Cancel
                        </Button>
                        {/* </ Box> */}
                    </DialogActions>
                </Box>
            </Dialog>
        </Box>
    );
}
