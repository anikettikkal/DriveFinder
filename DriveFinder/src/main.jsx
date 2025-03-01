import { StrictMode } from 'react'
import React from 'react'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import RentalCars from './Views/RentalCars/RentalCars.jsx'
import Emergency from './Views/Emergency/Emergenc.jsx'
import Trip from './Views/Trip/Trip.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login.jsx'
import Dashboard from './Dashboard/DashBoard.jsx'
import Construction from './Views/Construction/Construction.jsx'
import Agriculture from './Views/Agriculture/Agriculture.jsx'
import Heavy from './Views/Heavy/Heavy.jsx'
import Light from './Views/Light/Light.jsx'


const router = createBrowserRouter([
  { path: '', element: <Signup /> },
  { path: '/login', element: <Login /> },
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"home",
        element:<Home />
      },
      {
        path:"contact",
        element:<Contact />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"trip",
        element:<Trip />
      },
      {
        path:"emergency",
        element:<Emergency />
      },
      {
        path:"rentalCars",
        element:<RentalCars />
      },
      {
        path:"construction",
        element:<Construction />
      },
      {
        path:"agriculture",
        element:<Agriculture />
      },
      {
        path:"heavy",
        element:<Heavy />
      },
      {
        path:"light",
        element:<Light />
      },
      {
        path:'dashboard',
        element:<Dashboard />
      }
    ]
  }
])

// const router = createBrowserRouter([
//   { path: '/', element: <Signup /> },  // Default route now shows Signup
//   { path: '/login', element: <Login /> },
//   {
//     path: '/home',  // Moved Layout routes under '/dashboard'
//     element: <Layout />,
//     children: [
//       { path: '', element: <Home /> },
//       { path: 'contact', element: <Contact /> },
//       { path: 'about', element: <About /> },
//       { path: 'trip', element: <Trip /> },
//       { path: 'emergency', element: <Emergency /> },
//       { path: 'rentalCars', element: <RentalCars /> }
//     ]
//   }
// ])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
