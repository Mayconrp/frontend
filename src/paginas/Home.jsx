import React from 'react'
import ListaArtigos from '../componentes/ListaArtigos'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h1 className="titulo-pagina">Artigos</h1>
      </div>
     
      <ListaArtigos url={'/artigos'}/>

    </main>
  )
}

export default Home
