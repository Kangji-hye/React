import React from 'react'
import { Outlet } from 'react-router-dom'

const DashbordLayout = () => {
  return (
    <div>DashbordLayout
        <Outlet />
    </div>
  )
}

export default DashbordLayout