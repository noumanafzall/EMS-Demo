import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { Outlet } from 'react-router-dom'

function PanelLayout() {
  return (
    <>
     <Sidebar className={`tablet:w-[20%]
        bg-[#060c0c]
        pt-[45px]`} />
     <Outlet className={`
                w-[80%]
                bg-[#081213]
            `}/>
    </>
  )
}

export default PanelLayout