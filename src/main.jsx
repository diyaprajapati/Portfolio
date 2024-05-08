import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';

const router = createBrowserRouter (
  [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/skill',
      element: <Skills/>
    },
    {
      path: '/project',
      element: <Projects/>
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
