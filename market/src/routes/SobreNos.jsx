import './SobreNos.css'
import Logo from '../assets/img/images.png'


export default function SobreNos(){

    document.title = 'Sobre Nós'

   return(
    <>
    <section className='gigaContainer'>
        <div className='containerSobre'>
            <img src= {Logo} alt="" />
            <h1>
                Bem-vindo à Kabum - Tecnologia sem Limites!

                Na Kabum, estamos no negócio de transformar o seu mundo digital. Desde a nossa fundação, em 2003, temos sido a          fonte confiável de tecnologia e eletrônicos de ponta para milhões de clientes em todo o Brasil. Nossa paixão pelo           que fazemos e nosso compromisso com a excelência nos permitiram crescer e evoluir, tornando-nos uma referência no       mercado de e-commerce e eletrônicos.
            </h1>
        </div>
    </section>
    </>
   )
}