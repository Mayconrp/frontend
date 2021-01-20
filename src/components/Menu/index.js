import React, { Component } from "react" ;
import { Switch , Route, BrowserRouter, Link } from 'react-router-dom' ;

import Home from '../../pages/Home' ;
import Formulario from '../../pages/Formulario' ;
import FormularioColaboradores from '../../pages/FormularioColaboradores';
import ListaClientes from '../../pages/ClientesList' ;

import './style.css';

export default class Menu extends Component {

    componentDidMount(){
       // se usuário for igual adm mostre o link da lista de clientes
    }

    render(){
        return(  
            <div>
                <BrowserRouter> 
                    <div className="container-menu">
                        <div className="item-menu">
                            <Link className="link" to="/">Início</Link>
                        </div>

                        <div className="item-menu">
                          <Link className="link" to="/cadastrar-cliente">Cadastrar Cliente</Link>
                        </div>

                        <div className="item-menu">
                            <Link className="link" to="/clientes">Lista de clientes</Link>
                        </div>

                         <div className="item-menu">
                            <Link className="link" to="/cadastrar-colaborador">Cadastrar Colaborador</Link>
                        </div>
                    </div> 
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        
                        <Route path="/cadastrar-cliente" component={Formulario}></Route> 

                        <Route path="/cadastrar-colaborador" component={FormularioColaboradores}></Route> 
                    
                        <Route path="/clientes" component={ListaClientes}></Route>
                
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
