import React from 'react';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";
import groupAnimation from "../../assets/lottie/group.json";
import Container from "@mui/material/Container";
import CreatePost from './GroupPost/CreatePost';
import PostContent from './GroupPost/PostContent';
import PostHeader from './GroupPost/PostHeader';
import  { useState} from "react";
import AddMembers from './GroupPost/AddMembers';



export default function Group() {

  const [createdPost, setCreatedPost] = useState([]);

  let ordered = createdPost.sort((a , b) => b.id - a.id)


  function UpdateCreatedPost (array){

    setCreatedPost(array)

  }

  return (
    <div>
      <Box
        sx={{
          margin: "2%",
          marginTop:'0'
        }}
      >
        <Box sx={{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between"
        }}>
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="#062942"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
            </Link>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="#062942"
              href="/dashboard/groups"
            >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              My Groups
            </Link>
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              color="#4070f4"
            >
              <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Group
            </Typography>
          </Breadcrumbs>
        </div>
        <Box>
        <AddMembers />
        </Box>
        </Box>
        
        <Box
          sx={{
            minHeight: "50vh",
            marginTop: "2%",
            width: "100%",
            bgcolor: '#062942',
            // bgcolor: 'white',
            borderRadius: "3px",
            // backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            color: "#00222E",
            boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 2px 0px rgba(0,0,0,0.12)',
          }}
        >
          <Box sx={{
            width:"30%",
            margin:"auto"
          }}>
          <Lottie animationData={groupAnimation} style={{ width: "100%" }} />
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth:"60%",
            margin:"auto"
          }}>
            <Typography variant="h2" textTransform="capitalize" sx={{
              marginBottom: '5%',
              color: 'white'
              // color: '#062942'
            }}>
              Healing Caring Leading
            </Typography>
            <Typography
              variant="h3"
              textTransform="capitalize"
              sx={{
                // color: '#1F485B',
                color: 'white',
                textAlign: 'center',
              }}
            >
              Transforming Lives Through Comprehensive Medical Care
            </Typography>
          </Box>
        </Box>
      </Box>
      <Container>
      <CreatePost createdPost={createdPost} setCreatedPost={setCreatedPost} />
      </Container>
      <Box
        minHeight='80vh'
        display='flex'
        maxWidth={'95%'}
        margin={"30px auto"}
        sx={{
          bgcolor: "white",
          boxShadow: 'inset 0px 2px 3px 0px rgba(0,0,0,0.4), inset 0px 1px 3px 0px rgba(0,0,0,0.12)',
          borderRadius: "5px",
          flexDirection: "column"
        }}>
          <PostHeader  />
          <Box>
          {createdPost.map((post, index) => (
                <PostContent
                PostId={post.id}
                createdPost={createdPost}
                UpdateCreatedPost={UpdateCreatedPost}
                    key={index}
                    postTitle={post.title}
                    postContent={post.textContent}
                    postImage={post.postImage}
                />
            ))}
            
          </Box>
      </Box>
    </div>
  );
}
