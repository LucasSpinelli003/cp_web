import banner from'../assets/img/banner_img.jpg'
import {Link} from 'react-router-dom';

export default function Home() {
    return(
       <>
    <body>
        <section>
            <Link to='/aparelho'><img className='banner' src={banner} alt="Banner"/></Link>
        </section>
    </body>
    
       </>
    )
}
