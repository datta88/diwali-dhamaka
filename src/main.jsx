import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './viwes/Home/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Home/>
  }
]);

const root =ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)

