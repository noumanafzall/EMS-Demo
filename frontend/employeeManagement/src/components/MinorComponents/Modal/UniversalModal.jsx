import React, { useState } from 'react'

const UniversalModal = ({closeModal, employee, isDisabled, submitBtnText}) => {

    // States for Edit Modal

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [department, setDepartment] = useState("")
    const [phone, setPhone] = useState("")
    const [role, setRole] = useState("")
    const [location, setLocation] = useState("")
    const [age, setAge] = useState("")    
    const [address, setAddress] = useState("")
    const [dateOfJoining, setDateOfJoining] = useState("")



  return (
    <div className='w-full h-screen backdrop-blur-[2px] fixed flex justify-center items-center '>
      <div className='w-[80%] h-[90%] border rounded-md text-white bg-[#231e3b] shadow-xl flex flex-col p-6 overflow-y-auto'>
        <div className='ml-auto bg-transparent border-none text-xl cursor-pointer'>
            <button onClick={() => closeModal(false)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
        </div>
  
        <h2 className='text-3xl font-bold text-center pb-4'>Employee Details</h2>
  
        <div>
          <div className='w-1/3 flex flex-col mb-4'>
            <label htmlFor='employeeId' className='mb-1'>
              Employee ID
            </label>
            <input
              type='text'
              id='employeeId'
              name='employeeId'
              value={employee.id}
              disabled
              className={`border border-gray-900 rounded-md p-2 ${isDisabled ? `` : 'text-black'}`}
            />
          </div>

          <div className='flex justify-between mb-4 '>
  
            <div className='flex flex-col w-1/3'>
              <label htmlFor='firstName' className='mb-1'>
                First Name
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={employee.firstName}
                disabled={isDisabled}
                className={`border border-gray-900 rounded-md p-2 ${isDisabled ? `` : 'text-black'}`}
              />
            </div>
    
            <div className='flex flex-col w-1/3 ml-1'>
              <label htmlFor='lastName' className='mb-1'>
                Last Name
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                defaultValue={employee.lastName}
                disabled={isDisabled}
                className={`border border-gray-900 rounded-md p-2 ${isDisabled ? `` : 'text-black'}`}
              />
            </div>

            <div className='flex flex-col w-1/3 ml-1'>
              <label htmlFor='age' className='mb-1'>
                Age
              </label>
              <input
                type='number'
                id='age'
                name='age'
                defaultValue={employee.age}
                disabled={isDisabled}
                className={`border border-gray-900 rounded-md p-2 ${isDisabled ? `` : 'text-black'}`}
              />
            </div>

          </div>

          <div className='flex justify-between mb-4'>

            <div className='flex flex-col w-2/3'>
              <label htmlFor='address' className='mb-1'>
                Address
              </label>
              <input
                type='text'
                id='address'
                name='address'
                defaultValue={employee.address}
                disabled={isDisabled}
                className={`border border-gray-900 rounded-md p-2 ${isDisabled ? `` : 'text-black'}`}
              />
            </div>

            <div className='flex flex-col w-1/3 ml-1'>
              <label htmlFor='age' className='mb-1'>
                Phone
              </label>
              <input
                type='number'
                id='phone'
                name='phone'
                defaultValue={employee.phone}
                disabled={isDisabled}
                className={`border border-gray-900 rounded-md p-2 ${isDisabled ? `` : 'text-black'}`}
              />
            </div>
          </div>

          <div className='flex justify-between mb-4 '>
  
            <div className='flex flex-col w-1/4'>
              <label htmlFor='role' className='mb-1'>
                Role
              </label>
              <input
                type='text'
                id='role'
                name='role'
                defaultValue={employee.role}
                disabled={isDisabled}
                className={`border border-gray-900 rounded-md p-2 ${isDisabled ? `` : 'text-black'}`}
              />
            </div>
    
            <div className='flex flex-col w-1/3 ml-1'>
              <label htmlFor='location' className='mb-1'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                defaultValue={employee.location}
                disabled={isDisabled}
                className={`border border-gray-900 rounded-md p-2 ${isDisabled ? `` : 'text-black'}`}
              />
            </div>
    
            <div className='flex flex-col w-1/3 ml-1'>
              <label htmlFor='age' className='mb-1'>
                Department
              </label>
              <input
                type='text'
                id='department'
                name='department'
                defaultValue={employee.department}
                disabled={isDisabled}
                className={`border border-gray-900 rounded-md p-2 ${isDisabled ? `` : 'text-black'}`}
              />
            </div>
    
            <div className='flex flex-col w-1/3 ml-1'>
              <label htmlFor='dateOfJoining' className='mb-1'>
                Date of Joining
              </label>
              <input
                type='date'
                id='dateOfJoining'
                name='dateOfJoining'
                defaultValue={employee.dateofjoining}
                disabled={isDisabled}
                className={`border border-gray-900 rounded-md p-2 ${isDisabled ? `` : 'text-black'}`}
              />
            </div>

          </div>

          <div className='flex items-center justify-center'>
            <button
              className='w-1/4  bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300' onClick={() => close()}
              >
              {
                submitBtnText
              }
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UniversalModal