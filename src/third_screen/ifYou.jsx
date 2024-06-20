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
  @media (max-width: 550px) {
    font-size: 18px;
    font-family: "Bad Script", cursive;
    margin-left: 0;
    display:flex;
    justify-content:center;
    margin-top: 0
  }
`