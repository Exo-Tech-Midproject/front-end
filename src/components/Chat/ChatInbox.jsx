import Box from "@mui/material/Box";
import React, { useState, useEffect, useContext, useRef } from 'react';
import Send from '@mui/icons-material/Send'
import ChatInboxHead from './ChatInboxHead'
import Message from './Message'
import moment from 'moment';
import ChatTypingBox from './ChatTypingBox'

import io from 'socket.io-client';
import axios from 'axios';
import '../ChatTest/ChatTest.css'
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
import { socket, connectSocket, disconnectSocket } from '../../App';
import { IconButton, TextField } from "@mui/material";
import { LoginContext } from "../../ContextApi/Auth";
let DBRUL = process.env.REACT_APP_BASE_URL


export default function ChatInbox({ withWho }) {
  const { user } = useContext(LoginContext)
  const messagesEndRef = useRef(null);
  const [currentMsg, setCurrentMsg] = useState('')
  const [messages, setMessages] = useState([])
  let token = cookie.load('auth')
  let payload = jwtDecode(token)
  const [roomName, setRoomName] = useState(null)
  console.log(messages)
  // let userData = {
  //   username: payload.username,
  //   target: 'someone',
  //   roomName: 'hasan'
  // }




  const getAllMessagesFromDb = async () => {
    try {
      if (withWho) {

        let allData = [];
        if (payload?.accountType === 'patient') {
          const response = await axios.get(`${DBRUL}/patient/${payload.username}/chat/${withWho.username}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          allData = response.data;

        }
        if (payload?.accountType === 'physician') {
          const response = await axios.get(`${DBRUL}/physician/${payload.username}/chat/${withWho.username}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          allData = response.data;
        }
        setMessages(allData)
        return allData;
      }

    } catch (err) {
      console.log(err)
    }
  };

  const addMessagesToDb = async (msg) => {
    try {
      if (withWho) {
        let sentmsg;
        if (payload.accountType === 'patient') {
          sentmsg = await axios.post(`${DBRUL}/patient/${payload.username}/chat/${withWho.username}`, {
            message: msg,
          }, {
            headers: { Authorization: `Bearer ${token}` }
          });
        }
        if (payload.accountType === 'physician') {
          sentmsg = await axios.post(`${DBRUL}/physician/${payload.username}/chat/${withWho.username}`, {
            message: msg,
          }, {
            headers: { Authorization: `Bearer ${token}` }
          });
        }

        return sentmsg
      }
    } catch (err) {
      console.log(err)
    }
  };

  const handleChangeCurrentMsg = (e) => {
    setCurrentMsg(e.target.value)
  }

  useEffect(() => {
    const messagesElement = messagesEndRef.current;
    if (messagesElement) {
      messagesElement.scrollTop = messagesElement.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    // getAllMessagesFromDb(payload.accountType)
    if (withWho && payload) {

      setRoomName(`${payload.username}+${withWho.username}`.split('').sort().join(''))
    }
  }, [withWho]);



  useEffect(() => {
    if (roomName) {

      connectSocket(roomName);
      getAllMessagesFromDb(payload.accountType)
    }
    const handleChatMessage = (payload) => {

      setMessages(prevMessages => [...prevMessages, payload]);
    };

    socket.on('chat message', handleChatMessage);

    return () => {
      disconnectSocket(roomName);
      socket.off('chat message', handleChatMessage);
    };
  }, [roomName])


  const handleSubmit = async (e) => {
    e.preventDefault();

    let sentMsg = await addMessagesToDb(currentMsg)

    socket.emit('chat message', sentMsg?.data)
    setCurrentMsg('')
  }
  return (
    <Box width='100%' bgcolor='#f2f5f9' display='flex' border=' 2px white solid' flexDirection='column'
      sx={{
        borderBottomRightRadius: '30px',

      }}>
      <ChatInboxHead withWho={withWho} />

      <Box overflow='scroll' paddingX={2} py={1} display='flex' flexDirection='column' gap={4} height='100%' ref={messagesEndRef} >
        {messages?.map(element => (<Message msg={element} name={element.sender} time={element.createdAt} withWho={withWho} />))}

      </Box>

      {/* <ChatTypingBox /> */}
      <Box display='flex'>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Box width='100%' display='flex' bgcolor='white' >
            <TextField onChange={handleChangeCurrentMsg} value={currentMsg} fullWidth>{currentMsg}</TextField>
            <IconButton type="submit" color='medical'><Send color='#1F485B' /></IconButton>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
