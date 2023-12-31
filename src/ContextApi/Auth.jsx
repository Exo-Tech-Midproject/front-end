
import axios from "axios";
import jwtDecode from "jwt-decode";
import { createContext, useEffect, useReducer, useState } from "react";
import cookie from 'react-cookies'
import { formReducer, initialState } from "../components/Reducers/SignUpDoctor";
import { formReducer2, initialState2 } from "../components/Reducers/SignUpPatient";

export const LoginContext = createContext()
let DBRUL = process.env.REACT_APP_BASE_URL
export default function LoginProvider({ children }) {
    const [vistedGroup, setVistedGroup] = useState('')
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [userType, setUserType] = useState('')
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [state2, dispatch2] = useReducer(formReducer2, initialState2);
    console.log(state, 'my state')
    const isPatient = (accountType) => {
        return accountType === ('patient')
    }
    const isPhysician = (accountType) => {
        return accountType === ('physician')
    }

    const loginPatient = async (username, password) => {
        try {

            let response = await axios.post(`${DBRUL}/login/patient`, {},
                {
                    headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}` }
                })

            if (response) {
                let token = response.data.token
                let loggedUserData = await axios.get(`${DBRUL}/patient/${username}/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                let user = loggedUserData.data
                cookie.save('auth', token)
                let authenticated = await ValidateTokenPatient(token, user)
                console.log(authenticated)
                if (authenticated) return true
            }


        } catch (e) {
            console.log(e)
            return false
        }

    }
    const loginPhysician = async (username, password) => {
        try {
            let response = await axios.post(`${DBRUL}/login/physician`, {},
                {
                    headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}` }
                })
            if (response) {
                let token = response.data.token
                let loggedUserData = await axios.get(`${DBRUL}/physician/${username}/profile`, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                let user = loggedUserData.data
                cookie.save('auth', token)
                let authenticated = await ValidateTokenPhysician(token, user)
                console.log(authenticated)
                if (authenticated) return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }

    const ValidateTokenPatient = async (token, user) => {
        try {
            console.log('blablabla')
            const tokenChecker = await jwtDecode(token);
            console.log(tokenChecker, '2222')
            if (tokenChecker && tokenChecker.accountType === 'patient') {
                if (user) {

                    setUser(user);
                    setLoggedIn(true);
                    setUserType(tokenChecker.accountType);
                } else {
                    let loggedUserData = await axios.get(`${DBRUL}/patient/${tokenChecker.username}/profile`, {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                    console.log(loggedUserData.data, 'saved data patient form in validate')
                    setUser(loggedUserData.data);
                    setLoggedIn(true);
                    setUserType(tokenChecker.accountType);
                }


                return true
            }
        } catch (e) {
            console.log(e)
            return false
        }
    }
    const ValidateTokenPhysician = async (token, user) => {
        try {
            const tokenChecker = await jwtDecode(token);
            console.log(tokenChecker, 'physicianSide')
            if (tokenChecker && tokenChecker.accountType === 'physician') {
                if (user) {
                    console.log('aaaaaaasd')
                    setUser(user);
                    setLoggedIn(true);
                    setUserType(tokenChecker.accountType);
                } else {
                    let loggedUserData = await axios.get(`${DBRUL}/physician/${tokenChecker.username}/profile`, {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                    console.log(loggedUserData.data, 'saved data physician form in validate')
                    setUser(loggedUserData.data);
                    setLoggedIn(true);
                    setUserType(tokenChecker.accountType);
                }


                return true
            }
        } catch (e) {
            console.log(e)
            return false
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
            let decoded = jwtDecode(authCookie)
            if (decoded.accountType === 'patient') {
                ValidateTokenPatient(authCookie)
            } else if (decoded.accountType === 'physician') {
                ValidateTokenPhysician(authCookie)

            } else {

                setLoggedIn(false)
            }
        }
        console.log(user)

    }, [])

    return (
        <LoginContext.Provider value={{ logout, loginPhysician, isPatient, isPhysician, loginPatient, loggedIn, user, userType, setVistedGroup, vistedGroup, state, dispatch, state2, dispatch2 }}>
            {children}
        </LoginContext.Provider>
    )
}