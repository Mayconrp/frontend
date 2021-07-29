import React from 'react';
import '../assets/css/componentes/cabecalho.css'
import { Link } from 'react-router-dom'

const Cabecalho = () => {

    return(

        <header className="cabecalho container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer_icone">
                </span>
            </div>

            <div className="cabecalho-container">
                <Link to="/" className="flex flex--centro">
                    {/* aqui vai a imagem */}
                <title className="cabecalho__titulo">Helpeme</title>
                </Link>
            </div>
             
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    {/* <li><Link to="#" className="menu-item menu-item--entrar">Entrar</Link></li> */}

                    <h1><Link to="/" className="menu-item ">Artigos</Link></h1>

                    <h1><Link to="/sobre" className="menu-item ">Sobre</Link></h1>
                </ul>
            </nav>

            <div className="menu-cabecalho-background"></div>

        </header>

    )
}

export default Cabecalho