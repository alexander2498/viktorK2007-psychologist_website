import styled from "styled-components";

export default function AboutYou() {
    return (
        <div className="conteiner_Text_title" >

            <Text className="Text_title" >  О ВАС</Text>

        </div>
    );
}


const Text = styled.p`
    font-size: 60px;
  font-family: "Bad Script", cursive;
  margin-top: 4vh;
  margin-left: 6vw;
  @media (max-width: 769px) {
    font-size: 35px;
    font-family: "Bad Script", cursive;
    margin-top: 4vh;
    margin-left: 6vw;
  }
  @media (max-width: 431px) {
    font-size: 26px;
    font-family: "Bad Script", cursive;
    margin-left: 37vw;
  }
`