import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
import jwtDecode from 'jwt-decode';
import { IconButton,  Tooltip } from '@mui/material';
import DeletePostModal from './DeletePostModal'
import AuthPhysician from '../../Auths/AuthPhysician';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';



let DBRUL = process.env.REACT_APP_BASE_URL;

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};

export default function PostContent(props) {
  const { postImage, postTitle, postContent, postDate, createdPost, UpdateCreatedPost, PostId } = props;

  const [showFullContent, setShowFullContent] = useState(false);

  const [showModal, setShowModal] = useState(false)

    function handleShowDeleteModal() {
        setShowModal(true)
    }
    function handleCloseDeleteModal() {
        setShowModal(false)
    }

  const { id } = useParams();


  async function handleDeletePost() {
    try {
      let token = cookie.load('auth');
      const payload = await jwtDecode(token);
      await axios.delete(`${DBRUL}/physician/${payload.username}/groups/${id}/posts/${PostId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      let newArray = createdPost.filter((element) => element.id !== PostId);
      UpdateCreatedPost(newArray);
      console.log('fffffffffff', newArray);
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  }


  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <Box
      display="flex"
      gap={2}
      justifyContent="end"
      alignItems="center"
      sx={{
        margin: '2% auto',
        flexDirection: 'column',
        bgcolor: '#1F485B',
        width: '85%',
        borderRadius:"5px"
      }}
    >
      <Box
        display="flex"
        sx={{
          flexDirection: 'column',
          width: '100%',
          margin: '10px auto',
        }}
        p={3}
        maxWidth="100%"
        color="white"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            // margin: '5px',
            alignItems: 'center',
          }}
        >
            <Tooltip componentsProps={{ tooltip: { sx: { bgcolor: 'white', color: 'black', '& .MuiTooltip-arrow': { color: 'white' } } } }} title="Delete" placement='right' sx={{ '.MuiTooltip-tooltip': { backgroundColor: 'white' } }} arrow>
            <AuthPhysician>
              <IconButton onClick={handleShowDeleteModal} color='error' > <HighlightOffOutlinedIcon /></IconButton>
            </AuthPhysician>
            </Tooltip>
        </Box>

        {postImage && (
          <Box
            sx={{
              marginTop: '10px',
              height: '350px',
              border: '1px solid #4E7F9D',
              width: '100%',
              backgroundOrigin: 'border-box',
              backgroundPosition: 'center',
              backgroundImage: `url(${postImage})`,
              backgroundSize: 'cover',
            }}
          ></Box>
        )}

        <Typography
          sx={{
            maxHeight: '80%',
            textAlign: 'center',
            lineHeight: '1.5',
            fontSize: '3rem',
            margin: '5px 5px 15px 5px',
            color: 'white',
          }}
        >
          {postTitle}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.5rem',
            textAlign: 'start',
            lineHeight: '1.7',
          }}
        >
          {showFullContent ? postContent : postContent.slice(0, 300)}
          {postContent.length > 300 && !showFullContent && (
            <span>
              ...
              <Button
                // color="primary"
                onClick={toggleContent}
                sx={{
                  // cursor: 'pointer',
                  margin: '5px',
                  fontSize: '1.2rem',
                  color:"#22A699"
                }}
              >
                Read More
              </Button>
            </span>
          )}
          {showFullContent && (
            <Button
              color="primary"
              onClick={toggleContent}
              sx={{ cursor: 'pointer', marginLeft: '5px' }}
            >
              Read Less
            </Button>
          )}
        </Typography>
        <Box sx={{
          display:"flex",
          justifyContent:"end"
        }}>
        <Typography
            sx={{
              maxHeight: '80%',
              textAlign: 'start',
              lineHeight: '1.5',
              fontSize: '1.4rem',
              color: 'black',
            }}
          >
            {formatDate(postDate)}
          </Typography>
        </Box>
      </Box>
      <DeletePostModal showModal={showModal} handleCloseDeleteModal={handleCloseDeleteModal} handleDeletePost={handleDeletePost} postId={PostId} />
    </Box>
  );
}
