import React from 'react';

const EditEmployeeModal = ({ closeModal, handleEdit,employee }) => {
  
    
    const confirmChanges = () => {
        handleEdit(employee);
        closeModal(false);
    };

  

  return (
    <div className='w-full h-screen backdrop-blur-[2px] fixed flex justify-center items-center '>
      <div className='w-96 h-[90%] border rounded-2xl text-white bg-[#231e3b] shadow-xl flex flex-col p-6 overflow-y-auto'>
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

        <h2 className='text-3xl font-bold text-center py-4'>Edit Employee</h2>

        <div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='employeeId' className='mb-1'>
              Employee ID
            </label>
            <input
              type='text'
              id='employeeId'
              name='employeeId'
              value={employee}
              disabled
              className='border border-gray-300 rounded-md p-2'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='firstName' className='mb-1'>
              First Name
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={employee.firstname}
              className='border border-gray-300 rounded-md p-2 text-black'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='lastName' className='mb-1'>
              Last Name
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              defaultValue={employee.lastName}
              className='border border-gray-300 rounded-md p-2 text-black '
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='role' className='mb-1'>
              Role
            </label>
            <input
              type='text'
              id='role'
              name='role'
              defaultValue={employee.role}
              className='border border-gray-300 rounded-md p-2 text-black'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='location' className='mb-1'>
              Location
            </label>
            <input
              type='text'
              id='location'
              name='location'
              defaultValue={employee.location}
              className='border border-gray-300 rounded-md p-2 text-black'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='address' className='mb-1'>
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              defaultValue={employee.address}
              className='border border-gray-300 rounded-md p-2 text-black'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='age' className='mb-1'>
              Age
            </label>
            <input
              type='number'
              id='age'
              name='age'
              defaultValue={employee.age}
              className='border border-gray-300 rounded-md p-2 text-black'
            />
          </div>

          <div className='flex flex-col mb-4'>
            <label htmlFor='dateOfJoining' className='mb-1'>
              Date of Joining
            </label>
            <input
              type='date'
              id='dateOfJoining'
              name='dateOfJoining'
              defaultValue={employee.dateofjoining}
              className='border border-gray-300 rounded-md p-2 text-black'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300' onClick={() => closeModal(false)}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
