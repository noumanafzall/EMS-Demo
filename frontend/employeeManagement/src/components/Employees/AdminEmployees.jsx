import React, { useState, useEffect } from 'react';
import Sidebar from '../SideBar/Sidebar';
import { adminData } from '../SideBar/sidebarData';
import { MdDelete } from "react-icons/md"
import { FaEdit, FaInfoCircle } from "react-icons/fa"
import EmployeeDeleteModal from '../MinorComponents/EmployeeDeleteModal';



function AdminEmployees() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/employees'); 
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const [openModal, setOpenModal] = useState(false)

  

  return (
    <>
    <div className='flex bg-gradient-to-br #231e3b from-[#231e3b] via-[#4d3874] to-[#b33854] h-[100vh]'>

      <Sidebar list={adminData} role='Admin' />

      <div className='h-[100vh] w-[80%] flex flex-col justify-center items-center rounded-r-md text-white'>

        <div className='flex items-center justify-between w-[100%] mr-[10px] '>
          <label className='text-white text-xl p-[10px]'>Employees Overview</label>
          <button className='bg-[#231e3b] hover:bg-[#ef2253] cursor-pointer border-2 rounded-md border-solid border-gray-500 shadow-md p-[5px] '>Add Employee</button>
        </div>


        <div id='employeesData' className='bg-[#231e3b] h-[90%] w-[100%] flex flex-col border-2 rounded-md border-solid border-gray-500 shadow-md items-center overflow-y-auto '>
          <div className='bg-[#ef2253] w-[98%] h-[30px] flex items-center justify-between content-center mt-[10px] mb-[20px] p-[5px] border-2 rounded-md border-solid border-gray-500 shadow-md sticky top-0 '>
            <span className="w-[10%]">S.#</span>
            <span className="w-[20%]">ID</span>
            <span className="w-[30%]">Name</span>
            <span className="w-[20%]">Department</span>
            <span className="w-[20%]"></span>
          </div>

          
          {employeeData.map((employee, index) => (
            <div key={index} className='w-[98%] h-[30px] flex items-center justify-between content-center mt-[10px] p-[10px] border-2 rounded-md border-solid border-gray-500 shadow-md'>
              <span className="w-[10%]">{index + 1}</span>
              <span className="w-[20%]">{employee.id}</span>
              <span className="w-[30%]">{employee.firstname} {employee.lastName}</span>
              <span className="w-[20%]">{employee.department}</span>
              <span className="w-[20%] flex items-center justify-between ">
                <span className='hover:cursor-pointer'><FaEdit /></span>
                <span className='hover:cursor-pointer'><FaInfoCircle /></span>
                <span className='hover:cursor-pointer' onClick={() => {setOpenModal(true)}}><MdDelete /></span>
              </span>
              
            </div>
          ))}

        </div> 
        
      </div>

    { openModal && <EmployeeDeleteModal closeModal={setOpenModal}/>}
    </div>
    </>
  );
}

export default AdminEmployees;
