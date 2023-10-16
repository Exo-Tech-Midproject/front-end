import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import AuthPhysician from '../../Auths/AuthPhysician';
import { useState } from 'react';
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
  
  const { postImage ,postTitle, postContent, postDate , createdPost ,UpdateCreatedPost ,PostId} = props;

  const [imageSrc, setImageSrc] = useState(postImage);

  const {id} = useParams()


  async function handleDeletePost() {
    try {
        let token = cookie.load('auth')
        const payload = await jwtDecode(token)
        await axios.delete(`${DBRUL}/physician/${payload.username}/groups/${id}/posts/${PostId}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            let newArray = createdPost.filter(element => element.id !== PostId)
            
            UpdateCreatedPost(newArray)
            console.log('fffffffffff',newArray)
          } catch (err) {
        console.error(err);
      }
};

const handleImageError = () => {
  setImageSrc("URL_OF_YOUR_FALLBACK_IMAGE_HERE");
};

  return (
    <Box display="flex" gap={2} justifyContent="end" alignItems="center"
    sx={{
      margin: "2%", 
      flexDirection: "column" ,
      bgcolor:'#1F485B'
      }}>
      <Box
        display="flex"
        sx={{
          // borderRadius: '5px',
          flexDirection: "column",
          // marginTop: "20px",
          width:"90%",
          margin:"10px",
        }}
        p={3}
        maxWidth='100%'
        color='white'
      >
        <Box sx={{
          display:"flex",
          justifyContent:"space-between",
          margin:"5px ",
          alignItems:"center"
        }}>
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
          {/* <AuthPhysician > */}
      <Button variant="contained" color="error" 
      sx={{
        fontSize:"1.1rem",
        // marginTop:"15px",
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
    </Box >
    <Box sx={{
      marginTop:"10px",
      height:"350px",
      border:'1px solid #4E7F9D',
      width:"100%",
      backgroundOrigin: "border-box",
      backgroundPosition: "center",
      // backgroundImage:`url(${imageSrc})`,
      backgroundImage:"url('https://img.freepik.com/premium-photo/healthcare-medical-doctor-working-with-professional-team-physician-nursing-assistant_34200-767.jpg')",
      backgroundSize: "cover",
    }}
    >
    </Box>
        <Typography
          sx={{
            maxHeight: "80%",
            textAlign: "center",
            lineHeight: '1.5',
            fontSize: "3rem",
            margin: "5px 5px 15px 5px",
            color:"white"
          }}
        >
          {postTitle}
        </Typography>
        <Typography
          sx={{
            fontSize:"1.5rem",
            textAlign: "start",
            lineHeight: '1.7',
            // color:"#CCCCC"
          }}
        >
          {postContent}
        </Typography>
      </Box>
    </Box>
  );
}
