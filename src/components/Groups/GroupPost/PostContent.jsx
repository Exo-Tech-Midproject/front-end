import React from 'react';
// import {Typography, List, ListItem, ListItemText } from '@mui/material';
// import Container from "@mui/material/Container";
import  Box from '@mui/material/Box'

import Typography from "@mui/material/Typography";

export default function PostContent (props) {

  const { postTitle, postContent } = props;

//   {createdPost.map((post, index) => (
//     <PostContent
//         key={index}
//         postTitle={post.postTitle}
//         postContent={post.postContent}
//     />
// ))}

  return (

    <Box display='flex' gap={2}  justifyContent={'end'} alignItems={"center"} sx={
      {
        margin:"3%",
        flexDirection:"column"
      }
    }>
            <Box
                display='flex'
                
                sx={{
                  borderRadius: '5px',
                  flexDirection:"column",
                  marginTop:"10px"
                }}
                p={3}
                bgcolor='#1F485B'
                maxWidth={'100%'}
                color='white'
                >
                  <Typography sx={{
                  maxHeight:"80%",
                  textAlign: "center",
                  lineHeight: '1.5',
                  fontSize:"2.2rem",
                  margin:"5px auto"
                }}>
                  {postTitle}
                  </Typography>
                <Typography sx={{
                  maxHeight:"80%",
                  textAlign: "center",
                  lineHeight: '1.5',
                }}>
                  {postContent}
                  </Typography>
            </Box>
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
