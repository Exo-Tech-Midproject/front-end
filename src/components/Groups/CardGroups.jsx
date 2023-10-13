import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

export default function CardGroups(props) {
  

  const { groupName, description, groupImage } = props;

  const [imageSrc, setImageSrc] = useState(groupImage);

  const handleImageError = () => {
    setImageSrc("URL_OF_YOUR_FALLBACK_IMAGE_HERE");
  };
  return (
    <Link to="/dashboard/group" style={{ textDecoration: 'none' }}>
      <Card sx={{
        bgcolor: "#062942",
        width: '350px',
        margin: '15px',
        padding:"30px 30px",
        display: 'flex',
        flexDirection:"column",
        minHeight: 430,
        maxHeight:430,
        alignItems: 'center',
        borderRadius: '10px',
        justifyContent:"center",
        boxShadow:"0 0 10px rgba(0, 0, 0, 0.1);",
        '&:hover': {
          borderRadius: '15px',
          transform: 'scale(1) translateY(-2%)',
          transition: 'all 0.5s ease-in-out, background 0.6s linear, transform 0.4s linear 0.1s',
          // boxShadow: '0px 2px 5px 3px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        },
      }}>
      
        <CardActionArea
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
              border: '0.3rem solid #4070f4'
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
      <Button variant="outlined" color="error" sx={{
        bgcolor:"red",
        color:"black",
        fontSize:"1.2rem",
        fontWeight:"bold",
        marginTop:"15px",
        "&:hover": {
          transform: "scale(1.1) ",
          transition: 'transform 0.5s ease',
          background: "red"
        }
      }}>
        Delete Group
      </Button>
          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
  );
}


