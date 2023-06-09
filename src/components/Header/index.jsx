import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/landev01.png" alt='Foto do usuario'/>
                <div>
                    <span>Bem vindo!</span>
                    <strong>Alan Gonçalves</strong>
                </div>
            </Profile>   

            <Logout>
                <RiShutDownLine />    
            </Logout>        
        </Container>
    )
}