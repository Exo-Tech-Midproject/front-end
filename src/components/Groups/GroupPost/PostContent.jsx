import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import AuthPhysician from '../../Auths/AuthPhysician';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
let DBRUL = process.env.REACT_APP_BASE_URL

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

export default function PostContent(props) {
  
  const { postTitle, postContent, postDate , createdPost ,setCreatedPost ,PostId} = props;

  const {id} = useParams()

  async function handleDeletePost() {
    try {
        let token = cookie.load('auth')
        const payload = await jwtDecode(token)
        await axios.delete(`${DBRUL}/physician/${payload.username}/groups/${id}/posts/${PostId}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            // console.log('fffffffffff',createdPost,PostId)
            setCreatedPost(createdPost.filter(element => element.PostId !== PostId))
    } catch (err) {
        console.error(err);
    }
};

  return (
    <Box display="flex" gap={2} justifyContent="end" alignItems="center" sx={{ margin: "3%", flexDirection: "column" }}>
      <Box
        display="flex"
        sx={{
          borderRadius: '5px',
          flexDirection: "column",
          marginTop: "10px",
        }}
        p={3}
        bgcolor='#1F485B'
        maxWidth='100%'
        color='white'
      >
         <Typography
          sx={{
            maxHeight: "80%",
            textAlign: "start",
            lineHeight: '1.5',
            fontSize:"1.4rem",
            color:"black"
          }}
        >
          {formatDate(postDate)}
        </Typography>
        <Box>
          {/* <AuthPhysician > */}
      <Button variant="contained" color="error" 
      sx={{
        fontSize:"1.2rem",
        marginTop:"15px",
        "&:hover": {
          transform: "scale(1.1) ",
          transition: 'transform 0.5s ease',
        }
      }}
      onClick={ () => {handleDeletePost()}}
      >
        Delete post
      </Button>
      {/* </AuthPhysician> */}
    </Box>
        <Typography
          sx={{
            maxHeight: "80%",
            textAlign: "center",
            lineHeight: '1.5',
            fontSize: "2.2rem",
            margin: "5px 5px 15px 5px"
          }}
        >
          {postTitle}
        </Typography>
        <Typography
          sx={{
            maxHeight: "80%",
            textAlign: "center",
            lineHeight: '1.5',
          }}
        >
          {postContent}
        </Typography>
      </Box>
    </Box>
  );
}
