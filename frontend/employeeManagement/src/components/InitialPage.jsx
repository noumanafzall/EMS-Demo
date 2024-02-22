import React from 'react'
import {Link} from 'react-router-dom'

function InitialPage() {
  return (

    <div className='bg-custom-bg w-full min-h-screen flex flex-col items-center'>
        <h1 className='font-mono text-4xl text-white mb-16 pt-12 text-center'>
            Welcome to Administration Page...
        </h1>
        
        <Link to='/adminLogin' className='text-white text-3xl bg-red-900 w-72 border border-solid border-gray-500 border-2 rounded-lg shadow-lg m-4 p-6 flex justify-center'>
          Admin
        </Link>
        <Link to="/supervisorLogin" className='text-white text-3xl bg-green-600 w-72 border border-solid border-gray-500 border-2 rounded-lg shadow-lg m-4 p-6 flex justify-center'>
          <span>Supervisor</span>
        </Link>
        <button className='text-white text-3xl bg-red-900 w-72 border border-solid border-gray-500 border-2 rounded-lg shadow-lg m-4 p-6'>Accountant</button>
        <button className='text-white text-3xl bg-green-600 w-72 border border-solid border-gray-500 border-2 rounded-lg shadow-lg m-4 p-6'>Employee</button>

    </div>

  )
}

export default InitialPage