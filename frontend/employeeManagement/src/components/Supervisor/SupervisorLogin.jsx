import React, { useEffect } from 'react'
import {FaUser, FaLock, FaEye} from 'react-icons/fa'
import {FaMapLocationDot } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'


function SupervisorLogin() {

  const [location, setLocation] = useState ([])

  useEffect(() => {
    axios.get('/api/locations')
    .then((response) => {
      setLocation(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  } , [])

  return (
    <div className='bg-custom-bg w-full h-screen'>

      <span className='bg-red-300 w-full text-3xl border-b border-gray-900 flex justify-center p-[10px]'>Supervisors</span>

      <div className='flex items-center justify-center mt-7'>
        <div className='border-4 border-gray-700 p-10 rounded-md shadow-slate-700 shadow-2xl'>

          <div className='mb-7'>
            <h2 className='text-black text-3xl font-bold'>Welcome Back!</h2>
            <p className='text-black text-opacitymd-bold-70 font-bold text-xl'>Login to continue</p>
          </div>

          <div >
            <span className='text-xl text-white '>Username:</span>
            <div className='flex items-center mb-5 bg-white p-3 border-2 rounded-md border-gray-400'>
              <FaUser className='text-blue-400 text-xl'/>
              <input type="text" placeholder='username' className='outline-none w-full px-5'/>
            </div>
          </div>

          <div>
            <span className='text-xl text-white'>Password:</span>
            <div className='flex items-center mb-5 bg-white p-3 border-2 rounded-md border-gray-400'>
              <FaLock className='text-blue-400 text-xl'/>
              <input type="password" placeholder='password' className='outline-none w-full px-5'/>
              <FaEye className='text-blue-400 text-xl'/>
            </div>
          </div>

          <div>
            
            <span className='text-xl text-white '>Location:</span>
            <div className='flex items-center mb-5 bg-white p-3 border-2 rounded-md border-gray-400'>
              <FaMapLocationDot className='text-blue-400 text-xl'/>


             
              <select  className='outline-none w-full px-5'>
                {
                  location.map((area , index) => {
                    return (
                      <option key={index}>{area}</option>
                    )
                  })
                }
              </select> 
            </div>
          </div>

          <div className=" flex items-center gap-10">
              <Link to='/supervisorDashboard' className=" bg-red-500 px-8 py-3 rounded-lg font-bold hover:bg-blue-400 duration-300">
                LOGIN
              </Link>

              <h3 className="text-white hover:text-red-600">
                <Link to="#">forget password?</Link>
              </h3>
            </div>

        </div>

      </div>

    </div>
  )
}

export default SupervisorLogin