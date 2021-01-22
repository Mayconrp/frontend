import React , { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom' ;

class Home extends Component {

    render(){
        return(  
            <div>
               
               <div className="container-home">
                        
                        <div className="item-home">
                            
                        </div>

                        <div className="item-home">
                          Bem vindo ao helpeme.com.br !

                            <div className="item-home">
                                <Link className="link" to="/cadastrar-colaborador">Cadastre-se</Link>
                            </div>

                        </div>

                        <div className="item-home">
                            
                        </div>

                    </div>
            </div>
        )
    }
}

export default Home