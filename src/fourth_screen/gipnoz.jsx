
import styled from "styled-components";

export default function Gipnoz() {
    return (

        <Container  >
            <Text  >Гипноз, и конкретно <strong>гуманистический гипноз,</strong> — это наиболее бережный метод коммуникации с самим собой, со своей бессознательной частью. Гуманистический гипноз создан Оливье Локером и Патрисией д’Анжели в конце 90-х прошлого века. Гипноз без манипуляций! Это метод, который приводит к изменениям благодаря самопомощи  клиента, а гипнотерапевт является только сопровождающим его или просто осветителем!</Text>
        </Container>

    );
}


const Text = styled.p`
font-size: 26px;
  font-family: "Jost", sans-serif;
  width: 72vw;
  padding: 1.5em;

  @media (max-width: 1025px) {
    font-size: 20px;
    font-family: "Jost", sans-serif;
    width: 68vw;
    padding: 1.5em;
  }
  @media (max-width: 820px) {
    font-size: 15px;
    font-family: "Jost", sans-serif;
    width: 68vw;
    padding: 1.5em;
  }
  @media (max-width: 550px) {
    font-size: 11px;
    font-family: "Jost", sans-serif;
    width: 49vw;
    padding: 2.5em;
  }
`;
const Container = styled.div`
   background-color: #f4eeee;
    border-radius: 69px;
    margin-left: 4vw;
    box-shadow: 16px 13px 0px rgb(198, 191, 206);
    width:76vw;

@media (max-width: 820px) {
    background-color: #f4eeee;
    border-radius: 69px;
    margin-left: 6vw;
    box-shadow: 9px 7px 0px rgb(198, 191, 206);
}
@media (max-width: 550px) {
    background-color: #EDDADA;
        border-radius: 69px;
        margin-top: 3vh;
        margin-left: 8vw;
        box-shadow: 0px 10px 0px rgb(198, 191, 206);
        width:60vw;
}

`;