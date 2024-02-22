import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import InitialPage from './components/InitialPage.jsx'
import AdminLogin from './components/Admin/AdminLogin.jsx'
import SupervisorLogin from './components/Supervisor/SupervisorLogin.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <InitialPage/>,
    children: [
      {
        path:'',
        element: <AdminLogin />
      },
      {
        path:'adminLogin',
        element: <AdminLogin />
      },
      {
        path:'supervisorLogin',
        element: <SupervisorLogin />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
