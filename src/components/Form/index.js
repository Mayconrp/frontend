import * as yup from 'yup'
import PropTypes from 'prop-types'
import React from 'react' 

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'

import './styles.css'

    const validations = yup.object().shape({
        nome: yup.string().min(3, 'Minimo 3 caracteres!').max(100 , 'Maximo 100 caracteres!').required('Nome é necessário!') ,
        telefone: yup.string().min(10, 'Minimo 10 numeros!').max(11, 'Maximo 11 numeros!').required('Para podermos entrar em contato, o telefone é necessário! ') ,
        endereco: yup.string().min(3, 'Minimo 3 caracteres! ').max(200, 'Maximo 200 caracteres!').required('Endereco necessário!') ,
        problema: yup.string().min(5, 'Minimo 5 caracteres! ').max(200, 'Maximo 200 caracteres!').required('Relate em poucas palavras o seu problema para que possamos ajuda-lo!')
    })
    
    const Form = ({initialValues , handleSubmit}) => (  
    
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
            
                <div className="container">
                    <FormikForm className="Form">
                        <div className="row" >
                            <div className="col-l-25" >                                    
                            </div>
                                <div className="col-50" >
                                    <h1 className="tituloh1">Deixe-nos ajudar você ! ;) </h1>
                                    <h3 className="tituloh3"><p className="textoh3">Olá, somos o helpme.com, conectamos os seus problemas as soluções.</p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;<p className="textoh3">Você está aqui por que precisa de algum tipo de ajuda ou serviço certo?</p>
                                    {/* &nbsp;&nbsp;&nbsp;&nbsp;<p className="textoh3">Deixe com a gente o seu contato, para que possamos nos conectar.</p> */}</h3>

                                    <p className="textoExplicativo">Como funciona? Simples, você já esteve ou esta naquele momento em que se depara com algum tipo de problema seja ele:
                                     instalar uma impressora, obra de construção civel não terminada ou que deve ser feita, precisando de um carreto, montar um móvel,
                                      ou até mesmo a entrega de algum objeto que no momento voce não pode fazer,
                                      ou pode mas não quer gastar tempo procurando, e pagaria ou melhor negociaria para alguem fazer?</p>
                                    <p>Então é exatamente isso que fazemos, entramos em contato, ligamos seu problema ao profissional que pode resolve-lo (com qualidade), e o melhor ainda,
                                         não existe um valor fixo, isso mesmo o valor você que negocia durante a conversa.</p><br/>
                                    <p>Para testar é simples, basta preencher o formulário abaixo. Mas fique com o celular por perto ok? Pois entraremos em contato o mais rápido possível.</p><br/>
                                    
                                    <label>Nome:</label>
                                    <Field name="nome" placeholder="Digite seu nome"  type="text" className="Form-Field" />                                             
                                    <ErrorMessage className="Form-Error"  component="span" name="nome"></ErrorMessage>
                                </div>
                            <div className="col-r-25" >                        
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col-l-25" >                                    
                            </div>
                                <div className="col-50" ><br/>
                                <label>Telefone com (ddd):</label>
                                <Field name="telefone" placeholder="Digite seu telefone" type="text" className="Form-Field"></Field> 
                                <ErrorMessage className="Form-Error"  component="span" name="telefone"></ErrorMessage>
                                </div>
                            <div className="col-r-25" >                        
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col-l-25" >                                    
                            </div>
                                <div className="col-50" ><br/>
                                <label>Endereco (pode ser aproximadamente):</label>
                                <Field name="endereco" placeholder="Digite seu endereco" type="text" className="Form-Field" />                                 
                                <ErrorMessage className="Form-Error"  component="span" name="endereco"></ErrorMessage>
                                </div>
                            <div className="col-r-25" >                        
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col-l-25" >                                    
                            </div>
                                <div className="col-50" ><br/>
                                <label>Problema:</label>
                                <Field name="problema" placeholder="Digite seu problema" type="text" style={{ minHeight: 100 }} className="Form-Field" /> 
                                <br></br>
                                <ErrorMessage className="Form-Error"  component="span" name="problema"></ErrorMessage>
                                <br></br>
                                </div>
                            <div className="col-r-25" >                        
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col-l-25" >                                    
                            </div>
                                <div className="col-50" >                                    
                                    <button type="submit" className="button" id="login-button" >enviar</button> 
                                </div>
                            <div className="col-r-25" >                        
                            </div>
                        </div>
                    </FormikForm>
                </div>
        </Formik>   
    )
    
    
    Form.propTypes = {
        handleSubmit: PropTypes.func.isRequired ,
        initialValues: PropTypes.object.isRequired  
    }
    
    
    
    
    export default Form
    