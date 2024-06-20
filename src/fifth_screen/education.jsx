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
  @media (max-width: 820px) {
    font-size: 27px;
    font-family: "Bad Script", cursive;
    margin-left: 5vw;
    margin-top: 10vh;
  }
  @media (max-width: 550px) {
    font-size: 18px;
    font-family: "Bad Script", cursive;
    margin-left: 6vw;
    margin-top: 49vh;
  }
`