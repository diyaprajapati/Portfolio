import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter (
  [
    {
      path: '/',
      element: <App/>
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
