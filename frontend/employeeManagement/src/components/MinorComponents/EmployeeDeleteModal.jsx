import React from 'react'
import { MdClose } from "react-icons/md"

function EmployeeDeleteModal({closeModal}) {
  return (
    <>
        <div className='w-full h-screen backdrop-blur-[2px] fixed flex justify-center items-center'>
            <div className='w-96 h-96 border rounded-2xl text-white bg-[#231e3b] shadow-xl flex flex-col p-6'>
                <div className='ml-auto bg-transparent border-none text-xl cursor-pointer'>
                    <MdClose className='hover:cursor-pointer' onClick={() => closeModal(false)} />
                </div>

                <div className='text-3xl font-bold text-center py-[10px]'>
                    <h2>Warning !</h2>
                </div>

                <div className='flex justify-center items-center text-xl  py-12'>
                    <p>Are you sure you want to delete this employee's data?</p>
                </div>

                <div className='flex justify-center items-center pb-16 '>

                    <button className='w-48 h-12 m-2 rounded-lg bg-red-600 text-white text-lg cursor-pointer' onClick={() => closeModal(false)} >Cancel</button>
                    <button className='w-48 h-12 m-2 rounded-lg bg-blue-500 text-white text-lg cursor-pointer'>Continue</button>

                </div>

            </div>
        </div>
    </>
  )
}

export default EmployeeDeleteModal