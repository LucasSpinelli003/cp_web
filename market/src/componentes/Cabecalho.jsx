import logo from'../assets/img/images.png'
import './Cabecalho.css'
import {Link} from 'react-router-dom';



export default function Cabecalho() {
    return(
        <div className='containerCabe'>
            <header className='cabecalho'>
                <Link to='/'><img className='logo' src={logo} alt="Logo"/></Link>
                <ul className='lista'>
                    <li className='page'><Link to='/'>Home</Link></li>
                    <li className='page'><Link to='/promocao'>Promoção</Link></li>
                    <li className='page'><Link to='/aparelho'>Aparelhos</Link></li>
                    <li className='page'><Link to='/sobrenos'>Sobre nós</Link></li>
                </ul>
            </header>
        </div>
    )
}
