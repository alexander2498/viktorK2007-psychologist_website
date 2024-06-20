
import styled from "styled-components";

export default function Gipnoz({text, }) {
    return (

        <Container  >
            <Text  >{text}</Text>
        </Container>

    );
}


const Text = styled.p`
font-size: 26px;
  font-family: "Jost", sans-serif;
  width: 74vw;
  padding: 1.5em;

  @media (max-width: 1025px) {
    font-size: 20px;
    font-family: "Jost", sans-serif;
    width: 68vw;
    padding: 1.5em;
  }
  @media (max-width: 769px) {
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

@media (max-width: 769px) {
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