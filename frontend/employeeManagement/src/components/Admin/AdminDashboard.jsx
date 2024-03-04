import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { adminData } from '../SideBar/sidebarData'

function AdminDashboard() {
  return (
    <div className='flex'>
    
    <Sidebar list={adminData} role='Admin' />
    <h1>This is Admin Dashboard</h1>

    </div>
  )
}

export default AdminDashboard