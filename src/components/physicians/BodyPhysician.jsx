import React from 'react'
// import Box from '@mui/material/Box'
import { Aboutus3 } from "../../utils/content";
import CardMedia from "@mui/material/CardMedia";
import Rating from '@mui/material/Rating';
import { Card, CardContent, Typography, Button, Container } from '@mui/material';

const { PorImg } = Aboutus3;

export default function BodyPhysician() {

    const cardsData = [
		{
			id: 1,
			name: 'Hasan',
			department: 'With amazing coding ',
			image: PorImg,
		},
		{
			id: 2,
			name: 'Anas',
            department: 'With amazing coding ',
            image: PorImg,
		},
		{
			id: 3,
			name: 'Tasneem',
            department: 'With amazing coding ',
			image: PorImg,
		},
		{
			id: 4,
			name: 'Abdullah',
			image: PorImg,
            department: 'With amazing coding ',
		},
	];
  return (
      <Container sx={{
        minHeight:"50vh",
        margin:"25px 10px 0 10px",
        display:"flex",
        flexDirection:"row",
        flexWrap: 'wrap',
      }}>
        {cardsData.map((card) => (
        <Card 
        key={card.id}
        
        sx={{
        width: '350px',
        margin: '15px',
      minHeight: 350,
      borderRadius: "5px",
      background: '#f5f5f5',
      position: 'relative',
      border: '2px solid #c3c6ce',
      transition: '0.5s ease-out',
      overflow: 'visible',
      '&:hover': {
        borderColor: '#008bf8',
        boxShadow: '0 4px 18px 0 rgba(0, 0, 0, 0.25)',
      },
    }}>
        <CardMedia component="img" height="220" image={card.image} alt="Physician img" />
      <CardContent sx={{
        color: 'black',
        height: '100%',
        display: 'flex',
        flexDirection:"column",
        alignItems:'center'
      }}>
        <Typography variant="h3" sx={{
        margin:"5px auto",
        color:"#062942"
        }}>
          {card.name}
        </Typography>
        <Typography variant="h5" sx={{
        color: '#1F485B',
        }}>
          {card.department}
        </Typography>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{
            margin:"10px auto"
        }} />
      </CardContent>
      <Button variant="contained" sx={{
        transform: 'translate(-20%, 50%)',
        width: '60%',
        borderRadius: '1rem',
        backgroundColor: 'red',
        color: 'red',
        fontSize: '1rem',
        padding: '.5rem 1rem',
        position: 'absolute',
        left: '50%',
        bottom: 0,
        opacity: 0,
        transition: '0.3s ease-out',
        '&:hover': {
          backgroundColor: '#0073c0',
        },
      }}>
        More info
      </Button>
    </Card>
    ))}
      </Container>
  )
}
