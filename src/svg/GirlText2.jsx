import styled from "styled-components";

export default function GirlText2() {
    return (
        <Container >

            <Girl_text2>
                •   Первая сессия, Установочная, до 45 минут: знакомство,<br />
                юридические рамки работы. Определяем Ваш запрос,<br />
                метод и планируем количество встреч.
            </Girl_text2>


        </Container>
    );
}


const Girl_text2 = styled.p`
display:none;
@media (max-width: 431px){
  font-family: "Jost", sans-serif;
    font-size: 10px;
    margin-left: 13vw;
    margin-top: -1vh;
    display:block;
    }
`;

const Container = styled.div`
    
`
