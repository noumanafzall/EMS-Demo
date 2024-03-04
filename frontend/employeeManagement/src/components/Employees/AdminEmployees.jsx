import React, { useState, useEffect } from 'react';
import Sidebar from '../SideBar/Sidebar';
import { adminData } from '../SideBar/sidebarData';

function AdminEmployees() {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/employees'); // Adjust the endpoint based on your server setup
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div className='flex bg-[#231e3b]'>
      <Sidebar list={adminData} role='Admin' />
      <div className='h-[100vh] w-[80%] flex flex-col justify-center items-center rounded-r-md text-white'>
        <label className='text-xl p-[10px]'>Employees Overview</label>

        <div id='employeesData' className='bg-[#231e3b] h-[80%] w-[95%] flex flex-col border-2 rounded-md border-solid border-gray-500 shadow-md items-center overflow-y-auto '>
          <div className='bg-[#ef2253] w-[98%] h-[30px] flex items-center justify-between content-center mt-[10px] mb-[20px] p-[5px] border-2 rounded-md border-solid border-gray-500 shadow-md '>
            <span>S.#</span>
            <span>ID</span>
            <span>Name</span>
            <span>Department</span>
            <span>Phone#</span>
          </div>

          {/* Render employee data */}
          {employeeData.map((employee, index) => (
            <div key={index} className='w-[98%] h-[30px] flex items-center justify-between content-center mt-[10px] p-[5px] border-2 rounded-md border-solid border-gray-500 shadow-md'>
              <span>{index + 1}</span>
              <span>{employee.id}</span>
              <span>{employee.name}</span>
              <span>{employee.department}</span>
              <span>{employee.phone}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminEmployees;
