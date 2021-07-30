import React, {Suspense} from 'react'
// import ListaArtigos from '../componentes/ListaArtigos'
import Loading from '../componentes/loading'

const ListaArtigos = React.lazy(() => import("../componentes/ListaArtigos"))

const Home = () => {

  return (
    <main>

      <div className="container">
        <h2 className="titulo-pagina">Artigos</h2>
      </div>
    
      <Suspense fallback={<Loading/> }> 
        <ListaArtigos url={'/artigos'}/>
      </Suspense>
    
    </main>
  )
}

export default Home
