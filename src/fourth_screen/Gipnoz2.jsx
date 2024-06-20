import styled from "styled-components";

export default function Gipnoz2({text, }) {
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
    width: 74vw;
    padding: 1.5em;
  }
  @media (max-width: 769px) {
    font-size: 16px;
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
    box-shadow: 16px 13px 0px rgb(226, 182, 182);

@media (max-width: 769px) {
    background-color: #f4eeee;
    margin-left: 4vw;
    box-shadow: 9px 7px 0px rgb(226, 182, 182);
}
@media (max-width: 550px) {
        margin-left: 4vw;
        box-shadow: 0px 13px 0px rgb(226, 182, 182);
        background-color: #EAEAEA;
}

`;