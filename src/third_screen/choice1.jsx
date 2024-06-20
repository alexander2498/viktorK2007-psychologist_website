
import styled from "styled-components";
export default function Choice1() {
    return (

        <Container >
            <Text >у вас есть ВЫБОР как это сделать!</Text>
        </Container>

    );
}



const Text = styled.p`
    margin-top: 1vh;
  margin-left: 4vh;
  padding: 0.2em;
  @media (max-width: 550px) {
    margin-left: 5vh;
    padding: 0.5em;
    margin-top:0;
  }
`;
const Container = styled.div`
    position: absolute;
  width: 38vw;
  z-index: 2;
  background-color: #ebe1e1;
  border-radius: 20px;
  margin-left: 6vw;
  margin-top: 8vh;
  box-shadow: 6px 3px 4px gray;
  font-size: 30px;
  font-family: "Jost", sans-serif;
  @media (max-width: 820px) {
    position: absolute;
    width: 38vw;
    z-index: 2;
    background-color: #ebe1e1;
    border-radius: 20px;
    margin-left: 6vw;
    margin-top: 8vh;
    box-shadow: 6px 3px 4px gray;
    font-size: 16px;
    font-family: "Jost", sans-serif;
  }
  @media (max-width: 550px) {
    position: absolute;
    width: 60vw;
    z-index: 2;
    background-color: #ebe1e1;
    border-radius: 20px;
    margin-left: 16vw;
    margin-top: 7vh;
    box-shadow: 3px 3px 4px gray;
    font-size: 10px;
    font-family: "Jost", sans-serif;
  }
`;