import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


// const router = createBrowserRouter (
//   [
//     {
//       path: '/',
//       element: <App/>
//     },
//     {
//       path: 'app',
//       element: <App/>
//     }
//   ]
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router}/>
// )
