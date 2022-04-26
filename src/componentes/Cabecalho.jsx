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
                <h1 className="cabecalho__titulo">Helpeme</h1>
                </Link>
            </div>
             
            <nav className="menu-cabecalho">
                <ul className="menu-itens">
                    {/* <li><Link to="#" className="menu-item menu-item--entrar">Entrar</Link></li> */}

                    <li><Link to="/" className="menu-item ">Inicie</Link></li>

                    <li><Link to="/sobre" className="menu-item ">Sobre</Link></li>
                    
                </ul>
            </nav>

            <div className="menu-cabecalho-background"></div>

        </header>

    )
}

export default Cabecalho