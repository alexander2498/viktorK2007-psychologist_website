import { Box } from "@mui/material";
import styled from "styled-components";
export default function AboutText({  text }) {
    return (
        
            <Container  >
                <Text className="text"  >{text}</Text>
            </Container>
        
    );
}


const Text = styled.p`
     font-size: 26px;
  font-family: "Jost", sans-serif;
  
  @media (max-width: 769px) {
    font-size: 18px;
    font-family: "Jost", sans-serif;
    
  }
  @media (max-width: 431px) {
    font-size: 13px;
    font-family: "Jost", sans-serif;
    
    width: 81vw;
  }
`;
const Container = styled.div`
    margin-left: 6vw;
    margin-top: 3vh;
`;