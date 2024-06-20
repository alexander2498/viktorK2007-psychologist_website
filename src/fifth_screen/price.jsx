import styled from "styled-components";

export default function Price() {
    return (
        <div className="conteiner_Text_title" >

            <Text > СТОИМОСЬ УСЛУГ</Text>

        </div>
    );
}


const Text = styled.p`
     font-size: 50px;
  font-family: "Bad Script", cursive;
  margin-left: 5vw;
  margin-top: 13vh;
  @media (max-width: 820px) {
    font-size: 37px;
    font-family: "Bad Script", cursive;
    margin-left: 5vw;
    margin-top: 13vh;
  }
    @media (max-width: 550px) {
        font-size: 18px;
    font-family: "Bad Script", cursive;
    margin-left: 22vw;
    margin-top: 4vh;
    }
  
`