import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardGroups(props) {

  const { groupName, description, groupImage } = props;

  const [imageSrc, setImageSrc] = useState(groupImage);

  const handleImageError = () => {
    setImageSrc("URL_OF_YOUR_FALLBACK_IMAGE_HERE");
  };
  return (
    <Link to="/Group" style={{ textDecoration: 'none' }}>
      <Card sx={{
        bgcolor: "#062942",
        width: '100%',
        maxWidth: 345,
        margin: '1%',
        display: 'flex',
        minHeight:"55vh",
        alignItems: 'center',
        borderRadius: '25px',
        '&:hover': {
          borderRadius: '30px',
          transform: 'scale(1) translateY(-2%)',
          transition: 'all 0.5s ease-in-out, background 0.6s linear, transform 0.4s linear 0.1s',
          boxShadow: '0px 2px 5px 3px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        },
      }}>
        <CardActionArea
          sx={{
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          <CardMedia
            component="img"
            src={imageSrc}
            alt="Group Image"
            sx={{
              width: "150px",
              height: '150px',
              borderRadius: '50%',
              margin: ".5rem",
              border: '0.3rem solid #4070f4'
            }}
            onError={handleImageError}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div"
              sx={{
                color: "#f8f8ff"
              }}>
              {groupName}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{
                  lineHeight: '1.5',
            }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
  );
}
