import React from 'react'
import { Link } from 'react-router-dom'


function SideBarBtn({label, icon, to}) {
  return (
    <Link className='' to={to}>

      <div className='bg-[#3e365a] text-white font-manrope text-xl leading-20 w-[170px] h-[40px] border border-solid border-gray-500 border-2 rounded-md shadow-md my-2 flex items-center px-[10px] mt-2 hover:bg-[#ef2253] '>
        {icon && <span className='mr-2 fill-current text-2xl font-bold '>{icon}
        </span>}
        {label}
      </div>



    </Link>
  )
}

export default SideBarBtn