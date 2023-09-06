import Cabecalho from './componentes/cabecalho'
import './App.css'
import { Outlet } from "react-router-dom"



function App(){
  return(
  <>
  <Cabecalho/>
  <Outlet/>
  </>
)
}


export default App
