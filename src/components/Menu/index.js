import React, { Component } from "react" ;
import { Switch , Route, BrowserRouter} from 'react-router-dom' ;
import './style.css';
/* import { Switch , Route, BrowserRouter, Link } from 'react-router-dom' ; */
import Home from '../../pages/Home' ;
import FormularioColaboradores from '../../pages/FormularioColaboradores';
import ListaClientes from '../../pages/ClientesList' ;
import ListaColaboradores from "../../pages/ColaboradorList";
import FormularioClientes from "../../pages/FormularioClientes";

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
                            <h1 className="link" to="/">helpeme.com.br</h1>
                        </div>

                        {/* <div className="item-menu">
                            <Link className="link" to="/">Início</Link>
                        </div> */}

                        {/* <div className="item-menu">
                          <Link className="link" to="/cadastrar-cliente">Cadastrar Cliente</Link>
                        </div> */}

                        {/* <div className="item-menu">
                            <Link className="link" to="/clientes">Lista de clientes</Link>
                        </div> */}

                         {/* <div className="item-menu">
                            <Link className="link" to="/cadastrar-colaborador">Cadastrar Colaborador</Link>
                        </div> */}
                    </div> 
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        
                        <Route path="/cadastrar-cliente" component={FormularioClientes}></Route> 

                        <Route path="/cadastrar-colaborador" component={FormularioColaboradores}></Route> 
                    
                        <Route path="/clientes" component={ListaClientes}></Route>

                        <Route path="/colaboradores" component={ListaColaboradores}></Route>
                
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
