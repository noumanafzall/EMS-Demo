import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { adminData } from '../SideBar/sidebarData'

function AdminRevenue() {
  return (
    <div className='flex bg-gradient-to-br from-[#b33854] via-[#a52140] to-[#231e3b] h-[100vh]'>
        <Sidebar list={adminData} role='Admin' />
        <div>This is Revenue Page</div>
    </div>
  )
}

export default AdminRevenue