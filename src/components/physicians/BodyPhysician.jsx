import React, { useState, useEffect } from 'react';
import SubscribeButton from './SubscribeButton';
import Rating from '@mui/material/Rating';
import { Box, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import AuthPatient from '../Auths/AuthPatient';
import axios from 'axios';
import cookie from 'react-cookies';

let DBRUL = process.env.REACT_APP_BASE_URL;
const defaultProfileImg = "https://validtemplates.github.io/clinicom/assets/img/doctors/2.jpg";

export default function BodyPhysician() {
  const [allDoctors, setAllDoctors] = useState([]);
  const [page, setPage] = useState(1); 

  useEffect(() => {
    async function fetchDoctors() {
      try {
        let token = cookie.load('auth');
        let allDoctors = await axios.get(`${DBRUL}/allphysicians`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAllDoctors(allDoctors.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDoctors();
  }, []);

  // Number of items to display on each page
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      margin: "100px 5% 50px 5%",
    }}>
    <Box sx={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "row",
      flexWrap: 'wrap',
      justifyContent: "space-between"
    }}>
      {allDoctors.slice(startIndex, endIndex).map((card) => (
        <Box sx={{
          bgcolor: "#ffffff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          borderRadius: "5px",
          marginBottom: "30px",
        }}>
          <Stack sx={{
            width: 350,
            height: 450,
            padding: "50px 30px",
            display: "flex",
          }}>
            <Box sx={{
              backgroundImage: `url(${card.profileImg || defaultProfileImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "170px",
              height: "170px",
              borderRadius: '50%',
              margin: "auto",
            }}>
            </Box>
            <AuthPatient>
              <SubscribeButton physicianUN={card.username} />
            </AuthPatient>
            <Box sx={{
              padding: "35px 0 0 0",
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}>
              <Typography sx={{
                marginBottom: "15px",
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1.2,
              }}>
                {card.fullName}
              </Typography>
              <Typography variant='h5' sx={{
                color: "#1F485B"
              }}>
                {card.department}
              </Typography>
              <Box>
                <Rating name="half-rating"
                  defaultValue={parseFloat(card.averageRating)}
                  precision={0.5}
                  sx={{
                    marginTop: "15px"
                  }}
                  readOnly
                />
              </Box>
            </Box>
          </Stack>
        </Box>
      ))}

    </Box>
        <Box
  sx={{
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px auto",
  }}
>
  {allDoctors.length > itemsPerPage && (
    <Pagination
      count={Math.ceil(allDoctors.length / itemsPerPage)}
      color="primary"
      onChange={(event, value) => setPage(value)}
      sx={{
        '& .MuiPaginationItem-root': {
          fontSize: '1.5rem',
          padding: '10px 10px', 
        },
      }}
    />
  )}
</Box>
    </Box>
  )
}

