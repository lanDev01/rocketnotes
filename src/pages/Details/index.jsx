import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>

      <ButtonText title="Excluir nota"/>

      <h1>Introdução ao React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptate molestias, cumque expedita voluptatem unde magni dicta sint animi maiores obcaecati excepturi labore vel, repellat aspernatur praesentium voluptates quisquam. Neque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam impedit beatae excepturi sed, ullam doloremque, ipsum, natus nemo assumenda quis quo! Impedit odit dicta beatae vero earum nesciunt! Ex?</p>

      <Section title="Links úteis">
        <Links>
          <li><a href="">https://www.rocketseat.com.br</a></li>
          <li><a href="">https://www.rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="nodeJs"/>
      </Section>

      <Button title="Voltar"/>
      </Content>
      </main>
    </Container>
  );
}
