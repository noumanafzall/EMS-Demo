import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import InitialPage from './components/InitialPage.jsx'
import AdminLogin from './components/Admin/AdminLogin.jsx'
import SupervisorLogin from './components/Supervisor/SupervisorLogin.jsx'
import PageLayout from './components/Layout/PageLayout.jsx'
import AdminDashboard from './components/Admin/AdminDashboard.jsx'
import SupervisorDashboard from './components/Supervisor/SuperVisorDashboard.jsx'
import AdminEmployees from './components/Employees/AdminEmployees.jsx'
import AdminAttendancePage from './components/Attendance/AdminAttendancePage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path:'',
        element: <InitialPage />
      },
      {
        path:'adminLogin',
        element: <AdminLogin />
      },
      {
        path:'supervisorLogin',
        element: <SupervisorLogin />
      },
    ]
  } ,
  {
    path:'/adminDashboard',
    element: <AdminDashboard />
  },
  {
    path:'/admin/employees',
    element: <AdminEmployees />
  },
  {
    path:'/admin/attendace',
    element: <AdminAttendancePage />
  },
  {
    path:'/supervisorDashboard',
    element: <SupervisorDashboard />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <RouterProvider  router={router}/>
    // <App />
)
