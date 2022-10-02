import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Component/Login'
import MainFile from '../Component/MainFile'
import Password from '../Component/Password'


export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainFile/> }/>
        <Route path="/individuals" element= "Individuals"/>
        <Route path="teams" element= "Individuals"/>
        <Route path="enterprise" element= "Enterprise"/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/password" element= {<Password/>}/>
      </Routes>
    </div>
  )
}
