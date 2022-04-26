import React, {Suspense , useState, useEffect} from 'react'
//import { busca } from '../api/api';
// import ListaArtigos from '../componentes/ListaArtigos'
import Loading from '../componentes/loading'

const ListaArtigos = React.lazy(() => import("../componentes/ListaArtigos"))

const Home = () => {

  const [ filtro , setFiltro] = useState('') ; 

  useEffect(() => {

  } , [filtro]) ;

  return (
    <main>

      <div className="container">
        <h2 className="titulo-pagina">Lojas e Servicos</h2> 
        <div className="divsearch">
          <input type="text" className="search" placeholder="Busca" onChange={event => setFiltro(event.target.value )}/>
        </div>
      </div>
      
      <Suspense fallback={<Loading/> }> 
        <ListaArtigos url={'/buscar/artigos?titulo=' + filtro}/>
      </Suspense>
    
    </main>
  )
}

export default Home
