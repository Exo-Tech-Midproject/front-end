import React from 'react';
// import {Typography, List, ListItem, ListItemText } from '@mui/material';
// import Container from "@mui/material/Container";
import  Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from "@mui/material/Typography";

export default function GroupPosts () {

  return (

    <Box display='flex' gap={2}  justifyContent={'end'} alignItems={"center"} sx={
      {
        margin:"3% 5% 0 0"
      }
    }>
            <Box
                display='flex'
                sx={{
                  borderTopLeftRadius: '15px',
                  borderBottomRightRadius: '15px',
                  marginRight:"1%"
                }}
                p={3}
                bgcolor='#1F485B'
                maxWidth={'80%'}
                color='white'
                >

                <Typography sx={{
                  maxHeight:"80%",
                  textAlign: "center",
                  lineHeight: '1.5',
                }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur minus, fugit, nam cupiditate omnis ratione officia fugiat assumenda, quaerat harum libero tempora esse magnam beatae vel repellendus. Vel, optio?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consectetur minus, fugit, nam cupiditate omnis ratione officia fugiat assumenda, quaerat harum libero tempora esse magnam beatae vel repellendus. Vel, optio?
                  </Typography>
            </Box>
            <Avatar src= 'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp' 
            sx={{
              width:"100px",
              height:"100px"
            }}/>
        </Box>
    // <Container>
    //   <Typography variant="h4" gutterBottom>
    //     Group Posts
    //   </Typography>
    //     {/* <List>
    //       {posts.map((post) => (
    //         <ListItem key={post.id}>
    //           <ListItemText primary={post.title} secondary={post.content} />
    //         </ListItem>
    //       ))}
    //     </List> */}
    //   {/* )} */}
    // </Container>
  
  );
};
