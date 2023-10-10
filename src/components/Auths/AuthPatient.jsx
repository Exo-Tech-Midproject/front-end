import React, { useContext } from 'react'
import { LoginContext } from '../../ContextApi/Auth'

function AuthPatient({ children }) {
    const loginContext = useContext(LoginContext);

    console.log(loginContext.isPatient(loginContext.userType))
    //   const canDo = props.capability ? loginContext.can(props.capability) : true;
    const authinticated = loginContext.isPatient(loginContext.userType) && loginContext.loggedIn;

    return (
        authinticated &&
        <>
            {children}
        </>
    )
}

export default AuthPatient