import React, { useEffect, useState } from 'react'
import Sidebar from '../SideBar/Sidebar'
import { adminData } from '../SideBar/sidebarData'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { BsThreeDotsVertical } from "react-icons/bs"

function AdminDashboard() {

  const [dealersData, setDealersData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dealers'); 
        const data = await response.json();
        setDealersData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [])



  return (
    <div className='flex bg-gradient-to-br from-[#b33854] via-[#a52140] to-[#231e3b] h-[100vh]'>
      <Sidebar list={adminData} role='Admin' />


      <div className='flex flex-col  w-[80%] h-[100%] '>

        {/*Header */}
        <div className='flex items-center justify-between w-[100%] h-[15%] text-white bg-[#231e3b] border-b-2 border-[#231e3b]  p-[5px] '>

          <h2 className='text-3xl font-bold'>Dashboard Overview</h2>

          <div className='w-96 h-12 left-36 top-4 bg-opacity-40 bg-[#231e3b] border-2 border-[#525B85C2] rounded-full flex items-center text-white px-5 mx-[10px]'>
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
            <h2 className='h-[10%]'>Top Dealers</h2>

            <div className='w-[100%] h-[150px] mb-1'>
              
              <table className='h-[100%] w-[100%] flex flex-col items-center' >
                <thead className=' w-[100%] h-[30px] flex items-center content-center mt-[10px] mb-[5px] p-[10px] sticky top-0 '>
                  <tr className='bg-[#5a50f1] w-[100%] h-[30px] flex items-center justify-center content-center mt-[10px] p-[10px] border-2 rounded-md border-solid border-gray-500 shadow-md' >
                   <td className='w-1/3'>Company</td>
                   <td className='w-1/3'>Value</td>
                   <td className='w-1/3'>Duration</td>
                  </tr>
                </thead>

                <tbody className='w-[100%] h-[100%] flex flex-col items-center content-center mt-[10px] p-[5px] overflow-y-auto'>

                  {
                    dealersData.map((dealers,index) => (
                      <tr className='w-[100%] h-[30px] flex items-center justify-between content-center mt-[10px] p-[5px] border-2 rounded-md border-solid border-gray-500 shadow-md hover:bg-[#ef2253] cursor-pointer '>
                        <td className='w-[30%]'>{dealers.cName}</td>
                        <td className='w-[30%]'>{dealers.revenue}</td>
                        <td className='w-[30%]'>{dealers.period}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              
            </div>

            </div>

            <div className='flex items-center h-[60%] m-[10px] '>

              <div className='h-[95%] w-1/3 border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px]'>
              </div>

              <div className='h-[95%] w-1/3 border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px]'>
              </div>

              <div className='h-[95%] w-1/3 border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px]'>
              </div>

            </div>

          </div>


          {/* Right section */}
          <div className='flex flex-col w-[40%] '>
            <div className=' h-[50%] border rounded-lg text-white bg-[#231e3b] shadow-xl flex flex-col m-[10px] '>

            </div>
            


            <div className=' h-[50%] flex flex-col m-[10px] '>

            <div className='flex items-center justify-evenly h-1/3 border rounded-lg text-white bg-[#231e3b] shadow-xl m-[10px]'>
                <CgProfile className='text-4xl'/>
                <div>
                  <h2 className='text-xl font-semibold'>Araib Khan Niazi</h2>
                  <label>Manager</label>
                </div>
                <BsThreeDotsVertical className='text-3xl' />
              </div>

              <div className='flex items-center justify-evenly h-1/3 border rounded-lg text-white bg-[#231e3b] shadow-xl m-[10px]'>
                <CgProfile className='text-4xl'/>
                <div>
                  <h2 className='text-xl font-semibold'>Sharjeel Khan</h2>
                  <label>Senior Supervisor</label>
                </div>
                <BsThreeDotsVertical className='text-3xl' />
              </div>

              <div className='flex items-center justify-evenly h-1/3 border rounded-lg text-white bg-[#231e3b] shadow-xl m-[10px]'>
                <CgProfile className='text-4xl'/>
                <div>
                  <h2 className='text-xl font-semibold'>Malik Riaz</h2>
                  <label>Accounts Manager</label>
                </div>
                <BsThreeDotsVertical className='text-3xl hover:cursor-pointer' />
              </div>


              
            </div>

            



          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard