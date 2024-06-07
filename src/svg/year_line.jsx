import styled from "styled-components";

export default function Year_line({ }) {
    return (




      
        <Container width="11" height="362" viewBox="0 0 11 362" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="6.25" x2="6.25" y2="362" stroke="black" stroke-width="0.5" />
            <circle cx="5.5" cy="314.5" r="5.5" fill="#B6DBB0" />
            <circle cx="5.5" cy="204.5" r="5.5" fill="#8B9CC8" />
            <circle cx="5.5" cy="5.5" r="5.5" fill="black" />
            <circle cx="5.5" cy="131.5" r="5.5" fill="#E2B6B6" />
        </Container>
        
    );
}


const Container = styled.svg`
    
    margin-top: 5.4vh;
    margin-left: 4vw;
    height: 37vh;
    width: 0.76;

    @media (max-width: 769px) {
    margin-top: 5.4vh;
    margin-left: 4vw;
    height: 35vh;
    width: 1.4vw;
    }

    /* @media (max-width: 1024px) {
    margin-top: 5.4vh;
    margin-left: 4vw;
    height: 42vh;
    width: 1.4vw; 
     } */
`