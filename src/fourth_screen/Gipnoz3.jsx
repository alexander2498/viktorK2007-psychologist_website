import styled from "styled-components";

export default function Gipnoz3({text, }) {
    return (

        <Container >
            <Text  >{text}</Text>
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
  @media (max-width: 769px) {
    font-size: 16px;
    font-family: "Jost", sans-serif;
    padding: 1.5em;
    width: 74vw;
  }
  @media (max-width: 431px) {
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
    margin-top: 85vh;
    margin-left: 6vw;
    position: absolute;

@media (max-width: 769px) {
    box-shadow: -9px 7px 0px rgb(192, 206, 191);
    background-color: #f4eeee;
    border-radius: 69px;
    margin-top: 59vh;
    margin-left: 6vw;
    position: absolute;
}
@media (max-width: 431px) {
    box-shadow: -7px 7px 0px rgb(192, 206, 191);
        background-color: #E3E3E3;
        border-radius: 69px;
        margin-top: 65vh;
        margin-left: 9vw;
}

`;