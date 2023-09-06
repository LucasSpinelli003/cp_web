import banner from'../assets/img/banner_img.jpg'
import {Link} from 'react-router-dom';
import './Home.css'

export default function Home() {
  document.title = 'KaBuM! | Maior loja de E-commerce de tecnologia e games da América Latina'
    return(
       <>
       <section className='container'>
         <Link to='/aparelho'><img className='banner' src={banner} alt="Banner"/></Link>    
          <h1 className='span'>A melhor loja é aqui!</h1>
       </section>
       </>
    )
}
