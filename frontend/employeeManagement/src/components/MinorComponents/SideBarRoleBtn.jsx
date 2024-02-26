import React from 'react'
import { IoSettingsOutline } from "react-icons/io5"
import { TbLogout2 } from "react-icons/tb";

function SideBarRoleBtn({role, icon}) {
  return (
    <div>
        <div className='bg-[#3e365a] leading-20 w-[170px] h-[100px] border-solid border-gray-500 border-2 rounded-md shadow-md my-2 flex flex-col items-center justify-between px-[10px]'>
          
          <span className='text-white font-manrope text-xl leading-20 mt-[10px]'>{role}</span>
           
          <div className=' flex  pb-[10px] '>
            {icon && <span className='mr-2 text-white fill-current text-4xl  '>{icon}
            </span>}
            <IoSettingsOutline className='mr-2 text-white fill-current text-4xl  ' />
            <TbLogout2 className='mr-2 text-white  text-4xl  '/>

          </div>
            
        </div>
    </div>
  )
}

export default SideBarRoleBtn