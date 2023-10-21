import React, { useState } from 'react';
import cookie from 'react-cookies';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Button, Snackbar } from '@mui/material';

let DBRUL = process.env.REACT_APP_BASE_URL;

export default function SubscribeButton({ physicianUN }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);



  async function handleSubscribeClick() {
    try {
      let token = cookie.load('auth');
      const payload = await jwtDecode(token);
      let subDoctor = await axios.get(
        `${DBRUL}/patient/${payload.username}/patients/${physicianUN}/subscribe`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log('all doctors', subDoctor);

      if (subDoctor) {
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.log(error);
      setAlreadySubscribed(true);
      setSnackbarOpen(true);
    }
  }

  return (
    <>
      <Button

        onClick={handleSubscribeClick}
        sx={{
          background:
            'linear-gradient(90deg, rgba(12,184,182,1) 0%, rgba(11,145,144,1) 75%)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          // padding: '10px 56px',
          paddingX: '70px',
          paddingY: '10px',
          // width: '80%',
          borderRadius: '30px',
          color: '#ffffff',
          position: 'absolute',
          // top: '240px',
          top: '48%',
          fontSize: '1.10rem',
          // left: '82px'
          left: '19%'
        }}
      >
        Subscribe
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={alreadySubscribed ? "You are already a subscriber" : "Subscription Successful!"}
      />
    </>
  );
}
