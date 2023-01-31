import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'

function ALLRoute() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/page2" element={<Page2/>}/>
        <Route path="/page3" element={<Page3/>}/>


    </Routes>
  )
}

export default ALLRoute