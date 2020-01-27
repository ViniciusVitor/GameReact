import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Menu, Image, Dropdown, Icon } from 'semantic-ui-react';
import firebase from 'firebase';

class Navegacao extends Component {
    constructor(props) {
       
        super(props)

        this.state = {
            usuario: '',
           
        }
    }

    componentDidMount() {
        
        const usuarioAtual = firebase.auth().currentUser
        console.log('Jogo/Navegacao.js: usuarioAtual:')
        console.log(usuarioAtual)

        if (usuarioAtual !== null) {
            const usuarioLogado = {
                nome: usuarioAtual.displayName,
                foto: usuarioAtual.photoURL
            }

            this.setState({
                usuario: usuarioLogado,
                estaLogado: true
            })
        }
    }

    deslogarUsuario() {
        
        firebase
            .auth()
            .signOut()
            .then(() => {
                this.setState({
                    usuario: '',
                    estaLogado: false
                })
                console.log('O usuário foi deslogado.')
            })
            .catch(err => {
                console.log('Erro ao deslogar usuário.')
            })
    }

    render() {
        // console.log('Jogo/Navegacao.js: render()')

        if (!this.state.estaLogado) {
            return (
                <Menu>
                    <Menu.Item><strong>Quiz</strong></Menu.Item>
                    <Menu.Item as={Link} to='/'>Faça o login para poder jogar</Menu.Item>
                </Menu>
            )
        }

        const { foto, nome } = this.state.usuario
        return (
            <header className='App-Header'>
                <Menu>
                    <Menu.Item><strong>Quiz</strong></Menu.Item>
                    <Menu.Item as={Link} to='/'>Home</Menu.Item>
                    <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
                    <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
                    <Menu.Menu position='right'>

                        {
                            this.state.estaLogado &&
                            <Menu.Item>
                                <Image avatar src={foto} />
                            </Menu.Item>
                        }
                        {
                            this.state.estaLogado &&
                            <Dropdown item text={nome}>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={this.deslogarUsuario}>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        }
                        {
                            !this.state.estaLogado &&
                            <Menu.Item>
                                <Icon name='user' />
                            </Menu.Item>
                        }
                    </Menu.Menu>
                </Menu>
                <h1 className='App-Title'>Jogo de Perguntas e Respostas</h1>
            </header>
        )
    }
}

export default Navegacao