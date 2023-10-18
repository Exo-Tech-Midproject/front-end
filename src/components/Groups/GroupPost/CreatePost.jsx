import React, {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import AuthPhysician from '../../Auths/AuthPhysician';
import axios from "axios";
import cookie from "react-cookies";
import jwtDecode from "jwt-decode";
import {useParams} from "react-router-dom";
let DBRUL = process.env.REACT_APP_BASE_URL;


export default function CreatePost({getGroup, setCreatedPost}) {

    const [title, setPostTitle] = useState("");
    const [textContent, setPostContent] = useState("");
    const [postTitleError, setPostTitleError] = useState(null);
    const [postContentError, setPostContentError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const {id} = useParams();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [temp, setTemp] = useState('');
    const [selectedFile, setSelectedFile] = useState(null)

    // console.log('getting data for patient post before ',getGroup.id)


    const handleImageChange = (event) => {
      setSelectedFile(event.target.files[0]);
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setTemp(imageUrl)
  };

    async function fetchPosts() {
      let token = cookie.load("auth");
      const payload = await jwtDecode(token);
      if(payload.accountType === 'physician'){
      try {
            let allPosts = await axios.get(`${DBRUL}/physician/${payload.username}/groups/${id}/posts`,
            {
                headers: {Authorization: `Bearer ${token}`},
            });
            console.log("all posts for physician", allPosts.data);
            
            
            setCreatedPost(allPosts.data);

            return allPosts.data
        } catch (error) {
            console.log(error);
        }
      }
      
      if(payload.accountType === 'patient'){
          // console.log("getting data for physician post ffffffffffffff", getGroup);

          try{
            let allPosts = await axios.get(`${DBRUL}/patient/${payload.username}/groups/66/posts`, {
              headers: {Authorization: `Bearer ${token}`},
          });
          console.log("all posts for patient", allPosts.data);
          // console.log("getting data for patient post", getGroup.id);

          
          setCreatedPost(allPosts.data);

          return allPosts.data
      
          }
          catch(error){
            console.log(error)
          }
        }
    }

    useEffect(() => {
        fetchPosts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handlePostContentChange = (e) => {
        const inputValue = e.target.value;
        setPostContent(inputValue);

        if (inputValue.length < 50) {
            setPostContentError("Post Content must be more than 50 characters");
        } else {
            setPostContentError(null);
        }
    };

    const handlePostTitleChange = (e) => {
        const inputValue = e.target.value;
        setPostTitle(inputValue);

        if (inputValue.length < 10) {
            setPostTitleError("Group name must be at least 10 characters.");
        } else {
            setPostTitleError(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title && textContent && !postTitleError && !postContentError) {
            if (textContent.length >= 50) {

                let newPost = {
                    title: title,
                    textContent: textContent,
                };
                

                let token = cookie.load("auth");
                const payload = await jwtDecode(token);
                let allPosts = await axios.post(`${DBRUL}/physician/${payload.username}/groups/${getGroup.id}/posts`, newPost, {
                    headers: {Authorization: `Bearer ${token}`},
                });
                let postId = allPosts.data.id
                console.log('ppppppppppppppppppppppID',postId)
                const formData = new FormData();
                formData.append('image', selectedFile);
                if (selectedFile !== null) {
                  let imgPost = await axios.post(`${DBRUL}/physician/${payload.username}/groups/${getGroup.id}/posts/${postId}/postImg`, formData,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                      }
                      })
                      console.log(imgPost)
                    }
                // console.log(allPosts.data);
                let banana = await fetchPosts()
                setCreatedPost(banana);
                setPostTitle("");
                setPostContent("");
                setShowForm(false);
                setTemp('');
                setSelectedFile(null);
            }
        } else {
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };
    
    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1%",
                }}
            >
              <AuthPhysician>
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "#1F485B",
                        borderRadius: "5px",
                        margin: "2% auto",
                        fontSize: "1.8rem",
                        width: "25%",
                        "&:hover": {
                            transform: "scale(1.1) ",
                            transition: "transform 0.5s ease",
                            background: "#062942",
                        },
                    }}
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? " < Go Back " : "+ Create New Post"}
                </Button>
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
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // marginTop:"10px",
                        bgcolor: "#062942",
                        width: "100%",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            // color:"#00222E"
                            color: "white",
                            margin: "10px",
                        }}
                    >
                        Add New Post
                    </Typography>
                </Box>
                <Box sx={{
                  display: "flex",
                  alignItems: 'center',
                  margin:"15px 0 15px 0"

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
                        width: "175px",
                        height: '175px',
                        // borderRadius: '50%',
                        bgcolor:"gray",
                        marginTop:"35px"
                      }}
                      src={temp}
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
                          value={title}
                          onChange={handlePostTitleChange}
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
                          value={textContent}
                          onChange={handlePostContentChange}
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
                      fontSize: "2.2rem",
                      borderRadius: "5px",
                      bgcolor: "#062942",
                      width: "35%"
                    }}
                    onClick={handleSubmit}>
                    Create a Post
                  </Button>
                </Box>
              </Box>
            )}
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleCloseSnackbar}>
                    {postTitleError || postContentError}
                </MuiAlert>
            </Snackbar>
        </>
    );
}
