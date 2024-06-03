import { Box } from "@mui/material";
import styled from "styled-components";
export default function TopButton({ button, backgroundColor, border, sign }) {
    return (
        <Container  >
            <Button  >
                <Text  >{sign}</Text>
            </Button>
        </Container>
    );
}


const Text = styled.p`
    color: white;
    opacity: 1;
    font-size: 26px;
    font-family:"Jost", sans-serif;
    @media (max-width: 769px) {
        font-size:20px;
    }
`;
const Container = styled.div`
    display:flex;
    justify-content:end;
`;
const Button = styled.div`
    margin-left: 2vw;
    border-radius:50px;
    background-color: rgb(253, 226, 205, 0.7);
    padding:0.3em;
`
