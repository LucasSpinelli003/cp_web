import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';
import Promocao from './routes/Promocao.jsx'



const router = createBrowserRouter([
  {path:'/', element:<App />,
  errorElement: <Erro404 />,
    children:[
      {path:'/', element:<Home/>},
      {path:'/promocao', element:<Promocao/>},
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
