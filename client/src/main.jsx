import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



import App from './App.jsx'
import Home from './pages/Home.jsx'
import Questions from './pages/Questions.jsx'
import LogIn from './pages/LogIn.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Questions",
        element: <Questions />
      },
      {
        path: "/LogIn",
        element: <LogIn />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
