import styled from "styled-components";

export default function Education() {
    return (
        <div className="conteiner_Text_title" >

            <Text className="Text_title" > ОБРАЗОВАНИЕ</Text>

        </div>
    );
}


const Text = styled.p`
      font-size: 50px;
  font-family: "Bad Script", cursive;
  margin-left: 5vw;
  @media (max-width: 769px) {
    font-size: 36px;
    font-family: "Bad Script", cursive;
    margin-left: 5vw;
    margin-top: 10vh;
  }
  @media (max-width: 431px) {
    font-size: 26px;
    font-family: "Bad Script", cursive;
    margin-left: 3vw;
    margin-top: 49vh;
  }
`