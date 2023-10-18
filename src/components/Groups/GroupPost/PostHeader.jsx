import { Box,  Stack,  Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
import React from 'react'
import Avatar from '@mui/material/Avatar'
import { LoginContext } from "../../../ContextApi/Auth";


export default function PostHeader({getGroup }) {

  const { user } = React.useContext(LoginContext)

  // console.log('pppppppppp from post header',getGroup)

  


//   async function fetchGroupData () {
//     let token = cookie.load("auth");
//         const payload = await jwtDecode(token);

//     if(payload.accountType === 'physician'){

//       try{
//             let groupData = await axios.get(`${DBRUL}/physician/${payload.username}/groups/${params.id}`, {
  
//           headers: {Authorization: `Bearer ${token}`},
  
//       });
//       setGetGroup(groupData.data)
//       return groupData
  
//       }
//       catch(error){
//         console.log(error)
//       }
//     }
//     if(payload.accountType === 'patient'){

//       try{
//             let groupData = await axios.get(`${DBRUL}/patient/${payload.username}/groups/${params.id}`, {
  
//           headers: {Authorization: `Bearer ${token}`},
  
//       });
//       setGetGroup(groupData.data)
//       console.log('gggggggggggggggggg',groupData.data)
//       return groupData
  
//       }
//       catch(error){
//         console.log(error)
//       }
//     }
//   }

//   useEffect(() => {
//     fetchGroupData();

// // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);


  return (
    <Stack>
    <Box width='90%' 
        height='70px'
        display='flex' 
        justifyContent='center' 
        alignItems={'center'} 
        sx={{ 
        margin:"1% auto",
        // bgcolor:"red"
        }}>
            <Typography fontSize='3rem' color={"#1F485B"}> 
            {getGroup.groupName}
            </Typography>
              
    </Box >
    <Box 
    display='flex' 
    justifyContent='start' 
    alignItems={'center'} 
    sx={{
      marginLeft:"5%"
    }}>
    <Avatar src= {user.profileImg || "https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp"}  
            sx={{
              width:"120px",
              height:"120px",
              marginRight:"2%"
            }}/>
            <Typography fontSize='2.3rem' color={"#1F485B"}>{getGroup.physicianUN}</Typography>
    </Box>
    </Stack>
  )
}
