import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import { adminData } from '../SideBar/sidebarData'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaSearch } from 'react-icons/fa'

function AdminDashboard() {
  return (
    <div className='flex bg-gradient-to-br from-[#b33854] via-[#a52140] to-[#231e3b] h-[100vh]'>
      <Sidebar list={adminData} role='Admin' />


      <div className='flex flex-col  w-[100%] h-[100%] '>

        {/*Header */}
        <div className='flex items-center justify-between w-[100%] h-[15%] text-white bg-[#231e3b] border-b-2 border-[#231e3b]  p-[5px] '>

          <h2 className='text-3xl font-bold'>Dashboard Overview</h2>

          {/* <div className='flex items-center text-white bg-[#231e3b] p-[10px] '>
            
            <FaSearch/>
            <input type="search" placeholder="Search..." />
            
          </div> */}
          <div className='w-96 h-12 left-36 top-4 bg-opacity-40 bg-[#231e3b] border-2 border-[#525B85C2] rounded-full flex items-center text-white px-4'>
            <FaSearch className="text-white mr-2" />
            <input type="search" placeholder="Search..." className="bg-transparent border-none focus:outline-none text-white placeholder-white flex-grow" />
          </div>

         

        </div>
        
        <div className='flex h-[85%] '>

          {/* left section */}
          <div className='flex flex-col w-[60%] h-[100%] '>
            <div className=' h-[80%] border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px] p-3 '>
              <h2>Overview</h2>
            </div>
            
            <div className=' h-[80%] border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px] p-3 '>
            <h2>Top Dealers</h2>
            </div>

            <div className='flex items-center h-[60%] border rounded-lg text-white bg-[#231e3b] shadow-xl m-[10px] '>

              <div className='h-[90%] w-1/3 border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px]'>
              </div>

              <div className='h-[90%] w-1/3 border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px]'>
              </div>

              <div className='h-[90%] w-1/3 border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px]'>
              </div>

            </div>

          </div>


          {/* Right section */}
          <div className='flex flex-col w-[40%] '>
            <div className=' h-[200px] border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px] '>
            </div>
            
            <div className=' h-[200px] border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px] '>
            </div>

            



          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard