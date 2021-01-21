import React , { Component } from 'react';
import './style.css'
import api from '../../services/api'

class FormularioColaboradores extends Component {
    constructor(props){
        super(props)

        this.state = { 
            nome: '',
            telefone: '',
            endereco: '',
            profissao: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = async e => {
        e.preventDefault()
        await api.post('/cadastrar-colaborador',this.state)
            .then(response => {
                console.log(response)
                alert("Colaborador cadastrado com sucesso! ")
            })
            .catch(error => {
                alert("Erro: " + error)
            })           
    }

    render(){
        const {nome , telefone , endereco , profissao} = this.state      
        return(   
            <div className="container">
                <div className="row" >
                    <div className="col-l-25" >                                    
                    </div>
                        <div className="col-50" >
                            <h1 className="tituloh1">Seja um colaborador ! ;) </h1>
                            <h3 className="tituloh3"><p className="textoh3">Procurando trabalho informal? Preencha o formulário, 
                            entraremos em contato assim que houver novas oportunidades próximas a você.</p>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            </h3>
                        </div>
                    <div className="col-r-25" >                        
                    </div>
                </div> 

                <form onSubmit={this.submitHandler} >
                    <div className="row" >
                        <div className="col-l-25" >                                    
                        </div>
                            <div className="col-50" >
                                <label>Nome:</label>
                                <input type="text" name="nome" value={nome} placeholder="Digite seu nome" className="Form-Field" onChange={this.changeHandler}/>                                          
                            </div>
                        <div className="col-r-25" >                        
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-l-25" >                                    
                        </div>
                            <div className="col-50" ><br/>
                            <label>Telefone com (ddd):</label>
                            <input type="text" name="telefone" value={telefone} placeholder="Máximo 11 numeros" className="Form-Field" onChange={this.changeHandler}/>
                            </div>
                        <div className="col-r-25" >                        
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-l-25" >                                    
                        </div>
                            <div className="col-50" ><br/>
                            <label>Endereço (pode ser aproximadamente):</label>                              
                            <input type="text" name="endereco" value={endereco} placeholder="Digite seu endereco" className="Form-Field" onChange={this.changeHandler}/>
                            </div>
                        <div className="col-r-25" >                        
                        </div>
                    </div>
                    <div className="row" >
                        <div className="col-l-25" >                                    
                        </div>
                            <div className="col-50" ><br/>
                            <label>Profissao:</label>
                            <input type="text" name="profissao" value={profissao} placeholder="Digite sua profissao" style={{ minHeight: 100 }} className="Form-Field" onChange={this.changeHandler}/>
                            </div>
                        <div className="col-r-25" >                        
                        </div>
                    </div>                                
                    <div className="row" >
                        <div className="col-l-25" >                                    
                        </div>
                            <div className="col-50" >                                                            
                                <button type="submit" className="button" id="login-button">Enviar</button>
                            </div>
                        <div className="col-r-25" >                        
                        </div>
                    </div>

                </form>
            </div>
        )   
    }
}

export default FormularioColaboradores
