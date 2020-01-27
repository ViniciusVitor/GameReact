import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Navegacao from './Navegacao';
import Categoria from './Categoria';
import config from '../config';

class Categorias extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categorias: {}
        }

        config.syncState('categorias', {
            context: this,
            state: 'categorias',
            asArray: false
        })
    }

    render() {
        return (
            <div>
                <Navegacao />
                <h1>Lista de Categorias</h1>
                <p>Selecione a categoria que você quer responder perguntas</p>

                <Grid columns={5} divided>
                    {
                        Object.keys(this.state.categorias)
                            .map(chave => {
                                return <Categoria key={chave} titulo={this.state.categorias[chave].nome} icone={this.state.categorias[chave].icone} />
                            })
                    }
                </Grid>
            </div>
        )
    }
}

export default Categorias