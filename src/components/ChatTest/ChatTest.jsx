import React, { useState, useEffect } from 'react';
import moment from 'moment';
import io from 'socket.io-client';
import axios from 'axios';
import '../ChatTest/ChatTest.css'
import cookie from 'react-cookies'
import jwtDecode from 'jwt-decode';
import { socket, connectSocket, disconnectSocket } from '../../App';

const ChatApplication = () => {
    const [messages, setMessages] = useState([])
    let token = cookie.load('auth')
    let payload = jwtDecode(token)
    let userData = {
        username: payload.username,
        target: 'someone',
        roomName: 'hasan'
    }
    console.log(messages)

    // const socket = io('http://localhost:5000/');

    useEffect(() => {
        connectSocket(userData);

        const handleChatMessage = (payload) => {
            console.log(payload);
            setMessages(prevMessages => [...prevMessages, payload]);
        };

        socket.on('chat message', handleChatMessage);

        return () => {
            disconnectSocket();
            socket.off('chat message', handleChatMessage);
        };
    }, [])
    // socket.emit('enter chat', userData)

    const handleTestSocket = () => {
        // socket.emit('tryme', 'banana')
        let msg = 'new msg'
        // setMessages([...messages, msg])
        socket.emit('chat message', msg)
    }

    // socket.on('chat message', (payload) => {
    //     console.log(payload)
    //     let ms2 = payload

    //     setMessages([...messages, ms2])
    // })
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto mt-5">
                    <div className="chat-container">
                        <ul id="messages">
                            {messages?.map(msg => (<li>{msg}</li>))}
                        </ul>
                        {/* <form onSubmit={handleSendMsg}> */}
                        <div className="message-input">

                            <button onClick={handleTestSocket} >Send</button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatApplication;
