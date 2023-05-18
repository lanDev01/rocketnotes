import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles';


export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/landev01.png" alt="foto do usuario" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>
                <Input 
                placeholder="Nome"
                Type="Text"
                icon={FiUser}
                />
                <Input 
                placeholder="E-mail"
                Type="Text"
                icon={FiMail}
                />
                <Input 
                placeholder="Senha atual"
                Type="password"
                icon={FiLock}
                />
                <Input 
                placeholder="Nova senha"
                Type="password"
                icon={FiLock}
                />

                <Button title="Salvar"/>

            </Form>
        </Container>
    )
}