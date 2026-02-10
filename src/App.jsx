import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import AppLayout from './AppLayout'
import './Components/charts/chartSetup'
import Teams from './Pages/Teams'
import About from './Pages/About'
import Login from './Pages/Login'


const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      // errorElement: <ErrorPage />, 
      children:[
        {
          index:true,
          element:<Home />
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"teams",
          element:<Teams/>
        },
        {
          path:"services",
          element:<Services/>
        },
      ]
    },
    {
      path:"/login",
      element:<Login/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App