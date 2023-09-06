import Cabecalho from './componentes/cabecalho';
import Rodape from './componentes/Rodape';
import './App.css'
import { Outlet } from "react-router-dom"



function App(){
  return(
  <>
  <Cabecalho/>

  <Outlet/>

  <Rodape/>
  </>
)
}


export default App
