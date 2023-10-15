import Box from "@mui/material/Box";
import React, { useEffect, useState } from 'react'
import ChatContactList from './ChatContactList'
import ChatInbox from './ChatInbox'
// import ChatTypingBox from './ChatTypingBox'
import axios from 'axios';
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
let DBRUL = process.env.REACT_APP_BASE_URL

export default function ChatContainer() {
  const [contacts, setContact] = useState([])
  const [withWho, setWithWho] = useState(contacts[0]?contacts[0]:null)
  let token = cookie.load('auth')
  let payload = jwtDecode(token)


  
  async function fetchContact() {
    try {


      let allData = [];
      if (payload?.accountType === 'patient') {
        const response = await axios.get(`${DBRUL}/patient/${payload.username}/physicians/subscriptions`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        allData = response.data;

      }
      if (payload?.accountType === 'physician') {
        const response = await axios.get(`${DBRUL}/physician/${payload.username}/patients/subscribers`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        allData = response.data;
      }
      setContact(allData)
      return allData;
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchContact()
  }, []);

  return (
    <div>
      <Box height='calc(100vh - 105px)' display='flex'
        sx={
          {
            boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.4), 0px -1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'

            // boxShadow: '0px 2px 5px 3px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
          }
        }>
        <ChatContactList contacts={contacts} setWithWho={setWithWho} />
        <ChatInbox withWho={withWho} />

      </Box>
    </div>
  )
}
