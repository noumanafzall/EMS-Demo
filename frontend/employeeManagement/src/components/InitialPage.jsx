import React from 'react'
import {Link} from 'react-router-dom'

function InitialPage() {
  return (

    <div className='bg-custom-bg w-full min-h-[603px] overflow-y-scroll no-scrollbar flex flex-col items-center justify-center'>
        
        <Link to='/adminLogin' 
        className='text-white text-3xl bg-red-900 w-72 
        border border-solid border-gray-500 border-2 
        rounded-lg shadow-lg m-5 p-6 flex justify-center'>
          Admin
        </Link>


        <Link to="/supervisorLogin" 
        className='text-white text-3xl bg-green-600 w-72 
        border border-solid border-gray-500 border-2 
        rounded-lg shadow-lg m-5 p-6 flex justify-center'>
          Supervisor
        </Link>


        <button className='text-white text-3xl bg-red-900 w-72 border border-solid border-gray-500 border-2 rounded-lg shadow-lg m-5 p-6'>Accountant</button>
        <button className='text-white text-3xl bg-green-600 w-72 border border-solid border-gray-500 border-2 rounded-lg shadow-lg m-5 p-6'>Employee</button>

    </div>

  )
}

export default InitialPage