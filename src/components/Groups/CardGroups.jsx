import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import {  useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import Button from '@mui/material/Button';
import { IconButton,  Tooltip } from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import Box from "@mui/material/Box";
import AuthPhysician from '../Auths/AuthPhysician';
import AuthPatient from '../Auths/AuthPatient'

import DeleteCardModal from './DeleteCardModal'
import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
import { LoginContext } from '../../ContextApi/Auth';
let DBRUL = process.env.REACT_APP_BASE_URL


export default function CardGroups(props) {

  const {setVistedGroup } = React.useContext(LoginContext)
  
  const navigator = useNavigate()

  const { groupName, description, groupImage , createdGroups , id ,setCreatedGroups} = props;

  const [showModal, setShowModal] = useState(false)

  function handleShowDeleteModal() {
      setShowModal(true)
  }
  function handleCloseDeleteModal() {
      setShowModal(false)
  }

  let token = cookie.load('auth')
  const payload = jwtDecode(token)
  
  async function handleDeleteCard(id) {
    try {
      await axios.delete(`${DBRUL}/physician/${payload.username}/groups/${id}`,
          {
              headers: { Authorization: `Bearer ${token}` }
          })
          setCreatedGroups(createdGroups.filter(element => element.id !== id))
          setShowModal(false)
    } catch (err) {
        console.error(err);
    }
};

function handelClick(){

  setVistedGroup(groupName)

    navigator(`/dashboard/group/${id}`)

}


  
  return (
    <>
    <AuthPhysician>
      <Card 
      sx={{
        bgcolor: "#1F485B",
        width: '350px',
        margin: '15px',
        // padding:"30px 30px",
        display: 'flex',
        flexDirection:"column",
        minHeight: 430,
        maxHeight:430,
        alignItems: 'center',
        borderRadius: '10px',
        alignContent:"space-between",
        boxShadow:"0 0 10px rgba(0, 0, 0, 0.1);",
        '&:hover': {
          borderRadius: '15px',
          transform: 'scale(1) translateY(-2%)',
          transition: 'all 0.5s ease-in-out, background 0.6s linear, transform 0.4s linear 0.1s',
        },
      }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            width:"100%"
          }}
        >
            <Tooltip componentsProps={{ 
              tooltip: { sx: { padding:"0",
              bgcolor: 'white', 
              color: 'black', 
              '& .MuiTooltip-arrow': 
              { color: 'white' } } } }}
              title="Delete" placement='right' 
              sx={{ '.MuiTooltip-tooltip': { backgroundColor: 'white' } }} arrow>
              <IconButton onClick={handleShowDeleteModal} color='error' > <HighlightOffOutlinedIcon /></IconButton>
            </Tooltip>
        </Box>
      
        <CardActionArea
        onClick={handelClick}
          sx={{
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
            padding:"15px 30px 0 30px",
          }}>
            
          <CardMedia
            component="img"
            src={groupImage}
            alt="Group Image"
            sx={{
              width: "175px",
              height: '175px',
              borderRadius: '50%',
              // margin: "10px auto",
              border: '0.3rem solid black'
            }}
          />
          
          <CardContent sx={{
            width:"300px",
            padding:"auto"
          }}>
            <Typography gutterBottom  component="div"
              sx={{
                color: "#f8f8ff",
                fontSize: "2.2rem",
              }}>
                
              {groupName}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{
                  lineHeight: '1.5',
                  textAlign:"center",
                  color:"#f8f8ff",
            }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* </AuthPhysician> */}
      <DeleteCardModal showModal={showModal} handleCloseDeleteModal={handleCloseDeleteModal} handleDeleteCard={handleDeleteCard} cardId={id} />
      </Card>
      </AuthPhysician>
      <AuthPatient>
      <Card 
      sx={{
        bgcolor: "#1F485B",
        width: '350px',
        margin: '15px',
        padding:"50px 30px",
        display: 'flex',
        flexDirection:"column",
        minHeight: 430,
        maxHeight:430,
        alignItems: 'center',
        borderRadius: '10px',
        alignContent:"space-between",
        boxShadow:"0 0 10px rgba(0, 0, 0, 0.1);",
        '&:hover': {
          borderRadius: '15px',
          transform: 'scale(1) translateY(-2%)',
          transition: 'all 0.5s ease-in-out, background 0.6s linear, transform 0.4s linear 0.1s',
        },
      }}>

        <CardActionArea
        onClick={handelClick}
          sx={{
            display: 'flex',
            textAlign: 'center',
            flexDirection: 'column',
            // padding:"30px 30px 0 30px",
          }}>

          <CardMedia
            component="img"
            src={groupImage}
            alt="Group Image"
            sx={{
              width: "175px",
              height: '175px',
              borderRadius: '50%',
              // margin: "10px auto",
              border: '0.3rem solid black'
            }}
          />

          <CardContent sx={{
            width:"300px",
            padding:"auto"
          }}>
            <Typography gutterBottom  component="div"
              sx={{
                color: "#f8f8ff",
                fontSize: "2.2rem",
              }}>

              {groupName}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{
                  lineHeight: '1.5',
                  textAlign:"center",
                  color:"#f8f8ff",
            }}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* </AuthPhysician> */}
      <DeleteCardModal showModal={showModal} handleCloseDeleteModal={handleCloseDeleteModal} handleDeleteCard={handleDeleteCard} cardId={id} />
      </Card>
      </AuthPatient>
</>
  );
}


