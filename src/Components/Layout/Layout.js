import React from 'react'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="content-wrapper">
      <Outlet/>
    </div>
  )
}

export default Layout
