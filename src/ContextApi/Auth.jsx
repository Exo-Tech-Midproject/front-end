import { TrainRounded, Try } from "@mui/icons-material";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import cookie from 'react-cookies'

export const LoginContext = createContext()
let DBRUL = process.env.REACT_APP_DBURL
export default function LoginProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [userType, setUserType] = useState('')

    const isPatient = (accountType) => {
        return accountType === ('patient')
    }
    const isPhysician = (accountType) => {
        return accountType === ('physician')
    }

    const loginPatient = async (username, password) => {
        try {

            let response = await axios.post(`https://healthak.onrender.com/login/patient`, {},
                {
                    headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}` }
                })


            let token = response.data.token
            let user = response.data.user
            let authenticated = ValidateTokenPatient(token, user)
            console.log(authenticated)
            if (authenticated) return true


        } catch (e) {
            console.log(e)
            return false
        }

    }
    const loginphysician = async (username, password) => {
        let response = axios.post(`${DBRUL}/login/physician`, {},
            {
                headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}` }
            })
        let token = response.data.token
        let user = response.data.username
        ValidateTokenPhysician(token, user)
    }

    const ValidateTokenPatient = async (token, user) => {
        try {
            console.log('blablabla')
            const tokenChecker = await jwtDecode(token);
            console.log(tokenChecker, '2222')
            if (tokenChecker && tokenChecker.accountType === 'patient') {
                setUser(user);
                setLoggedIn(true);
                setUserType(tokenChecker.accountType);

                cookie.save('auth', token)
                return true
            }
        } catch (e) {
            console.log(e)
        }
    }
    const ValidateTokenPhysician = (token, user) => {
        try {
            const tokenChecker = jwtDecode(token);
            // console.log(tokenChecker)
            if (tokenChecker.accountType === 'physician') {
                setUser(user);
                setLoggedIn(true);
                setUserType(tokenChecker.accountType);

                cookie.save('auth', token)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const logout = () => {
        setLoggedIn(false);
        setUser({})
        cookie.remove('auth')
        
    }
    useEffect(() => {
        const authCookie = cookie.load('auth');
        if (authCookie) {
            ValidateTokenPatient(authCookie)
        } else {
            setLoggedIn(false)
        }
    }, [])

    return (
        <LoginContext.Provider value={{ logout, loginphysician, isPatient, isPhysician, loginPatient, loggedIn, user, userType }}>
            {children}
        </LoginContext.Provider>
    )
}