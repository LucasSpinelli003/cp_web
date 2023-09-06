import {Link} from "react-router-dom";
import './Compra.css'


export default function Compra(){
    return(
        <>
        <div className='containerCompra'>
            <h1>Parabéns, sua compra foi realizada com sucesso!!</h1>
            <p><Link to={'/'}>Volte para o menu</Link></p>
        </div>
        </>
    )
}