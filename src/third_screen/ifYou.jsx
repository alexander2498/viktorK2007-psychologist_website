import styled from "styled-components";


export default function IfYou() {
    return (
        <div className="conteiner_Text_title" >

            <Text className="Text_title" >  ...ЕСЛИ ВЫ</Text>

        </div>
    );
}


const Text = styled.p`
     font-size: 40px;
  font-family: "Bad Script", cursive;
  margin-left: 14vw;
  margin-top: 12vh;
  @media (max-width: 769px) {
    font-size: 27px;
    font-family: "Bad Script", cursive;
    margin-left: 14vw;
    margin-top: 12vh;
  }
  @media (max-width: 431px) {
    font-size: 26px;
    font-family: "Bad Script", cursive;
    margin-left: 31vw;
    margin-top: 0
  }
`