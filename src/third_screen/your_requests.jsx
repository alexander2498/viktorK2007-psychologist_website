import styled from "styled-components";


export default function Your_requests() {
    return (
        <div className="conteiner_Text_title" >

            <Text className="Text_title" >(ВАШИ ЗАПРОСЫ)</Text>

        </div>
    );
}


const Text = styled.p`
    font-size: 26px;
  font-family: "Bad Script", cursive;
  margin-top: 10vh;
  margin-left: 1vw;
  @media (max-width: 769px) {
    font-size: 15px;
    font-family: "Bad Script", cursive;
    margin-top: 10vh;
    margin-left: 1vw;
  }
  @media (max-width: 431px) {
    font-size: 11px;
    font-family: "Bad Script", cursive;
    margin-left: 35vw;
    margin-top: -2vh;
  }
`