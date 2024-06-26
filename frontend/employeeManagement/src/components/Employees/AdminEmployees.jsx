import React, { useState, useEffect } from 'react';

import Sidebar from '../SideBar/Sidebar';
import { adminData } from '../SideBar/sidebarData';
import { MdDelete } from "react-icons/md"
import { FaEdit, FaInfoCircle } from "react-icons/fa"
import EmployeeDeleteModal from '../MinorComponents/EmployeeDeleteModal';
import EditEmployeeModal from '../MinorComponents/Modal/EditEmployeeModal';
import AddEmployeeModal from '../MinorComponents/Modal/AddEmployeeModal';
import DetailsEmployeeModal from '../MinorComponents/Modal/DetailsEmployeeModal'
import UniversalModal from '../MinorComponents/Modal/UniversalModal';



function AdminEmployees() {
  const [employeeData, setEmployeeData] = useState([]);

  // hook to add Employee modal
  const [addEmployeeModal, setAddEmployeeModal] = useState(false)

  // hook to open delete modal
  const [openModal, setOpenModal] = useState(false)

  //hook to open edit Modal
  const [openEditModal, setOpenEditModal] = useState(false)
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null)
  const [editEmployee, setEditEmployee] = useState(null)

  // hook to open Employee Details?Info Modal
  const [detailsModal, setDetailsModal] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState(null);


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


  const handleDelete = (id) => {
    if (id > 0)
    {
      const deleteData = employeeData.filter(employee => employee.id !== id)
      setEmployeeData(deleteData)
    }
  }

  // const handleEdit = (updatedEmployee) => {
  //   if (updatedEmployee.id > 0)
  //   {
  //     const updatedEmployeeData = employeeData.map((employee) =>
  //       employee.id === updatedEmployee.id ? updatedEmployee : employee
  //     );
  //     setEmployeeData(updatedEmployeeData)
  //   }
  // }
  const handleEdit = (updatedEmployee) => {
    // Send a PUT request to update the employee's details
    fetch(`/api/employees/${updatedEmployee.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployee),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update employee details');
        }
        // If the request is successful, update the employee details in the state
        // Assuming employeeData and setEmployeeData are available in the component's scope
        const updatedEmployeeData = employeeData.map((employee) =>
          employee.id === updatedEmployee.id ? updatedEmployee : employee
        );
        setEmployeeData(updatedEmployeeData);
        setOpenEditModal(false); // Close the modal after successful update
      })
      .catch((error) => {
        console.error('Error updating employee details:', error);
      });
  };
  
  const handleAdd = (newEmployee) => {
    
    setEmployeeData([...employeeData,newEmployee])
    
  }

  
  

  return (

    <div className='flex bg-gradient-to-br from-[#b33854] via-[#a52140] to-[#231e3b] h-[100vh]'>

      <Sidebar list={adminData} role='Admin' />

      <div className='flex flex-col w-[80%] h-[100%] '>

        <div className='flex items-center justify-between w-[100%] h-[15%] text-white bg-[#231e3b] border-b-2 border-[#231e3b]  p-[5px] '>
            <h2 className='text-white text-3xl font-semibold'>Employees Overview</h2>
            <button className='w-56 h-12 bg-[#231e3b] hover:bg-[#ef2253] cursor-pointer border-2 rounded-md border-solid border-gray-500 shadow-md p-[5px] '
            onClick={() => {setAddEmployeeModal(true)}}>
              Add Employee
            </button>
        </div>

        <div id='employee-div' className='h-[85%] flex flex-col justify-center items-center rounded-r-md text-white p-[10px]'>

          <div id='employeesData' className='bg-[#231e3b] h-[90%] w-[100%] flex flex-col border-2 rounded-md border-solid border-gray-500 shadow-md items-center overflow-y-auto px-[30px]'>
            <div className='bg-[#ef2253] w-[98%] h-[30px] flex items-center justify-between content-center mt-[10px] mb-[10px] p-[5px] border-2 rounded-md border-solid border-gray-500 shadow-md sticky top-0 '>
              <span className="w-[10%]">S.#</span>
              <span className="w-[20%]">ID</span>
              <span className="w-[30%]">Name</span>
              <span className="w-[20%]">Department</span>
              <span className="w-[20%]">Actions</span>
            </div>

            
            {employeeData.map((employee, index) => (
              <div key={index} className='w-[98%] h-[30px] flex items-center justify-between content-center mt-[10px] p-[10px] border-2 rounded-md border-solid border-gray-500 shadow-md hover:bg-[#ef2253] '>
                <span className="w-[10%]">{index + 1}</span>
                <span className="w-[20%]">{employee.id}</span>
                <span className="w-[30%]">{employee.firstName} {employee.lastName}</span>
                <span className="w-[20%]">{employee.department}</span>
                <span className="w-[20%] flex items-center justify-between ">
                  <span className='hover:cursor-pointer' onClick={() => {setOpenEditModal(true); setEditEmployee(employee) } } ><FaEdit /></span>

                  <span className='hover:cursor-pointer' onClick={() => {setDetailsModal(true); setSelectedEmployee(employee)}} ><FaInfoCircle /></span>

                  <span className='hover:cursor-pointer' onClick={() => {setOpenModal(true); setSelectedEmployeeId(employee.id)}}><MdDelete /></span>
                  
                </span>
                
              </div>
            ))}

          </div> 
          
        </div>

      </div>

    { openModal && <EmployeeDeleteModal closeModal={setOpenModal} employeeId={selectedEmployeeId} handleDelete={handleDelete}/>}

    {/* { openEditModal && <EditEmployeeModal closeModal={setOpenEditModal} employee={editEmployee} handleEdit={handleEdit} />} */}

    { addEmployeeModal && <AddEmployeeModal closeModal={setAddEmployeeModal} handleAdd={handleAdd} employeeData={employeeData} />}

    {/* { detailsModal && <DetailsEmployeeModal  closeModal={setDetailsModal} employee={selectedEmployee} />} */}

    {
      detailsModal && <UniversalModal closeModal={setDetailsModal} employee={selectedEmployee} isDisabled={true} submitBtnText={"Close"}/>
    }



    {
      openEditModal && <UniversalModal closeModal={setOpenEditModal} employee={editEmployee} handleEdit={handleEdit} isDisabled={false} submitBtnText={"Confirm Changes"}/>
    }

    </div>

  )
}

export default AdminEmployees;
