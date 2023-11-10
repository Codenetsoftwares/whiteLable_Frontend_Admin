import React from 'react'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div class="main_content_iner overly_inner ">
      <div class="container-fluid p-0 ">
      <Outlet/>
      </div>
      </div>
  )
}

export default Layout
