import React, { Component } from "react";
import './style.css';
import api from "../../services/api";


export default class ListaClientes extends Component{

    state = {
        clientes: [],
    }
    // renderiza o componente assim que a página abre
    componentDidMount(){
        this.loadClientes(); 
    }

    loadClientes = async () => {
        const response = await api.get('/clientes');
        this.setState({ clientes: response.data })
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
                                                    <td className="titulo">Problema:</td>
                                                </tr>
                                        
                                                {this.state.clientes.map(cliente => (
                                                    <tr key={cliente.id}>
                                                        <td className="dado">{cliente.nome}</td> 
                                                        <td className="dado">{cliente.telefone}</td> 
                                                        <td className="dado">{cliente.endereco}</td> 
                                                        <td className="dado">{cliente.problema}</td>
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