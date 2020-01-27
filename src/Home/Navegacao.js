import React from 'react'
import { Menu, Dropdown } from 'semantic-ui-react'

const Navegacao = props => {
    return (
        <div>
            <header className='App-Header'>
                <Menu>
                    <Menu.Item><strong>Menu Inicial</strong></Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown item text='Acesse aqui'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Facebook</Dropdown.Item>
                                <Dropdown.Item>Twitter</Dropdown.Item>
                                <Dropdown.Item>Google</Dropdown.Item>
                                <Dropdown.Item>Admin</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </header>
        </div>
    )
}

export default Navegacao