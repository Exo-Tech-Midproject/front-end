import React, { useContext, useEffect, useState } from 'react';
import SideBar from '../components/DashBoard/DashBoard';
import { LoginContext } from '../ContextApi/Auth';
import { useNavigate } from 'react-router-dom';
import cookie from 'react-cookies';

export default function Dashboard() {
    const [logged, setLogged] = useState(false);
    const {loggedIn} = useContext
    const navigate = useNavigate();

    useEffect(() => {
        const authCookie = cookie.load('auth');
        if (authCookie) {
            setLogged(true);
        } else {
            setLogged(false);
            navigate('/Login'); // Redirect to Login page when token is deleted
        }
    }, []);

    return logged ? <SideBar /> : null;
}