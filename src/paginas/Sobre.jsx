import React from 'react'
import '../assets/css/componentes/cartao.css'
import { Link } from 'react-router-dom'

const Sobre = () => {

  return (
    <main>
      <div className="container">
        <h1 className="titulo-pagina">Sobre </h1>
      </div>
      <section className="container flex flex--centro">
        <article className="cartao">
          
        Com o objetivo de ajudar os comerciantes locais. O Helpeme.com.br, ajuda os consumidores da região a encontrar os produtos de forma rápida
        e dinânima.

        <br/><br/><br/>
          
        <Link to="/">Click aqui e veja as lojas e serviços</Link>
        </article>
        
      </section>
    </main>
  )
}

export default Sobre
