import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Donation from './pages/Donation.jsx';
import Signin from './pages/Signin.jsx';
import Login from './pages/Login.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"aboutus",
        element: <AboutUs/>
      },
      {
      path:"donation",
      element: <Donation/>
      },
    ]
  },
  {
    path:"signin",
    errorElement: <ErrorPage/>,
    element: <Signin/>
  },
  {
    path:"login",
    errorElement: <ErrorPage/>,
    element: <Login/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
