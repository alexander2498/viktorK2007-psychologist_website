import styled from "styled-components";

export default function AboutYou() {
    return (
        <div className="conteiner_Text_title" >

            <Text className="Text_title" >  О ВАС</Text>

        </div>
    );
}


const Text = styled.p`
    font-size: 50px;
  font-family: "Bad Script", cursive;
  margin-top: 4vh;
  margin-left: 6vw;
  @media (max-width: 820px) {
    font-size: 27px;
    font-family: "Bad Script", cursive;
    margin-top: 4vh;
    margin-left: 6vw;
  }
  @media (max-width: 550px) {
    font-size: 18px;
    font-family: "Bad Script", cursive;
    margin-left: 0;
    display:flex;
    justify-content:center;
  }
`