import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import CardGroups from './CardGroups';
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import AuthPhysician from '../Auths/AuthPhysician';
import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
let DBRUL = process.env.REACT_APP_BASE_URL

const DefaultImg = ('https://img.freepik.com/premium-vector/avatar-bearded-doctor-doctor-with-stethoscope-vector-illustrationxa_276184-31.jpg')

let defaultFormData = new FormData();

defaultFormData.append('image', DefaultImg);


export default function CreateGroup() {

  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [groupNameError, setGroupNameError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [createdGroups, setCreatedGroups] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [temp, setTemp] = useState(DefaultImg);
  const [selectedFile, setSelectedFile] = useState(DefaultImg)

  let ordered = createdGroups.sort((a, b) => b.id - a.id)

  const [snackbarOpen, setSnackbarOpen] = useState(false);


  const handleImageChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setTemp(imageUrl)
    // setSelectedFile(imageUrl)

  };




  async function fetchGroups() {
    try {
      let token = cookie.load('auth')
      const payload = await jwtDecode(token)
      let allGroups = await axios.get(`${DBRUL}/${payload.accountType}/${payload.username}/groups`,
        {
          headers: { Authorization: `Bearer ${token}` }
        })
      setCreatedGroups(allGroups.data)
      // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',allGroups.data)

      return allGroups.data
    }
    catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchGroups()

  }, [])




  const handleDescriptionChange = (e) => {
    const inputValue = e.target.value;
    setDescription(inputValue);

    if (inputValue.length > 20) {
      setDescriptionError('Description must less than 20 characters.');
    } else {
      setDescriptionError(null);
    }
  };



  const handleGroupNameChange = (e) => {
    const inputValue = e.target.value;
    setGroupName(inputValue);

    if (inputValue.length > 20) {
      setGroupNameError('Group name must be less than 20 characters.');
    } else {
      setGroupNameError(null);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (groupName && description && !groupNameError && !descriptionError) {
      if (description.length <= 20 && groupName.length <= 20) {
        let newGroup = {
          groupName: groupName,
          description: description,

        };
        if (selectedFile === DefaultImg) {
          newGroup = {
            groupName: groupName,
            description: description,
            groupImage: DefaultImg,

          }
        }

        let token = cookie.load('auth')
        const payload = await jwtDecode(token)
        let allGroups = await axios.post(`${DBRUL}/physician/${payload.username}/groups`, newGroup,
          {
            headers: { Authorization: `Bearer ${token}` }
          })
        let imgId = allGroups.data.id
        const formData = new FormData();
        formData.append('image', selectedFile);
        if (selectedFile !== DefaultImg) {
          let imgGroup = await axios.post(`${DBRUL}/physician/${payload.username}/groups/${imgId}/groupImg`, formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
              }
            })
          console.log(imgGroup, 'aaaaaaaaaaaaaaaaaaaaaai')
        }
        let banana = await fetchGroups()
        setCreatedGroups(banana);
        setGroupName('');
        setDescription('');
        setSelectedFile(DefaultImg);
        setTemp(DefaultImg)

        setShowForm(false);
      }
    } else {
      setSnackbarOpen(true);
    }
  };


  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); // Close the Snackbar when the user closes it
  };


  return (
    <>
      <Container sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        margin: '1%',
      }}>
        <AuthPhysician>
          <Button variant="contained"
            sx={{
              bgcolor: '#1F485B',
              borderRadius: "5px",
              margin: "3%",
              fontSize: "1.5rem",
              "&:hover": {
                transform: "scale(1.1) ",
                transition: 'transform 0.5s ease',
                background: "#062942"
              }
            }}
            onClick={() => setShowForm(!showForm)}
          >{showForm ? " < Go Back " : "+ Create New Group"}</Button>
        </AuthPhysician>
      </Container>
      {showForm && (
        <Box sx={{
          border: "0.01px solid #1F485B7f",
          bgcolor: "white",
          borderRadius: "4px",
          boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
          width: "90%",
          margin: 'auto',
        }}>
          <Typography variant="h1" sx={{
            color: "#062942",
            textAlign: "center",
            margin: '1%',
            display: "block"
          }}>
            Create New Group
          </Typography>
          <Box sx={{
            display: "flex",
            alignItems: 'center',
          }}>
            <Container sx={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: 'center',
            }}>
              <Box
                component="img"
                sx={{
                  width: "150px",
                  height: '150px',
                  borderRadius: '50%',
                }}
                alt="Group img"
                src={temp}
              />

              <label htmlFor="image-upload">
                <Button variant="contained" component="span" sx={{
                  bgcolor: "#062942",
                  marginTop: "10px"
                }}>
                  Upload Image
                </Button>
              </label>
              <input
                accept="image/*"
                id="image-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </Container>
            <Stack spacing={3} sx={{
              width: "70%",
              paddingRight: "10%",
            }} >
              <form onSubmit={handleSubmit} spacing={2}>
                <Box sx={{
                  margin: "3%",
                }}>
                  <TextField
                    label="Group Name"
                    variant="outlined"
                    fullWidth
                    value={groupName}
                    onChange={handleGroupNameChange}
                    required
                    sx={{
                      bgcolor: "#ECF3F8",
                      "& label": {
                        color: "#00222E",
                      },
                    }}
                  />
                </Box>
                <Box sx={{
                  margin: "3%",
                }}>
                  <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={3}
                    value={description}
                    onChange={handleDescriptionChange}
                    required
                    sx={{
                      bgcolor: "#ECF3F8",
                      "& label": {
                        color: "#00222E",
                      },
                    }}
                  />
                </Box>
              </form>
            </Stack>
          </Box>
          <Box sx={{
            textAlign: "center",
            margin: "2%",
            Width: "50%",
          }}>
            <Button type="submit" variant="contained" color="primary"
              sx={{
                fontSize: "2rem",
                borderRadius: "5px",
                bgcolor: "#062942",
                width: "35%"
              }}
              onClick={handleSubmit}>
              Create a Group
            </Button>
          </Box>
        </Box>
      )}
      <Divider sx={{ margin: '20px' }} />
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // bgcolor:"#062942",
        // backgroundPosition: "center",
        //         backgroundRepeat: "no-repeat",
        //         backgroundSize: "cover",
        //         backgroundImage:"url('https://cdn.create.vista.com/api/media/small/483426030/stock-photo-abstract-gradient-classic-blue-soft-color-background-background-color-graphic')",
        height: "20vh",
        // height:"50px"
      }}>
        <Typography variant="h1" textTransform="capitalize" sx={{
          // marginBottom: '3%',
          // color: 'white',
          color: '#062942',
        }}>
          Your Groups
        </Typography>
      </Box>
      <Box
        sx={{
          margin: 'auto',
          flexWrap: 'wrap',
          display: 'flex',
          minHeight: "30vh",
          justifyContent: 'center',
          mb: '50px'
        }}
      >
        {createdGroups.map((group, index) => (
          <CardGroups key={index}
            id={group.id}
            createdGroups={createdGroups}
            setCreatedGroups={setCreatedGroups}
            groupName={group.groupName}
            description={group.description}
            groupImage={group.groupImage}
          />
        ))}
      </Box>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="error"
          onClose={handleCloseSnackbar}
        >
          {groupNameError || descriptionError}
        </MuiAlert>
      </Snackbar>
    </>
  );
};
