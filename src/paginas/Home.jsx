import React from 'react'
import ListaArtigos from '../componentes/ListaArtigos'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Artigos</h2>
      </div>
     
      <ListaArtigos url={'/artigos'}/>

    </main>
  )
}

export default Home
