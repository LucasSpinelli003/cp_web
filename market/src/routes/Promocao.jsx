import Promo01 from '../assets/img/iphone1.png'
import Promo02 from '../assets/img/iphone2.png'
import './Promocao.css'


export default function Promocao(){

    document.title = 'Promoção'

    return(
        <>
    <section>
        <h1>Em breve!</h1>
        <div className="containerPromo">
            <img src={Promo01} alt="Promo1" />
            <p>Iphone 14</p>
            <p>Azul</p>
            <p>R$2500</p>
            <img src={Promo02} alt="Promo2" />
            <p>Iphone 13 Pro</p>
            <p>Lilás</p>
            <p>R$2000</p>
        </div>
    </section>

        </>

    )

}

