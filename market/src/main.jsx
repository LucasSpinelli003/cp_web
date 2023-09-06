import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';
import Promocao from './routes/Promocao.jsx';
import Aparelho from './routes/Aparelho.jsx';
import SobreNos from './routes/SobreNos.jsx'
import DetalhesAparelho from './routes/DetalhesAparelho.jsx'
import Compra from './routes/Compra.jsx'




const router = createBrowserRouter([
  {path:'/', element:<App />,
  errorElement: <Erro404 />,
    children:[
      {path:'/', element:<Home/>},
      {path:'/promocao', element:<Promocao/>},
      {path:'/aparelho', element:<Aparelho/>},
      {path:'/sobrenos', element:<SobreNos/>},
      {path:'/aparelho/detalhes/:id', element:<DetalhesAparelho/>},
      {path:'/compra', element:<Compra/>}
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
