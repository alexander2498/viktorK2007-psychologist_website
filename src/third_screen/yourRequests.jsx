import styled from "styled-components";


export default function YourRequests() {
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
  @media (max-width: 820px) {
    font-size: 12px;
    font-family: "Bad Script", cursive;
    margin-top: 10vh;
    margin-left: 1vw;
  }
  @media (max-width: 550px) {
    font-size: 12px;
    font-family: "Bad Script", cursive;
    margin-left: 0;
    display:flex;
    justify-content:center;
    margin-top: 0vh;
  }
`