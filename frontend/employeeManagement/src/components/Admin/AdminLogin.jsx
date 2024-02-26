import React from 'react'
import {FaUser, FaLock, FaEye} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AdminLogin() {
  return (
    <div className='bg-custom-bg w-full h-screen'>

      <span className='bg-red-300 w-full text-3xl border-b border-gray-900 flex justify-center p-[10px]'>Administration</span>

      <div className='flex items-center justify-center mt-7'>
        <div className='border-4 border-gray-700 p-14 rounded-md shadow-slate-700 shadow-2xl'>

          <div className='mb-10'>
            <h2 className='text-black text-3xl font-bold'>Welcome Back!</h2>
            <p className='text-black text-opacity-70 font-bold text-xl'>Login to continue</p>
          </div>

          <div >
            <span className='text-xl text-white font-md-bold'>Username:</span>
            <div className='flex items-center mb-5 bg-white p-3 border-2 rounded-md border-gray-400'>
              <FaUser className='text-blue-400 text-xl'/>
              <input type="text" placeholder='username' className='outline-none w-full px-5'/>
            </div>
          </div>

          <div>
            <span className='text-xl text-white font-md-bold'>Password:</span>
            <div className='flex items-center mb-10 bg-white p-3 border-2 rounded-md border-gray-400'>
              <FaLock className='text-blue-400 text-xl'/>
              <input type="password" placeholder='password' className='outline-none w-full px-5'/>
              <FaEye className='text-blue-400 text-xl'/>
            </div>
          </div>

          <div className=" flex items-center gap-10">
              <Link to='/adminDashboard' className=" bg-red-500 px-8 py-3 rounded-lg font-bold hover:bg-blue-400 duration-300">
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

export default AdminLogin