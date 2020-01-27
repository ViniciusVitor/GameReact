import React, {Component} from 'react';
import { Container, List } from 'semantic-ui-react';

import Navegacao from './Navegacao';
import Usuario from './Usuario';

class Ranking extends Component {
    render() {
        return (
            <div>
                <Navegacao />
                <h2>RANKING</h2>
                <p>Quem é o mestre???</p>

                <Container>
                    <List divided verticalAlign='left'>
                        <Usuario 
                            foto=''
                            nome='Jordan'
                            pontos='100'/>

                        
                        <Usuario 
                            foto=''
                            nome='Kobe'
                            pontos='90'/>

                        
                        <Usuario 
                            foto=''
                            nome='Lebron'
                            pontos='85'/>
                    </List>
                </Container>
            </div>
        )
    }
}

export default Ranking