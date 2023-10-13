import React, { useState } from 'react';
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

const DefaultImg = 'https://media.istockphoto.com/id/1413129950/vector/avatar-of-woman-doctor-with-brown-hair-doctor-with-stethoscope-vector-illustration.jpg?s=612x612&w=0&k=20&c=J62PxR-p5QeTpqgk-5C8naTrbZdBUnhuxh6sub1YpBg='

const imageURL = 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Background_Colors_by_Peak_Hora26.jpg'
export default function CreateGroup() {

  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [groupImageUrl, setGroupImageUrl] = useState(DefaultImg);
  const [groupNameError, setGroupNameError] = useState(null);
  const [descriptionError, setDescriptionError] = useState(null);
  const [createdGroups, setCreatedGroups] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setGroupImageUrl(imageUrl);
    }
  };

  const handleDescriptionChange = (e) => {
    const inputValue = e.target.value;
    setDescription(inputValue);

    if (inputValue.length < 5 || inputValue.length > 100) {
      setDescriptionError('Description must be between 5 and 100 characters.');
    } else {
      setDescriptionError(null);
    }
  };

  const handleGroupNameChange = (e) => {
    const inputValue = e.target.value;
    setGroupName(inputValue);

    if (inputValue.length < 5) {
      setGroupNameError('Group name must be at least 5 characters.');
    } else {
      setGroupNameError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (groupName && description && !groupNameError && !descriptionError) {
      if (description.length >= 5 && description.length <= 100) {
        const newGroup = {
          groupName,
          description,
          groupImage: groupImageUrl,
        };

        setCreatedGroups([...createdGroups, newGroup]);
        setGroupName('');
        setDescription('');
        setGroupImageUrl(DefaultImg);

        setShowForm(false);
      }
    } else {
      setSnackbarOpen(true); // Open the Snackbar for errors
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
        <Button variant="contained"
          sx={{
            bgcolor: '#062942',
            borderRadius: "5px",
            margin: "3%",
            fontSize: "1.3rem",
            "&:hover": {
              transform: "scale(1.1) ",
              transition: 'transform 0.5s ease',
              background: "#1F485B"
            }
          }}
          onClick={() => setShowForm(!showForm)}
        >{showForm ? " < Go Back " : "+ Create New Group"}</Button>
      </Container>
      {showForm && (
        <Box sx={{
          // backgroundImage: `url(${imageURL})`,
          // backgroundPosition: 'center',
          // backgroundSize: 'cover',
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
                src={groupImageUrl}
              />

              <label htmlFor="image-upload">
                <Button variant="contained" component="span" sx={{
                  bgcolor: "#062942",
                  marginTop:"10px"
                }}>
                  Upload Image
                </Button>
              </label>
              <input
                accept="image/*"
                id="image-upload"
                type="file"
                style={{ display: 'none'}}
                onChange={handleImageUpload}
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
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // height:"50px"
      }}>
      <Typography variant="h1" textTransform="capitalize" sx={{
                marginBottom:'3%',
                color:'#062942'
            }}>
                    Your Groups
                </Typography>
      </Box>
      <Container
        sx={{
          margin: '2%',
          flexWrap: 'wrap',
          display: 'flex',
          minHeight:"30vh"
        }}
      >
        {createdGroups.map((group, index) => (
          <CardGroups key={index}
            groupName={group.groupName}
            description={group.description}
            groupImage={group.groupImage}
          />
        ))}
      </Container>
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
