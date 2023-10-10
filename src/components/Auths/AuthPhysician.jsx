import React, { useContext } from 'react'
import { LoginContext } from '../../ContextApi/'

function AuthPhysician({children}) {
  const loginContext = useContext(LoginContext);

  console.log(loginContext.isPhysician(loginContext.userType))
//   const canDo = props.capability ? loginContext.can(props.capability) : true;
  const authinticated = loginContext.isPhysician(loginContext.userType) && loginContext.loggedIn;

  return (
    authinticated &&
    <>
      {children}
    </>
  )
}

export default AuthPhysician