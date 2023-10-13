import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

export default function PostContent(props) {
  const { postTitle, postContent, postDate } = props; // Add postDate as a prop

  return (
    <Box display="flex" gap={2} justifyContent="end" alignItems="center" sx={{ margin: "3%", flexDirection: "column" }}>
      <Box
        display="flex"
        sx={{
          borderRadius: '5px',
          flexDirection: "column",
          marginTop: "10px",
        }}
        p={3}
        bgcolor='#1F485B'
        maxWidth='100%'
        color='white'
      >
         <Typography
          sx={{
            maxHeight: "80%",
            textAlign: "start",
            lineHeight: '1.5',
            fontSize:"1.4rem",
            color:"black"
          }}
        >
          {formatDate(postDate)}
        </Typography>
        <Typography
          sx={{
            maxHeight: "80%",
            textAlign: "center",
            lineHeight: '1.5',
            fontSize: "2.2rem",
            margin: "5px 5px 15px 5px"
          }}
        >
          {postTitle}
        </Typography>
        <Typography
          sx={{
            maxHeight: "80%",
            textAlign: "center",
            lineHeight: '1.5',
          }}
        >
          {postContent}
        </Typography>
      </Box>
    </Box>
  );
}
