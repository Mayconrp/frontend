import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../api/api';

const ListaArtigos = ( {url} ) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        busca(url, setPosts)
    }, [url]);


    return(
        <section className="posts container">
            {
                posts.map((post)=> (
                    <Link className={'cartao-post'} to={`/artigos/${post.id}`} >

                        <article key={post.id} >
                            <h3 className="cartao-post__titulo">
                                {post.titulo}
                            </h3>

                            <p> Autor:  {post.autor }</p> <br/> <br/>

                            <p className="cartao-post__meta">
                               Publicacao: {post.dataPublicacao}
                            </p>
                        </article>

                    </Link>

                ))
            }
        </section>
    )
}

export default ListaArtigos