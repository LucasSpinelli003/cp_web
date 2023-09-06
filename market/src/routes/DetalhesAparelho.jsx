import { useParams, Link } from "react-router-dom";
import { ListaAparelho } from "../componentes/ListaAparelho";
import './DetalhesAparelho.css'

export default function DetalhesAparelho(){
    document.title = "Detalhes";

    const {id} = useParams();

    const produtoRecuperadoPorId = ListaAparelho.filter((produto)=>{
        if(produto.id === parseInt(id)) {
            return produto;
        }
    });

    return(
        <>
        <section className='containerDetalhes'>
            <div>
                <h1>Detalhes do aparelho</h1>
                <div className='conteudo'>
                    <div>
                        <img src={produtoRecuperadoPorId[0].img} alt="" />
                    </div>
                    <div className='info'>
                        <h2>{produtoRecuperadoPorId[0].nome}</h2>
                        <h2>{produtoRecuperadoPorId[0].preco}</h2>
                        <p>{produtoRecuperadoPorId[0].descricao}</p>
                        <p>GB: {produtoRecuperadoPorId[0].gb}</p>
                        <p>Cor: {produtoRecuperadoPorId[0].cor}</p>
                        <h3><Link >Comprar</Link></h3>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}