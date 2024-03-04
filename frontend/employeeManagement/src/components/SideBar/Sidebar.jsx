import React from 'react'
import { CgProfile } from "react-icons/cg"
import SideBarRoleBtn from '../MinorComponents/SideBarRoleBtn'
import SideBarBtn from '../MinorComponents/SideBarBtn'


function Sidebar({list}) {
  return (
    

      <div className='bg-[#231e3b] h-[100vh] w-[20%] flex flex-col border border-solid border-gray-500 border-t-0 border-r-2 border-b-0 border-l-0  shadow-md justify-between items-center rounded-r-md'>

        <h1 className='text-2xl text-white mt-5 '>BPSS</h1>

        <div className='my-4'>

        {
          list.map((sidebarBtn , index) => {
            return (
              <div key={index}>
                <SideBarBtn label={sidebarBtn.label} icon={sidebarBtn.icon} to={sidebarBtn.to}/>
              </div>
            )
          } )
        }

        </div>

        <SideBarRoleBtn role='Admin' icon={<CgProfile />} />

      </div>

    
  )
}

export default Sidebar