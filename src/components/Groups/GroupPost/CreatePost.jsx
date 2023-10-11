import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import PostContent from "./PostContent";
// import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function CreatePost({createdPost,setCreatedPost}) {

    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const [postTitleError, setPostTitleError] = useState(null);
    const [postContentError, setPostContentError] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (postTitle && postContent && !postTitleError && !postContentError) {
            if (postContent.length >= 50) {
                const newPost = {
                    postTitle,
                    postContent,
                    //   groupImage: groupImageUrl,
                };

                setCreatedPost([...createdPost, newPost]);
                setPostTitle("");
                setPostContent("");
                // setGroupImageUrl(DefaultImg);
                // setSuccess("Post created successfully.");
            }
        } else {
            // setSuccess(null);
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
        justifyContent: 'start',
        alignItems: 'center',
        margin: '1%',
      }}>
        <Button variant="contained"
          sx={{
            bgcolor: '#062942',
            borderRadius: "10px",
            margin: "2% ",
            fontSize: "1.3rem",
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
                    {/* {success && <p className="success">{success}</p>} */}
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
                                value={postTitle}
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
                                value={postContent}
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
        {/* <Container
            sx={{
                margin: "1%",
                flexWrap: "wrap",
                display: "flex",
            }}
        > */}
            {/* {createdPost.map((post, index) => (
                <PostContent
                    key={index}
                    postTitle={post.postTitle}
                    postContent={post.postContent}
                />
            ))} */}
        {/* </Container> */}
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleCloseSnackbar}>
                {postTitleError || postContentError}
            </MuiAlert>
        </Snackbar>
    </>
);
}