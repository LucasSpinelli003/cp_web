import logo from'../assets/img/images.png'
import './Cabecalho.css'
import {Link} from 'react-router-dom';



export default function Cabecalho() {
    return(
        <div>
            <header className='cabecalho'>
                <Link to='/'><img className='logo' src={logo} alt="Logo"/></Link>
                <ul className='lista'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/promocao'>Promoção</Link></li>
                    <li><Link to='/aparelho'>Aparelhos</Link></li>
                    <li>Tv</li>
                    <li>Games</li>
                </ul>
            </header>
        </div>
    )
}
