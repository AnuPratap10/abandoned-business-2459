import React from 'react'
import SecPart from "./SecPart"
import MyNavbar from './MyNavbar'
import ThirdPart from './ThirdPart'
import ForthPart from './ForthPart'
import FifthPart from './FifthPart'
import FooterSec from './FooterSec'

export default function MainFile() {
  return (
    <div>
      <MyNavbar />
      <SecPart />
      <ThirdPart />
      <ForthPart />
      <FifthPart />
      <FooterSec />
    </div>
  )
}
