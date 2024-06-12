import styled from "styled-components";

export default function SubtextSadLine() {
    return (
        <div>
        <Text >Вероятно, однозначного ответа нет.</Text>
        </div>
    );
}

const Text = styled.p`
 font-size: 26px;
  text-align: right;
  font-family: "Jost", sans-serif;

  @media (max-width: 1024px) {
    font-size: 19px;
  }

  @media (max-width: 769px) {
    font-size: 15px;
    text-align: left;
    font-family: "Jost", sans-serif;
    margin-left:6vw;
  }
  @media (max-width: 420px) {
    font-size: 16px;
  }
`;




