import {Link} from "react-router-dom";
import {ListaAparelho} from "../componentes/ListaAparelho";
import ('./Aparelho.css');

export default function Aparelho(){

    document.title = "Aparelhos";
    

return(
    <>
        <div className="containerAp">
                <table>
                    <thead>
                    </thead>
                    <tbody>
                        {ListaAparelho.map((produto,indice)=>(
                        <tr className='aparelhos' key={indice} >
                            <td><Link to={`/aparelho/detalhes/${produto.id}`}><img src={produto.img} alt="" /></Link></td>
                            <td>Nome do Aparelho - {produto.nome}</td>
                            <td>Preço do Aparelho - {produto.preco}</td>    
                            <td className="botao"><Link to={`/aparelho/detalhes/${produto.id}`}>Ver mais detalhes</Link></td>
                        </tr>
                    ))}
                    
            
                    </tbody>
                    <tfoot>
                    </tfoot>    
                </table>
        </div>
    </>
)
}