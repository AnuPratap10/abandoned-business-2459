import {createContext, useContext} from "react"
import React from 'react'

export const LoginContext=createContext()

export default function AuthContext({children}) {

//   const [state,dispatch]=useContext()


  return (
  
    <LoginContext.Provider value={{}}>
        {children}
    </LoginContext.Provider>
  )
}
