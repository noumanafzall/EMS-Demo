import React from 'react'
import supervisorData from '../SideBar/sidebarData'
import Sidebar from '../SideBar/Sidebar'


function SupervisorDashboard() {
  return (
    <div className='flex'>
    
        <Sidebar list={supervisorData} role='Supervisor'/>
        <h1>This is Supalvizul Dashboard</h1>

    </div>
  )
}

export default SupervisorDashboard