import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Dropdown, DropdownMenu, DropdownItem } from 'semantic-ui-react'

const Navegacao = props =>{    
    return(
        <div>
            <header className="App-header">                
                <h1 className='App-litle'>Jogo de perguntas e respostas</h1> 

                <Menu>
                    <Menu.Item as = {Link} to='/'>Home</Menu.Item>
                    <Menu.Item position='rigth'>
                        <Dropdown item text = 'Acesse aqui'>
                            <DropdownMenu>
                                <DropdownItem>Facebook</DropdownItem>
                                <DropdownItem>Twitter</DropdownItem>
                                <DropdownItem>Admin</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Menu.Item>



                </Menu>
            
            </header>


        </div>

    )
}

export default Navegacao