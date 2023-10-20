import React from 'react'
// import Box from '@mui/material/Box'
import { Aboutus3 } from "../../utils/content";
// import CardMedia from "@mui/material/CardMedia";
import Rating from '@mui/material/Rating';
import {  Box, Stack, Typography } from '@mui/material';

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
      <Box sx={{
        minHeight:"70vh",
        margin:"100px 5% 50px 5%",
        display:"flex",
        flexDirection:"row",
        flexWrap: 'wrap',
        justifyContent:"space-between"
      }}>
        {cardsData.map((card) => (
          <Box sx={{
            bgcolor:"#ffffff",
            boxShadow:" 0 0 10px rgba(0, 0, 0, 0.1)",
            display:"flex",
            // maxWidth:"33.3%",
            borderRadius:"5px",
            marginBottom:"30px",
          }}>

            <Stack sx={{
              width:350,
              height:450,
              padding:"50px 30px",
              display:"flex",
              
            }}>
              <Box sx={{
                backgroundImage:`url(${card.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // objectFit: "cover",
                // backgroundPosition: "center",
                width: "170px",
                height: "170px",
                borderRadius: '50%',
                margin: "auto",
              }}>
              </Box>
              <Box sx={{
                padding:"35px 0 0 0",
                display:"flex",
                alignItems:"center",
                flexDirection:"column"
              }}>
                <Typography  sx={{
                  marginBottom:"15px",
                  fontSize: "2.7rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}>
                {card.name}
                </Typography>
                <Typography variant='h5' sx={{
                  color:"#1F485B"
                }}>
                {card.department}
                </Typography>
                <Box>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{
                  marginTop:"15px"
                }} />
                </Box>
              </Box>
            </Stack>

          </Box>
    //     <Card 
    //     key={card.id}
        
    //     sx={{
    //     width: 350,
    //     margin: '15px',
    //   minHeight: 450,
    //   borderRadius: "5px",
    //   background: '#ffffff',
    //   display: 'flex',
    //         // textAlign: 'center',
    //         flexDirection: 'column',
    //         justifyContent:"center",
    //         alignItems:"center",
    //   // position: 'relative',
    //   // border: '2px solid #c3c6ce',
    //   // transition: '0.5s ease-out',
    //   // overflow: 'visible',
    //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    //   '&:hover': {
    //     borderColor: '#008bf8',
    //     // boxShadow: '0 4px 18px 0 rgba(0, 0, 0, 0.25)',
    //   },
    // }}>
    //     <CardMedia 
    //     component="img" 
        
    //     image={card.image} 
    //     alt="Physician img"  
    //     sx={{
    //       width: "175px",
    //           height: '175px',
    //           margin:"auto",
    //           borderRadius: '50%',
    //     }}/>
    //   <CardContent sx={{
    //     color: 'black',
    //     height: '100%',
    //     display: 'flex',
    //     flexDirection:"column",
    //     alignItems:'center',
        
    //   }}>
    //     <Typography variant="h3" sx={{
    //     margin:"5px auto",
    //     color:"#062942"
    //     }}>
    //       {card.name}
    //     </Typography>
    //     <Typography variant="h5" sx={{
    //     color: '#1F485B',
    //     }}>
    //       {card.department}
    //     </Typography>
    //     <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{
    //         margin:"10px auto"
    //     }} />
    //   </CardContent>
    //   <Button variant="contained" sx={{
    //     transform: 'translate(-20%, 50%)',
    //     width: '60%',
    //     borderRadius: '1rem',
    //     backgroundColor: 'red',
    //     color: 'red',
    //     fontSize: '1rem',
    //     padding: '.5rem 1rem',
    //     position: 'absolute',
    //     left: '50%',
    //     bottom: 0,
    //     opacity: 0,
    //     transition: '0.3s ease-out',
    //     '&:hover': {
    //       backgroundColor: '#0073c0',
    //     },
    //   }}>
    //     More info
    //   </Button>
    // </Card>
    ))}
      </Box>
  )
}
