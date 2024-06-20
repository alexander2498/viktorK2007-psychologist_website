
import styled from "styled-components";
export default function Choice2() {
    return (

        <Container  >
            <Text  >И это - Гуманистический гипноз, Арт-терапия и Эриксоновский коучинг –<br />
                <br />
                то, что меняет жизнь, меняет человека,
                помогает в поиске гармонии в себе и в этом мире, это те инструменты,
                которые работают и которые я хотела бы предложить Вам.</Text>
        </Container>

    );
}



const Text = styled.p`
    margin-top: 4vh;
    padding: 1em;

 

  @media (max-width: 550px) {
    padding: 1em;
    margin-top: 1vh;
  }
`;
const Container = styled.div`
    position: absolute;
  width: 66vw;
  background-color: #cbd5ca;
  margin-left: 30vw;
  margin-top: 10vh;
  border-radius: 20px;
  box-shadow: 6px 3px 4px gray;
  font-family: "Jost", sans-serif;
  font-size: 28px;
  z-index: 1;
  @media (max-width: 769px) {
    position: absolute;
    width: 66vw;
    background-color: #cbd5ca;
    margin-left: 30vw;
    margin-top: 10vh;
    border-radius: 20px;
    box-shadow: 6px 3px 4px gray;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    z-index: 1;
  }
  @media (max-width: 550px) {
    position: absolute;
    width: 94vw;
    background-color: #cbd5ca;
    margin-left: 2vw;
    margin-top: 10vh;
    border-radius: 20px;
    box-shadow: 6px 3px 4px gray;
    font-family: "Jost", sans-serif;
    font-size: 10px;
    z-index: 1;
  }
`;
