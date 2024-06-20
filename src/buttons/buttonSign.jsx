
import styled from "styled-components";

const Text = styled.p`
  padding-top: 0.2em;
  padding-left: 1.7em;
  padding-right: 1.7em;
  padding-bottom: 0.29em;
  font-size: 36px;
  color: white;
  font-family: "Jost", sans-serif;
  @media (max-width: 820px) {
    font-size: 29px;
  }
`;

const Container = styled.div`
  border-radius: 50px;
  border: 3px solid white;
  background-color: rgba(255, 255, 255, 0.4);
`;

const Group = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6vw;
  @media (max-width: 769px) {
    margin-top: 21vw;
  }
`;

export default function ButtonSign({ sign, backgroundColor, border }) {
  return (
    <Group>
      <Container style={{ border, backgroundColor }}>
        <Text>{sign}</Text>
      </Container>
    </Group>
  );
}



