import React from 'react'

function InitialPage() {
  return (

    <div className='bg-custom-bg w-full min-h-screen flex flex-col items-center'>
        <h1 className='font-mono text-4xl text-white mb-16 pt-12 text-center'>
            Welcome to Administration Page...
        </h1>
        
        <button className='text-white text-3xl bg-red-900 border border-solid border-gray-500 border-2 rounded-lg shadow-lg m-4 px-[150px] py-[10px]'>Admin</button>
        <button className='text-white text-3xl bg-green-600 w-72 border border-solid border-gray-500 border-2 rounded-lg shadow-lg m-4 p-6'>Supervisor</button>
        <button className='text-white text-3xl bg-red-900 w-72 border border-solid border-gray-500 border-2 rounded-lg shadow-lg m-4 p-6'>Accountant</button>
        <button className='text-white text-3xl bg-green-600 w-72 border border-solid border-gray-500 border-2 rounded-lg shadow-lg m-4 p-6'>Employee</button>

    </div>

  )
}

export default InitialPage