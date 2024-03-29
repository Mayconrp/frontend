import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../api/api';
import Loading from './loading';

const ListaArtigos = ( {url} ) => {
    
    const [posts, setPosts] = useState([])
    
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        setTimeout(() =>{
            setIsLoading(false)
        }, 3000 );

        busca(url, setPosts)

    }, [url]);


    return(
        <section className="posts container">

            { isLoading === true ?
                <Loading/> :
                posts.map((post)=> (
                    <Link className={'cartao-post'} to={`/artigos/${post.id}`} >

                        <article key={post.id} >
                            <h3 className="cartao-post__titulo">
                                {post.titulo}
                            </h3>

                            <p> Endereço:  {post.autor}</p> <br/> <br/>

                            <p className="cartao-post__meta">
                               Cadastro: {post.dataPublicacao}
                            </p>
                        </article>

                    </Link>
                ))
            }
        </section>
    )
}


export default ListaArtigos