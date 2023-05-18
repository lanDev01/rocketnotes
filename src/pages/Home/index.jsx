import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './style';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                
                <li><ButtonText title="Todos" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="NodeJs"/></li>

            </Menu>

            <Search>

                <Input placeholder="Pesquisar pelo título"/>

            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: '1', name: 'React'},
                            {id: '2', name: 'Rocketseat'}
                        ]
                    }}
                />
                </Section>

            </Content>

            <NewNote>
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    );
}