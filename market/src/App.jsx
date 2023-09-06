import Cabecalho from './componentes/Cabecalho';
import Rodape from './componentes/Rodape';
import Conteudo from './componentes/Conteudo';
import './App.css'
import { Outlet } from "react-router-dom"



function App(){
  return(
  <>
  <Cabecalho/>

  <Conteudo/>

  <Outlet/>

  <Rodape/>
  </>
)
}


export default App
