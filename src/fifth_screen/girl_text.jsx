import styled from "styled-components";

export default function Girl_text() {
  return (
    <Container >

      <Text >  •   обеспечение принципов уважения и безопасности, создание пространства
        для работы, которая происходит на глубинном уровне, и вера в каждого,<br />
        в Ваш потенциал.<br />
        <br />
        •   Это   краткосрочная или среднесрочная терапия в соответствии с ритмом и ощущением проживающих
        изменений
        от 2-х до 8-10 сессий<br />
        периодичностью раз в одну - полторы недели.<br />
        <br />
        •   Первая сессия, Установочная, до 45 минут: знакомство,<br />
        юридические рамки работы. Определяем Ваш запрос,<br />
        метод и планируем количество встреч.
      </Text>

      <Girl_text0>
        <Girl_text1>
        •   обеспечение принципов уважения и безопасности, создание пространства
        для работы, которая происходит на глубинном уровне, и вера в каждого,<br />
        в Ваш потенциал.<br />
        <br />
        •   Это   краткосрочная или среднесрочная терапия в соответствии с ритмом и ощущением проживающих
        изменений
        от 2-х до 8-10 сессий<br />
        периодичностью раз в одну - полторы недели.<br />
        </Girl_text1>

      </Girl_text0>

    </Container>
  );
}

const Girl_text0 = styled.div`
  display:none;
  @media (max-width: 431px) {
    display:block;
  }
`;

const Text = styled.p`
    font-size: 26px;
  font-family: "Jost", sans-serif;
  @media (max-width: 769px) {
    font-size: 16px;
  }
  @media (max-width: 431px) {
    display:none;
  }
`;
const Container = styled.div`
    width: 62vw;
  margin-left: 3vw;
  margin-top: 8vh;
`;
const Girl_text1 = styled.p`
 font-size: 10px;
    margin-left: 0vw;
    margin-top: -1vh;
`;
