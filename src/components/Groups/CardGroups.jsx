import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import {  useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import AuthPhysician from '../Auths/AuthPhysician';
import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
let DBRUL = process.env.REACT_APP_BASE_URL

// import Box from "@mui/material/Box";

export default function CardGroups(props) {
  
  const navigator = useNavigate()

  const { groupName, description, groupImage , createdGroups , id ,setCreatedGroups} = props;

  const [imageSrc, setImageSrc] = useState(groupImage);

  
  async function handleDeleteCard(id) {
    try {
      let token = cookie.load('auth')
      const payload = await jwtDecode(token)
      await axios.delete(`${DBRUL}/physician/${payload.username}/groups/${id}`,
          {
              headers: { Authorization: `Bearer ${token}` }
          })
          setCreatedGroups(createdGroups.filter(element => element.id !== id))
    } catch (err) {
        console.error(err);
    }
};

function handelClick(){
    navigator(`/dashboard/group/${id}`)
}


  const handleImageError = () => {
    setImageSrc("URL_OF_YOUR_FALLBACK_IMAGE_HERE");
  };
  
  return (
      <Card 
      sx={{
        // bgcolor: "#062942",
        bgcolor: "#1F485B",
        width: '350px',
        margin: '15px',
        padding:"30px 30px",
        display: 'flex',
        flexDirection:"column",
        minHeight: 430,
        maxHeight:430,
        alignItems: 'center',
        borderRadius: '10px',
        // justifyContent:"center",
        alignContent:"space-between",
        boxShadow:"0 0 10px rgba(0, 0, 0, 0.1);",
        '&:hover': {
          borderRadius: '15px',
          transform: 'scale(1) translateY(-2%)',
          transition: 'all 0.5s ease-in-out, background 0.6s linear, transform 0.4s linear 0.1s',
          // boxShadow: '0px 2px 5px 3px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        },
      }}>
      
        <CardActionArea
        onClick={handelClick}
          sx={{
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
            // padding:"10px"
          }}>
            
          <CardMedia
            component="img"
            src={imageSrc}
            alt="Group Image"
            sx={{
              width: "175px",
              height: '175px',
              borderRadius: '50%',
              // margin: "10px auto",
              border: '0.3rem solid black'
            }}
            onError={handleImageError}
          />
          
          <CardContent sx={{
            width:"300px",
            padding:"auto"
          }}>
            <Typography gutterBottom variant="h3" component="div"
              sx={{
                // color: "#4070f4",
                color: "#f8f8ff",
                
              }}>
                
              {groupName}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{
                  lineHeight: '1.5',
                  textAlign:"center",
                  // margin:"10px auto",
                  color:"#f8f8ff",
            }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
          <AuthPhysician >
      <Button variant="contained" color="error" 
      sx={{
        fontSize:"1.2rem",
        marginTop:"15px",
        "&:hover": {
          transform: "scale(1.1) ",
          transition: 'transform 0.5s ease',
        }
      }}
      onClick={ () => {handleDeleteCard(id)}}
      >
        Delete Group
      </Button>
      </AuthPhysician>
      </Card>
  );
}


