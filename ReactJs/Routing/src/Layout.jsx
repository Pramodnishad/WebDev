import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div style={{ padding: "20px", flex: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout