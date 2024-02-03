import { Box, Container } from "@mui/material";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import HeroHistory from "./HeroHistory";
import AuthPhysician from "../Auths/AuthPhysician";
import InputAdornment from "@mui/material/InputAdornment";
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MedicalSection from "./MedicalSection";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import axios from "axios";
import cookie from "react-cookies";
import jwtDecode from "jwt-decode";
import { useParams } from "react-router-dom";

import { BsPersonSquare } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa";
import { FaFileMedical } from "react-icons/fa6";
import { BsFileEarmarkMedicalFill } from "react-icons/bs";
import { FaBookMedical } from "react-icons/fa";
import { FaFileMedicalAlt } from "react-icons/fa";

let DBRUL = process.env.REACT_APP_BASE_URL;

export default function OneHistory() {
  let params = useParams();

  const [formData, setFormData] = useState({
    patientUN: "",
    physicianUN: "",
    historyPI: "",
    allergies: "",
    presentILL: "",
    familyHistory: "",
    socialHistory: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function fetchOneHistory() {
    try {
      let token = cookie.load("auth");
      const payload = await jwtDecode(token);
      console.log(params.patientUN, "232323232323");
      if (payload?.accountType === "physician") {
        let history = await axios.get(
          `${DBRUL}/physician/${payload.username}/patients/${params.patientUN}/disease`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log("from get one patient history", history.data);
        setFormData(history.data);
        console.log(history, "from history function");
      }
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(view, "for see the view");

  useEffect(() => {
    fetchOneHistory();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            border: "10px solid #00222E",
          }}
          // onSubmit={handleSubmit}
        >
          <Box
            sx={{
              bgcolor: "#00222E",
              height: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "none",
              }}
            >
              <EventNoteOutlinedIcon
                sx={{
                  width: "10%",
                  height: "40%",
                  color: "white",
                  fontSize: "large",
                }}
              />
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
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    name="patientUN"
                    variant="outlined"
                    required
                    fullWidth
                    label="Patient username"
                    value={formData?.patientUN}
                    onChange={handleInputChange}
                    sx={{
                      bgcolor: "#ECF3F8",
                      "& label": {
                        color: "#00222E",
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment
                          sx={{
                            "& .MuiTypography-root": {
                              color: "#1F485B",
                            },
                            marginRight: "10px",
                          }}
                          position="end"
                        >
                          <BsPersonSquare fontSize="30px" color="#1F485B" />
                        </InputAdornment>
                      ),
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
                    value={formData?.physicianUN}
                    onChange={handleInputChange}
                    sx={{
                      bgcolor: "#ECF3F8",
                      "& label": {
                        color: "#00222E",
                      },
                    }}
                    InputProps={{
                      // readOnly:false,
                      startAdornment: (
                        <InputAdornment
                          sx={{
                            "& .MuiTypography-root": {
                              color: "#1F485B",
                            },
                            marginRight: "10px",
                          }}
                          position="end"
                        >
                          <FaUserDoctor fontSize="30px" color="#1F485B" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="historyPI"
                    required
                    fullWidth
                    id="historyPI"
                    label="History of Present Illness"
                    value={formData?.historyPI}
                    multiline
                    onChange={handleInputChange}
                    sx={{
                      bgcolor: "#ECF3F8",
                      "& label": {
                        color: "#00222E",
                      },
                    }}
                    InputProps={{
                      // readOnly:{view},
                      startAdornment: (
                        <InputAdornment
                          sx={{
                            "& .MuiTypography-root": {
                              color: "#1F485B",
                            },
                            marginRight: "10px",
                          }}
                          position="end"
                        >
                          <FaNotesMedical fontSize="30px" color="#1F485B" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="presentILL"
                    required
                    fullWidth
                    id="presentILL"
                    label="Present Illness"
                    value={formData?.presentILL}
                    multiline
                    onChange={handleInputChange}
                    sx={{
                      bgcolor: "#ECF3F8",
                      "& label": {
                        color: "#00222E",
                      },
                    }}
                    InputProps={{
                      // readOnly:{view},
                      startAdornment: (
                        <InputAdornment
                          sx={{
                            "& .MuiTypography-root": {
                              color: "#1F485B",
                            },
                            marginRight: "10px",
                          }}
                          position="end"
                        >
                          <FaFileMedical fontSize="30px" color="#1F485B" />
                        </InputAdornment>
                      ),
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
                    value={formData?.allergies}
                    multiline
                    onChange={handleInputChange}
                    // rows={2}
                    sx={{
                      bgcolor: "#ECF3F8",
                      "& label": {
                        color: "#00222E",
                      },
                    }}
                    InputProps={{
                      // readOnly:{view},
                      startAdornment: (
                        <InputAdornment
                          sx={{
                            "& .MuiTypography-root": {
                              color: "#1F485B",
                            },
                            marginRight: "10px",
                          }}
                          position="end"
                        >
                          <BsFileEarmarkMedicalFill
                            fontSize="30px"
                            color="#1F485B"
                          />
                        </InputAdornment>
                      ),
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
                    value={formData?.familyHistory}
                    multiline
                    onChange={handleInputChange}
                    sx={{
                      bgcolor: "#ECF3F8",
                      "& label": {
                        color: "#00222E",
                      },
                    }}
                    InputProps={{
                      // readOnly:{view},
                      startAdornment: (
                        <InputAdornment
                          sx={{
                            "& .MuiTypography-root": {
                              color: "#1F485B",
                            },
                            marginRight: "10px",
                          }}
                          position="end"
                        >
                          <FaBookMedical fontSize="30px" color="#1F485B" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="socialHistory"
                    required
                    fullWidth
                    id="socialHistory"
                    label="Social History"
                    value={formData?.socialHistory}
                    multiline
                    onChange={handleInputChange}
                    sx={{
                      bgcolor: "#ECF3F8",
                      "& label": {
                        color: "#00222E",
                      },
                    }}
                    InputProps={{
                      // readOnly:{view},
                      startAdornment: (
                        <InputAdornment
                          sx={{
                            "& .MuiTypography-root": {
                              color: "#1F485B",
                            },
                            marginRight: "10px",
                          }}
                          position="end"
                        >
                          <FaFileMedicalAlt fontSize="30px" color="#1F485B" />
                        </InputAdornment>
                      ),
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
                  sx={{
                    mt: 3,
                    mb: 2,
                    fontSize: "2rem",
                    bgcolor: "#00222E",
                    "&:hover": {
                      background: "#1F485B",
                    },
                  }}
                  // onClick={handleSubmit}
                >
                  Submit
                </Button>
                {/* <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                                <MuiAlert onClose={handleCloseSnackbar} severity="success" sx={{width: "100%"}}>
                                    {successMessage}
                                </MuiAlert>
                            </Snackbar> */}
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
