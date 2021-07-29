import React, {useState, useEffect }from 'react';
import { useParams, useHistory } from 'react-router';
import '../assets/css/post.css'
import { busca } from '../api/api';

const Artigo = () => {

    let history = useHistory()

    const { id } = useParams() 

    const [post, setPost] = useState({});

    useEffect(() => {
        busca(`/artigos/${id}`, setPost)
        .catch(()=> {
                history.push('/404')
            }
        )
    }, [id]);

    return(
        <main className="container flex flex__centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.titulo}</h2>

                <p> autor:  {post.autor} </p> <br/>

                <p> Publicacao:  {post.dataPublicacao} </p> <br/><br/><br/>

                <p className="cartao__texto">{post.texto}</p>
            </article>
        </main>
    )
}

export default Artigo
