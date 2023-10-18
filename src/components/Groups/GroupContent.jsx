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
import  { useEffect, useState} from "react";
import AddMembers from './GroupPost/AddMembers';
import axios from "axios";
import cookie from "react-cookies";
import jwtDecode from "jwt-decode";
import {useParams} from "react-router-dom";

let DBRUL = process.env.REACT_APP_BASE_URL;


export default function Group() {

  const [createdPost, setCreatedPost] = useState([]);
  const [ getGroup , setGetGroup] = useState('')

  const params = useParams()

  console.log('pppppppppp',params)

  


  async function fetchGroupData () {
    let token = cookie.load("auth");
        const payload = await jwtDecode(token);

    if(payload.accountType === 'physician'){

      try{
            let groupData = await axios.get(`${DBRUL}/physician/${payload.username}/groups/${params.id}`, {
  
          headers: {Authorization: `Bearer ${token}`},
  
      });
      setGetGroup(groupData.data)
      return groupData
  
      }
      catch(error){
        console.log(error)
      }
    }
    if(payload.accountType === 'patient'){

      try{
            let groupData = await axios.get(`${DBRUL}/patient/${payload.username}/groups/${params.id}`, {
  
          headers: {Authorization: `Bearer ${token}`},
  
      });
      console.log('gggggggggggggggggg',groupData.data)
      setGetGroup(groupData.data)
      return groupData
  
      }
      catch(error){
        console.log(error)
      }
    }
  }

  useEffect(() => {
    fetchGroupData();

// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);



  let ordered = createdPost.sort((a , b) => b.id - a.id)


  function UpdateCreatedPost (array){

    setCreatedPost(array)

  }

  return (
    <Box
    sx={{
      paddingX:"36px",
      paddingTop:"10px",
      marginTop:"75px"
    }}
    >
      <Box>
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
            // bgcolor: '#062942',
            bgcolor: '#1F485B',
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
      <CreatePost  setCreatedPost={setCreatedPost}  getGroup={getGroup}/>
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
          <PostHeader setGetGroup={setGetGroup} getGroup={getGroup}/>
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
    </Box>
  );
}
