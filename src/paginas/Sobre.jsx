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
          Em busca dos ensinamentos de Jesus, com direito a erros ortográficos e linguagem informal. De início publicação
          todas as sextas feiras, as 16 horas. 


          <br/><br/><br/>
          
        <Link to="/">Click aqui e veja os artigos</Link>
        </article>
        
      </section>
    </main>
  )
}

export default Sobre
