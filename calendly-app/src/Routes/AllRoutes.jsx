import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Component/Login'


export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/individuals" element= "Individuals"/>
        <Route path="teams" element= "Individuals"/>
        <Route path="enterprise" element= "Enterprise"/>
      
      </Routes>
      <Route path="/login" element= {<Login/>}/>
      
      <Routes>

      </Routes>
    </div>
  )
}
