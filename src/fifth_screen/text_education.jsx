import styled from "styled-components";

export default function Text_education() {
    return (
        <Container className="conteiner_Text_title" >

            <Text className="Text_title">
                2023-2024  Арт-терапия в индивидуальном  и групповом  консультирование, арт-терапевт;<br />
                Московский институт Психоанализа<br />
                <br />
                2023 Искусствоведение<br />
                <br />
                2020-2022 Гуманистический  гипноз, гипнотерапевт; Российская краниосакральная<br />
                Академия, Французский институт гуманистического и эриксоновского гипноза IFHE,Франция<br />
                <br />
                2019-2020 Эриксоновский коуч, сертифицированный коуч  ICF PCC ,Эриксон коучинг Франция
            </Text>

        </Container>
    );
}



const Container = styled.div`
     margin-top: 5vh;
  margin-left: 1vw;
`
const Text = styled.p`
    font-size: 28px;
    @media (max-width: 769px) {
        font-size: 19px;
    }
    @media (max-width: 431px) {
        font-size: 10px;
    }
`