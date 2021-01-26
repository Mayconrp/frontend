import React , { Component } from 'react';
import './style.css'
import api from '../../services/api'

class FormularioClientes extends Component {
    constructor(props){
        super(props)

        this.state = { 
            nome: '',
            telefone: '',
            endereco: '',
            problema: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = async e => {
        e.preventDefault()
        await api.post('/cadastrar-cliente',this.state)
            .then(response => {
                console.log(response)
                alert("Cliente cadastrado com sucesso! ")
                this.limpaForm()
            })
            .catch(error => {
                alert("Telefone deve ser preenchido somente com números e sem espaços! ")
                //alert("Erro: " + error)
            })           
    }

    limpaForm(){
        this.setState({ nome: '', telefone: '', endereco: '', problema: ''})
    }

    render(){
        const {nome , telefone , endereco , problema} = this.state      
        return(   
            <div className="container">
                <div className="row" >
                    <div className="col-l-25" >                                    
                    </div>
                        <div className="col-50" >
                            <h1 className="tituloh1">Deixe-nos ajudar você ! ;) </h1>
                            <h3 className="tituloh3"><p className="textoh3">Preencha o formulário, entraremos em contato.</p>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            {/* &nbsp;&nbsp;&nbsp;&nbsp;<p className="textoh3">Deixe com a gente o seu contato, para que possamos nos conectar.</p> */}</h3>
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
                            <input type="text" name="telefone" value={telefone} placeholder="Máximo 11 números, sem espaços e somente números" className="Form-Field" onChange={this.changeHandler}/>
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
                            <label>Problema:</label>
                            <input type="text" name="problema" value={problema} placeholder="Digite seu problema" style={{ minHeight: 100 }} className="Form-Field" onChange={this.changeHandler}/>
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

export default FormularioClientes
