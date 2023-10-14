import React, {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
import { useParams } from "react-router-dom";
let DBRUL = process.env.REACT_APP_BASE_URL

export default function CreatePost({createdPost,setCreatedPost}) {

    const [title, setPostTitle] = useState("");
    const [textContent, setPostContent] = useState("");
    const [postTitleError, setPostTitleError] = useState(null);
    const [postContentError, setPostContentError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const {id} = useParams()
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    async function fetchPosts (){
        try{
            let token = cookie.load('auth')
            const payload = await jwtDecode(token)
            
            let allPosts = await axios.get(`${DBRUL}/${payload.accountType}/${payload.username}/groups/${id}/posts`,
            {
                headers: { Authorization: `Bearer ${token}` }
            })
        console.log('aaaaaaaaaaaaaaaaaaa',allPosts.data)
        setCreatedPost(allPosts.data)

    }
    catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPosts()

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

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
                const newPost = {
                    title:title,
                    textContent:textContent,
                };

                let token = cookie.load('auth')
        const payload = await jwtDecode(token)
        let allPosts = await axios.post(
            `${DBRUL}/physician/${payload.username}/groups/${id}/posts`
            ,newPost,
            {
                headers: { Authorization: `Bearer ${token}` }
            })
        console.log(allPosts.data)
                setCreatedPost([...createdPost, allPosts.data]);
                setPostTitle("");
                setPostContent("");
                setShowForm(false);
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
    <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1%',
      }}>
        <Button variant="contained"
          sx={{
            bgcolor: '#062942',
            borderRadius: "5px",
            margin: "2% auto",
            fontSize: "1.8rem",
            width:"25%",
            "&:hover": {
              transform: "scale(1.1) ",
              transition: 'transform 0.5s ease',
              background: "#1F485B"
            }
          }}
          onClick={() => setShowForm(!showForm)}
        >{showForm ? " < Go Back " : "+ Create New Post"}</Button>
      </Container>
      {showForm && (
        <Box
            sx={{
                border: "0.01px solid #1F485B7f",
                bgcolor: "white",
                borderRadius: "4px",
                boxShadow:
                    "0px 2px 3px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                width: "85%",
                margin: "5px auto",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Stack
                    spacing={3}
                    sx={{
                        width: "100%",
                    }}
                >
                    <form onSubmit={handleSubmit} spacing={2}>
                        <Box
                            sx={{
                                margin: "3%",
                            }}
                        >
                            <TextField
                                label="Post Title"
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
                        <Box
                            sx={{
                                margin: "3%",
                            }}
                        >
                            <TextField
                                label="Post Content"
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
            <Box
                sx={{
                    textAlign: "center",
                    marginTop: "0",
                    marginBottom: "2%",
                    Width: "50%",
                }}
            >
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        fontSize: "2rem",
                        borderRadius: "5px",
                        bgcolor: "#062942",
                        width: "35%",
                    }}
                    onClick={handleSubmit}
                >
                    Create new Post
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