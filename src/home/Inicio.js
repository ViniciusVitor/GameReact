import React, {Component} from 'react'
import { Container, Header, Segment, Card, Button, CardHeader, CardMeta, CardContent } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom'

import config, {auth, providers} from './../Config'
import Navegacao from './Navegacao'


class Inicio extends Component {

    constructor (props){
        super (props)

        this.state = {
            usuario: '', 
            estaLogado: false
        }

        auth.onAuthStateChanged((usuario) => {
            if(usuario){
                console.log(usuario)
                this.setState({
                    usuario,
                    estaLogado: true
                })

                localStorage.setItem('nome', usuario.displayName)
                localStorage.setItem('foto', usuario.photoURL)
            }else{
                console.log('Nao Logou')
                this.state = {
                    estaLogado:false
                }

            }
        })

       
    }
    autenticar(provider){
        console.log(provider)
        auth.signInWithPopup(providers[provider])

    }



    render(){
        if(this.state.estaLogado){
            return <Redirect to = '/Categorias' />

        }
        return (
            <div>
                <Navegacao />
                <Container>
                    <Segment piled>
                        Quiz
                    </Segment>
                    <Header as='h2'>
                        Jogo de pergunta e respostas
                    </Header>
                    <p>
                        Desafie seus amigos nesse incrível jogo de perguntas e respotas
                    </p>
                    
                    {
                        !this.state.estaLogado &&
                    <Card fluid> 
                        <CardContent>
                            Acesse agora mesmo
                        </CardContent>
                        
                        <CardContent>
                            <Button color='facebook' onClick={() => this.autenticar('facebook')}>Login com Facebook</Button>
                            <Button  color='red' onClick={() => this.autenticar('google')}>Login com Google</Button>
                            <Button color='green'>Usuário Adiministrador</Button>
                        </CardContent>
    
                    </Card>
                    }
                    {

                        this.state.estaLogado &&
                        <div>

                            <h3>{this.state.usuario.displayName}</h3>
                            <img src={this.state.usuario.photoURL}/>
                        </div>
                    }
                </Container>           
            </div>
        )    

    }
             
    
}

export default Inicio 