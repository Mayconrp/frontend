import React, { Component } from "react";
import './style.css';
import api from "../../services/api";


export default class ListaColaboradores extends Component{

    state = {
        colaboradores: [],
    }
    // renderiza o componente assim que a página abre
    componentDidMount(){
        this.loadColaboradores(); 
    }

    loadColaboradores = async () => {
        const response = await api.get('/colaboradores');
        this.setState({ colaboradores: response.data })
    };

    render(){
        return <div>
                    <div className="container">
                        <div className="row" >
                            <div className="col-l-25" >                                    
                                </div>
                                    <div className="col-50" >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="titulo">Nome:</td>
                                                    <td className="titulo">Telefone:</td>
                                                    <td className="titulo">Endereço:</td>
                                                    <td className="titulo">Profissao:</td>
                                                </tr>
                                        
                                                {this.state.colaboradores.map(colaborador => (
                                                    <tr key={colaborador.id}>
                                                        <td className="dado">{colaborador.nome}</td> 
                                                        <td className="dado">{colaborador.telefone}</td> 
                                                        <td className="dado">{colaborador.endereco}</td> 
                                                        <td className="dado">{colaborador.profissao}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>                      
                                    </div>
                                <div className="col-r-25" >                         
                            </div>
                        </div> 
                    </div>
                </div>
    }
}