import React, { useState } from 'react';
import cookie from 'react-cookies';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Button, Snackbar } from '@mui/material';

let DBRUL = process.env.REACT_APP_BASE_URL;

export default function SubscribeButton({ physicianUN }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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
    }
  }

  return (
    <div>
      <Button
        onClick={handleSubscribeClick}
        sx={{
          background:
            'linear-gradient(90deg, rgba(12,184,182,1) 0%, rgba(11,145,144,1) 75%)',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          padding: '10px 35px',
          borderRadius: '30px',
          color: '#ffffff',
        }}
      >
        Subscribe
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Adjust the duration as needed
        onClose={() => setSnackbarOpen(false)}
        message="Subscription Successful!"
      />
    </div>
  );
}
