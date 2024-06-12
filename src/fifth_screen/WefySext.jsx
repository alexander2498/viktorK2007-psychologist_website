import styled from "styled-components";


export default function WefySText() {
    return (
        <Container className="conteiner_Text_title"  >

            <Text  >(как проходит сеанс)</Text>

        </Container>
    );
}

const Text = styled.p`
    font-family:"Bad Script", cursive;
    font-size:26px;
    margin-top:3vh;
    @media (max-width: 769px) {
        font-size:16px;
        margin-top:4vh;
    }
    @media (max-width: 431px) {
        font-size:12px;
    }
`
const Container = styled.div`

`