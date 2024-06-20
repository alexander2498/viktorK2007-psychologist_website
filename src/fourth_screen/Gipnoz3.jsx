import styled from "styled-components";

export default function Gipnoz3() {
    return (

        <Container >
            <Text  ><strong>Арт-терапия</strong> - это работа с вашими чувствами через искусство и творческое начало человека.<strong> Арт-терапия</strong> способствует саморазвитию и самовыражению, внутренней гармонизации человека.В каждом из нас есть творческое начало, ведь, как говорят, человек — это Творец своей судьбы, а искусство — это универсальный целитель-переводчик языка чувств и эмоций! Попробуйте и разрешите себе творить, в первую очередь, для самоисследования, для проживания и принятия себя и своих чувств.</Text>
        </Container>

    );
}


const Text = styled.p`
font-size: 26px;
  font-family: "Jost", sans-serif;
  padding: 1.5em;
  width: 74vw;

  @media (max-width: 1025px) {
    font-size: 20px;
    font-family: "Jost", sans-serif;
    padding: 1.5em;
    width: 74vw;
  }
  @media (max-width: 820px) {
    font-size: 16px;
    font-family: "Jost", sans-serif;
    padding: 1.5em;
    width: 68vw;
  }
  @media (max-width: 550px) {
    font-size: 11px;
    font-family: "Jost", sans-serif;
    padding: 2.5em;
    width: 44vw;
  }
`;
const Container = styled.div`
   box-shadow: -16px 13px 0px rgb(192, 206, 191);
    background-color: #f4eeee;
    border-radius: 69px;
    margin-left: 4vw;

@media (max-width: 820px) {
    box-shadow: -9px 7px 0px rgb(192, 206, 191);
    background-color: #f4eeee;
    border-radius: 69px;
    margin-left: 6vw;
}
@media (max-width: 550px) {
    box-shadow: -7px 7px 0px rgb(192, 206, 191);
        background-color: #E3E3E3;
        border-radius: 69px;
        margin-left: 8vw;
}

`;