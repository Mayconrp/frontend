import React, {useState, useEffect }from 'react';
import { useParams, useHistory } from 'react-router';
import '../assets/css/post.css'
import { busca } from '../api/api';
import Loading from '../componentes/loading';

const Artigo = () => {

    let history = useHistory()

    const { id } = useParams() 

    const [post, setPost] = useState({});

    const [isLoading, setIsLoading] = useState(true)

    useEffect((history) => {

        setTimeout(() =>{
            setIsLoading(false)
        }, 2000 );

        busca(`/artigos/${id}`, setPost)
        
        .catch(()=> {
                history.push('/404')
            }
        )
        
    }, [id, history]);

    return(
        <div><br/><br/>
            { isLoading === true ?
                <Loading /> :
                <main className="container flex flex__centro">
                <article className="cartao post">
                    <h1 className="cartao__titulo">{post.titulo}</h1>

                    <p> Endereço:  {post.autor} </p> <br/>

                    <p> Cadastro:  {post.dataPublicacao} </p> <br/><br/><br/>

                    <p className="cartao__texto">{post.texto}</p>
                </article>
                </main>
            }
        </div>
    )
}

export default Artigo
